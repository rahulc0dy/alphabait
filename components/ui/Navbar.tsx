import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="wrapper flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/alphabait-logo-light.png"
          width={100}
          height={100}
          alt="logo"
          className="size-8"
        />
        <p className="text-2xl font-black">
          <span className="text-primary">A</span>lpha
          <span className="text-primary">B</span>ait
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex cursor-pointer items-center gap-2 opacity-70 focus-within:opacity-100 hover:opacity-100">
          Audio
          <ChevronDownIcon strokeWidth="2" className="size-5 text-current" />
        </button>
        <Link href={'/'} className="opacity-70 hover:opacity-100">
          Home
        </Link>
        <Link href={'/about'} className="opacity-70 hover:opacity-100">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
