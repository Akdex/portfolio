"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaStar, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { revealAnimation } from "@/lib/gsapAnimations";
import CurvedLoop from "./CurvedLoop";

export default function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealAnimation(".contact-reveal", sectionRef.current!);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 px-6 md:px-10 bg-white dark:bg-[#0e0e0e] transition-colors duration-300 overflow-hidden">
            {/* Curved Loop Decoration - Background */}
            <div className="absolute bottom-40 left-0 right-0 z-0">
                <CurvedLoop
                    marqueeText="Let's Work Together ✦ Get In Touch ✦ Start a Project ✦"
                    speed={2}
                    curveAmount={650}
                    direction="right"
                    interactive={true}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Info */}
                <div>
                    <h2 className="contact-reveal text-[42px] font-bold mb-8 dark:text-white">
                        Let&apos;s Start a Project
                    </h2>

                    <div className="contact-reveal flex items-center gap-3 mb-12">
                        <div className="flex gap-1 text-black dark:text-white">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                        </div>
                        <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                            5+ Years Experience
                        </span>
                    </div>

                    <div className="contact-reveal grid grid-cols-2 gap-4 mb-12">
                        {[
                            { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/ak0001/" },
                            { icon: FaGithub, label: "GitHub", href: "https://github.com/Akdex" },
                            { icon: FaTwitter, label: "Twitter", href: "#" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="contact-reveal">
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Contact Details</h3>
                        <p className="text-gray-600 dark:text-gray-400">akmicrowin@outlook.com</p>
                        <p className="text-gray-600 dark:text-gray-400">(+91) 8076838896</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">New Delhi, India</p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="contact-reveal bg-white/20 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl">
                    {submitted ? (
                        <div className="h-full flex flex-col justify-center items-center text-center">
                            <div className="text-6xl mb-6">🤝</div>
                            <h3 className="text-2xl font-bold mb-2 dark:text-white">Thank You!</h3>
                            <p className="text-gray-600">
                                Your request has been successfully sent. I&apos;ll get back to you soon! 😉
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors dark:text-white"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                    I&apos;m interested in...
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {["Web Development", "App from scratch", "UX/UI Design", "Branding", "Site from scratch", "App Development", "Maintenance", "Consulting"].map(
                                        (interest) => (
                                            <label key={interest} className="cursor-pointer">
                                                <input type="checkbox" className="peer sr-only" />
                                                <span className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm hover:border-black dark:hover:border-white peer-checked:bg-black dark:peer-checked:bg-white peer-checked:text-white dark:peer-checked:text-black transition-all dark:text-gray-300">
                                                    {interest}
                                                </span>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                    Project Project budget (USD)
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {["< $5k", "$5k - $10k", "$10k - $20k", "$20k+"].map((budget) => (
                                        <label key={budget} className="cursor-pointer">
                                            <input type="radio" name="budget" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm hover:border-black dark:hover:border-white peer-checked:bg-black dark:peer-checked:bg-white peer-checked:text-white dark:peer-checked:text-black transition-all dark:text-gray-300">
                                                {budget}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-gray-500">
                                    Project Description
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none dark:text-white"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Send Request
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
