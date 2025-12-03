"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { revealAnimation } from "@/lib/gsapAnimations";
import TiltedCard from "./TiltedCard";

const projects = [
    {
        title: "SWA",
        category: "E-commerce / Artisanal Syrups",
        image: "/assets/portfolio/swa.png",
        link: "https://drinkswa.com",
    },
    {
        title: "Tesora",
        category: "E-commerce / Home Appliances",
        image: "/assets/portfolio/tesora.png",
        link: "https://shoptesora.com",
    },
    {
        title: "Dexcheck AI",
        category: "Blockchain / AI Analytics",
        image: "/assets/portfolio/dexcheck.png",
        link: "https://dexcheck.ai/app",
    },
    {
        title: "CryoMEX",
        category: "Blockchain / Gaming",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=CryoMEX",
        link: "https://cryomex.io",
    },
    {
        title: "Kotak Mahindra Bank",
        category: "Fintech / Analytics",
        image: "https://placehold.co/600x400/3a3a3a/ffffff?text=Kotak+Bank",
        link: "https://demo.comvision.io/acquirerna/txnSearch.html",
    },
    {
        title: "Electix",
        category: "E-commerce",
        image: "https://placehold.co/600x400/5a5a5a/ffffff?text=Electix",
        link: "#",
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
        <section id="works" ref={sectionRef} className="py-24 px-6 md:px-10 bg-white dark:bg-[#0e0e0e] transition-colors duration-300">
            <div className="flex justify-between items-end mb-16">
                <h2 className="portfolio-reveal text-[42px] font-bold leading-tight dark:text-white">
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
                        <div className="mb-6">
                            <TiltedCard
                                imageSrc={project.image}
                                altText={project.title}
                                captionText={project.title}
                                containerHeight="300px"
                                containerWidth="100%"
                                imageHeight="300px"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                                // @ts-expect-error
                                overlayContent={
                                    <div className="w-[29vw] max-w-[635px] h-[290px] rounded-2xl m-1 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-2 px-2">
                            <h3 className="text-2xl font-bold dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                {project.title}
                            </h3>
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
