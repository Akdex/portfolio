"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";
import SplitText from "./SplitText";


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
                        <SplitText className="text-[48px] md:text-[56px] font-bold mb-12 dark:text-white leading-tight">
                            About Me
                        </SplitText>
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

                    {/* Right Side - Modern Stats Grid */}
                    <div ref={cardsRef} className="relative h-full min-h-[600px] hidden md:block">
                        <div className="grid grid-cols-2 gap-4 auto-rows-min grid-rows-[auto_auto_auto]">
                            {/* Large Stat Card - Top Left */}
                            <div className="col-span-2 about-reveal bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-transform duration-300">
                                <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    5+
                                </div>
                                <div className="text-lg font-semibold mt-2 dark:text-white">Years Experience</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Building innovative solutions</div>
                            </div>

                            {/* Projects Card - Middle Left */}
                            <div className="about-reveal bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 backdrop-blur-sm p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-transform duration-300">
                                <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                                    20+
                                </div>
                                <div className="text-base font-semibold mt-2 dark:text-white">Projects</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Delivered</div>
                            </div>

                            {/* Technologies Card - Middle Right */}
                            <div className="about-reveal bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-sm p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-transform duration-300">
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                    10+
                                </div>
                                <div className="text-base font-semibold mt-2 dark:text-white">Technologies</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Mastered</div>
                            </div>

                            {/* Tech Stack Pills - Bottom */}
                            <div className="col-span-2 about-reveal bg-gradient-to-br from-gray-500/10 to-gray-700/10 dark:from-gray-500/20 dark:to-gray-700/20 backdrop-blur-sm p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Node.js", "TypeScript", "Web3", "Blockchain"].map((tech, i) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-white dark:bg-black/50 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 dark:text-white hover:scale-105 transition-transform duration-200"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
