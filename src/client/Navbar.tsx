import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ClientNavbar() {
  return (
    <>
      <nav className="flex items-center p-5 border-b-2 fixed relative justify-between">
        <div className="flex items-center gap-x-4">
          <Image
            src={"/logo.jpg"}
            width={70}
            height={70}
            alt="Logo"
            className="md:h-16 md:w-16 h-12 w-12 rounded-full"
          />
          <h1 className="md:text-2xl text-xl bg-gradient-to-r from-primary to-red-700 bg-clip-text text-transparent">
            CryptoSea
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="hidden md:block">
            <ModeToggle />
          </span>
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
