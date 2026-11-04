"use client";

import { useRef, useState } from "react";
import { Check, ChevronDown, Gift } from "lucide-react";
import { BONUS, MODULES, type Module } from "@/content/course";

function Detail({ m, headingLevel = "h3" }: { m: Module; headingLevel?: "h3" | "p" }) {
  const Title = headingLevel;
  return (
    <div>
      <div className="flex items-center gap-3 text-glow">
        <span className="grid size-12 place-items-center rounded-xl border border-glow/40 bg-electric/15 shadow-[0_0_30px_-10px_rgb(69_163_255/0.9)]">
          <m.icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
        </span>
        <span className="text-sm font-semibold text-mist">Módulo {m.n}</span>
      </div>
      <Title className="display mt-5 text-[1.7rem] sm:text-[2.1rem]">{m.title}</Title>
      <p className="mt-3 max-w-[34rem] text-mist">{m.text}</p>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {m.topics.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-[0.98rem] text-white/90">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-glow" strokeWidth={2.6} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Sumário do material: no computador, lista + painel ao lado; no celular, acordeão.
 * Os módulos são capítulos do material didático (não são videoaulas).
 */
export function Modules() {
  const [active, setActive] = useState(0);
  const last = useRef(0);
  if (active >= 0) last.current = active;
  const shown = MODULES[last.current];

  return (
    <section id="conteudo" aria-labelledby="conteudo-titulo" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem]">
          <h2 id="conteudo-titulo" className="display text-section">
            Conteúdo completo
          </h2>
          <p className="mt-5 text-lg text-mist">
            São 10 módulos no material didático, do nicho escolhido até a rotina de trabalho, e um bônus com modelos para usar no dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-14">
          <ol className="border-t hairline">
            {MODULES.map((m, i) => {
              const open = active === i;
              return (
                <li key={m.n} className="border-b hairline">
                  <button
                    type="button"
                    onClick={() => setActive(open && window.innerWidth < 1024 ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`modulo-${m.n}`}
                    className={`group flex w-full items-center gap-4 py-4 text-left transition-colors sm:gap-6 ${open ? "text-white" : "text-white/70 hover:text-white"}`}
                  >
                    <span className={`display w-12 shrink-0 text-[1.65rem] tabular sm:w-14 sm:text-[2rem] ${open ? "text-glow" : "outline-number"}`}>{m.n}</span>
                    <span className="flex-1 text-[1.05rem] font-bold uppercase leading-tight tracking-[0.01em] [font-variation-settings:'wdth'_110] sm:text-lg">{m.title}</span>
                    <span
                      aria-hidden="true"
                      className={`hidden h-px w-10 transition-all duration-300 lg:block ${open ? "w-16 bg-glow" : "bg-white/15 group-hover:bg-white/40"}`}
                    />
                    <ChevronDown aria-hidden="true" className={`size-5 shrink-0 text-mist transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`} />
                  </button>
                  {/* acordeão (celular) */}
                  <div
                    id={`modulo-${m.n}`}
                    className="grid transition-[grid-template-rows] duration-400 ease-out-expo lg:hidden"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden" inert={!open}>
                      <div className="pb-6 pl-16 pr-1 sm:pl-20">
                        <p className="text-mist">{m.text}</p>
                        <ul className="mt-4 grid gap-2">
                          {m.topics.map((t) => (
                            <li key={t} className="flex items-start gap-2.5 text-white/90">
                              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-glow" strokeWidth={2.6} />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* painel (computador) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div aria-live="polite" className="blueprint relative overflow-hidden rounded-[1.75rem] border hairline bg-ink/60 p-10">
                <span aria-hidden="true" className="display outline-number pointer-events-none absolute -right-4 -top-8 text-[11rem] leading-none opacity-60">
                  {shown.n}
                </span>
                <div key={shown.n} className="relative animate-[panel-in_500ms_cubic-bezier(0.16,1,0.3,1)]">
                  <Detail m={shown} headingLevel="p" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bônus */}
        <div className="mt-14 rounded-[1.75rem] border border-ember/30 bg-[linear-gradient(120deg,rgb(255_138_34/0.10),rgb(255_138_34/0.02)_55%)] p-6 sm:p-8 lg:flex lg:items-center lg:gap-10">
          <div className="flex shrink-0 items-center gap-4 lg:w-64">
            <span className="grid size-12 place-items-center rounded-xl bg-ember text-navy">
              <Gift aria-hidden="true" className="size-6" strokeWidth={2} />
            </span>
            <h3 className="display text-[1.7rem]">Bônus</h3>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5 lg:mt-0">
            {BONUS.map((b) => (
              <li key={b} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[0.95rem] text-white/90">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
