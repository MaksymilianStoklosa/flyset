"use client";
import * as React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const TRUST_SIGNALS = [
  { label: "Licencja UAVO", icon: <CheckCircle className="text-accent w-5 h-5" /> },
  { label: "Certyfikat VLOS/BVLOS", icon: <CheckCircle className="text-accent w-5 h-5" /> },
  { label: "Ubezpieczenie OC", icon: <CheckCircle className="text-accent w-5 h-5" /> },
  { label: "Legalność lotów", icon: <CheckCircle className="text-accent w-5 h-5" /> },
];

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[70vh] py-16 md:py-28 w-full overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full object-cover bg-primary/70 bg-blend-multiply flex items-center justify-center">
          {/* Replace below with <video ... /> in production */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-5xl md:text-7xl font-black opacity-10 select-none tracking-widest">DRONE VIDEO</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
        >
          Profesjonalne Usługi Dronowe dla Twojego Biznesu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 mb-8 font-medium"
        >
          Inspekcje, fotogrametria, monitoring, zdjęcia i filmy z powietrza – kompleksowa obsługa firm i instytucji.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-xl" asChild>
            <a href="#kontakt">Skontaktuj się</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="#oferta">Poznaj ofertę</a>
          </Button>
        </motion.div>
        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {TRUST_SIGNALS.map((item) => (
            <div key={item.label} className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow text-sm font-semibold text-primary backdrop-blur">
              {item.icon}
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
      {/* Smooth scroll indicator */}
      <a
        href="#oferta"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-10"
        aria-label="Przewiń do sekcji oferta"
      >
        <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-bounce mb-1 bg-primary/30">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span className="text-white text-xs opacity-80 group-hover:underline">Zobacz ofertę</span>
      </a>
    </section>
  );
}
