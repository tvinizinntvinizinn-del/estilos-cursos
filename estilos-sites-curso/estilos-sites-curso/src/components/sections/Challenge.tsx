"use client";

import { useRef } from "react";
import { Info } from "lucide-react";
import { CHALLENGE_STEPS } from "@/content/course";
import { ensureGsap } from "@/lib/gsap";
import { prefersReducedMotion, useIsoLayoutEffect } from "@/lib/hooks";

const HOURS = 24;

/**
 * Relógio digital que avança de 00:00 a 24:00 conforme a rolagem, acendendo as horas
 * e as três etapas. É uma ilustração do desafio — não é contagem regressiva.
 */
export function Challenge() {
  const rootRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = ensureGsap();
    const clock = root.querySelector<HTMLElement>("[data-clock]");
    const ticks = Array.from(root.querySelectorAll<HTMLElement>("[data-tick]"));
    const phases = Array.from(root.querySelectorAll<HTMLElement>("[data-phase]"));
    const render = (p: number) => {
      const minutes = Math.round(p * HOURS * 60);
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      if (clock) clock.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      const lit = p * HOURS;
      ticks.forEach((t, i) => t.toggleAttribute("data-on", i < lit));
      phases.forEach((el, i) => el.toggleAttribute("data-on", lit > (i * HOURS) / phases.length));
    };
    const ctx = gsap.context(() => {
      const state = { p: 0 };
      gsap.to(state, {
        p: 1,
        ease: "none",
        scrollTrigger: { trigger: "[data-clock-panel]", start: "top 80%", end: "bottom 45%", scrub: 0.5, onRefresh: () => render(state.p) },
        onUpdate: () => render(state.p),
      });
      render(0);
    }, root);
    return () => {
      ctx.revert();
      render(1);
    };
  }, []);

  return (
    <section ref={rootRef} aria-labelledby="desafio-titulo" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_138_34/0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div>
          <h2 id="desafio-titulo" className="display text-section max-w-[34rem]">
            Seu desafio começa nas primeiras 24 horas
          </h2>
          <p className="mt-5 max-w-[32rem] text-lg text-mist">
            Use as primeiras 24 horas para estudar os fundamentos, criar uma demonstração e começar a pesquisar possíveis clientes.
          </p>
          <ol className="mt-8 space-y-3">
            {CHALLENGE_STEPS.map((s, i) => (
              <li key={s} data-phase data-on="" className="group flex items-center gap-4">
                <span className="display grid size-11 shrink-0 place-items-center rounded-full border border-white/20 text-[1.15rem] text-white/50 transition-colors duration-500 group-data-[on]:border-ember group-data-[on]:bg-ember group-data-[on]:text-navy">
                  {i + 1}
                </span>
                <span className="text-lg font-semibold text-white/60 transition-colors duration-500 group-data-[on]:text-white">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex max-w-[32rem] items-start gap-2.5 text-sm leading-relaxed text-mist/80">
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            Resultados e vendas dependem da dedicação, da execução e das condições do mercado. Não há garantia de primeira venda em 24 horas.
          </p>
        </div>

        <div data-clock-panel aria-hidden="true" className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#0d2450,#061329_70%)] p-6 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.08)] sm:p-10">
          <div className="rounded-[1.25rem] bg-[#020814] px-4 py-8 text-center shadow-[inset_0_2px_20px_rgb(0_0_0/0.8)] sm:py-12">
            <span
              data-clock
              className="tabular block text-[clamp(4.5rem,17vw,9.5rem)] font-extrabold leading-none tracking-[-0.02em] text-ember [font-variation-settings:'wdth'_110] [text-shadow:0_0_28px_rgb(255_138_34/0.65),0_0_70px_rgb(255_138_34/0.3)]"
            >
              24:00
            </span>
          </div>
          <div className="mt-6 grid grid-cols-[repeat(24,minmax(0,1fr))] gap-[3px] sm:gap-1">
            {Array.from({ length: HOURS }, (_, i) => (
              <span
                key={i}
                data-tick
                data-on=""
                className={`h-7 rounded-[3px] bg-white/10 transition-colors duration-300 data-[on]:bg-electric data-[on]:shadow-[0_0_10px_rgb(69_163_255/0.7)] sm:h-9 ${i % 8 === 7 && i < 23 ? "mr-1 sm:mr-1.5" : ""}`}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 text-[0.72rem] font-semibold text-mist sm:text-sm">
            {CHALLENGE_STEPS.map((s, i) => (
              <span key={s} className={i === 1 ? "text-center" : i === 2 ? "text-right" : ""}>
                Etapa {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
