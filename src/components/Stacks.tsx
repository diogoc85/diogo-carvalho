const STACKS_DATA = [
  { id: 1, name: "Figma", icon: "/logos/figma.svg" },
  { id: 2, name: "Photoshop", icon: "/logos/Ps.svg" },
  { id: 3, name: "Illustrator", icon: "/logos/Ai.svg" },
  { id: 4, name: "HTML", icon: "/logos/html.svg" },
  { id: 5, name: "CSS", icon: "/logos/css.svg" },
  { id: 6, name: "Wordpress", icon: "/logos/WP.svg" },
  { id: 7, name: "Gemini", icon: "/logos/gemini.svg" },
  { id: 8, name: "Antigravity", icon: "/logos/antigravity.svg" },
];

export function Stacks() {
  return (
    <section id="stacks" className="mt-18">
      <div className="mb-10 flex flex-col gap-3 px-2">
        <div className="h-px w-10 bg-accent" />
        <h2 className="font-display text-2xl font-regular text-text-primary">
          Stacks
        </h2>
      </div>

      <div className="relative flex overflow-hidden w-full max-md:-mx-3 md:mx-0 mask-image-fade">
        <div className="flex w-max animate-infinite-scroll shrink-0 gap-8 md:gap-12 pr-8 md:pr-12">
          {STACKS_DATA.map((stack) => (
            <div key={stack.id} className="flex items-center gap-3 shrink-0">
              <img
                src={stack.icon}
                alt={stack.name}
                className="h-8 w-auto object-contain sm:h-10"
              />
              <span className="font-display text-sm font-extralight text-text-secondary sm:text-base">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex w-max animate-infinite-scroll shrink-0 gap-8 md:gap-12 pr-8 md:pr-12" aria-hidden="true">
          {STACKS_DATA.map((stack) => (
            <div key={stack.id} className="flex items-center gap-3 shrink-0">
              <img
                src={stack.icon}
                alt={stack.name}
                className="h-8 w-auto object-contain sm:h-10"
              />
              <span className="font-display text-sm font-extralight text-text-secondary sm:text-base">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
