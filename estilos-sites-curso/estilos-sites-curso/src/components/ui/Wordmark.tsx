/** Marca em texto. Para usar a logo oficial, troque por <Image src="/logo.svg" ... />. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 44 44" className="size-7 shrink-0 sm:size-8 drop-shadow-[0_0_14px_rgb(8_102_255/0.75)]">
        <rect width="44" height="44" rx="11" fill="#0866FF" />
        <path d="M13 11h19v6H19.5v3.5H30v6H19.5V27H32v6H13z" fill="#fff" />
      </svg>
      <span className="whitespace-nowrap text-[0.84rem] font-extrabold uppercase leading-none tracking-[0.01em] [font-variation-settings:'wdth'_118] sm:text-[0.98rem] sm:tracking-[0.02em] sm:[font-variation-settings:'wdth'_125]">
        Estilos Sites
      </span>
    </span>
  );
}
