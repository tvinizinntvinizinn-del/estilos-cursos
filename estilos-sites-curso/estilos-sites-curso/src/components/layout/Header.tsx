"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Wordmark } from "@/components/ui/Wordmark";

const NAV = [
  { href: "#curso", label: "O curso" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const elevated = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        elevated ? "bg-navy/85 shadow-[0_1px_0_rgb(69_163_255/0.14)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a href="#conteudo-principal" className="sr-only rounded-full bg-electric px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60]">
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#inicio" aria-label={`${site.brand} — início`} className="shrink-0 rounded-md">
          <Wordmark />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-mist transition-colors hover:text-white [font-variation-settings:'wdth'_110]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a href={site.checkoutUrl} className="btn btn-primary hidden min-h-11 px-5 text-[0.8rem] sm:inline-flex">
            Quero começar — {site.course.priceShort}
          </a>
          <a href={site.checkoutUrl} aria-label={`Quero começar — ${site.course.priceShort}`} className="btn btn-primary min-h-10 gap-1 px-3.5 text-[0.72rem] max-[369px]:hidden sm:hidden">
            Começar <span className="font-extrabold text-white/80">{site.course.priceShort}</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="menu-celular"
        hidden={!open}
        className="border-t border-white/10 bg-navy/95 px-4 pb-6 pt-2 backdrop-blur-xl sm:px-6 lg:hidden"
      >
        <nav aria-label="Menu do celular">
          <ul className="divide-y divide-white/10">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center text-lg font-bold uppercase tracking-[0.02em] [font-variation-settings:'wdth'_114]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={site.checkoutUrl} className="btn btn-primary mt-4 w-full">
          Quero começar — {site.course.priceShort}
        </a>
      </div>
    </header>
  );
}
