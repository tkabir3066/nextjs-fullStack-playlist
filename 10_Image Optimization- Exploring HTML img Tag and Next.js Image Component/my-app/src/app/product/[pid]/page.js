import React from "react";

export default function ProductList({ params }) {
  return (
    <div>
      <h1>Product List</h1>
      <h2>{params.pid}</h2>
    </div>
  );
}
