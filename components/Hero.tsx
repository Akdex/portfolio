"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import MetaBalls from "./MetaBalls";
import Aurora from "./Aurora";

import Magnet from "./Magnet";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import SplashCursor from "./SplashCursor";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const rotatingBadgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge and Services fade in
            gsap.from([badgeRef.current, servicesRef.current], {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2,
            });

            // Rotating badge animation
            gsap.to(rotatingBadgeRef.current, {
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: "linear",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-10 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
        >
            {/* Splash Cursor - Only for Home Section */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SplashCursor />
            </div>

            {/* Aurora Background */}
            <div className="absolute inset-0 opacity-50 dark:opacity-40 hidden dark:block z-0">
                <Aurora
                    colorStops={["#5227FF", "#7cff67", "#5227FF"]}
                    amplitude={1.2}
                    blend={0.6}
                    speed={0.8}
                />
            </div>
            {/* Rating Badge */}
            <div ref={badgeRef} className="absolute top-32 left-6 md:left-10 flex items-center gap-3 z-10">
                <div className="flex gap-1 text-black dark:text-white">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                    ))}
                </div>
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    5+ Years Experience
                </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-[90vw] md:max-w-[80vw] z-10 mt-10 md:mt-0">
                <h1 className="text-[42px] md:text-[72px] font-bold leading-[1.1] tracking-tight dark:text-white">
                    <div className="overflow-hidden">
                        <DecryptedText
                            text="Full Stack Developer"
                            animateOn="view"
                            revealDirection="start"
                            sequential={true}
                            speed={50}
                            maxIterations={15}
                            parentClassName="block"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <DecryptedText
                            text="creating holistic,"
                            animateOn="view"
                            revealDirection="center"
                            sequential={true}
                            speed={50}
                            maxIterations={15}
                            parentClassName="block"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <DecryptedText
                            text="scalable solutions."
                            animateOn="view"
                            revealDirection="end"
                            sequential={true}
                            speed={50}
                            maxIterations={15}
                            parentClassName="block"
                        />
                    </div>
                </h1>
            </div>

            {/* Services Line */}
            <div ref={servicesRef} className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 z-10">
                <div className="text-sm md:text-base font-medium tracking-widest uppercase">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="text-sm md:text-base"
                    >
                        Web Development / Blockchain / Fintech / E-Commerce
                    </GradientText>
                </div>
                <Magnet padding={50} magnetStrength={5}>
                    <button className="px-6 py-2 border-2 border-black dark:border-white rounded-full text-sm font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wide">
                        Download Resume
                    </button>
                </Magnet>
            </div>

            {/* MetaBalls Scroll Badge */}
            <div className="absolute bottom-10 right-6 md:right-25 hidden md:block w-40 h-40">
                <div className="relative w-full h-full">
                    <MetaBalls
                        className="absolute inset-0"
                        color="#000000"
                        cursorBallColor="#666666"
                        ballCount={8}
                        speed={0.2}
                        animationSize={25}
                        clumpFactor={0.8}
                        cursorBallSize={2}
                        enableTransparency={true}
                    />
                    <div ref={rotatingBadgeRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path
                                id="circlePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="transparent"
                            />
                            <text className="text-[11px] font-bold uppercase tracking-widest fill-black dark:fill-white">
                                <textPath href="#circlePath" startOffset="0%">
                                    Scroll Down • Scroll Down • Scroll Down •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
