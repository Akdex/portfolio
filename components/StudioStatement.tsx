"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StudioStatement() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 100,
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-[60vh] flex items-center justify-center px-6 md:px-10 bg-white"
        >
            <h2
                ref={textRef}
                className="text-[32px] md:text-[64px] font-bold text-center leading-tight max-w-4xl"
            >
                "Committed to delivering high-quality, innovative projects in blockchain and fintech."
            </h2>
        </section>
    );
}
