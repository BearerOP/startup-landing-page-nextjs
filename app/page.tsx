import BgGradient from "@/components/bg-gradient";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen ">
        <Hero />
        <BgGradient/>
      </main>
      <Pricing />
    </div>
  );
}