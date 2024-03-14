import React from "react";

const ProductInfo = ({ params }) => {
  console.log(params);
  const { products } = params;
  return (
    <div>
      <h1>Product Info</h1>
      {products && products.map((item) => <p>{item}</p>)}
    </div>
  );
};

export default ProductInfo;
