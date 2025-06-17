"use client"
import { useState } from "react";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-26   flex items-center justify-between   md:hidden">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-[64px] w-auto" />
      </div>

      <div>
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
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
        <div className="absolute top-16 left-0 right-0  shadow-lg py-4 px-4 sm:px-8 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              What is Superfan App?
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              How does it work?
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Contact us 
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
