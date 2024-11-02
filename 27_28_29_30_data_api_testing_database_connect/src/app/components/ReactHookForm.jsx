"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const response = await axios.get("/api/register");
    const response = await axios.post("/api/register", data);
    console.log(response.data.email);
    // console.log(response.data.message);
    // setMessage(response.data.message);
    setMessage(response.data.email);
  };

  return (
    <div className="max-w-xl mx-auto mt-20">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-between px-10 py-5">
            <label htmlFor="">Email</label>
            <input
              className="px-2 py-1 outline-none border border-gray-400"
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email is not Valid",
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {errors.email && (
              <p className="text-red-500">{errors?.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col justify-between px-10 py-5">
            <label htmlFor="">Password</label>
            <input
              className="px-5 py-1 outline-none border border-gray-400"
              type="password"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must me at least 5 characters{" "}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center mt-2">
            <button
              className="bg-blue-700 py-2 px-10 rounded-md text-white font-semibold "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="py-4 flex justify-center items-center">
          Status: {message}
        </div>
      </div>
    </div>
  );
}

export default ReactHookForm;
