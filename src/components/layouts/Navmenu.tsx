"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useState } from "react";

export default function Navmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    const body = document.body;
    body.style.overflowY = "hidden";

    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    const body = document.body;
    body.style.overflowY = "";

    setIsOpen(false);
  };

  return (
    <>
      <div
        className={
          isOpen
            ? "w-full h-full fixed z-10 top-0 left-0 bg-black bg-opacity-50"
            : "hidden"
        }
        onClick={handleMenuClose}
      ></div>
      <div className="relative z-20 sm:hidden">
        <div className="relative z-10 flex px-8 py-4 items-center justify-between bg-gray-200">
          <Link onClick={handleMenuClose} href="/">
            <h1 className="text-4xl">Atsu Portfolio</h1>
          </Link>

          {isOpen ? (
            <button onClick={handleMenuClose}>
              <FontAwesomeIcon icon={faXmark} className="h-7" color="#1F2937" />
            </button>
          ) : (
            <button onClick={handleMenuOpen}>
              <FontAwesomeIcon icon={faBars} className="h-7" color="#1F2937" />
            </button>
          )}
        </div>

        <nav
          className={
            isOpen
              ? "absolute w-full translate-y-0 transition bg-gray-200"
              : "absolute -translate-y-[calc(171px_+_72px)] transition bg-gray-200"
          }
        >
          <ul className="px-8">
            <li className="border-b border-gray-400">
              <Link
                onClick={handleMenuClose}
                href="/works"
                className="block px-4 py-2 my-2 hover:bg-gray-300 rounded"
              >
                Works
              </Link>
            </li>
            <li className="border-b border-gray-400">
              <Link
                onClick={handleMenuClose}
                href="/about"
                className="block px-4 py-2 my-2 hover:bg-gray-300 rounded"
              >
                About
              </Link>
            </li>
            <li className="border-b">
              <Link
                onClick={handleMenuClose}
                href="/blog"
                className="block px-4 py-2 my-2 hover:bg-gray-300 rounded"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
