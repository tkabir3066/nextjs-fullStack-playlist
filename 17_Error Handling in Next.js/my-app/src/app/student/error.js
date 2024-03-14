"use client";
export default function Error({ error, reset }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 bg-cyan-700 min-h-[300px] font-bold ">
        <h1 className="text-gray-200 txt-3xl ">{error.message}</h1>
        <p className="mt-5 border border-green-700 px-5 py-1 bg-slate-600">
          <button onClick={() => reset()}>Reset</button>
        </p>
      </div>
    </>
  );
}
