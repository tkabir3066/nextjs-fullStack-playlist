import React from "react";
import { HiColorSwatch } from "react-icons/hi";
const Nav = () => {
  return (
    <>
      <div className="h-14 max-w-3xl mx-auto shadow-2xl mt-3">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div>
            <HiColorSwatch className="text-orange-700 text-3xl mx-5" />
          </div>
          <div className="text-orange-700 text-xl font-bold mx-5">MyShop</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
