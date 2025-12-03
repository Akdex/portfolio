"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const rotatingBadgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text animation (manual split since SplitText is premium)
            const chars = textRef.current?.querySelectorAll(".char");
            if (chars) {
                gsap.from(chars, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.2,
                });
            }

            // Badge and Services fade in
            gsap.from([badgeRef.current, servicesRef.current], {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.8,
            });

            // Rotating badge animation
            gsap.to(rotatingBadgeRef.current, {
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: "linear",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const splitText = (text: string) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block" style={{ minWidth: char === " " ? "0.3em" : "auto" }}>
                {char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-10 overflow-hidden"
        >
            {/* Rating Badge */}
            <div ref={badgeRef} className="absolute top-32 left-6 md:left-10 flex items-center gap-3">
                <div className="flex gap-1 text-black">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                    ))}
                </div>
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    5+ Years Experience
                </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-[90vw] md:max-w-[80vw] z-10 mt-10 md:mt-0">
                <h1 ref={textRef} className="text-[42px] md:text-[72px] font-bold leading-[1.1] tracking-tight">
                    <div className="overflow-hidden">{splitText("Full Stack Developer")}</div>
                    <div className="overflow-hidden">{splitText("creating holistic,")}</div>
                    <div className="overflow-hidden">{splitText("scalable solutions.")}</div>
                </h1>
            </div>

            {/* Services Line */}
            <div ref={servicesRef} className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="text-sm md:text-base font-medium tracking-widest text-gray-500 uppercase">
                    Web Development / Blockchain / Fintech / E-Commerce
                </div>
                <button className="px-6 py-2 border border-black/10 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors uppercase tracking-wide">
                    Download Resume
                </button>
            </div>

            {/* Rotating Scroll Badge */}
            <div className="absolute bottom-10 right-6 md:right-10 hidden md:flex justify-center items-center">
                <div ref={rotatingBadgeRef} className="relative w-32 h-32 flex justify-center items-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0">
                        <path
                            id="circlePath"
                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            fill="transparent"
                        />
                        <text className="text-[11px] font-bold uppercase tracking-widest fill-black">
                            <textPath href="#circlePath" startOffset="0%">
                                Scroll Down • Scroll Down • Scroll Down •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="absolute text-2xl">
                    <IoEyeSharp />
                </div>
            </div>
        </section>
    );
}
