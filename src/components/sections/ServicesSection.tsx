import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Camera, Building2, Wrench, Map } from "lucide-react";
import React from "react";

const SERVICES = [
  {
    icon: <Camera className="w-8 h-8 text-black" />,
    title: "Fotografia i wideo z drona",
    desc: "Profesjonalne zdjęcia i filmy z powietrza w wysokiej rozdzielczości – idealne do promocji, reklamy nieruchomości oraz dokumentowania ważnych wydarzeń.",
    features: [
      "Ujęcia promocyjne i reklamowe",
      "Sesje dla nieruchomości",
      "Dokumentacja eventów",
      "Filmy korporacyjne i prezentacyjne",
      "Zdjęcia ślubne z powietrza",
    ],
    target:
      "Firmy, agencje reklamowe, deweloperzy, fotografowie ślubni, klienci indywidualni",
  },
  {
    icon: <Building2 className="w-8 h-8 text-black" />,
    title: "Dokumentacja budowlana",
    desc: "Regularny monitoring postępów prac budowlanych oraz raportowanie inwestycji z lotu ptaka. Idealne dla deweloperów i zarządców nieruchomości.",
    features: [
      "Monitoring postępów budowy",
      "Raporty fotograficzne inwestycji",
      "Porównania etapów realizacji",
      "Dokumentacja dla zarządców",
      "Prezentacje dla inwestorów",
    ],
    target: "Deweloperzy, zarządcy nieruchomości, firmy budowlane, inwestorzy",
  },
  {
    icon: <Wrench className="w-8 h-8 text-black" />,
    title: "Inspekcje techniczne",
    desc: "Szybkie i bezpieczne inspekcje dachów, elewacji i innych trudno dostępnych miejsc. Dzięki dronowi ograniczasz koszty i ryzyko, a efekt to precyzyjna dokumentacja fotograficzna.",
    features: [
      "Inspekcje dachów i elewacji",
      "Kontrola paneli fotowoltaicznych",
      "Inspekcje kominów i masztów",
      "Obrazowanie termowizyjne",
      "Dokumentacja uszkodzeń",
    ],
    target:
      "Firmy przemysłowe, energetyka, administracja, wspólnoty mieszkaniowe, ubezpieczyciele",
  },
  {
    icon: <Map className="w-8 h-8 text-black" />,
    title: "Fotogrametria i mapowanie",
    desc: "Tworzenie ortofotomap, modeli 3D i pomiarów terenowych przy użyciu technologii dronowej. Gwarancja dokładności i przejrzystości wyników.",
    features: [
      "Ortofotomapy wysokiej rozdzielczości",
      "Modele 3D terenu i obiektów",
      "Pomiary objętości i powierzchni",
      "Mapy wysokościowe (DTM/DSM)",
      "Analiza zmian terenu w czasie",
    ],
    target:
      "Geodeci, firmy budowlane, rolnictwo, administracja, firmy wydobywcze",
  },
];
export const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-200" id="services">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Usługi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title}>
              <Card className="h-full transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-2">
                  {service.icon}
                  <CardTitle className="text-xl text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-center text-muted-foreground">
                    {service.desc}
                  </p>
                  <ul className="mb-3 space-y-1 text-sm">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-teal-400 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-center text-gray-500 opacity-80">
                    <span className="font-medium">Dla:</span> {service.target}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
