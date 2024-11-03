"use client";

import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavbar = (): void => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <HeaderLogo />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/salon"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Salon
                </Link>
                <Link
                  href="/hairmake"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Hairmake
                </Link>
                <Link
                  href="/information"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Information
                </Link>
                <Link
                  href="/recruit"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Recruit
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="p-2 text-white" onClick={toggleNavbar}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              {openMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                  <div className="absolute top-4 right-4">
                    <button className="text-white p-2" onClick={toggleNavbar}>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4 text-center">
                    <Link
                      href="/"
                      className="text-white text-2xl block hover:bg-white hover:text-black rounded-lg p-4"
                    >
                      Home
                    </Link>
                    <Link
                      href="/salon"
                      className="text-white text-2xl block hover:bg-white hover:text-black rounded-lg p-4"
                    >
                      Salon
                    </Link>
                    <Link
                      href="/hairmake"
                      className="text-white text-2xl block hover:bg-white hover:text-black rounded-lg p-4"
                    >
                      Hairmake
                    </Link>
                    <Link
                      href="/information"
                      className="text-white text-2xl block hover:bg-white hover:text-black rounded-lg p-4"
                    >
                      Information
                    </Link>
                    <Link
                      href="/recruit"
                      className="text-white text-2xl block hover:bg-white hover:text-black rounded-lg p-4"
                    >
                      Recruit
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
