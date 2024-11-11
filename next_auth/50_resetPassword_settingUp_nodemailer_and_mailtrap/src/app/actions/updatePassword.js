"use server";

import dbConnect from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";
import User from "@/model/User";
import { redirect } from "next/navigation";

export const updatePassword = async ({ newPassword, token }) => {
  await dbConnect();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  await User.findOneAndUpdate(
    { verifyToken: token },
    { password: hashedPassword }
  );

  redirect("/login");
};
