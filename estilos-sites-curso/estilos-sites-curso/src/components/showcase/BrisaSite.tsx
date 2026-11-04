import { MessageCircle, Snowflake, Thermometer, Wind, Wrench } from "lucide-react";

/**
 * Site de demonstração exibido nos aparelhos do hero: a Brisa Ar é o projeto fictício
 * usado no material do curso. Medidas em cqw (relativas à largura da tela do aparelho).
 */

const SERVICES = [
  { icon: Wrench, title: "Instalação", text: "Split e janela, com acabamento limpo." },
  { icon: Thermometer, title: "Manutenção", text: "Revisão preventiva e conserto." },
  { icon: Wind, title: "Limpeza", text: "Higienização completa do aparelho." },
];

function AcUnit({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative grid h-full w-full place-items-center overflow-hidden ${compact ? "rounded-[5cqw]" : "rounded-[1.6cqw]"} bg-[linear-gradient(150deg,#22c3e6,#0b7cd8_60%,#0a4fb3)]`}>
      <div className={`absolute ${compact ? "-right-[10cqw] -top-[10cqw] size-[46cqw]" : "-right-[4cqw] -top-[4cqw] size-[18cqw]"} rounded-full bg-white/15`} />
      <div className={`relative ${compact ? "w-[66%]" : "w-[70%]"}`}>
        <div className={`${compact ? "h-[14cqw] rounded-[3cqw]" : "h-[6.2cqw] rounded-[1.1cqw]"} bg-white shadow-[0_1cqw_2cqw_rgb(4_40_90/0.35)]`}>
          <div className={`flex h-full flex-col justify-end ${compact ? "gap-[1cqw] p-[2.4cqw]" : "gap-[0.4cqw] p-[0.9cqw]"}`}>
            <span className={`block ${compact ? "h-[1cqw]" : "h-[0.42cqw]"} rounded-full bg-sky-200`} />
            <span className={`block ${compact ? "h-[1cqw]" : "h-[0.42cqw]"} rounded-full bg-sky-200`} />
          </div>
        </div>
        <div className={`mt-[1.4cqw] flex justify-center ${compact ? "gap-[4cqw]" : "gap-[1.6cqw]"} text-white/85`}>
          <Wind className={compact ? "size-[9cqw]" : "size-[3.4cqw]"} strokeWidth={1.6} />
          <Wind className={compact ? "size-[9cqw]" : "size-[3.4cqw]"} strokeWidth={1.6} />
        </div>
      </div>
      <span className={`absolute ${compact ? "bottom-[4cqw] left-[4cqw] px-[3cqw] py-[1.2cqw] text-[5cqw]" : "bottom-[1.4cqw] left-[1.4cqw] px-[1.1cqw] py-[0.45cqw] text-[1.5cqw]"} rounded-full bg-white/90 font-extrabold text-[#0b2540]`}>
        22°C
      </span>
    </div>
  );
}

export function BrisaDesktop() {
  return (
    <div className="flex h-full flex-col bg-[#f3f8fd] text-[#0b2540] [font-variation-settings:'wdth'_100]">
      <div data-build className="flex h-[7cqw] shrink-0 items-center justify-between border-b border-[#dbe7f3] bg-white px-[4cqw]">
        <span className="flex items-center gap-[0.8cqw] text-[1.9cqw] font-extrabold">
          <Snowflake className="size-[2.4cqw] text-[#11a9cf]" strokeWidth={2.4} />
          Brisa Ar
        </span>
        <span className="flex items-center gap-[2.4cqw] text-[1.3cqw] font-semibold text-[#45607c]">
          <span>Serviços</span>
          <span>Planos</span>
          <span>Contato</span>
          <span className="rounded-full bg-[#0b2540] px-[1.6cqw] py-[0.6cqw] text-white">Orçamento</span>
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[1.1fr_1fr] items-center gap-[3cqw] px-[4cqw] py-[3cqw]">
        <div data-build>
          <p className="text-[1.25cqw] font-semibold text-[#11a9cf]">Ar-condicionado residencial e comercial</p>
          <p className="mt-[0.8cqw] text-[4.3cqw] font-extrabold leading-[1.02] tracking-[-0.02em]">Clima perfeito o ano inteiro</p>
          <p className="mt-[1.2cqw] max-w-[90%] text-[1.45cqw] leading-[1.45] text-[#45607c]">
            Instalação, manutenção e limpeza com agendamento rápido e técnicos de confiança.
          </p>
          <div className="mt-[2cqw] flex gap-[1cqw]">
            <span className="flex items-center gap-[0.6cqw] rounded-full bg-[#11a9cf] px-[1.8cqw] py-[0.9cqw] text-[1.3cqw] font-bold text-white">
              <MessageCircle className="size-[1.5cqw]" strokeWidth={2.4} />
              Pedir orçamento
            </span>
            <span className="rounded-full border border-[#c5d6e8] px-[1.8cqw] py-[0.9cqw] text-[1.3cqw] font-bold">Ver serviços</span>
          </div>
        </div>
        <div data-build className="h-[24cqw]">
          <AcUnit />
        </div>
      </div>

      <div className="grid shrink-0 grid-cols-3 gap-[1.6cqw] px-[4cqw] pb-[3.4cqw]">
        {SERVICES.map((s) => (
          <div data-build key={s.title} className="rounded-[1.2cqw] border border-[#dbe7f3] bg-white p-[1.4cqw] shadow-[0_0.4cqw_1.4cqw_rgb(11_37_64/0.06)]">
            <s.icon className="size-[2.2cqw] text-[#11a9cf]" strokeWidth={2.2} />
            <p className="mt-[0.8cqw] text-[1.45cqw] font-extrabold">{s.title}</p>
            <p className="mt-[0.3cqw] text-[1.1cqw] leading-[1.35] text-[#5a7390]">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrisaPhone() {
  return (
    <div className="flex h-full flex-col bg-[#f3f8fd] text-[#0b2540] [font-variation-settings:'wdth'_100]">
      <div data-build-phone className="flex h-[17cqw] shrink-0 items-center justify-between bg-white px-[6cqw] pt-[5cqw]">
        <span className="flex items-center gap-[2cqw] text-[6cqw] font-extrabold">
          <Snowflake className="size-[7cqw] text-[#11a9cf]" strokeWidth={2.4} />
          Brisa Ar
        </span>
        <span className="flex flex-col gap-[1.3cqw]">
          <span className="block h-[0.9cqw] w-[6cqw] rounded-full bg-[#0b2540]" />
          <span className="block h-[0.9cqw] w-[6cqw] rounded-full bg-[#0b2540]" />
        </span>
      </div>
      <div data-build-phone className="px-[6cqw] pt-[6cqw]">
        <p className="text-[10cqw] font-extrabold leading-[1.02] tracking-[-0.02em]">Clima perfeito o ano inteiro</p>
        <p className="mt-[3cqw] text-[4.6cqw] leading-[1.4] text-[#45607c]">Instalação, manutenção e limpeza com agendamento rápido.</p>
        <span className="mt-[4cqw] flex items-center justify-center gap-[2cqw] rounded-full bg-[#11a9cf] py-[3.4cqw] text-[4.6cqw] font-bold text-white">
          <MessageCircle className="size-[5cqw]" strokeWidth={2.4} />
          Pedir orçamento
        </span>
      </div>
      <div data-build-phone className="mx-[6cqw] mt-[6cqw] h-[56cqw] shrink-0">
        <AcUnit compact />
      </div>
      <div className="mt-[5cqw] grid grid-cols-1 gap-[3cqw] px-[6cqw]">
        {SERVICES.slice(0, 2).map((s) => (
          <div data-build-phone key={s.title} className="flex items-center gap-[3cqw] rounded-[4cqw] border border-[#dbe7f3] bg-white p-[3.6cqw]">
            <s.icon className="size-[7cqw] shrink-0 text-[#11a9cf]" strokeWidth={2.2} />
            <span>
              <span className="block text-[4.8cqw] font-extrabold">{s.title}</span>
              <span className="block text-[3.6cqw] leading-[1.3] text-[#5a7390]">{s.text}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
