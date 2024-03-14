import React from "react";

function ProductLayout({ children, params }) {
  console.log(params);
  return (
    <>
      <h1>ProductLayout :{params.pid}</h1>
      {children}
    </>
  );
}

export default ProductLayout;
