"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { revealAnimation } from "@/lib/gsapAnimations";

export default function BigCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealAnimation(".cta-reveal", sectionRef.current!);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 px-6 md:px-10 bg-gray-50 overflow-hidden">
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-200 opacity-20 pointer-events-none select-none">
                AK
            </div>

            <div className="relative z-10 text-center">
                <h2 className="cta-reveal text-[56px] md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-8">
                    Have a project
                    <br />
                    in mind?
                </h2>
                <p className="cta-reveal text-xl md:text-2xl text-gray-500">
                    Let's build something amazing together.
                </p>
            </div>
        </section>
    );
}
