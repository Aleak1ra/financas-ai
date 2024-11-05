import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          className="mb-8"
          src="/logo1.svg"
          alt="Logo"
          width={173}
          height={39}
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>
        <p className="text-muted-foreground mb-8">
          Faça login para acessar sua conta e começar a investir.
        </p>
        <SignInButton>
          <Button variant="outline" className="mt-8">
            <LogInIcon />
            Entrar
          </Button>
        </SignInButton>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/fundologin.png"
          alt="background login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
