"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header
      style={{ gridColumn: "span 24" }}
      className="sticky top-0  h-14 border shadow bg-white z-[999] "
    >
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between h-full px-4 mx-auto">
        {/* Logo */}
        <div className="flex flex-shrink-0 gap-5">
          <a href="#" className="text-xl font-bold text-black">
            Logo
          </a>
          <Input
            placeholder="Search what your fearate"
            className="rounded-full "
            // width={"100px"}
          ></Input>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem className="cursor-pointer">
              Categories
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer">
              Posts
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer">
              Subscribe
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer">
              Login
            </NavigationMenuItem>
            <Button className="rounded-full">Donate</Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
