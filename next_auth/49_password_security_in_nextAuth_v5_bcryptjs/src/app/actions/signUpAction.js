"use server";

import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/User";
import bcrypt from "bcrypt";

export const signUpAction = async (formData) => {
  await dbConnect();

  const { username, email, password } = formData;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
};
