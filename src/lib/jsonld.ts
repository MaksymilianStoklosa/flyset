export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FlySet",
  description:
    "Profesjonalne usługi dronowe z licencją UAVO. Fotografia z powietrza, inspekcje techniczne, mapowanie terenu, dokumentacja budowlana.",
  url: "https://flyset.pl",
  telephone: "+48 123 456 789",
  email: "kontakt@flyset.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Przykładowa 12",
    addressLocality: "Kraków",
    postalCode: "00-001",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0647,
    longitude: 19.945,
  },
  areaServed: [
    {
      "@type": "State",
      name: "Małopolska",
    },
    {
      "@type": "City",
      name: "Kraków",
    },
  ],
  serviceType: [
    "Fotografia z drona",
    "Inspekcje techniczne dronem",
    "Mapowanie terenu",
    "Dokumentacja budowlana",
    "Fotogrametria",
  ],
  founder: {
    "@type": "Person",
    name: "Paweł",
    jobTitle: "Certyfikowany pilot drona",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Licencja UAVO",
      recognizedBy: {
        "@type": "Organization",
        name: "EASA",
      },
    },
  ],
  makesOffer: [
    {
      "@type": "Service",
      name: "Fotografia i wideo z drona",
      description:
        "Profesjonalne zdjęcia i filmy z powietrza w wysokiej rozdzielczości",
    },
    {
      "@type": "Service",
      name: "Inspekcje techniczne",
      description:
        "Szybkie i bezpieczne inspekcje dachów, elewacji i innych trudno dostępnych miejsc",
    },
    {
      "@type": "Service",
      name: "Fotogrametria i mapowanie",
      description: "Tworzenie ortofotomap, modeli 3D i pomiarów terenowych",
    },
    {
      "@type": "Service",
      name: "Dokumentacja budowlana",
      description: "Regularny monitoring postępów prac budowlanych",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "1",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://flyset.pl"],
};

export function generateJSONLD() {
  return {
    __html: JSON.stringify(jsonLd),
  };
}
