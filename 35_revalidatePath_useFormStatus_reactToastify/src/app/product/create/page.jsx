import React from "react";
import dbConnect from "../../mongodb/dbConnection";
import ItemModel from "../../mongodb/model/item";
import ItemForm from "../../components/ItemForm";

function CreatePage() {
  return (
    <div className="max-w-xl mx-auto mt-20 bg-gray-300 p-20 rounded-md">
      <ItemForm />
    </div>
  );
}

export default CreatePage;
