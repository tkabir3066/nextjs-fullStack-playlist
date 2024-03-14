import React from "react";

function Student({ stdName, rollNumber }) {
  if (rollNumber <= 0) {
    throw new Error("Negative roll number not allowed");
  }
  return (
    <div>
      {/* <h1>Student Page</h1> */}
      <h3>Name: {stdName}</h3>
      <h3>Roll: {rollNumber}</h3>
    </div>
  );
}

export default Student;
