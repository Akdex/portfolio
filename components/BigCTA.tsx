"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";

import { useTheme } from "next-themes";
import BlobCursor from "./BlobCursor";
import GradientText from "./GradientText";

export default function BigCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const ctx = gsap.context(() => {
            revealAnimation(".cta-reveal", sectionRef.current!);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const blobColor = mounted && theme === "dark" ? "#ffffff" : "#000000";

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 bg-gray-50 dark:bg-[#0e0e0e] transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <BlobCursor fillColor={blobColor} />
            </div>

            {/* Watermark */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-200 dark:text-gray-800 opacity-20 pointer-events-none select-none z-0">
                AK
            </div> */}

            <div className="relative z-10 text-center">
                <h2 className="cta-reveal text-[56px] md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-8 text-gray-700 dark:text-white/90">
                    Have a project
                    <br />
                    in mind?
                </h2>

                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-xl md:text-2xl font-bold p-2 px-4"
                >
                    Let&apos;s build something amazing together.
                </GradientText>

            </div>
        </section>
    );
}
