"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createItem } from "../actions/createAction";

function CreateForm() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const priceRegister = register("price");
  const quantityRegister = register("quantity");

  const handlePrice = (e) => {
    const itemPrice = e.target.value;
    setPrice(itemPrice);
  };

  const handleQuantity = (e) => {
    const quantity = e.target.value;
    setQuantity(quantity);
  };

  useEffect(() => {
    if (price !== 0 && quantity !== 0) {
      setTotalAmount(price * quantity);
    } else {
      setTotalAmount(0);
    }
  }, [price, quantity]);

  const onSubmit = async (data) => {
    const newFormData = { ...data, totalAmount };
    await createItem(newFormData);
  };
  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="max-w-sm mx-auto flex flex-col my-3">
          <label htmlFor="">Item Name:</label>
          <input
            type="text"
            {...register("itemName")}
            className="outline-none border border-gray-400 rounded-lg py-1"
          />
        </fieldset>
        <fieldset className="max-w-sm mx-auto flex flex-col my-3">
          <label htmlFor="">Price:</label>
          <input
            type="number"
            {...priceRegister}
            onChange={(e) => {
              priceRegister.onChange(e);
              handlePrice(e);
            }}
            className="outline-none border border-gray-400 rounded-lg py-1"
          />
        </fieldset>
        <fieldset className="max-w-sm mx-auto flex flex-col my-3">
          <label htmlFor="">Quantity:</label>
          <input
            type="number"
            {...quantityRegister}
            onChange={(e) => {
              quantityRegister.onChange(e);
              handleQuantity(e);
            }}
            className="outline-none border border-gray-400 rounded-lg py-1"
          />
        </fieldset>
        <fieldset className="max-w-sm mx-auto flex flex-col my-3">
          <label htmlFor="">Total Amount:{totalAmount}</label>
        </fieldset>
        <fieldset className="max-w-sm mx-auto flex flex-col my-3">
          <button
            type="submit"
            className="px-5 py-2 text-white font-semibold bg-orange-600 rounded-md"
          >
            Save
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateForm;
