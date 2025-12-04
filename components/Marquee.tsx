"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Marquee
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const content = marquee.querySelector(".marquee-content");
        if (!content) return;

        // Clone content for seamless loop
        const clone = content.cloneNode(true);
        marquee.appendChild(clone);

        const totalWidth = content.scrollWidth;

        gsap.to(marquee.children, {
            x: -totalWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, []);

    const skills = [
        "Full Stack Developer",
        "Blockchain",
        "Fintech",
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
    ];

    return (
        <section className="py-20 bg-[#0e0e0e] dark:bg-white text-white dark:text-black overflow-hidden transition-colors duration-300">
            <div ref={marqueeRef} className="flex whitespace-nowrap">
                <div className="marquee-content flex gap-12 px-6">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-[60px] md:text-[100px] font-bold uppercase tracking-tight">
                                {skill}
                            </span>
                            <span className="w-4 h-4 bg-white dark:bg-black rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
