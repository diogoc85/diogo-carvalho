import { useState } from "react";
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  List,
  X,
  BehanceLogoIcon,
} from "@phosphor-icons/react";
import { TypewriterText } from "./TypewriterText";

const NAV_ITEMS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Stacks", href: "#stacks" },
];

const SOCIAL_LINKS = [
  { icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/diogoc.dsg/", target: "_blank" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/in/diogocdesigner/", target: "_blank" },
  { icon: BehanceLogoIcon, label: "Behance", href: "https://www.behance.net/diogoc", target: "_blank" },
  { icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/5581988487270?text=Ol%C3%A1%2C%20vamos%20conversar%3F", target: "_blank" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Mobile hamburger button ── */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
        className="fixed top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-md text-text-primary md:hidden"
      >
        <List size={22} weight="bold" />
      </button>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-bg/95 backdrop-blur-xl md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface text-text-primary"
          >
            <X size={22} weight="bold" />
          </button>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl font-regular text-text-primary transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-6 h-px w-12 bg-accent" />

            <div className="flex items-center gap-6 mt-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-accent transition-opacity duration-200 hover:opacity-70"
                >
                  <Icon size={28} weight="regular" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* ── Hero section ── */}
      <section id="hero" className="relative md:sticky top-0 z-0 w-full overflow-hidden bg-surface animate-zoom-in opacity-0">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-35"></div>

        {/* ── Ghost text background ── */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display w-full px-10 font-bold uppercase leading-none tracking-tight text-white/[0.03] max-lg:hidden"
        >
          <img
            src="/Portfolio-Stroke.svg"
            alt="Foto de Diogo Carvalho"
            className="mx-auto h-full w-full max-w-[1400px] object-contain object-bottom"
          />
        </span>

        {/* ── Main content ── */}
        <div className="relative mx-auto flex min-h-[800px] w-full max-w-[1400px] items-between px-10 py-10 max-md:flex-col max-md:items-center max-md:gap-6 max-md:px-5 max-md:pb-8 max-md:min-h-0">

          <div className="flex flex-col max-md:items-center">
            {/* ── Left column ── */}
            <div className="w-full z-10 flex flex-1 flex-col gap-6">
              {/* Hidden H1 for SEO */}
              <h1 className="sr-only">Diogo Carvalho — UX/UI Designer & Web Developer</h1>

              {/* Name + Role */}
              <div className="flex flex-col gap-3 mt-10">
                <img
                  src="/diogo-carvalho.svg"
                  alt="Diogo Carvalho"
                  className="h-auto w-[360px] max-md:w-[240px] animate-zoom-in opacity-0"
                />
                <span className="font-display text-lg font-regular uppercase tracking-wider text-accent max-md:text-base animate-fade-in opacity-0 delay-400">
                  UX/UI Designer
                </span>
              </div>

              {/* Bio code block */}
              <div className="max-w-md font-code text-sm leading-relaxed text-text-secondary max-md:text-xs h-auto max-md:text-left">
                <div>
                  <TypewriterText text="{" delay={0.3} className="text-text-primary" />
                </div>
                <div className="pl-4">
                  <TypewriterText
                    text='"Com um pé no": "front-end"'
                    delay={0.8}
                  />
                </div>
                <div>
                  <TypewriterText text="}," delay={2.6} className="text-text-primary" />
                </div>
                <div>
                  <TypewriterText text="{" delay={2.9} className="text-text-primary" />
                </div>
                <div className="pl-4">
                  <TypewriterText
                    text='"Entusiasta do vibe coding, estudando inteligência artificial aplicada ao ux/ui design e desenvolvimento web."'
                    delay={3.2}
                    speed={35}
                    showCursor
                  />
                </div>
                <div>
                  <TypewriterText text="}" delay={7.5} className="text-text-primary" />
                </div>
              </div>
            </div>

            {/* ── Nav + Social (desktop only) ── */}
            <div className="flex flex-col gap-8 max-md:hidden">
              <div className="h-px w-10 bg-accent transition-all duration-[600ms] animate-fade-in opacity-0" style={{ animationDelay: "2.5s" }} />

              <nav className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-fit font-display text-sm font-regular text-text-primary transition-colors duration-300 hover:text-accent animate-fade-in opacity-0"
                    style={{ animationDelay: `${2.8 + i * 0.25}s` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, target }) => (
                  <a
                    key={label}
                    href={href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-accent"
                  >
                    <Icon size={24} weight="regular"
                      className="transition-opacity duration-200 hover:opacity-70 opacity-0 animate-fade-in-right"
                      style={{ animationDelay: "1.5s", animationDuration: "3s" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — Photo ── */}
          <div
            className="md:absolute md:bottom-0 md:right-42 h-full max-md:relative max-md:h-auto  max-md:mx-auto animate-fade-in-right opacity-0"
            style={{ animationDelay: "1s", animationDuration: "5s" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black opacity-20 blur-[120px] max-md:h-[300px] max-md:w-[300px] max-md:blur-[80px]" />
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/foto-diogo-carvalho-mobile.webp"
              />
              <img
                src="/foto-diogo-carvalho.webp"
                alt="Foto de Diogo Carvalho"
                width={600}
                height={800}
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                className="relative z-10 h-full w-full object-contain object-bottom"
              />
            </picture>
          </div>

          {/* ── Badges (bottom-right) ── */}
          <div className="absolute bottom-10 right-10 z-10 flex flex-col gap-4 max-md:static max-md:flex-row max-md:gap-6 max-md:justify-center">
            <div className="flex items-center gap-3 animate-fade-in-right opacity-0" style={{ animationDelay: "1s", animationDuration: "2.3s" }}>
              <img src="/icon-since.svg" alt="Ícone de tempo" className="h-8 w-8 opacity-60" />
              <div className="flex flex-col">
                <span className="text-sm font-extralight text-text-primary">
                  Designer
                </span>
                <span className="font-code text-xs text-text-secondary">
                  Since 2010
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 animate-fade-in-right opacity-0" style={{ animationDelay: "1.5s", animationDuration: "3s" }}>
              <img src="/made.svg" alt="Localização Recife" className="h-8 w-8 opacity-60 rounded-[7px]" />
              <div className="flex flex-col">
                <span className="text-sm font-extralight text-text-primary">
                  Made in
                </span>
                <span className="font-code text-xs text-text-secondary">
                  Recife/PE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
