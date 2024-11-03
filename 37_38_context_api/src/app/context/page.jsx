"use client";
import CompA from "../components/CompA";
import { createContext } from "react";

export const DataContext = createContext();

function ContextPage() {
  return (
    <div className="max-w-xl mx-auto mt-20 text-2xl">
      <DataContext.Provider value={2300}>
        <CompA />
      </DataContext.Provider>
    </div>
  );
}

export default ContextPage;
