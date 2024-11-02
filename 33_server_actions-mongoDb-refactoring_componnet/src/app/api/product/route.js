import { NextResponse } from "next/server";
import dbConnect from "../../mongodb/dbConnection";
import mongoose from "mongoose";
import ItemModel from "../../mongodb/model/item";

export const GET = async (request) => {
  await dbConnect();
  return NextResponse.json({ message: "Api testing" });
};

export const POST = async (request) => {
  try {
    await dbConnect();
    const itemData = await request.json();
    const newItem = new ItemModel(itemData);
    const savedItem = await newItem.save();
    return NextResponse.json({ message: "Post request", savedItem });
  } catch (error) {
    console.log(error);
  }
};
