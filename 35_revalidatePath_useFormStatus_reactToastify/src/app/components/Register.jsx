"use client";

import axios from "axios";
import { useState } from "react";

function Register() {
  const [result, setResult] = useState("");

  const handleGet = async () => {
    const response = await axios.get("/api/register");

    setResult(response.data.message);
  };
  const handlePost = async () => {
    const response = await axios.post("/api/register", { username: "tkabir" });
    console.log(response.data);
    setResult(response.data.message);
  };
  const handleDelete = async () => {
    const response = await axios.delete("/api/register", {
      data: { username: "tkabir" },
    });
    console.log(response.data);
    setResult(response.data.message);
  };
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div>
        <button
          onClick={handleGet}
          className="px-3 py-2 mx-3 bg-green-600 text-gray-50"
        >
          GET
        </button>
        <button
          onClick={handlePost}
          className="px-3 py-2 mx-3 bg-green-600 text-gray-50"
        >
          POST
        </button>
        <button className="px-3 py-2 mx-3 bg-green-600 text-gray-50">
          PUT
        </button>
        <button className="px-3 py-2 mx-3 bg-green-600 text-gray-50">
          PATCH
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-2 mx-3 bg-green-600 text-gray-50"
        >
          DELETE
        </button>
      </div>

      <div className="mt-10">
        <h1>You have requested {result}</h1>
      </div>
    </div>
  );
}

export default Register;
