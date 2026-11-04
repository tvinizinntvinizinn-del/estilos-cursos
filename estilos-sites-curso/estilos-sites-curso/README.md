# Estilos Sites — landing page do curso

Página única de apresentação e vendas do curso **Criação e primeira venda em menos de 24 horas**
(material *Sites com IA — do primeiro prompt à entrega profissional*), de Vinicius Alexandre.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger · Lucide.

## Rodando

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção (inclui checagem de tipos)
npm start
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Preço, link da Cakto, WhatsApp, nome do curso, criador | `src/config/site.ts` |
| Módulos, bônus, etapas, passos de compra, FAQ | `src/content/course.ts` |
| Textos de cada seção | `src/components/sections/*.tsx` |
| Cores e tipografia | `src/app/globals.css` (bloco `@theme`) |
| Marca (texto) e ícone da aba | `src/components/ui/Wordmark.tsx`, `src/app/icon.svg` |
| Imagem de compartilhamento (WhatsApp, redes) | `public/og.png` (1200 × 630) |

Todos os botões de compra usam `site.checkoutUrl` e todos os de suporte usam `site.whatsapp.url`
(com a mensagem pronta). Trocou ali, troca no site inteiro.

## Publicando no Vercel

1. Suba a pasta para um repositório no GitHub.
2. No Vercel: **Add New… → Project → Import** o repositório → **Deploy**.
3. O endereço do site (SEO, sitemap, Open Graph) é preenchido sozinho com o domínio do Vercel.
   Para um domínio próprio, crie a variável `NEXT_PUBLIC_SITE_URL` (ex.: `https://www.seudominio.com.br`)
   em *Settings → Environment Variables* e publique de novo.

## Regras de conteúdo

- Os módulos são capítulos do material didático. Não há videoaulas, certificado ou encontros ao vivo.
- O prazo de 24 horas é apresentado como desafio, nunca como garantia de venda. O aviso aparece
  no hero, na seção do desafio e no FAQ.
- Sem desconto, contador de escassez, depoimentos ou área de membros inventados.
- O site de demonstração nos aparelhos (Brisa Ar) é o projeto fictício usado no material.

Mais detalhes técnicos em `CLAUDE.md`.
