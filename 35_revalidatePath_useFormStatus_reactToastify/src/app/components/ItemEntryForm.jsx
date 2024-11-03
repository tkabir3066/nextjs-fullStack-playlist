"use client";
import { useForm } from "react-hook-form";
import { itemEntry } from "./itemEntryAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "./SubmitButton";

function ItemEntryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEntryForm = async (formData) => {
    const status = await itemEntry(formData);
    if (status.success === true) {
      toast.success("Item inserted");
    } else {
      toast.error("Ooops!! something went wrong");
    }
    console.log(formData);
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-20 bg-gray-300 p-20 rounded-md">
        <form action={handleSubmit(handleEntryForm)}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="">Item Name:</label>
              <input
                className="outline-none border border-gray-600 px-2 py-1"
                type="text"
                {...register("itemName", { required: true })}
              />
              {errors?.itemName?.type === "required" && (
                <p className="text-orange-700">Item Name is required</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Price:</label>
              <input
                className="outline-none border border-gray-600 px-2 py-1"
                type="text"
                {...register("price", { required: true })}
              />

              {errors?.price?.type === "required" && (
                <p className="text-orange-700">Price is required</p>
              )}
            </div>

            <div className="flex justify-center items-center mt-2">
              <SubmitButton />
            </div>
          </div>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default ItemEntryForm;
