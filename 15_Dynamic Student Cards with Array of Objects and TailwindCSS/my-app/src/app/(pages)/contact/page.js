import Employee from "@/app/components/Employee";
import Student from "@/app/components/Student";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <h1 className="max-w-3xl mx-auto my-16 text-center border border-green-700">
        Contact Page
      </h1>
      <p>
        <Student stdName="Tutul Kabir" rollNumber={200} />
        <Student stdName="Shehan Kabir" rollNumber={201} />
        <Student stdName="Mahira Kabir" rollNumber={202} />
      </p>
      <hr />
      <Employee empName="Manish Kumar">This is Employee Information</Employee>
    </div>
  );
}
