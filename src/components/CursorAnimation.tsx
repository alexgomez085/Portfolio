import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // High-performance GSAP mouse trail using transforms instead of layout positioning
        boxesRef.current.forEach((box) => {
            if (!box) return;
            gsap.set(box, { opacity: 1, xPercent: -50, yPercent: -50 });
        });

        const handleMouseMove = (e: MouseEvent) => {
            boxesRef.current.forEach((box, index) => {
                if (!box) return;
                gsap.to(box, {
                    duration: 0.2, // Increased duration for smoother flow
                    x: e.clientX,
                    y: e.clientY,
                    delay: index * 0.005, // Staggered delay for the trail effect
                    ease: "power2.out", // Smoother easing
                    overwrite: "auto"
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            gsap.killTweensOf(boxesRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
        >
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (boxesRef.current[i] = el)}
                    className="absolute top-0 left-0 w-6 h-6 bg-[#D92431]/40 rounded-full will-change-transform opacity-0"
                />
            ))}
        </div>
    );
}
