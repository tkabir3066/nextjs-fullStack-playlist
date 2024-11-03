import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";
export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div>
        <h3>Protected page</h3>
        {session.user.name && <p>{session.user.name}</p>}
        {session.user.email && <p>{session.user.email}</p>}
        <Link
          className="px-5 py-1 border border-green-400"
          href={"api/auth/signout"}
        >
          Logout
        </Link>
      </div>
    </>
  );
}
