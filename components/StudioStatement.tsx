"use client";

import ScrollReveal from "./ScrollReveal";

export default function StudioStatement() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-10 bg-white dark:bg-[#0e0e0e] transition-colors duration-300">
            <ScrollReveal className="text-[32px] md:text-[64px] font-bold text-center leading-tight max-w-4xl dark:text-white">
                &quot;Committed to delivering high-quality, innovative projects in blockchain and fintech.&quot;
            </ScrollReveal>
        </section>
    );
}

