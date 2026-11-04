# CLAUDE.md — Landing do curso Estilos Sites

Página única de vendas. Leia antes de alterar.

## Estrutura

```
src/
  app/          layout (fonte Archivo, SEO, script que marca <html class="js">), page, robots, sitemap, icon.svg
  config/       site.ts — preço, link Cakto, WhatsApp, nomes (fonte única desses dados)
  content/      course.ts — pilares, módulos, bônus, etapas, passos de compra, FAQ
  components/
    layout/     Header (menu fixo + menu do celular), Footer, WhatsAppFloat
    sections/   Hero, About, Modules, Timeline, Challenge, HowToBuy, Offer, Faq, SupportCta
    showcase/   DeviceShowcase (notebook + celular + prompt), BrisaSite (site demo em cqw)
    ui/         LinkButton, Wordmark
  lib/          gsap (registro do ScrollTrigger), hooks
```

## Design

- Cores (`@theme`): navy `#061329`, abyss `#030b1a`, electric `#0866FF`, glow `#45A3FF`, ember `#FF8A22`, mist `#a9b9d6`, WhatsApp `#1fae5b`.
- Tipografia: Archivo variável. Títulos com a utility `display` (largura 116, peso 820, caixa alta). Corpo em largura normal.
- O momento marcante é a vitrine do hero: o prompt é digitado e o site Brisa Ar se monta no notebook e no celular. O resto da página é contido: sem fade-in em cada seção.
- Movimento ligado à rolagem: trilha da linha do tempo (Timeline) e relógio 00:00 → 24:00 (Challenge). O relógio é ilustração, não contagem regressiva.

## Regras técnicas

1. Animações GSAP sempre em `gsap.context(..., root)` com `ctx.revert()` no cleanup; `prefers-reduced-motion` mostra o estado final.
2. A vitrine começa escondida só quando `<html>` tem a classe `js` (CSS em `globals.css`). O estado final é garantido pela classe `build-done` (fim da animação, movimento reduzido ou fallback de 9 s).
3. Não combinar transform do CSS com y/scale do GSAP no mesmo elemento: o wrapper `[data-device]` anima, o filho tem a perspectiva 3D.
4. O botão do WhatsApp fica sempre no canto inferior direito; no celular recolhe só enquanto os botões do hero estão na tela.
5. Checkout abre na mesma aba; WhatsApp em nova aba (`rel="noopener noreferrer"`).

## Conteúdo

Nunca inventar: videoaulas, certificados, área de membros, acesso automático, prazos de entrega, descontos, escassez, depoimentos ou garantia de resultado. Preço e contatos só em `src/config/site.ts`.

`npm run typecheck` e `npm run build` precisam passar antes de publicar.
