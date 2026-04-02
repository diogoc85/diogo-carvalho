import { InstagramLogo, LinkedinLogo, WhatsappLogo, ArrowUp, BehanceLogoIcon } from "@phosphor-icons/react";

const SOCIAL_LINKS = [
  { icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/diogoc.dsg/", target: "_blank" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/in/diogocdesigner/", target: "_blank" },
  { icon: BehanceLogoIcon, label: "Behance", href: "https://www.behance.net/diogoc", target: "_blank" },
  { icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/5581988487270?text=Ol%C3%A1%2C%20vamos%20conversar%3F", target: "_blank" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-[1400px] px-4 pb-8 max-md:px-6 max-md:py-6">
      <div className="flex flex-col gap-8">
        {/* Top part: Contact */}
        <div className="flex items-center gap-6">
          <span className="font-display text-base font-regular text-text-primary">
            Entre em contato
          </span>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-accent transition-opacity duration-200 hover:opacity-70"
              >
                <Icon size={24} weight="regular" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-text-secondary/20" />

        {/* Bottom part: Copyright */}
        <div className="flex flex-row items-center justify-between gap-4 max-md:flex-col-reverse max-md:justify-center">
          <div className="font-extralight text-[12px] text-text-secondary text-center">
            © 2026 – Diogo Carvalho. CNPJ 61.422.638/0001-05. Todos os Direitos Reservados.
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar para o topo"
            title="Voltar para o topo"
            className="group flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-surface text-text-secondary transition-all hover:text-accent max-md:self-center cursor-pointer"
          >
            <ArrowUp size={20} weight="regular" className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
