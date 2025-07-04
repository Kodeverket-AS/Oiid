"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { useState, useEffect } from "react";

export function ModeToogle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="neon-text transform-gpu transition-colors duration-200 rounded-full lg:mr-0 mr-4 relative focus:outline-none focus:ring-1 focus:ring-light-purple active:bg-[#8748E2] active:text-white md:hover:bg-[#8748E2] md:hover:text-white"
      variant={"icon"}
      aria-label="Toggle dark and lightmode"
    >
      {theme === "dark" ? (
        <Moon className="h-[1.1rem] w-[1.1rem] md:h-[1.5rem] md:w-[1.5rem]" />
      ) : (
        <Sun className="h-[1.1rem] w-[1.1rem] md:h-[1.5rem] md:w-[1.5rem]" />
      )}
    </Button>
  );
}
