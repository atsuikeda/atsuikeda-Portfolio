'use client';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useState } from "react";

export default function Navmenu() {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleMenuClose = () => {
    setIsOpen(false);
  }
  
  return (
    <div className="bg-gray-200 relative sm:hidden">
      <div className="relative z-20 flex px-8 py-4 items-center justify-between">
        <Link onClick={handleMenuClose} href="/">
          <h1 className="text-4xl">Atsu Portfolio</h1>
        </Link>

        <button onClick={handleMenuOpen} >
          <FontAwesomeIcon icon={faBars} className="h-7" color="#1F2937" />
        </button>
      </div>

      <nav className={
        isOpen ? "absolute w-full translate-y-0 transition bg-gray-200 z-10  " : "absolute -translate-y-[calc(171px_+_72px)] transition bg-gray-200 z-10"
      }>
        <ul className="px-8">
          <li className="border-b border-gray-400">
            <Link onClick={handleMenuClose} href="/works" className="block px-4 py-2 my-2 hover:bg-gray-300 rounded">
              Works
            </Link>
          </li>
          <li className="border-b border-gray-400">
            <Link onClick={handleMenuClose} href="/about" className="block px-4 py-2 my-2 hover:bg-gray-300 rounded">
              About
            </Link>
          </li>
          <li className="border-b">
            <Link onClick={handleMenuClose} href="/blog" className="block px-4 py-2 my-2 hover:bg-gray-300 rounded">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
