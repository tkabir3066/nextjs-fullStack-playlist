import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";
import Nav from "./components/Nav";
export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div className="max-w-xl mx-auto mt-20">
        <h2 className="text-4xl text-gray-700 font-semibold">
          Welcome to the Home page and {session.user.name}'s world
        </h2>
        <h2>Role: {session.user.role}</h2>
        <Link href={"/api/auth/signout"}>Logout</Link>
      </div>
    </>
  );
}
