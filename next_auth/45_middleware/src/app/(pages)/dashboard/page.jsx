import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <div className=" mt-10">
        <Link
          className="bg-blue-700 px-5 py-3 text-white font-semibold rounded-lg"
          href="/"
        >
          Go to Home page
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
