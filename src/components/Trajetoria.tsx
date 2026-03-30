import { useEffect, useRef, useState } from "react";

const TRAJETORIA_DATA = [
  {
    id: 1,
    empresa: "Unity Brasil",
    cargo: "UX/UI Designer",
    inicio: "11/2020",
    fim: null,
    atual: true,
  },
  {
    id: 2,
    empresa: "Alfacon concursos públicos",
    cargo: "Designer Gráfico",
    inicio: "04/2021",
    fim: "12/2022",
    atual: false,
  },
  {
    id: 3,
    empresa: "IMIP",
    cargo: "Designer Instrucional",
    inicio: "04/2015",
    fim: "08/2015",
    atual: false,
  },
  {
    id: 4,
    empresa: "Tarso Tecnologia",
    cargo: "UX/UI Designer",
    inicio: "06/2025",
    fim: "01/2026",
    atual: false,
  },
  {
    id: 5,
    empresa: "Colégio Santa Maria",
    cargo: "Designer Gráfico",
    inicio: "01/2020",
    fim: "11/2020",
    atual: false,
  },
  {
    id: 6,
    empresa: "Rede Brasil de Comunicação",
    cargo: "UX/UI Designer",
    inicio: "09/2012",
    fim: "02/2016",
    atual: false,
  },
  {
    id: 7,
    empresa: "Meets Tecnologia",
    cargo: "UX/UI Designer",
    inicio: "11/2020",
    fim: "06/2025",
    atual: false,
  },
  {
    id: 8,
    empresa: "Unity Brasil",
    cargo: "UX/UI Designer",
    inicio: "09/2015",
    fim: "02/2018",
    atual: false,
  },
  {
    id: 9,
    empresa: "Click N - Soluções em internet",
    cargo: "UX/UI Designer",
    inicio: "05/2010",
    fim: "03/2013",
    atual: false,
  },
];

export function Trajetoria() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trajetoria" className="mt-18">
      <div className="mb-10 flex flex-col gap-3 px-2">
        <div className="h-px w-10 bg-accent" />
        <h2 className="font-display text-2xl font-regular text-text-primary">
          Trajetória
        </h2>
      </div>

      <div
        ref={containerRef}
        className={`relative z-0 overflow-hidden rounded-[24px] bg-surface p-8 sm:p-10 md:p-12 transition-all duration-1000 delay-200 ease-out origin-center ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-35"></div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TRAJETORIA_DATA.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <span className="font-code text-sm text-text-secondary">
                {item.empresa}
              </span>
              <h3 className="font-display text-base font-extralight text-text-primary">
                {item.cargo}
              </h3>
              <span className="font-display text-[12px] text-text-secondary">
                {item.inicio} {item.atual ? "até o momento" : `à ${item.fim}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
