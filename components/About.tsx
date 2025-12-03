"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";


export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal text elements
            revealAnimation(".about-reveal", sectionRef.current!);

            // Floating cards animation
            gsap.from(".floating-card", {
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
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
            className="relative min-h-screen py-20 px-6 md:px-10 bg-white dark:bg-[#0e0e0e] transition-colors duration-300 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="z-10 relative">
                        <h2 className="about-reveal text-[42px] font-bold mb-8 dark:text-white">About Me</h2>
                        <p className="about-reveal text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-md mb-12">
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
                                <div key={i} className="about-reveal flex items-start gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                                    <span className="text-sm font-bold text-gray-400 mt-1">{item.num}</span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 dark:text-white">{item.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Animated Cards */}
                    <div ref={cardsRef} className="relative h-full min-h-[600px] hidden md:flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Floating Skill Cards */}
                            {[
                                { title: "React", color: "from-blue-500 to-cyan-500" },
                                { title: "Node.js", color: "from-green-500 to-emerald-500" },
                                { title: "Web3", color: "from-purple-500 to-pink-500" },
                                { title: "Next.js", color: "from-gray-700 to-gray-900" },
                                { title: "TypeScript", color: "from-blue-600 to-blue-800" },
                            ].map((skill, i) => (
                                <div
                                    key={i}
                                    className="floating-card absolute w-40 h-48 rounded-2xl bg-gradient-to-br shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    style={{
                                        top: `${15 + i * 15}%`,
                                        left: `${10 + (i % 2) * 40}%`,
                                        transform: `rotate(${(i - 2) * 8}deg)`,
                                    }}
                                >
                                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                                        <h4 className="text-white text-xl font-bold">{skill.title}</h4>
                                    </div>
                                </div>
                            ))}

                            {/* Bottom Keywords */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-4 justify-center">
                                {["ADAPTABLE", "SCALABLE", "SECURE", "EFFICIENT"].map((word) => (
                                    <span
                                        key={word}
                                        className="about-reveal px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold uppercase tracking-wider rounded-full"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
