import { useState, useCallback } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="mt-18 overflow-hidden rounded-[24px] bg-surface">
        <img src={images[0]} alt={alt} className="w-full h-auto block" />
      </div>
    );
  }

  return (
    <div className="mt-12">
      {/* ── Controles no canto superior esquerdo ── */}
      <div className="mb-3 flex items-center gap-2 sticky top-13 bg-bg/60 backdrop-blur p-2">
        <button
          onClick={prev}
          aria-label="Imagem anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-text-secondary transition-colors duration-200 hover:bg-accent hover:text-white cursor-pointer"
        >
          <CaretLeft size={16} weight="bold" />
        </button>
        <button
          onClick={next}
          aria-label="Próxima imagem"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-text-secondary transition-colors duration-200 hover:bg-accent hover:text-white cursor-pointer"
        >
          <CaretRight size={16} weight="bold" />
        </button>
        <span className="font-code text-xs text-text-secondary ml-1">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* ── Slide: exibe apenas a imagem ativa ── */}
      <div className="overflow-hidden rounded-[24px] bg-surface">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${alt} — imagem ${idx + 1}`}
            loading="lazy"
            className={`w-full h-auto block transition-opacity duration-500 ${idx === current ? "opacity-100" : "hidden"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
