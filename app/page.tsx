import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "./_components/ui/button";

export default function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="items-center">
      <div className="mt-3 items-center px-3 py-3">
        <span className="text-3xl font-bold">Dashboard</span>
        <Button variant={"ghost"}>Relatório IA</Button>
      </div>
    </div>
  );
}
