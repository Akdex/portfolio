"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { HiMenuAlt4 } from "react-icons/hi";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const handleScroll = () => {
            if (window.scrollY > 60) {
                gsap.to(header, {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    duration: 0.3,
                });
            } else {
                gsap.to(header, {
                    backgroundColor: "transparent",
                    backdropFilter: "blur(0px)",
                    borderBottom: "1px solid transparent",
                    duration: 0.3,
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className="fixed top-0 left-0 w-full z-40 transition-colors px-6 md:px-10 py-5 flex justify-between items-center"
            >
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    AK
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {["Home", "About", "Works", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-black/70 hover:text-black transition-colors uppercase tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Let's Talk
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 rounded-full hover:bg-black/5 transition-colors md:hidden"
                    >
                        <HiMenuAlt4 size={28} />
                    </button>
                </div>
            </header>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
