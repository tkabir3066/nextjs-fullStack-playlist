"use server";

import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/User";

export const signUpAction = async (formData) => {
  await dbConnect();
  // await User.create(formData);
  const newUser = new User(formData);
  await newUser.save();
};
