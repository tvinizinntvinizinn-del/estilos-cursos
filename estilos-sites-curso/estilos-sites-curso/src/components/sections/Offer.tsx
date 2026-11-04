import { Check } from "lucide-react";
import { INCLUDED } from "@/content/course";
import { site } from "@/config/site";
import { LinkButton } from "@/components/ui/LinkButton";

export function Offer() {
  return (
    <section id="oferta" aria-labelledby="oferta-titulo" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(8_102_255/0.32),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] bg-[linear-gradient(160deg,rgb(69_163_255/0.7),rgb(8_102_255/0.25)_35%,rgb(255_138_34/0.45))] p-px shadow-[0_50px_120px_-40px_rgb(8_102_255/0.8)]">
          <div className="rounded-[calc(2rem-1px)] bg-[linear-gradient(170deg,#0c2552,#061329_55%)] px-6 py-10 text-center sm:px-12 sm:py-14">
            <h2 id="oferta-titulo" className="display text-section">
              Comece a aprender hoje
            </h2>
            <p className="wide mx-auto mt-4 max-w-[28rem] text-lg font-bold uppercase leading-snug text-glow">{site.course.name}</p>

            <p aria-hidden="true" className="mt-8 flex items-start justify-center gap-1 leading-none">
              <span className="mt-[0.35em] text-2xl font-bold text-white/80 sm:text-3xl">R$</span>
              <span className="display tabular text-[5.5rem] text-white [text-shadow:0_0_40px_rgb(69_163_255/0.5)] sm:text-[7.5rem]">25</span>
              <span className="display mt-[0.3em] text-3xl text-white sm:text-5xl">,00</span>
            </p>
            <p className="sr-only">Preço: {site.course.priceFull}</p>

            <p className="mx-auto mt-6 max-w-[30rem] text-lg text-mist">
              Um material prático para aprender criação de sites com inteligência artificial, prospecção e fundamentos de vendas.
            </p>

            <ul className="mx-auto mt-8 grid max-w-[30rem] gap-3 text-left">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-electric">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <LinkButton href={site.checkoutUrl} size="lg" className="mt-10 w-full sm:w-auto sm:min-w-[22rem]">
              Quero adquirir por {site.course.priceShort}
            </LinkButton>
            <p className="mt-4 text-sm text-mist/80">Você será direcionado ao checkout da Cakto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
