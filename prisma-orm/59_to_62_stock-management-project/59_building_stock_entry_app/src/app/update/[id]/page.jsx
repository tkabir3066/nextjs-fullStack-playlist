"use client";

import React from "react";
import UpdateForm from "@/app/components/UpdateForm";

function UpdatePage({ params }) {
  const id = React.use(params).id;
  return (
    <>
      <UpdateForm id={id} />
    </>
  );
}

export default UpdatePage;
