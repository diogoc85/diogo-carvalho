import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";
import { PROJECTS } from "../data/projects";
import { ImageSlider } from "../components/ImageSlider";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];

  // Próximo projeto em loop
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center gap-4 px-4 py-6">
        <p className="font-display text-xl text-text-primary">
          Projeto não encontrado
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-sm text-accent hover:underline"
        >
          <ArrowLeft size={16} />
          Voltar a home
        </Link>
      </main>
    );
  }

  return (
    <>
      {/* ── Fixed nav bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur bg-bg/60">
        <div className="mx-auto w-full max-w-[1400px] flex items-center gap-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            <ArrowLeft size={16} />
            Voltar a home
          </Link>

          <Link
            to={`/projeto/${nextProject.slug}`}
            className="inline-flex items-center gap-2 font-display text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            Próximo projeto
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[1400px] px-4 pt-24 pb-6 max-md:px-3 max-md:pt-20 max-md:pb-4">

        {/* ── Project info ── */}
        <div className="mt-10 grid grid-cols-[1fr_320px] gap-12 max-md:grid-cols-1 max-md:gap-8">
          {/* ── Left: main content ── */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-4xl font-bold text-text-primary max-md:text-3xl">
                {project.title}
              </h1>
              <p className="font-display text-base text-text-secondary">
                {project.description}
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-text-primary">
                Sobre o projeto
              </h2>
              <p className="whitespace-pre-line font-extralight text-sm leading-relaxed text-text-secondary">
                {project.details.overview}
              </p>
              {project.links && (
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-display text-sm font-normal text-accent transition-all duration-300 hover:opacity-80"
                    >
                      {link.label}
                      <ArrowSquareOut size={16} weight="bold" />
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* ── Right: sidebar ── */}
          <aside className="flex flex-col gap-6 rounded-[24px] bg-surface p-6 self-start">
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-xs uppercase tracking-widest text-text-secondary">
                Segmento do cliente
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-surface px-4 py-1.5 font-display text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-display text-xs uppercase tracking-widest text-text-secondary">
                Função
              </h4>
              <span className="font-display text-sm text-text-primary">
                {project.details.role}
              </span>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex flex-col gap-1">
              <span className="font-display text-xs uppercase tracking-widest text-text-secondary">
                Ano
              </span>
              <span className="font-display text-sm text-text-primary">
                {project.details.year}
              </span>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex flex-col gap-2">
              <span className="font-display text-xs uppercase tracking-widest text-text-secondary">
                Stacks
              </span>
              <div className="flex flex-wrap gap-2">
                {project.details.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1 font-display text-xs text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
        {/* ── Image slider ── */}
        <ImageSlider images={project.images} alt={project.title} />
      </main>
    </>
  );
}
