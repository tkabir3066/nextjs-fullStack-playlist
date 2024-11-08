"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { TbInfoTriangle } from "react-icons/tb";
import { signUpAction } from "../actions/signUpAction";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const onSubmit = async (data) => {
    await signUpAction(data);
  };
  return (
    <div className="max-w-sm mx-auto mt-20 bg-gray-800 rounded-lg min-h-[350px] p-10">
      {errorMessage && (
        <div className="bg-orange-400 my-3 rounded-lg font-semibold  py-1 flex flex-row gap-2 justify-center items-center">
          <span>
            <TbInfoTriangle />
          </span>
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-5 w-full">
          <label className="text-white" htmlFor="">
            Username:
          </label>
          <input
            className="p-1 outline-none border border-gray-100 rounded-lg"
            type="text"
            {...register("username", { required: true })}
          />
          {errors?.username?.type === "required" && (
            <p className="text-yellow-500">Username is required</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-5 w-full">
          <label className="text-white" htmlFor="">
            Email:
          </label>
          <input
            className="p-1 outline-none border border-gray-100 rounded-lg"
            type="text"
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-yellow-500">Email is required</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-5 w-full my-3">
          <label className="text-white" htmlFor="">
            Password:
          </label>
          <input
            className="p-1 outline-none border border-gray-100 rounded-lg"
            type="password"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-yellow-500">Password is required</p>
          )}
        </fieldset>

        <fieldset>
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-semibold hover:bg-green-300"
            type="submit"
          >
            SignUp
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpForm;
