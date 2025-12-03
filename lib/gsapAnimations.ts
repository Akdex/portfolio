import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const registerGsapPlugins = () => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
};

export const revealAnimation = (selector: string, trigger: string | Element) => {
    gsap.from(selector, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
        },
    });
};
