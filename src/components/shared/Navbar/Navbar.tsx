"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header
      style={{ gridColumn: "span 24" }}
      className="sticky top-0  h-14 border shadow bg-white z-[10] "
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
            <Link href="/dashboard/author/112276">
              <NavigationMenuItem className="cursor-pointer">
                Login
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
          <Button className="ml-6 rounded-full">Donate</Button>
        </NavigationMenu>
      </div>
    </header>
  );
}
