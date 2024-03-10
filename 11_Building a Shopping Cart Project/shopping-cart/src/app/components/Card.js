import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-3xl mx-auto min-h-screen mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col bg-gray-200">
          <div>
            <Image
              src="/images/pic1.jpg"
              height={200}
              width={150}
              alt="pic1"
              className="w-full object-cover"
            />
          </div>
          <div className="p-5">Details</div>
        </div>

        <div className="flex flex-col bg-gray-200">
          <div>
            <Image
              src="/images/pic2.jpg"
              height={200}
              width={200}
              alt="pic1"
              className="w-full object-cover"
            />
          </div>
          <div className="p-5">Details</div>
        </div>
        <div className="flex flex-col bg-gray-200">
          <div>
            <Image
              src="/images/pic1.jpg"
              height={200}
              width={200}
              alt="pic1"
              className="w-full object-cover"
            />
          </div>
          <div className="p-5">Details</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
