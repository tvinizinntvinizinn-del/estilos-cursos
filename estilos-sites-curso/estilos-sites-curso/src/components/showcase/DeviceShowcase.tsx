"use client";

import { useRef } from "react";
import { ArrowUp, Check, LoaderCircle, WandSparkles } from "lucide-react";
import { ensureGsap } from "@/lib/gsap";
import { prefersReducedMotion, useIsoLayoutEffect } from "@/lib/hooks";
import { BrisaDesktop, BrisaPhone } from "./BrisaSite";

const PROMPT =
  "Crie um site para a Brisa Ar, empresa de instalação e manutenção de ar-condicionado, com botão de orçamento pelo WhatsApp.";

/**
 * Notebook + celular exibindo o site de demonstração. Ao carregar, o prompt é digitado
 * e o site se monta nas telas — o caminho do curso, do primeiro prompt ao site pronto.
 * Estado final (sem JS, movimento reduzido): tudo visível, texto completo.
 */
export function DeviceShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const html = document.documentElement;
    const done = () => html.classList.add("build-done");
    if (prefersReducedMotion()) {
      done();
      return;
    }
    const { gsap, ScrollTrigger } = ensureGsap();
    html.classList.add("build-armed");
    const text = root.querySelector<HTMLElement>("[data-prompt-text]");
    const busy = root.querySelector<HTMLElement>("[data-status-busy]");
    const ready = root.querySelector<HTMLElement>("[data-status-done]");
    const typed = { n: 0 };
    let safety = 0;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" }, onComplete: done });
      tl.fromTo("[data-device]", { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.14 })
        .fromTo("[data-prompt]", { autoAlpha: 0, y: 16, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 }, 0.35)
        .call(() => {
          if (text) {
            text.textContent = "";
            text.style.visibility = "visible";
            text.classList.add("caret");
          }
          if (ready) ready.style.display = "none";
        }, [], 0.6)
        .to(typed, {
          n: PROMPT.length,
          duration: 2.6,
          ease: "none",
          onUpdate: () => {
            if (text) text.textContent = PROMPT.slice(0, Math.round(typed.n));
          },
        }, 0.7)
        .call(() => {
          text?.classList.remove("caret");
          if (busy) busy.style.display = "inline-flex";
        })
        .fromTo("[data-build]", { autoAlpha: 0, y: 14, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.09 }, "+=0.35")
        .fromTo("[data-build-phone]", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.55")
        .call(() => {
          if (busy) busy.style.display = "none";
          if (ready) ready.style.display = "inline-flex";
        })
        .fromTo("[data-status-done]", { autoAlpha: 0, x: -6 }, { autoAlpha: 1, x: 0, duration: 0.5 });

      // Toca quando a vitrine aparece (no celular ela fica abaixo do texto).
      // Se algo travar depois de começar (aba em segundo plano, aparelho lento), garante o estado final.
      ScrollTrigger.create({
        trigger: root,
        start: "top 85%",
        once: true,
        onEnter: () => {
          tl.play();
          safety = window.setTimeout(done, 9000);
        },
      });
    }, root);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
      if (text) {
        text.textContent = PROMPT;
        text.classList.remove("caret");
        text.style.visibility = "";
      }
      if (busy) busy.style.display = "";
      if (ready) ready.style.display = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Notebook e celular exibindo o site de demonstração da Brisa Ar, criado a partir de um prompt"
      className="relative mx-auto aspect-[1/0.94] w-full max-w-[680px]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        {/* luz atrás dos aparelhos */}
        <div className="absolute left-[8%] top-[18%] h-[70%] w-[84%] rounded-full bg-[radial-gradient(closest-side,rgb(8_102_255/0.55),rgb(69_163_255/0.12)_60%,transparent)] blur-2xl" />

        {/* notebook */}
        <div data-device className="absolute left-0 top-[17%] w-[86%]">
          <div className="[transform:perspective(1800px)_rotateY(-13deg)_rotateX(5deg)] [transform-origin:60%_50%]">
            <div className="rounded-[2.4%/3.6%] bg-[linear-gradient(160deg,#25365a,#0c1629_45%)] p-[2.1%] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8),inset_0_0_0_1px_rgb(120_160_220/0.25)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[0.8%/1.3%] bg-white [container-type:inline-size]">
                <BrisaDesktop />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.16),transparent_38%)]" />
              </div>
            </div>
            <div className="relative -mx-[6%] mt-[-0.4%] aspect-[100/3.4] rounded-b-[40%_100%] bg-[linear-gradient(180deg,#3b4c6e,#121d33_70%)] shadow-[0_24px_40px_-14px_rgb(0_0_0/0.9)]">
              <div className="absolute left-1/2 top-0 h-[42%] w-[13%] -translate-x-1/2 rounded-b-[40%] bg-[#0b1426]" />
            </div>
          </div>
        </div>

        {/* celular */}
        <div data-device className="absolute right-[1%] top-[37%] z-20 w-[25.5%]">
          <div className="[transform:perspective(1400px)_rotateY(-9deg)_rotateX(3deg)]">
            <div className="rounded-[15%/7%] bg-[linear-gradient(160deg,#33456b,#0b1426_50%)] p-[4.2%] shadow-[0_30px_60px_-16px_rgb(0_0_0/0.85),inset_0_0_0_1px_rgb(140_180_240/0.3)]">
              <div className="relative aspect-[9/19.2] overflow-hidden rounded-[11%/5.2%] bg-white [container-type:inline-size]">
                <BrisaPhone />
                <div className="absolute left-1/2 top-[1.8%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-[#0b1426]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(255_255_255/0.18),transparent_40%)]" />
              </div>
            </div>
          </div>
        </div>

        {/* prompt */}
        <div data-prompt className="absolute left-[3%] top-0 z-30 w-[74%] sm:left-[6%] sm:w-[66%]">
          <div className="rounded-2xl border border-glow/30 bg-[#081a39]/90 p-3 shadow-[0_20px_50px_-16px_rgb(0_0_0/0.8),0_0_40px_-12px_rgb(69_163_255/0.6)] backdrop-blur-md sm:p-4">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-electric/25 text-glow">
                <WandSparkles className="size-4" />
              </span>
              <p data-prompt-text className="min-h-[3.9em] flex-1 text-[0.72rem] leading-[1.35] text-white/90 sm:text-[0.82rem]">
                {PROMPT}
              </p>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-electric text-white">
                <ArrowUp className="size-4" />
              </span>
            </div>
            <div className="mt-2 flex min-h-5 items-center gap-2 border-t border-white/10 pt-2 text-[0.7rem] font-semibold text-mist sm:text-[0.75rem]">
              <span data-status-busy className="hidden items-center gap-1.5">
                <LoaderCircle className="size-3.5 animate-spin text-glow" />
                Gerando o site…
              </span>
              <span data-status-done className="inline-flex items-center gap-1.5 text-[#7fe3a8]">
                <Check className="size-3.5" />
                Site pronto no computador e no celular
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
