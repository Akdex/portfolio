"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
import GlassSurface from "./GlassSurface";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 md:px-10 py-5 flex justify-between items-center ${scrolled ? "py-4" : ""
                    }`}
            >
                {scrolled && (
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-b-2xl">
                        <GlassSurface
                            width="100%"
                            height="100%"
                            borderRadius={0}
                            borderWidth={0}
                            opacity={0.5}
                            blur={2}
                            displace={2}
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md z-[-1]" />
                    </div>
                )}

                <div className="relative z-10 flex justify-between items-center w-full">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter dark:text-white">
                        AK
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {["Home", "About", "Works", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="#contact"
                            className="hidden md:block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            Let's Connect
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors md:hidden dark:text-white"
                        >
                            <HiMenuAlt4 size={28} />
                        </button>
                    </div>
                </div>
            </header>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
