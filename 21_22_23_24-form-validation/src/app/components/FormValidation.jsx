"use client";

import { useState } from "react";

function FormValidation() {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [isValid, setValid] = useState(false);
  const [isValidLength, setIsValidLength] = useState(true);

  const handleUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    if (username.length > 0 && username.length < 4) {
      setIsValidLength(false);
    } else {
      setIsValidLength(true);
    }
  };

  const handleMobileNumber = (e) => {
    const mobileNum = e.target.value;
    setMobile(mobileNum);
    if (isNaN(mobileNum) || mobileNum.trim() === "") {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setMobile("");
  };
  return (
    <div className="max-w-4xl mx-auto mt-20 bg-slate-300 p-10 min-h-[400px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between px-10 py-5">
          <label htmlFor="">Username</label>
          <input
            className="py-2 rounded-lg"
            type="text"
            value={username}
            onChange={handleUsername}
          />
          {/* error message */}
          {!isValidLength && (
            <p className="text-red-500 ">
              Username must be at least 4 characters
            </p>
          )}
        </div>

        <div className="flex flex-col justify-between px-10 py-5">
          <label htmlFor="">Mobile No.</label>
          <input
            className="py-2 rounded-lg"
            type="text"
            value={mobile}
            // onChange={(e) => setMobile(e.target.value)}
            onChange={handleMobileNumber}
          />

          {/* error message */}
          {isValid && (
            <p className="text-red-500 ">Please enter valid mobile number</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="bg-blue-800 text-white text-lg font-semibold py-3 px-20 rounded-md"
            type="submit"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
