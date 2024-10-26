"use client"
import React from 'react';
import AnimatedBeam from './animated-beam';
import HeroTextSection from './hero-text-section';
import Particles from './ui/particles';

export default function Hero() {

  return (
    <>
      <Particles className="absolute inset-0 -z-10" quantity={60} ease={100} refresh />

      <HeroTextSection />
      <AnimatedBeam />
    </>
  );
}