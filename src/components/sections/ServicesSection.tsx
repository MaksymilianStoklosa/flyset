import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Camera, Building2, Wrench, Map } from "lucide-react";
import React from "react";

const SERVICES = [
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    title: "Fotografia i Film z Powietrza",
    desc: "Profesjonalne zdjęcia i filmy z drona w wysokiej rozdzielczości.",
    features: [
      "Ujęcia promocyjne",
      "Nagrania eventów",
      "Reklama nieruchomości",
      "Filmy korporacyjne",
    ],
    target: "Firmy, agencje reklamowe, deweloperzy, klienci indywidualni",
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Dokumentacja Budowlana",
    desc: "Dokumentowanie postępów budowy i inspekcje z powietrza.",
    features: [
      "Monitoring inwestycji",
      "Raporty fotograficzne",
      "Porównania etapów",
      "Dostępność trudno dostępnych miejsc",
    ],
    target: "Generalni wykonawcy, inwestorzy, zarządcy nieruchomości",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Inspekcje Techniczne",
    desc: "Szybkie i bezpieczne inspekcje infrastruktury, dachów, linii energetycznych.",
    features: [
      "Inspekcje dachów",
      "Kontrola paneli fotowoltaicznych",
      "Inspekcje kominów i masztów",
      "Termowizja",
    ],
    target: "Przemysł, energetyka, administracja, wspólnoty mieszkaniowe",
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Fotogrametria i Mapowanie",
    desc: "Tworzenie ortofotomap, modeli 3D i pomiarów terenu z powietrza.",
    features: [
      "Ortofotomapy",
      "Modele 3D",
      "Pomiary objętości",
      "Dokładna dokumentacja terenu",
    ],
    target: "Geodeci, firmy budowlane, rolnictwo, administracja",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" id="services">
      <h2 className="text-3xl font-bold text-center mb-10">Usługi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <div key={service.title}>
            <Card className="h-full transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-2">
                {service.icon}
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-center text-muted-foreground">{service.desc}</p>
                <ul className="mb-3 space-y-1 text-sm">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-center text-secondary-foreground opacity-80">
                  <span className="font-medium">Dla:</span> {service.target}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
