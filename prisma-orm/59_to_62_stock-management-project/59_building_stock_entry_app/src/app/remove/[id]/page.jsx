"use client";

import { removeItem } from "@/app/actions/removeActions";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

function page({ params }) {
  const handleRemove = async () => {
    const unWrappedParams = await params;
    await removeItem(unWrappedParams.id);
    toast.success("Item is deleted successfully");
    redirect("/");
  };
  const handleNotRemove = () => {
    redirect("/");
  };
  return (
    <div className="flex justify-center items-center max-w-md mx-auto min-h-screen">
      <div className="bg-gray-300 w-full h-[300px] flex justify-center items-center">
        <div className="flex flex-col my-5">
          <h1 className="text-3xl text-center">Are you sure to delete?</h1>
          <div className="flex flex-row justify-between  px-5 my-5">
            <button
              className="bg-blue-700 px-5 py-3 mx-5 rounded-lg text-white font-semibold"
              onClick={handleRemove}
            >
              Yes
            </button>
            <button
              className="bg-red-700 px-5 py-3 mx-5 rounded-lg text-white font-semibold"
              onClick={handleNotRemove}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
