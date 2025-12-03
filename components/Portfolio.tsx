"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { revealAnimation } from "@/lib/gsapAnimations";

const projects = [
    {
        title: "CryoMEX",
        category: "Blockchain / Gaming",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=CryoMEX",
        link: "https://cryomex.io",
    },
    {
        title: "Dexcheck AI",
        category: "Blockchain / AI",
        image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Dexcheck+AI",
        link: "https://dexcheck.ai/app",
    },
    {
        title: "Kotak Mahindra Bank",
        category: "Fintech / Analytics",
        image: "https://placehold.co/600x400/3a3a3a/ffffff?text=Kotak+Bank",
        link: "https://demo.comvision.io/acquirerna/txnSearch.html",
    },
    {
        title: "Tesora",
        category: "E-commerce",
        image: "https://placehold.co/600x400/4a4a4a/ffffff?text=Tesora",
        link: "https://shoptesora.com",
    },
    {
        title: "SWA",
        category: "E-commerce",
        image: "https://placehold.co/600x400/5a5a5a/ffffff?text=SWA",
        link: "https://drinkswa.com",
    },
];

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealAnimation(".portfolio-reveal", sectionRef.current!);

            gsap.from(".project-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
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
        <section id="works" ref={sectionRef} className="py-24 px-6 md:px-10 bg-white">
            <div className="flex justify-between items-end mb-16">
                <h2 className="portfolio-reveal text-[42px] font-bold leading-tight">
                    Selected Works
                </h2>
                <span className="portfolio-reveal hidden md:block text-sm font-medium text-gray-400">
                    01 / 0{projects.length}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project, i) => (
                    <Link
                        href={project.link}
                        key={i}
                        target="_blank"
                        className="project-card group block"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">
                                {project.category}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
