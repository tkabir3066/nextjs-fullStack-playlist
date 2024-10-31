"use client";

function EventDemo() {
  const display = () => {
    console.log("You have clicked me");
  };
  return (
    <div className="min-h-screen max-w-5xl flex justify-center items-center mx-10">
      <button
        onClick={display}
        className="px-5 py-3 bg-blue-800 text-gray-50 rounded-xl font-semibold text-lg"
      >
        Event Management
      </button>
    </div>
  );
}

export default EventDemo;
