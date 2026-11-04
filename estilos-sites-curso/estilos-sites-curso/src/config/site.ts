/**
 * Dados oficiais do curso. Tudo que aparece no site (preço, links, contato) vem daqui.
 * Para mudar preço, link de compra ou WhatsApp, edite só este arquivo.
 */

const whatsappNumber = "5511961505781";
const whatsappMessage = "Ol%C3%A1%21%20Quero%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20curso%20da%20Estilos%20Sites.";

export const site = {
  brand: "Estilos Sites",
  tagline: "Sites que impulsionam o seu negócio.",
  creator: "Vinicius Alexandre",
  course: {
    /** Nome comercial. */
    name: "Criação e primeira venda em menos de 24 horas",
    /** Título do material (PDF). */
    material: "Sites com IA — do primeiro prompt à entrega profissional",
    price: 25,
    priceFull: "R$25,00",
    priceShort: "R$25",
  },
  /** Checkout oficial (Cakto). */
  checkoutUrl: "https://pay.cakto.com.br/3e7atae_1278586",
  whatsapp: {
    display: "(11) 96150-5781",
    international: "+55 11 96150-5781",
    url: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  },
} as const;

/**
 * Endereço público do site (SEO, Open Graph, sitemap).
 * No Vercel é preenchido sozinho com o domínio de produção; para um domínio próprio,
 * defina NEXT_PUBLIC_SITE_URL nas variáveis de ambiente do projeto.
 * Use só em arquivos de servidor (layout, sitemap, robots, JSON-LD).
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
