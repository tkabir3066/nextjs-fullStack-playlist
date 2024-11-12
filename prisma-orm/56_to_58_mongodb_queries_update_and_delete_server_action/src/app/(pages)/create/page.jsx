"use client";

import { createUser, deleteUser, fetchUser, updateUser } from "@/app/lib/crud";
import { useState, useEffect } from "react";

function CreatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();
  const [usersData, setUsersData] = useState([]);

  const handleFormData = async (e) => {
    e.preventDefault();
    await createUser({ username, email });
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUser();
      setUsersData(usersData);
    };
    getUsers();
  }, []);
  return (
    <div>
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
          <button
            className="px-5 py-1 border border-blue-700 mt-3"
            type="submit"
          >
            Create User
          </button>
        </form>
      </div>
      <div className="max-w-sm mx-auto flex flex-col justify-center items-center">
        {usersData.length > 0 ? (
          usersData.map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 p-2 border border-gray-400 mb-4"
            >
              <p>Username: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 gap-4 p-2 border border-gray-400 mb-4">
            <p>Username: {usersData.name}</p>
            <p>Email: {usersData.email}</p>
          </div>
        )}
        <div>
          <form>
            <button
              className="px-5 py-2 my-5 rounded-lg text-white bg-orange-700 hover:bg-fuchsia-400"
              formAction={updateUser}
            >
              Update User
            </button>
          </form>
          <form>
            <button
              className="px-5 py-2 my-5 rounded-lg text-white bg-orange-700 hover:bg-fuchsia-400"
              formAction={deleteUser}
            >
              Remove User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
