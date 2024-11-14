"use client";

import Link from "next/link";
import { readItem } from "./actions/readAction";
import CreateForm from "./components/CreateForm";
import { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const allItems = await readItem();
      setItems(allItems);
    };

    getItems();
  }, []);
  return (
    <>
      <div className="max-w-full md:max-w-4xl mx-auto min-h-screen">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <h2 className="text-3xl text-gray-700 font-semibold">
            Stock Management
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:justify-between w-full">
            <div className="p-4 w-full bg-gray-200 rounded-md">
              <CreateForm />
            </div>
            <div className="p-4 w-full h-full bg-gray-300 rounded-md">
              {items.length > 0 ? (
                items.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-6 gap-8 p-5  border border-gray-50 my-5"
                  >
                    <div>{item.itemName}</div>
                    <div>{item.price}</div>
                    <div>{item.quantity}</div>
                    <div>{item.totalAmount}</div>
                    <div className="flex flex-row mx-auto gap-4 justify-center items-center font-semibold">
                      <Link href={`/update/${item.id}`}>
                        <FaRegEdit />
                      </Link>
                      <Link href={`/remove/${item.id}`}>
                        <FaTrashAlt />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p>{items.itemName}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
