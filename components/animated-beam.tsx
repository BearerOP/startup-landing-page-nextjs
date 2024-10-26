"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { BorderBeam } from './ui/border-beam';
import animated from '../public/animated-beam.png';

export default function AnimatedBeam() {
    const [showGradient, setShowGradient] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowGradient(true);
                    setIsFlashing(true);
                    setTimeout(() => setIsFlashing(false), 1000); // Duration of the flash effect
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5 // Trigger when 50% of the element is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="relative w-full py-14">
            <div ref={containerRef} className=" relative flex h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-7xl mx-auto flex-col items-center justify-center overflow-visible">
            {/* Orange Gradient Background */}
            <div
                className={cn(
                "absolute inset-0 -top-20 -left-8 -right-8 rounded-5xl bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.5),_rgba(255,165,0,0))] opacity-0 transition-all duration-1000 blur-3xl",
                showGradient && "opacity-100",
                isFlashing && "animate-gradient-flash"
                )}
            />

            {/* Main Content Container */}
            <div className="relative w-[80vw] h-[50vw] rounded-lg border bg-background shadow-xl overflow-hidden">
                {/* Background Image */}
                <Image
                src={animated}
                alt="Background Image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg opacity-50 border-4"

                />
                {/* Border Beam Effect */}
                <BorderBeam size={250} duration={10} delay={9} borderWidth={3} />
            </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </div>
    )
}