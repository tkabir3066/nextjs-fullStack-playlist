"use client";

import { createUser } from "@/app/lib/crud";
import { useState } from "react";

function CreatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();

  const handleFormData = async (e) => {
    e.preventDefault();
    await createUser({ username, email });
  };
  return (
    <div className="max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-2xl text-gray-800">Creating new User</h1>

      <form onSubmit={handleFormData}>
        <div>
          <label htmlFor="">Username:</label>
          <input
            className="outline-none border border-gray-500 w-full p-2 rounded-lg"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            className="outline-none border border-gray-500 w-full p-2 rounded-lg"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="px-5 py-1 border border-blue-700 mt-3" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
