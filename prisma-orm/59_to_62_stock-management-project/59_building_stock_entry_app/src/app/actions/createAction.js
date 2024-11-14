"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
export const createItem = async (formData) => {
  console.log(formData);
  try {
    const prisma = new PrismaClient();

    const itemData = {
      itemName: formData.itemName,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      totalAmount: Number(formData.totalAmount),
    };

    const createdItem = await prisma.item.create({
      data: itemData,
    });

    console.log(createdItem);
    revalidatePath("/item/item");
  } catch (error) {
    console.log(error);
  }
};
