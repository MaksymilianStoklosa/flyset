import React from "react";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="o-nas">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              O nas
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Cześć! Nazywam się{" "}
                <strong className="text-primary">Paweł</strong> i jestem
                pasjonatem fotografii z powietrza oraz nowych technologii.
                Oferuję wysokiej jakości usługi dronem dla firm i osób
                prywatnych.
              </p>
              <p>
                Stawiam na indywidualne podejście, bezpieczeństwo i nieustanny
                rozwój umiejętności. Każdy projekt traktuję jako nowe wyzwanie i
                możliwość pokazania świata z zupełnie nowej perspektywy.
              </p>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 text-white">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="text-2xl font-bold">Paweł</h3>
                <p className="text-lg opacity-90">Certyfikowany pilot drona</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Licencja UAVO</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Certyfikat VLOS/BVLOS</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Ubezpieczenie OC</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Passion for innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
