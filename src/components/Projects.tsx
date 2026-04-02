import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PROJECTS } from "../data/projects";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  }

  function handleMouseLeave() {
    setCursor((prev) => ({ ...prev, visible: false }));
  }

  return (
    <section id="projetos" className="mt-18">
      {/* ── Section header ── */}
      <div className="mb-8 flex flex-col gap-3 px-2">
        <div className="h-px w-10 bg-accent" />
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          Projetos
        </h2>
      </div>

      {/* ── Sticky stacking cards ── */}
      <div
        ref={containerRef}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Custom cursor ── */}
        <div
          className="pointer-events-none fixed z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-black shadow-lg transition-opacity duration-200"
          style={{
            left: cursor.x,
            top: cursor.y,
            opacity: cursor.visible ? 1 : 0,
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        >
          Ver projeto
          <ArrowUpRight size={16} weight="bold" />
        </div>

        {PROJECTS.map((project, index) => (
          <div
            key={project.slug}
            className="sticky"
            style={{ top: `${index * 20}px` }}
          >
            <Link
              to={`/projeto/${project.slug}`}
              className="group relative block cursor-none overflow-hidden rounded-[24px] bg-surface"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
