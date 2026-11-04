"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/content/course";
import { site } from "@/config/site";

export function Faq() {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="relative border-t hairline bg-abyss py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <h2 id="duvidas-titulo" className="display text-section lg:sticky lg:top-28 lg:self-start">
          Dúvidas frequentes
        </h2>
        <ul className="border-t hairline">
          {FAQ.map((f, i) => {
            const isOpen = open.includes(i);
            const isSupport = i === FAQ.length - 1;
            return (
              <li key={f.q} className="border-b hairline">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.08rem] font-bold leading-snug sm:text-xl"
                  >
                    {f.q}
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color] duration-300 ${isOpen ? "rotate-45 border-glow bg-electric" : "border-white/20"}`}>
                      <Plus aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className="grid transition-[grid-template-rows] duration-300 ease-out-expo" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="max-w-[40rem] pb-6 pr-12 text-mist">
                      {f.a}
                      {isSupport && (
                        <>
                          {" "}
                          <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-glow underline underline-offset-4 hover:text-white">
                            Abrir o WhatsApp ({site.whatsapp.display})
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
