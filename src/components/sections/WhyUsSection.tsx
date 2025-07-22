import React from "react";
import { ShieldCheck, Zap, Users, CheckCircle } from "lucide-react";

export const WhyUsSection = () => {
  return (
    <section className="w-full bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Dlaczego my?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm h-full">
            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Bezpieczeństwo i licencje
            </h3>
            <p className="text-neutral-700 text-sm">
              Posiadamy wszelkie wymagane uprawnienia oraz ubezpieczenie OC
              operatora drona.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm h-full">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nowoczesny sprzęt</h3>
            <p className="text-neutral-700 text-sm">
              Korzystamy z dronów najnowszej generacji, gwarantując wysoką
              jakość zdjęć i filmów.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm h-full">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Indywidualne podejście
            </h3>
            <p className="text-neutral-700 text-sm">
              Dopasowujemy ofertę do potrzeb klienta — obsługujemy firmy i osoby
              prywatne.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm h-full">
            <CheckCircle className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Terminowość i jakość</h3>
            <p className="text-neutral-700 text-sm">
              Realizujemy zlecenia sprawnie, rzetelnie i zawsze na czas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
