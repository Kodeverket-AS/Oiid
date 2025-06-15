"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "icon";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#8748E2] px-6 py-3 text-white font-semibold hover:bg-[#6028B0] cursor-pointer",
  secondary:
    "bg-[#6028B0] px-6 py-3 text-white font-semibold hover:bg-[#8748E2] cursor-pointer",
  icon: "   border border-[#6028B0]  cursor-pointer",
};

type ButtonProps = {
  children: React.ReactNode;
  variant: Variant;
  href?: string;
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const base = `
         px-3 py-3 text-center transition duration-300`;
  const styles = variantStyles[variant];
  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined} tabIndex={0}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
