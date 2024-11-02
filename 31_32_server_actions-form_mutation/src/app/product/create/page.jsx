import React from "react";
import dbConnect from "../../mongodb/dbConnection";
import ItemModel from "../../mongodb/model/item";

function CreatePage() {
  const submitItem = async (formData) => {
    "use server";
    await dbConnect();

    let itemName = formData.get("itemName");
    let itemPrice = formData.get("price");
    // console.log(itemName, itemPrice);
    const newItem = new ItemModel({ itemName: itemName, price: itemPrice });
    const savedItem = await newItem.save();
    console.log(savedItem);
  };
  return (
    <div className="max-w-xl mx-auto mt-20 bg-gray-300 p-20 rounded-md">
      <form action={submitItem}>
        <div className="flex flex-col gap-5">
          <div>
            <label>Item Name:</label>
            <input
              className="outline-none border border-gray-600 px-2 py-1"
              type="text"
              name="itemName"
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              className="outline-none border border-gray-600 px-2 py-1"
              type="text"
              name="price"
            />
          </div>
          <div>
            <button className="px-5 py-2 bg-orange-600 rounded-lg">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
