"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const TRUST_SIGNALS = [
  {
    label: "Licencja UAVO",
    icon: <CheckCircle className="text-accent w-5 h-5" />,
  },
  {
    label: "Certyfikat VLOS/BVLOS",
    icon: <CheckCircle className="text-accent w-5 h-5" />,
  },
  {
    label: "Ubezpieczenie OC",
    icon: <CheckCircle className="text-accent w-5 h-5" />,
  },
  {
    label: "Legalność lotów",
    icon: <CheckCircle className="text-accent w-5 h-5" />,
  },
];

export function Hero() {
  return (
    <section
      id="witaj"
      className="relative flex flex-col justify-center items-center min-h-[70vh] py-16 md:py-28 w-full overflow-hidden"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/flyset/hero.webp"
          alt="Profesjonalne usługi dronowe - widok z lotu ptaka"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Profesjonalne Usługi Dronowe dla Twojego Biznesu
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium">
          Inspekcje, fotogrametria, monitoring, zdjęcia i filmy z powietrza –
          kompleksowa obsługa firm i instytucji.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white hover:bg-white/80 shadow-xl"
            asChild
          >
            <a href="#kontakt">Skontaktuj się</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/80 hover:text-primary"
            asChild
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Poznaj ofertę
            </a>
          </Button>
        </div>
        {/* Trust Signals */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mt-4">
          {TRUST_SIGNALS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-light/80 border-light border-1 px-3 py-1 rounded-full shadow text-sm font-semibold text-white backdrop-blur"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {/* Smooth scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center group cursor-pointer z-10"
        aria-label="Przewiń do sekcji usługi"
        onClick={(e) => {
          e.preventDefault();
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-bounce mb-1 bg-secondary/30">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-white text-xs opacity-80 group-hover:underline">
          Zobacz ofertę
        </span>
      </a>
    </section>
  );
}
