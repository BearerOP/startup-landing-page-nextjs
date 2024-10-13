"use client"

import React, { useEffect, useState } from 'react';
import AnimatedShinyText from './ui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RainbowButton } from './ui/rainbow-button';
import { BorderBeam } from './ui/border-beam';
import Image from 'next/image';
import animated from '../public/animated-beam.png';

export default function Hero() {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    setShowGradient(true);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-y-12 ">
      {/* Button Section */}
     

      {/* Text Section */}
      <div className="text-center mb-8">
      <div className="z-10 flex items-center justify-center mb-8">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
          role="button"
          aria-label="Introducing Magic UI"
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Magic UI Startup</span>
            <ArrowRightIcon size={20} className="ml-1 p-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
        <h1
          className="px-10  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10"
          aria-label="Magic UI is the new way to build landing pages."
        >
          Magic UI is the new way
          to build landing pages.
        </h1>
      </div>

      {/* Description Section */}
      <div className='max-w-2xl mx-auto text-center flex flex-col items-center space-y-6 mb-12'>
        <p className='text-xl text-muted-foreground'>
          Beautifully designed, animated components and templates built with
          Tailwind CSS, React, and Framer Motion
        </p>
        <RainbowButton className='w-fit text-sm'>
          <span>Get Started for free</span>
          <ArrowRightIcon className='size-4 ml-1' />
        </RainbowButton>
      </div>

      <div className="relative flex h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-5xl mx-auto flex-col items-center justify-center overflow-visible">
        {/* Orange Gradient Background */}
        <div
          className={cn(
            "absolute inset-0 -top-20 -left-8 -right-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.3),_rgba(255,165,0,0))] opacity-0 transition-opacity duration-1000 blur-2xl",
            showGradient && "opacity-100"
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
            className="rounded-lg opacity-50"
          />

          {/* Border Beam Effect */}
          <BorderBeam size={250} duration={10} delay={9} />
        </div>
      </div>
    </div>
  );
}