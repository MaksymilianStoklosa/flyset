import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "../components/sections/ServicesSection";
import { SafetySection } from "../components/sections/SafetySection";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { Footer } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-light to-gray-200 min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] sm:px-0 w-full">
        <Hero />
        <ServicesSection />
        <SafetySection />
        <WhyUsSection />
      </main>
      <Footer />
    </div>
  );
}
