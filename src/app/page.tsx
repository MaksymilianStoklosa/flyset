import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "../components/sections/ServicesSection";
import { Footer } from "../components/sections/ContactSection";

import { WhyUsSection } from "../components/sections/WhyUsSection";


export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-sky-50 min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-0 w-full">
        <Hero />
        <ServicesSection />
        <WhyUsSection />
      </main>
      <Footer />
    </div>
  );
}
