import { useRef } from "react";
import { ArrowLeft, ArrowRight, YoutubeLogoIcon } from "@phosphor-icons/react";



const FORMACAO_DATA = [
  {
    id: 1,
    tipo: "Workshop",
    titulo: "Portfólio de IA e UX na Prática",
    instituicao: "UX Unicornio",
    concluido: "2026",
  },
  {
    id: 2,
    tipo: "Webinar",
    titulo: "Design Thinking para UX Designers: construindo produtos relevantes",
    instituicao: "ebac",
    concluido: null,
  },
  {
    id: 3,
    tipo: "Curso superior",
    titulo: "Web design / sistemas para internet",
    instituicao: "Marista",
    concluido: "2013",
  },
  {
    id: 4,
    tipo: "Curso técnico",
    titulo: "Computação Gráfica e web design",
    instituicao: "Unibratec",
    concluido: "2009.2",
  },
];

export function Formacao() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="formacao" className="mt-18">
      <div className="mb-10 flex flex-col gap-3 md:px-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="h-px w-10 bg-accent" />
          <h2 className="font-display text-2xl font-regular text-text-primary">
            Formação
          </h2>

        </div>
        <div className="mt-4 flex items-center gap-4 sm:mt-0">
          <button
            onClick={scrollLeft}
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Rolar para a esquerda"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Rolar para a direita"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-2 pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {FORMACAO_DATA.map((item) => (
          <div
            key={item.id}
            className="flex w-[calc(100vw-48px)] md:w-[320px] shrink-0 snap-center md:snap-start flex-col gap-4"
          >
            <div className="w-fit rounded border border-text-secondary/30 px-3 py-1">
              <span className="font-code text-xs text-text-secondary">
                {item.tipo}
              </span>
            </div>
            <h3 className="font-display text-base font-medium leading-relaxed text-text-primary">
              {item.titulo}
            </h3>
            <div className="mt-auto flex flex-col gap-1 font-display text-sm text-text-secondary">
              <span>Instituição: {item.instituicao}</span>
              {item.concluido && (
                <span>Concluído: {item.concluido}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="flex mt-6 font-display text-sm text-text-secondary">
        <span className="pr-3 text-text-primary"><YoutubeLogoIcon size={20} weight="regular" /></span> + 354:47:59 horas de vídeos assistidos no youtube.
      </p>
    </section>
  );
}
