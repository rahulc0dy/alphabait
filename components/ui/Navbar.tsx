import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import ThemeLogo from "./ThemeLogo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="wrapper flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-4">
        <ThemeLogo />
        <p className="text-2xl font-black">
          <span className="text-primary">A</span>lpha
          <span className="text-primary">B</span>ait
        </p>
      </Link>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
