"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

/**
 * Botão fixo de suporte (computador e celular), canto inferior direito.
 * No celular ele se recolhe só enquanto os botões do hero estão na tela,
 * para não ficar por cima de "Conhecer o conteúdo".
 */
export function WhatsAppFloat() {
  const [tucked, setTucked] = useState(false);

  useEffect(() => {
    const ctas = document.querySelector("[data-hero-ctas]");
    if (!ctas) return;
    const mq = window.matchMedia("(max-width: 639px)");
    let visible = false;
    const update = () => setTucked(mq.matches && visible);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    io.observe(ctas);
    mq.addEventListener("change", update);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <a
      href={site.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com suporte pelo WhatsApp"
      inert={tucked}
      className={`wa-pulse group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 grid size-[3.75rem] place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_34px_-8px_rgb(0_0_0/0.6),0_0_0_3px_rgb(6_19_41/0.6)] transition-[transform,opacity] duration-300 ease-out-expo hover:scale-105 active:scale-95 sm:size-16 ${
        tucked ? "pointer-events-none translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <MessageCircle aria-hidden="true" className="relative size-7 sm:size-8" strokeWidth={2.1} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-navy opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Suporte no WhatsApp
      </span>
    </a>
  );
}
