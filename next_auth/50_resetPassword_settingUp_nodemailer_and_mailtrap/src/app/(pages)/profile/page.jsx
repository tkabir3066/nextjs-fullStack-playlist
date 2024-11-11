import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import React from "react";

async function ProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return <div>ProfilePage</div>;
}

export default ProfilePage;
