import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <div>
        <ul className="flex justify-evenly py-3 text-white bg-green-600">
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/about">About</a>
          </li>
          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li> */}

          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/contact">
            Contact
          </Link>
          <Link className="link" href="/gallery">
            Gallery
          </Link>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
