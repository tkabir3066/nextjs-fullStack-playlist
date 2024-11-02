"use server";

import dbConnect from "../mongodb/dbConnection";
import ItemModel from "../mongodb/model/item";

export const submitItem = async (formData) => {
  await dbConnect();

  let itemName = formData.get("itemName");
  let itemPrice = formData.get("price");
  // console.log(itemName, itemPrice);
  const newItem = new ItemModel({ itemName: itemName, price: itemPrice });
  const savedItem = await newItem.save();
  console.log(savedItem);
};
