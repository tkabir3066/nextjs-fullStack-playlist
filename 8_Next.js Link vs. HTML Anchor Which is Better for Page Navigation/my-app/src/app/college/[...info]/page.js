import React from "react";

export default function CollegeInfo({ params }) {
  console.log(params);
  const { info } = params;
  return (
    <div>
      <h1>College Information</h1>
      {info.map((item) => (
        <div>
          <h2>{item}</h2>
        </div>
      ))}
    </div>
  );
}
