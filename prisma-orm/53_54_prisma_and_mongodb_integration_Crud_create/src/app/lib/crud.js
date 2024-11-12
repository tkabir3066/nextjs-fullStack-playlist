"use server";

import { PrismaClient } from "@prisma/client";

export const createUser = async () => {
  try {
    const prisma = new PrismaClient();
    /* const newUser = {
      email: "tk@gmail.com",
      name: "tutul",
    };

    const createdUser = await prisma.user.create({
      data: newUser,
    }); */

    const newUsers = [
      {
        email: "user1@gmail.com",
        name: "tutul",
      },
      {
        email: "user2@gmail.com",
        name: "samir",
      },
      {
        email: "user3@gmail.com",
        name: "jane",
      },
      {
        email: "user4@gmail.com",
        name: "alex",
      },
      {
        email: "user5@gmail.com",
        name: "maria",
      },
    ];

    const createdUsers = await prisma.user.createMany({
      data: newUsers,
    });
    console.log(createdUsers);
  } catch (error) {
    console.log(error);
  }
};
