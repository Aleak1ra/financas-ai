"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "../button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between border-b p-2">
      <div className="flex items-center">
        <Image
          src="/logo1.svg"
          alt="logo"
          className="cursor-pointer"
          width={160}
          height={80}
          onClick={() => router.push("/")}
        />
        <div className="flex items-center space-x-4">
          <Button variant={"ghost"} onClick={() => router.push("/")}>
            <b>Dashboard</b>
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => router.push("/transactions")}
          >
            <b>Transações</b>
          </Button>
          <Button variant={"ghost"}>
            <b>Assinatura</b>
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <UserButton showName />
      </div>
    </div>
  );
};

export default Header;
