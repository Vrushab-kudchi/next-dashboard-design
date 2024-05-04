import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { sidebarData, SidebarSection, SidebarItem } from "./sidebarData";

export default function MobileSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="dark:bg-[#161618]" side={"left"}>
          <div className="min-w-[280px] h-screen pt-5 dark:bg-[#161618]">
            <Card className="flex p-3 dark:bg-[#161618]">
              <div className="flex justify-start items-center gap-x-1">
                <Image src={"/logo.jpg"} alt="logo" width={40} height={40} />
                <h1 className="text-xl font-bold">CryptoSea</h1>
                <Avatar className="ml-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </Card>
            <div className="pt-5 h-full">
              <Command>
                <CommandList className="min-h-screen dark:bg-[#161618]">
                  {sidebarData.map((section: SidebarSection, index: number) => (
                    <CommandGroup heading={section.suggestion} key={index}>
                      {section.info.map(
                        (item: SidebarItem, itemIndex: number) => (
                          <CommandItem key={itemIndex} className="gap-x-4">
                            <span className={item.color}>{item.Icon}</span>
                            {item.title}
                          </CommandItem>
                        )
                      )}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
