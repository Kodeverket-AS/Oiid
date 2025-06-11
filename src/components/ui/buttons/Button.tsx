"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;

  href?: string;
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, href, className, onClick }: ButtonProps) {
  const base = `
          py-3 px-6  rounded-sm  bg-light-purple text-white font-semibold hover:bg-[#4E208E] cursor-pointer transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed`;

  const combined = `${base} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined} tabIndex={0}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
