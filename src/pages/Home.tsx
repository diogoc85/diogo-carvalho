import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Formacao } from "../components/Formacao";
import { Trajetoria } from "../components/Trajetoria";
import { Stacks } from "../components/Stacks";

export function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div className="relative z-10 w-full bg-[var(--color-bg)]">
        <div className="mx-auto w-full max-w-[1400px] px-8 pb-8 pt-20 max-md:px-6 max-md:pb-6 max-md:pt-10">
          <Projects />
          <Formacao />
          <Trajetoria />
          <Stacks />
        </div>
      </div>
    </main>
  );
}
