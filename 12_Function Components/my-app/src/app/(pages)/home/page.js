import Image from "next/image";
import Link from "next/link";
import React from "react";
import DemoPic from "../../../../public/demo.jpg";
function HomePage() {
  return (
    <>
      <div>
        <h1 className="max-w-3xl mx-auto my-16 text-center border border-green-700">
          Home Page
        </h1>

        {/* <img src="demo.jpg" alt="" /> */}

        <Image
          src={DemoPic}
          width={500}
          height={500}
          className="h-full w-full mx-8"
        />
      </div>
    </>
  );
}

export default HomePage;
