"use client";

import { useRef } from "react";
import { LEARNING_STEPS } from "@/content/course";
import { ensureGsap } from "@/lib/gsap";
import { prefersReducedMotion, useIsoLayoutEffect } from "@/lib/hooks";

/** Linha do tempo das 6 etapas. A trilha se preenche conforme a rolagem. */
export function Timeline() {
  const rootRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      const setActive = (p: number) => {
        steps.forEach((el, i) => el.toggleAttribute("data-on", p >= i / (steps.length - 1) - 0.02));
      };
      const build = (axis: "scaleX" | "scaleY") => {
        gsap.fromTo(
          "[data-rail-fill]",
          { [axis]: 0 },
          {
            [axis]: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-rail]",
              start: "top 75%",
              end: axis === "scaleX" ? "top 30%" : "bottom 55%",
              scrub: 0.6,
              onUpdate: (st) => setActive(st.progress),
              onRefresh: (st) => setActive(st.progress),
            },
          },
        );
      };
      mm.add("(min-width: 1024px)", () => build("scaleX"));
      mm.add("(max-width: 1023px)", () => build("scaleY"));
      ScrollTrigger.refresh();
    }, root);
    return () => {
      ctx.revert();
      root.querySelectorAll("[data-step]").forEach((el) => el.setAttribute("data-on", ""));
    };
  }, []);

  return (
    <section id="como-funciona" ref={rootRef} aria-labelledby="como-titulo" className="relative overflow-hidden border-t hairline bg-abyss py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="como-titulo" className="display text-section max-w-[44rem]">
          Como funciona o aprendizado?
        </h2>

        <ol data-rail className="relative mt-14 grid gap-9 pl-12 lg:mt-20 lg:grid-cols-6 lg:gap-6 lg:pl-0 lg:pt-14">
          {/* trilha */}
          <span aria-hidden="true" className="absolute bottom-3 left-[15px] top-3 w-0.5 rounded-full bg-white/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[21px] lg:h-0.5 lg:w-auto" />
          <span
            aria-hidden="true"
            data-rail-fill
            className="absolute bottom-3 left-[15px] top-3 w-0.5 origin-top rounded-full bg-gradient-to-b from-electric to-glow shadow-[0_0_14px_rgb(69_163_255/0.8)] lg:bottom-auto lg:left-0 lg:right-0 lg:top-[21px] lg:h-0.5 lg:w-auto lg:origin-left lg:bg-gradient-to-r"
          />
          {LEARNING_STEPS.map((s) => (
            <li key={s.n} data-step data-on="" className="group relative">
              <span
                aria-hidden="true"
                className="absolute -left-12 top-0 grid size-8 place-items-center rounded-full border-2 border-white/20 bg-abyss transition-[border-color,box-shadow,background-color] duration-500 group-data-[on]:border-glow group-data-[on]:bg-electric group-data-[on]:shadow-[0_0_20px_rgb(69_163_255/0.9)] lg:-top-14 lg:left-0 lg:size-11"
              >
                <span className="size-2 rounded-full bg-white/40 transition-colors group-data-[on]:bg-white" />
              </span>
              <p className="display text-[2.1rem] text-white/25 tabular transition-colors duration-500 group-data-[on]:text-glow lg:text-[2.4rem]">{s.n}</p>
              <h3 className="mt-2 text-[1.05rem] font-extrabold uppercase leading-tight tracking-[0.01em] [font-variation-settings:'wdth'_112]">{s.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-snug text-mist">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="display mt-16 max-w-[52rem] text-[1.6rem] text-white/90 sm:text-[2.1rem] lg:mt-20">
          “Aprenda, pratique e avance uma etapa de cada vez.”
        </p>
      </div>
    </section>
  );
}
