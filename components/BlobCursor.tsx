"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion, useTransform } from "motion/react";
import "./BlobCursor.css";

interface BlobCursorProps {
    blobType?: "circle" | "square"; // Just for extensibility, we'll use circle
    fillColor?: string;
}

export default function BlobCursor({ fillColor }: BlobCursorProps) {
    // Default to white for difference blend mode to work (inverts content)
    const color = fillColor || "#ffffff";

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };

    // Create multiple blobs with slightly different spring physics for a trailing effect
    const blob1X = useSpring(cursorX, { ...springConfig, mass: 0.2 });
    const blob1Y = useSpring(cursorY, { ...springConfig, mass: 0.2 });

    const blob2X = useSpring(cursorX, { ...springConfig, mass: 0.4 });
    const blob2Y = useSpring(cursorY, { ...springConfig, mass: 0.4 });

    const blob3X = useSpring(cursorX, { ...springConfig, mass: 0.6 });
    const blob3Y = useSpring(cursorY, { ...springConfig, mass: 0.6 });

    // Transform to center the blobs based on their size
    // Blob 1: 120px -> offset -60
    const blob1XCentered = useTransform(blob1X, (x) => x - 60);
    const blob1YCentered = useTransform(blob1Y, (y) => y - 60);

    // Blob 2: 150px -> offset -75
    const blob2XCentered = useTransform(blob2X, (x) => x - 75);
    const blob2YCentered = useTransform(blob2Y, (y) => y - 75);

    // Blob 3: 90px -> offset -45
    const blob3XCentered = useTransform(blob3X, (x) => x - 45);
    const blob3YCentered = useTransform(blob3Y, (y) => y - 45);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="blob-cursor-container">
            <svg className="gooey-filter">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -5"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div style={{ filter: "url(#goo)", width: "100%", height: "100%", position: "relative" }}>
                <motion.div
                    className="blob"
                    animate={{
                        scale: [1, 1.1, 0.9, 1.05, 1],
                        rotate: [0, 5, -5, 3, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        x: blob1XCentered,
                        y: blob1YCentered,
                        width: 120,
                        height: 120,
                        backgroundColor: color,
                        opacity: 0.7,
                        mixBlendMode: "difference",
                    }}
                />
                <motion.div
                    className="blob"
                    animate={{
                        scale: [1, 0.95, 1.1, 0.98, 1],
                        rotate: [0, -5, 5, -3, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        x: blob2XCentered,
                        y: blob2YCentered,
                        width: 150,
                        height: 150,
                        backgroundColor: color,
                        opacity: 0.6,
                        mixBlendMode: "difference",
                    }}
                />
                <motion.div
                    className="blob"
                    animate={{
                        scale: [1, 1.08, 0.92, 1.02, 1],
                        rotate: [0, 7, -7, 4, 0],
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        x: blob3XCentered,
                        y: blob3YCentered,
                        width: 90,
                        height: 90,
                        backgroundColor: color,
                        opacity: 0.8,
                        mixBlendMode: "difference",
                    }}
                />
            </div>
        </div>
    );
}
