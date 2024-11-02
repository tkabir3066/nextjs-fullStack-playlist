"use server";
import dbConnect from "../mongodb/dbConnection";
import ItemModel from "../mongodb/model/item";
export const itemEntry = async (formData) => {
  await dbConnect();
  //   const itemName = formData.get("itemName");
  //   const itemPrice = formData.get("price");

  const newItem = new ItemModel(formData);
  const savedItem = await newItem.save();
  console.log(savedItem);
};
