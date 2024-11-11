"use client";

import { useState } from "react";
import { mailAction } from "../actions/mailActions";

function InputEmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mailAction(email);
  };

  return (
    <div className="max-w-sm mx-auto bg-sky-800 rounded-lg p-10">
      <h2 className="text-white text-center text-2xl font-bold py-3">
        Input Email to Reset
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-5 w-full">
          <label htmlFor="" className="text-white">
            Email Id:
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
        </fieldset>
        <fieldset className="mt-3">
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-semibold hover:bg-green-300"
            type="submit"
          >
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default InputEmailForm;
