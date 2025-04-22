"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"; // shadcn sheet components
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavLinks = () => {
  return (
    <>
      {/* Desktop: always visible links */}
      <div className="hidden items-center gap-5 md:flex">
        <ThemeSwitchButton />
        <Link href="/" className="opacity-70 hover:opacity-100">
          Home
        </Link>
        <Link href="/about" className="opacity-70 hover:opacity-100">
          About
        </Link>
      </div>
      {/* Mobile: sidebar sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex cursor-pointer items-center gap-2 opacity-70 hover:opacity-100 focus:outline-none">
              <Bars3Icon className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg w-64">
            <SheetHeader>
              <SheetTitle className="text-text">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <Link href="/" className="text-text block text-center">
                Home
              </Link>
              <Link href="/about" className="text-text block text-center">
                About
              </Link>
              <ThemeSwitchButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavLinks;
