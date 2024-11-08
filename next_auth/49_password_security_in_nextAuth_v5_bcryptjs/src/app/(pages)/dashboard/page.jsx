import { auth } from "@/app/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function DashBoard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h2>DashBoard</h2>
      <div className="mt-3">
        <Link
          className="bg-blue-700 px-10 py-3 rounded-lg text-white font-semibold"
          href={"/"}
        >
          Home page
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
