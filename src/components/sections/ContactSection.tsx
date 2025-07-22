import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div
        className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:justify-between gap-y-8 gap-x-8 text-sm md:text-left text-center"
        id="kontakt"
      >
        {/* Left: Firma */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="font-bold text-lg">FlySet</div>
          <div className="text-sm mt-3 text-center md:text-left">
            <strong>Profesjonalne usługi dronowe</strong> dla firm i osób
            prywatnych w Krakowie i Małopolsce.
          </div>
        </div>
        {/* Middle: Kontakt */}
        <div className="md:w-1/3 flex flex-col gap-y-2 text-left">
          <div className="font-bold text-lg mb-2 text-left">Kontakt</div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a href="tel:+48123456789" className="underline font-mono">
              +48 123 456 789
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a href="mailto:kontakt@flyset.pl" className="underline font-mono">
              kontakt@flyset.pl
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span>ul. Przykładowa 12, 00-001 Warszawa</span>
          </div>
        </div>
        {/* Right: Usługi */}
        <div className="md:w-1/3 flex flex-col gap-y-2 text-left">
          <div className="font-bold  text-lg mb-2 text-left">Usługi</div>
          <ul className="list-disc list-inside text-gray-600 text-left">
            <li>Zdjęcia i filmy z drona</li>
            <li>Inspekcje techniczne</li>
            <li>Mapowanie terenu</li>
            <li>Monitoring budów</li>
            <li>Eventy i reklama</li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="max-w-6xl mx-auto text-base text-gray-400 text-center py-2 px-4 md:px-8">
          {new Date().getFullYear()} FlySet. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};
