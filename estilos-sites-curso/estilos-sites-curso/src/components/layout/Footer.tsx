import { site } from "@/config/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline bg-abyss pb-28 pt-14 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-[22rem] text-mist">{site.tagline}</p>
          <p className="mt-2 text-sm text-mist/80">Criado por {site.creator}.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.06em] text-white/90 [font-variation-settings:'wdth'_112]">Contato</h2>
          <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-mist hover:text-white">
            {site.whatsapp.display}
          </a>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="text-sm font-bold uppercase tracking-[0.06em] text-white/90 [font-variation-settings:'wdth'_112]">Links</h2>
          <ul className="mt-3 space-y-2 text-mist">
            <li>
              <a href="#curso" className="hover:text-white">
                Conhecer o curso
              </a>
            </li>
            <li>
              <a href={site.checkoutUrl} className="hover:text-white">
                Comprar por {site.course.priceShort}
              </a>
            </li>
            <li>
              <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Suporte via WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-4 text-sm text-mist/60 sm:px-6 lg:px-8">
        © {year} {site.brand}. {site.course.name}.
      </p>
    </footer>
  );
}
