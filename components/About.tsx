"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal text elements
            revealAnimation(".about-reveal", sectionRef.current!);

            // Grid images stagger
            gsap.from(".grid-item", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: {
                    amount: 1,
                    grid: "auto",
                    from: "center",
                },
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-20 px-6 md:px-10 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="z-10 relative">
                        <h2 className="about-reveal text-[42px] font-bold mb-8">About Me</h2>
                        <p className="about-reveal text-lg md:text-xl leading-relaxed text-gray-600 max-w-md mb-12">
                            Passionate and self-taught Full-stack Developer with expertise in front-end development.
                            Dedicated to advancing technology solutions in blockchain, fintech, and e-commerce domains.
                            Committed to delivering high-quality, innovative projects.
                        </p>

                        <div className="space-y-8">
                            {[
                                { num: "01", title: "Full Stack Development", desc: "Expertise in Next.js, React, Node.js" },
                                { num: "02", title: "Blockchain & Fintech", desc: "Building secure, decentralized platforms" },
                                { num: "03", title: "Innovation", desc: "Creating scalable and efficient solutions" },
                            ].map((item, i) => (
                                <div key={i} className="about-reveal flex items-start gap-6 border-t border-gray-200 pt-6">
                                    <span className="text-sm font-bold text-gray-400 mt-1">{item.num}</span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Grid (Abstract Visuals) */}
                    <div ref={gridRef} className="relative h-[600px] w-full hidden md:block">
                        {/* Generating a grid of abstract blocks to mimic QClay's creative grid */}
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="grid-item absolute bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                style={{
                                    width: Math.random() * 100 + 100 + "px",
                                    height: Math.random() * 100 + 100 + "px",
                                    top: Math.random() * 80 + "%",
                                    left: Math.random() * 80 + "%",
                                    background: `hsl(0, 0%, ${Math.random() * 10 + 90}%)`,
                                }}
                            >
                                <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-4xl opacity-20">
                                    {i + 1}
                                </div>
                            </div>
                        ))}

                        {/* Floating List */}
                        <div className="absolute bottom-10 right-0 text-right space-y-2">
                            {["ADAPTABLE", "SCALABLE", "SECURE", "EFFICIENT"].map((word, i) => (
                                <div key={i} className="about-reveal text-sm font-bold tracking-widest uppercase text-gray-400">
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
