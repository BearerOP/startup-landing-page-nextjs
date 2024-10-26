import AnimatedShinyText from './ui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RainbowButton } from './ui/rainbow-button';

export default function HeroTextSection() {
  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-y-4 ">
        {/* Text Section */}
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <div className="z-10 flex items-center justify-center ">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100  text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
              role="button"
              aria-label="Introducing Magic UI"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center p-3 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-white">
                <span>✨ Introducing Magic UI Startup</span>
                <ArrowRightIcon size={20} className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <h1
            className="py-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-4xl sm:text-6xl lg:text-8xl font-medium leading-tight text-transparent dark:from-white dark:to-slate-100/30 tracking-tighter leading-1"
            aria-label="Magic UI is the new way to build landing pages."
          >
            Magic UI is the new way
            to build landing pages.
          </h1>
          <p className='text-xl text-muted-foreground text-wrap  text-center'>
            Beautifully designed, animated components and templates built with
            <br className='hidden md:block' />
            Tailwind CSS, React, and Framer Motion
          </p>
        </div>
        {/* Description Section */}
        <div className='max-w-2xl mx-auto text-center flex flex-col items-center space-y-6 mb-12'>
          <RainbowButton className='w-fit text-sm'>
            <span>Get Started for free</span>
            <ArrowRightIcon className='size-4 ml-1' />
          </RainbowButton>
        </div>
      </div>
  )
}
