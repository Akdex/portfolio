"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";

const experiences = [
    {
        company: "STACKERA",
        role: "SDE II",
        period: "July 2022 - Present",
        location: "Pune, Maharashtra, India",
        desc: "Frontend Developer focused on building scalable web applications.",
    },
    {
        company: "MOBI WEB GLOBAL SOLUTION",
        role: "Frontend Developer",
        period: "November 2021 - June 2022",
        location: "New Delhi, India",
        desc: "Developed responsive websites and optimized user interfaces.",
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealAnimation(".exp-reveal", sectionRef.current!);

            gsap.from(".exp-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 max-w-2xl">
                    <h2 className="exp-reveal text-[42px] font-bold leading-tight mb-6">
                        Professional Experience
                    </h2>
                    <p className="exp-reveal text-lg text-gray-600">
                        A track record of delivering high-quality software solutions in dynamic environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="exp-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">
                                        {exp.role}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4">{exp.location}</p>
                            <p className="text-gray-700 leading-relaxed">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
