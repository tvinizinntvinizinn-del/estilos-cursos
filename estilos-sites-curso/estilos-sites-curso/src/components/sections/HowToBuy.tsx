import { MessageCircle } from "lucide-react";
import { BUY_STEPS } from "@/content/course";
import { site } from "@/config/site";
import { LinkButton } from "@/components/ui/LinkButton";

export function HowToBuy() {
  return (
    <section aria-labelledby="comprar-titulo" className="relative border-t hairline bg-abyss py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="comprar-titulo" className="display text-section max-w-[30rem]">
            Como adquirir e acessar o curso?
          </h2>
          <p className="mt-5 max-w-[28rem] text-lg text-mist">
            A compra acontece no checkout da Cakto. Depois da confirmação do pagamento, siga as orientações de acesso.
          </p>
          <div className="mt-8 rounded-2xl border hairline bg-white/[0.03] p-5">
            <p className="text-white/90">Teve alguma dúvida sobre a compra ou o acesso? Fale com nosso suporte pelo WhatsApp.</p>
            <LinkButton href={site.whatsapp.url} variant="whatsapp" newTab className="mt-4">
              <MessageCircle aria-hidden="true" className="size-5" />
              Falar com o suporte
            </LinkButton>
          </div>
        </div>

        <ol className="space-y-3">
          {BUY_STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-2xl border hairline bg-navy/60 p-5 sm:p-6">
              <span aria-hidden="true" className="display grid size-12 shrink-0 place-items-center rounded-xl bg-electric/15 text-[1.35rem] text-glow tabular">{i + 1}</span>
              <div className="min-w-0">
                <h3 className="text-[1.05rem] font-extrabold uppercase leading-tight tracking-[0.01em] [font-variation-settings:'wdth'_112]">
                  <span className="sr-only">Passo {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-mist">{s.text}</p>
                {i === 0 && (
                  <LinkButton href={site.checkoutUrl} className="mt-4">
                    Garantir meu acesso
                  </LinkButton>
                )}
              </div>
              <s.icon aria-hidden="true" className="ml-auto hidden size-6 shrink-0 text-mist/60 sm:block" strokeWidth={1.6} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
