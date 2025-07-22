import React from "react";
import { ShieldCheck, Zap, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const WhyUsSection = () => {
  return (
    <section className="w-full bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Dlaczego my?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="h-full transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <CardTitle className="text-lg text-center">
                Bezpieczeństwo i licencje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Posiadamy wszelkie wymagane uprawnienia oraz ubezpieczenie OC
                operatora drona.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center gap-2">
              <Zap className="w-10 h-10 text-primary" />
              <CardTitle className="text-lg text-center">
                Nowoczesny sprzęt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Korzystamy z dronów najnowszej generacji, gwarantując wysoką
                jakość zdjęć i filmów.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center gap-2">
              <Users className="w-10 h-10 text-primary" />
              <CardTitle className="text-lg text-center">
                Indywidualne podejście
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Dopasowujemy ofertę do potrzeb klienta — obsługujemy firmy i
                osoby prywatne.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center gap-2">
              <CheckCircle className="w-10 h-10 text-primary" />
              <CardTitle className="text-lg text-center">
                Terminowość i jakość
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Realizujemy zlecenia sprawnie, rzetelnie i zawsze na czas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
