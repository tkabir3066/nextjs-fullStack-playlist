import React from "react";

function Student({ stdName, rollNumber }) {
  return (
    <div>
      {/* <h1>Student Page</h1> */}
      <h3>Name: {stdName}</h3>
      <h3>Roll: {rollNumber}</h3>
    </div>
  );
}

export default Student;
