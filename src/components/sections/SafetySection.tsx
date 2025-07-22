import React from "react";
import {
  Shield,
  FileCheck,
  Eye,
  AlertTriangle,
  MapPin,
  Users,
} from "lucide-react";

const SAFETY_FEATURES = [
  {
    icon: <Shield className="w-8 h-8 text-black" />,
    title: "Aktualne kwalifikacje EASA",
    description:
      "Posiadam wymagane szkolenia i świadectwo zarejestrowanego pilota drona zgodnie z najnowszymi przepisami Europejskiej Agencji Bezpieczeństwa Lotniczego.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-black" />,
    title: "Ubezpieczenie OC",
    description:
      "Każdy lot jest objęty profesjonalnym ubezpieczeniem odpowiedzialności cywilnej, zapewniając pełne bezpieczeństwo finansowe dla wszystkich stron.",
  },
  {
    icon: <Eye className="w-8 h-8 text-black" />,
    title: "Kontrola wzrokowa",
    description:
      "Każdy lot odbywa się z zachowaniem ciągłej kontroli wzrokowej nad dronem, zgodnie z wymaganiami bezpieczeństwa oraz przepisami lotniczymi.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-black" />,
    title: "Analiza ryzyka",
    description:
      "Przed każdym lotem przeprowadzam szczegółową analizę ryzyka, uwzględniając warunki pogodowe, przestrzeń powietrzną i otoczenie.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-black" />,
    title: "Przestrzeń powietrzna",
    description:
      "Dokładnie sprawdzam ograniczenia w przestrzeni powietrznej przed każdym lotem, zapewniając zgodność z przepisami lotniczymi.",
  },
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: "Bezpieczeństwo osób",
    description:
      "Zawsze zachowuję bezpieczną odległość od osób postronnych i budynków, priorytetowo traktując bezpieczeństwo wszystkich uczestników.",
  },
];

export function SafetySection() {
  return (
    <section className="w-full">
      <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bezpieczeństwo i Profesjonalizm
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Każdy lot przeprowadzam z najwyższą starannością, zgodnie z
            przepisami i standardami bezpieczeństwa. Twoja inwestycja i
            bezpieczeństwo są dla mnie priorytetem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAFETY_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-accent-light rounded-xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent-blue/10 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certyfikowane Szkolenia EASA
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Ukończyłem wszystkie wymagane kursy zgodnie z przepisami UE dla
              pilotów dronów komercyjnych. Regularnie aktualizuję swoje
              kwalifikacje, aby być zawsze na bieżąco z najnowszymi standardami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-gray-600">Zgodność z przepisami</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold mb-2">5+</div>
                <div className="text-gray-600">Lat doświadczenia</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold mb-2">0</div>
                <div className="text-gray-600">Incydentów bezpieczeństwa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
