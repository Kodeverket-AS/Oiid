

"use client";
import { useState } from "react";
import { ModeToogle } from "@/components/modeToggle";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-26 flex items-center justify-between md:hidden">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-[64px] w-auto" />
      </div>

      <div className="flex items-center gap-2">
        <ModeToogle />
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white/85 dark:bg-background-dark/85 shadow-lg py-4 px-4 sm:px-8 z-50">
          <div className="flex flex-col items-start space-y-4">
            <a
              draggable="false"
              href="#superfan"
              className="group relative active:text-purple-700 dark:active:text-purple-400 "
            >
              What is Superfan App?
             
            </a>
            <a
              draggable="false"
              href="#how"
              className="group relative active:text-purple-700 dark:active:text-purple-400 "
            >
              How does it work?
             
            </a>
            <a
              draggable="false"
              href="#contact"
              className="group relative active:text-purple-700 dark:active:text-purple-400 "
            >
              Contact us
             
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
