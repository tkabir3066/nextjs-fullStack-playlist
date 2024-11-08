import { redirect } from "next/navigation";
import { auth } from "../auth";

async function SettingsPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      {session?.user.role === "admin" ? (
        <p>Authorized user</p>
      ) : (
        <p>You are logged in but not authorized user</p>
      )}
    </div>
  );
}

export default SettingsPage;
