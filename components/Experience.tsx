"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";
import SpotlightCard from "./SpotlightCard";

const experiences = [
    {
        company: "Stackera",
        role: "SDE II",
        period: "Aug 2022 - Present",
        description:
            "Developed innovative solutions for Web3 and blockchain infrastructure, focusing on scalability and user experience.",
    },
    {
        company: "Mobi Web Global Solution",
        role: "Frontend Developer",
        period: "Apr 2021 - Jul 2022",
        description:
            "Built responsive web applications using React, collaborated with design teams, and delivered high-quality code.",
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealAnimation(".exp-reveal", sectionRef.current!);

            gsap.from(".exp-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-gray-50 dark:bg-[#0e0e0e] transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 max-w-2xl">
                    <h2 className="exp-reveal text-[42px] font-bold leading-tight mb-6 dark:text-white">
                        Professional Experience
                    </h2>
                    <p className="exp-reveal text-lg text-gray-600 dark:text-gray-400">
                        A journey through innovation, collaboration, and growth in the tech industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, i) => (
                        <SpotlightCard
                            key={i}
                            className="exp-card"
                            spotlightColor="rgba(100, 100, 255, 0.15)"
                        >
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 dark:text-white">{exp.company}</h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-400">{exp.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wide">
                                    {exp.period}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
