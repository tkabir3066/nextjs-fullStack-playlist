import { createUser } from "@/app/lib/crud";

function CreatePage() {
  return (
    <div className="max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-2xl text-gray-800">Creating new User</h1>

      <form action={createUser}>
        <button className="px-5 py-1 border border-blue-700" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
