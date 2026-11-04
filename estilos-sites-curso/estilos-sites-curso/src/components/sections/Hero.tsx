import { ChevronDown, Timer } from "lucide-react";
import { site } from "@/config/site";
import { LinkButton } from "@/components/ui/LinkButton";
import { DeviceShowcase } from "@/components/showcase/DeviceShowcase";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24 lg:pt-32">
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_70%_at_70%_30%,black,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgb(8_102_255/0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 lg:px-8">
        <div className="max-w-[46rem]">
          <h1 id="titulo-principal" className="display text-hero">
            Aprenda a criar sites com IA e comece a buscar sua primeira venda!
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-mist sm:text-xl">
            Descubra como desenvolver sites profissionais com inteligência artificial, encontrar possíveis clientes e oferecer seus serviços, mesmo começando do zero.
          </p>

          <div className="mt-8 flex max-w-[34rem] items-start gap-4 rounded-2xl border border-ember/35 bg-ember/[0.07] p-4 sm:p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ember text-navy shadow-[0_0_30px_-6px_rgb(255_138_34/0.8)]">
              <Timer aria-hidden="true" className="size-6" strokeWidth={2.2} />
            </span>
            <div>
              <p className="wide text-[1.02rem] font-extrabold uppercase leading-tight tracking-[0.01em] text-ember sm:text-lg">{site.course.name}</p>
              <p className="mt-1 text-[0.95rem] leading-snug text-white/75">
                Um desafio para aprender os primeiros passos e começar a colocar o método em prática — não uma garantia de venda.
              </p>
            </div>
          </div>

          <div data-hero-ctas className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={site.checkoutUrl} size="lg" className="sm:whitespace-nowrap sm:px-6 sm:text-[0.94rem] sm:tracking-[0.01em]">
              Garantir meu acesso por {site.course.priceShort}
            </LinkButton>
            <LinkButton href="#conteudo" variant="ghost" size="lg" className="sm:whitespace-nowrap sm:px-6 sm:text-[0.94rem] sm:tracking-[0.01em]">
              Conhecer o conteúdo
              <ChevronDown aria-hidden="true" className="size-5" />
            </LinkButton>
          </div>
          <p className="mt-4 text-sm text-mist/80">Material didático em PDF, com exercícios e modelos. Compra pela Cakto.</p>
        </div>

        <DeviceShowcase />
      </div>
    </section>
  );
}
