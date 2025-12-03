"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            aria-label="Toggle Dark Mode"
        >
            <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === "dark" ? "translate-x-6" : "translate-x-0"
                    }`}
            >
                {theme === "dark" ? (
                    <FiMoon className="text-black text-xs" />
                ) : (
                    <FiSun className="text-black text-xs" />
                )}
            </div>
        </button>
    );
}
