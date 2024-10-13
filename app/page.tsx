import Hero from "@/components/hero";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={60} ease={100} refresh />
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen">
        <Hero />
      </main>
    </div>
  );
}