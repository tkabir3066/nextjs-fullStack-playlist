import React from "react";

function Employee({ children, empName }) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>Employee Name: {empName}</h2>
    </div>
  );
}

export default Employee;
