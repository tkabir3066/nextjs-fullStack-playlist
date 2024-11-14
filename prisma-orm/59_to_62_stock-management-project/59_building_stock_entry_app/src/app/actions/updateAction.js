"use server";

import { PrismaClient } from "@prisma/client";
export const updateItem = async ({ id }, newFormData) => {
  try {
    const prisma = new PrismaClient();

    const itemData = {
      itemName: newFormData.itemName,
      price: Number(newFormData.price),
      quantity: Number(newFormData.quantity),
      totalAmount: Number(newFormData.totalAmount),
    };
    await prisma.item.update({
      where: {
        id,
      },
      data: itemData,
    });
    // console.log(id, formData);
  } catch (error) {
    console.log(error);
  }
};
