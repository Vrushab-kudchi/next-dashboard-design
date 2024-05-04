"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Laptop, MoonStarIcon, SunDimIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Tabs defaultValue="theme" className="w-[400px] flex justify-end">
        <TabsList>
          <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
            <MoonStarIcon />
          </TabsTrigger>
          <TabsTrigger value="light" onClick={() => setTheme("light")}>
            <SunDimIcon />
          </TabsTrigger>
          <TabsTrigger value="system" onClick={() => setTheme("system")}>
            <Laptop />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
