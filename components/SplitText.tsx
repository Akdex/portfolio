"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function SplitText({
    children,
    className = "",
    delay = 0,
    duration = 0.05,
}: SplitTextProps) {
    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
