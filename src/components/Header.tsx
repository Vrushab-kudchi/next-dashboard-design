import { HomeIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  return (
    <div className="h-[70px] p-4 border-b w-full flex justify-between items-center">
      <div className="flex gap-x-4 justify-center items-center">
        <span className="md:hidden">
          <MobileSidebar />
        </span>
        <h1 className="flex gap-2 p-2">
          <HomeIcon /> Dashboard
        </h1>
      </div>
      <ModeToggle />
    </div>
  );
}
