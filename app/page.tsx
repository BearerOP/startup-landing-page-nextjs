import BgGradient from "@/components/bg-gradient";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="py-14 flex flex-col items-center justify-center min-h-screen ">
        <Hero />
        <BgGradient/>
      </main>
      <Pricing />
      <Cta/>
      <Footer/>

    </div>
  );
}