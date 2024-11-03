"use server";
import dbConnect from "../mongodb/dbConnection";
import ItemModel from "../mongodb/model/item";
import { revalidatePath } from "next/cache";

export const itemEntry = async (formData) => {
  try {
    await dbConnect();
    //   const itemName = formData.get("itemName");
    //   const itemPrice = formData.get("price");

    const newItem = new ItemModel(formData);
    const savedItem = await newItem.save();

    revalidatePath("/product/itementry");
    // console.log(savedItem);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
