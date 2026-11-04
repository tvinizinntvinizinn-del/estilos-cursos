import { site, siteUrl } from "@/config/site";

/** Dados estruturados do curso (só informações confirmadas). */
export function JsonLd() {
  const url = siteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: site.course.name,
    alternateName: site.course.material,
    description:
      "Material didático para aprender a criar sites com inteligência artificial, encontrar possíveis clientes, apresentar propostas e entregar o projeto ao cliente.",
    inLanguage: "pt-BR",
    url,
    provider: { "@type": "Organization", name: site.brand, url },
    creator: { "@type": "Person", name: site.creator },
    offers: { "@type": "Offer", price: site.course.price.toFixed(2), priceCurrency: "BRL", url: site.checkoutUrl, category: "Paid" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
