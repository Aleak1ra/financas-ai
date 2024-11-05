import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="align-center flex justify-center">
      <UserButton showName />
    </div>
  );
}
