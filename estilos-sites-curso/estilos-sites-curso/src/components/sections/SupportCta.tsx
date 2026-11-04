import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { LinkButton } from "@/components/ui/LinkButton";

export function SupportCta() {
  return (
    <section id="suporte" aria-labelledby="suporte-titulo" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-whatsapp/30 bg-[linear-gradient(120deg,rgb(31_174_91/0.14),rgb(31_174_91/0.03)_60%)] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="suporte-titulo" className="display text-section">
              Ficou com alguma dúvida?
            </h2>
            <p className="mt-4 max-w-[34rem] text-lg text-mist">Nossa equipe pode ajudar com informações sobre o curso, pagamento e acesso.</p>
            <p className="mt-2 text-white/80">
              WhatsApp: <span className="font-semibold text-white">{site.whatsapp.display}</span>
            </p>
          </div>
          <LinkButton href={site.whatsapp.url} variant="whatsapp" size="lg" newTab className="shrink-0">
            <MessageCircle aria-hidden="true" className="size-6" />
            Falar pelo WhatsApp
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
