"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!overlayRef.current || !linksRef.current) return;

        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(overlayRef.current, {
                duration: 0.5,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power3.inOut",
            })
            .from(
                linksRef.current.children,
                {
                    y: 50,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.2"
            );

        return () => {
            tl.current?.kill();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isOpen]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex flex-col bg-black text-white"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        >
            <div className="flex justify-between items-center p-6 md:p-10">
                <div className="text-xl font-bold">AK</div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <IoClose size={32} />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
                <nav ref={linksRef} className="flex flex-col items-center gap-8">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={onClose}
                            className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="p-6 md:p-10 text-center text-gray-500 text-sm uppercase tracking-widest">
                Based in India
            </div>
        </div>
    );
}
