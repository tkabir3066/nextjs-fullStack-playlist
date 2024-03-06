import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <ul className="flex justify-evenly py-3 text-white bg-green-600">
        <Link className="link" href="/home">
          Home
        </Link>
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
      <h1 className="max-w-3xl mx-auto my-16 text-center border border-green-700">
        Contact Page
      </h1>
    </div>
  );
}
