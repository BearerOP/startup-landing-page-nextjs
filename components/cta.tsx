import React from "react";
import { Shield, HeartHandshake, Zap, Star, Sun, Moon } from "lucide-react";
import Marquee from "./ui/marquee";

const IconBox = ({
  children,
  color,
  gradient,
}: {
  children: React.ReactNode;
  color: string;
  gradient: string;
}) => (
  <div
    className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 ${color} transform-gpu dark:bg-opacity-5 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-10px_#ffffff1f_inset]`}
  >
    {children}
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full ${gradient} opacity-70 blur-[20px] filter`}
    ></div>
  </div>
);

const icons = [
  {
    icon: Shield,
    label: "",
    color: "bg-blue-100",
    gradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    label: "",
    color: "bg-red-100",
    gradient: "bg-gradient-to-r from-red-400 via-red-500 to-red-600",
  },
  {
    icon: Zap,
    label: "",
    color: "bg-yellow-100",
    gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    icon: Star,
    label: "",
    color: "bg-green-100",
    gradient: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  },
  {
    icon: Sun,
    label: "",
    color: "bg-orange-100",
    gradient: "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600",
  },
  {
    icon: Moon,
    label: "",
    color: "bg-purple-100",
    gradient: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    label: "",
    color: "bg-blue-100",
    gradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    label: "",
    color: "bg-red-100",
    gradient: "bg-gradient-to-r from-red-400 via-red-500 to-red-600",
  },
  {
    icon: Zap,
    label: "",
    color: "bg-yellow-100",
    gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    icon: Star,
    label: "",
    color: "bg-green-100",
    gradient: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  },
  {
    icon: Sun,
    label: "",
    color: "bg-orange-100",
    gradient: "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600",
  },
  {
    icon: Moon,
    label: "",
    color: "bg-purple-100",
    gradient: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
  },
];

const IconWithLabel = ({
  Icon,
  label,
  color,
  gradient,
}: {
  Icon: React.ElementType;
  label: string;
  color: string;
  gradient: string;
}) => (
  <div className="flex flex-col items-center gap-2 ">
    <IconBox color={color} gradient={gradient}>
      <Icon className="size-full" />
    </IconBox>
    <span className="text-sm font-medium dark:text-white">{label}</span>
  </div>
);

const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);

export default function IconMarquee() {
  return (
    <div className="py-14 relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee reverse className="[--duration:15s]">
        {firstRow.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item.icon}
            label={item.label}
            color={item.color}
            gradient={item.gradient}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:25s]">
        {secondRow.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item.icon}
            label={item.label}
            color={item.color}
            gradient={item.gradient}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {firstRow.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item.icon}
            label={item.label}
            color={item.color}
            gradient={item.gradient}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s]">
        {secondRow.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item.icon}
            label={item.label}
            color={item.color}
            gradient={item.gradient}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-85% dark:to-background"></div>
      <div className="absolute bottom-10 z-10">
        <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart-handshake mx-auto size-16 text-black dark:text-white lg:size-24"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
            <path d="m18 15-2-2"></path>
            <path d="m15 18-2-2"></path>
          </svg>
        </div>
        <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Stop wasting time on design.
          </h1>
          <p className="mt-2">
            Start your 7-day free trial. No credit card required.
          </p>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6"
            href="#"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
        <div className="absolute inset-0 -z-10 rounded-full  bg-backtround opacity-40 blur-xl dark:bg-background"></div>
      </div>
    </div>
  );
}
