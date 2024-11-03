"use client";
import { submitItem } from "./action";
function ItemForm() {
  return (
    <>
      <form action={submitItem}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col w-full">
            <label>Item Name:</label>
            <input
              className="outline-none border border-gray-600 px-2 py-1"
              type="text"
              name="itemName"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Price:</label>
            <input
              className="outline-none border border-gray-600 px-2 py-1"
              type="text"
              name="price"
            />
          </div>
          <div>
            <button className="px-5 py-2 text-white font-semibold bg-orange-600 rounded-lg">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ItemForm;
