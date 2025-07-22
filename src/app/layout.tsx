import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateJSONLD } from "../lib/jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "FlySet - Profesjonalne Usługi Dronowe | Licencjonowany Operator UAVO | Kraków",
  description:
    "Profesjonalne usługi dronowe z licencją UAVO. Fotografia z powietrza, inspekcje techniczne, mapowanie terenu, dokumentacja budowlana. Ubezpieczony operator drona w Krakowie i Małopolsce. Paweł - certyfikowany pilot z pasją do technologii.",
  keywords: [
    "usługi dronowe Kraków",
    "fotografia z drona",
    "operator drona licencja UAVO",
    "inspekcje techniczne dronem",
    "mapowanie terenu dron",
    "dokumentacja budowlana z powietrza",
    "certyfikowany pilot drona",
    "ubezpieczony operator drona",
    "usługi dronowe Małopolska",
    "fotogrametria dron",
    "ortofotomapy",
    "monitoring budowy dronem",
    "Paweł FlySet",
    "bezpieczne loty dronem",
    "zgodność z EASA",
    "profesjonalne zdjęcia z drona",
    "filmowanie dronem",
    "inspekcje dachów dronem",
    "termowizja dronem",
  ],
  authors: [{ name: "Paweł - FlySet", url: "https://flyset.pl" }],
  creator: "FlySet - Paweł",
  publisher: "FlySet",
  icons: {
    icon: "/flyset/favicon.svg",
    shortcut: "/flyset/favicon.svg",
    apple: "/flyset/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "FlySet - Profesjonalne Usługi Dronowe",
    description:
      "Profesjonalne usługi dronowe dla firm i osób prywatnych. Fotografia z powietrza, inspekcje techniczne, mapowanie terenu w Krakowie i Małopolsce.",
    url: "https://flyset.pl",
    siteName: "FlySet",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/flyset/logo.svg",
        width: 1200,
        height: 630,
        alt: "FlySet - Profesjonalne Usługi Dronowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlySet - Profesjonalne Usługi Dronowe",
    description:
      "Profesjonalne usługi dronowe dla firm i osób prywatnych w Krakowie i Małopolsce.",
    images: ["/flyset/logo.svg"],
  },
  alternates: {
    canonical: "https://flyset.pl",
  },
  category: "Business Services",
  classification: "Drone Services",
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJSONLD()}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
