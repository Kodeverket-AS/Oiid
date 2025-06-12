"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { useState, useEffect } from "react";

export function ModeToogle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is only used after mounting to prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" transition-colors duration-300 bg-transparent hover:bg-amber-100 dark:hover:bg-gray-700 rounded-full"
      variant={"icon"}
      aria-label="Toggle dark and lightmode"
    >
      {theme === "dark" ? (
        <Moon className="h-[1.1rem] w-[1.1rem]  " />
      ) : (
        <Sun className="h-[1.1rem] w-[1.1rem] " />
      )}
    </Button>
  );
}
