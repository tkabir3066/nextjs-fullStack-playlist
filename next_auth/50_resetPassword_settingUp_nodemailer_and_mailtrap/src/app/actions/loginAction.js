"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

export const loginAction = async (formData) => {
  try {
    await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credential" };

        default:
          return { error: "Unknown error found" };
      }
    }
    throw error;
  }
};
