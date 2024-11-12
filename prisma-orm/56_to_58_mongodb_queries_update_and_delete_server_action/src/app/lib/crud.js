"use server";

import { PrismaClient } from "@prisma/client";

// export const createUser = async () => {
//   try {
//     const prisma = new PrismaClient();
//     /* const newUser = {
//       email: "tk@gmail.com",
//       name: "tutul",
//     };

//     const createdUser = await prisma.user.create({
//       data: newUser,
//     }); */

//     const newUsers = [
//       {
//         email: "user1@gmail.com",
//         name: "tutul",
//       },
//       {
//         email: "user2@gmail.com",
//         name: "samir",
//       },
//       {
//         email: "user3@gmail.com",
//         name: "jane",
//       },
//       {
//         email: "user4@gmail.com",
//         name: "alex",
//       },
//       {
//         email: "user5@gmail.com",
//         name: "maria",
//       },
//     ];

//     const createdUsers = await prisma.user.createMany({
//       data: newUsers,
//     });
//     console.log(createdUsers);
//   } catch (error) {
//     console.log(error);
//   }
// };

// using user input

export const createUser = async ({ username, email }) => {
  try {
    const prisma = new PrismaClient();

    const newUser = { name: username, email: email };

    const createdUsers = await prisma.user.create({
      data: newUser,
    });
    console.log(createdUsers);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async () => {
  try {
    const prisma = new PrismaClient();

    // fetch all the users

    // const allUsers = await prisma.user.findMany();

    //unique user
    const allUsers = await prisma.user.findUnique({
      where: {
        email: "hablu@gmail.com",
      },
    });
    console.log(allUsers);
    return allUsers;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async () => {
  try {
    const prisma = new PrismaClient();

    // await prisma.user.update({
    //   where: { email: "user2@gmail.com" },
    //   data: { name: "dhinka" },
    // });
    await prisma.user.upsert({
      where: { email: "user200@gmail.com" },
      update: { name: "kaka" },
      create: {
        email: "user200@gmail.com",
        name: "kakababu",
      },
    });

    // if email id does not exist
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const prisma = new PrismaClient();

    await prisma.user.delete({
      where: {
        email: "user200@gmail.com",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
