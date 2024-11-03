"use client";
import { useFormStatus } from "react-dom";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        className="px-8 py-2 text-white font-semibold bg-orange-600 rounded-lg"
        type="submit"
      >
        {pending ? "pending" : "Save Item"}
      </button>
    </>
  );
}

export default SubmitButton;
