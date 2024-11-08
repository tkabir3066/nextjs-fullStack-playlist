import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="font-bold text-xl my-10">
      <div className="flex flex-col gap-3 py-20 text-white ">
        <Link
          className="border-b-[1px] border-gray-50 hover:bg-cyan-600 px-3 py-2"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="border-b-[1px] border-gray-50 hover:bg-cyan-600 px-3 py-2"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="border-b-[1px] border-gray-50 hover:bg-cyan-600 px-3 py-2"
          href={"/settings"}
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Nav;
