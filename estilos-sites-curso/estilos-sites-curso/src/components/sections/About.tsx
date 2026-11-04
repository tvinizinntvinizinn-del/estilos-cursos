import { PILLARS } from "@/content/course";

export function About() {
  return (
    <section id="curso" aria-labelledby="curso-titulo" className="relative border-t hairline bg-abyss py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <h2 id="curso-titulo" className="display text-section">
            Do primeiro prompt à entrega profissional
          </h2>
          <p className="max-w-[36rem] self-end text-lg leading-relaxed text-mist">
            Este material foi desenvolvido para ensinar um caminho prático: entender as necessidades de uma empresa, criar um site utilizando inteligência artificial, verificar sua qualidade, encontrar oportunidades, apresentar propostas e entregar o projeto ao cliente.
          </p>
        </div>

        {/* Os três pilares formam um caminho: criar → encontrar clientes → vender */}
        <ol className="relative mt-14 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          <span aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-electric via-glow/60 to-ember/70 lg:bottom-auto lg:left-7 lg:right-7 lg:top-7 lg:h-px lg:w-auto lg:bg-gradient-to-r" />
          {PILLARS.map((p) => (
            <li key={p.title} className="relative flex gap-5 lg:block">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-glow/40 bg-navy text-glow shadow-[0_0_34px_-10px_rgb(69_163_255/0.9)]">
                <p.icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
              </span>
              <div className="lg:mt-6">
                <h3 className="display text-[1.6rem] sm:text-[1.8rem]">{p.title}</h3>
                <p className="mt-2 max-w-[22rem] text-mist">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
