"use client";

import { updatePassword } from "@/app/actions/updatePassword";
import { useState } from "react";

function ResetPassword({ params }) {
  const [newPassword, setNewPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== reenterPassword) {
      alert("Password does not match");
      return;
    } else {
      await updatePassword({ newPassword, token: params.token });
    }
  };
  return (
    <div className="max-w-sm mx-auto bg-sky-800 rounded-lg p-10">
      <h2 className="text-white text-center text-2xl font-bold py-3">
        Reset Password
      </h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="flex flex-col gap-5 w-full">
          <label htmlFor="" className="text-white">
            New Password:
          </label>
          <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-5 w-full">
          <label htmlFor="" className="text-white">
            Confirm New Password:
          </label>
          <input
            type="password"
            onChange={(e) => setReenterPassword(e.target.value)}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
        </fieldset>
        <fieldset className="mt-3">
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-semibold hover:bg-green-300"
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ResetPassword;
