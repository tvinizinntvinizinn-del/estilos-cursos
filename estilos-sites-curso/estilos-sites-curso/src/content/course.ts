import {
  BadgeCheck,
  BookOpen,
  Compass,
  CreditCard,
  FilePenLine,
  Globe,
  Handshake,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  PackageCheck,
  MapPinned,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

/** Conteúdo real do material "Sites com IA — do primeiro prompt à entrega profissional". */

export type Pillar = { title: string; text: string; icon: LucideIcon };
export const PILLARS: Pillar[] = [
  { title: "Criação", text: "Aprenda a planejar e desenvolver sites com IA.", icon: MonitorSmartphone },
  { title: "Clientes", text: "Aprenda a pesquisar oportunidades e apresentar seus serviços.", icon: Users },
  { title: "Vendas", text: "Entenda como negociar, definir propostas e organizar a entrega.", icon: Handshake },
];

export type Module = { n: string; title: string; text: string; topics: string[]; icon: LucideIcon };
export const MODULES: Module[] = [
  {
    n: "01",
    title: "A base do serviço",
    text: "Como escolher um nicho, entender o problema do cliente, definir a oferta e organizar os custos.",
    topics: ["Escolher um nicho", "Entender o problema do cliente", "Definir a oferta", "Organizar os custos"],
    icon: Compass,
  },
  {
    n: "02",
    title: "Construção com Lovable",
    text: "Briefing, criação de prompts, desenvolvimento de páginas, personalização e ajustes.",
    topics: ["Briefing", "Criação de prompts", "Desenvolvimento de páginas", "Personalização e ajustes"],
    icon: WandSparkles,
  },
  {
    n: "03",
    title: "Qualidade e confiança",
    text: "Responsividade, acessibilidade, segurança, links, formulários, SEO e desempenho.",
    topics: ["Responsividade", "Acessibilidade", "Segurança", "Links e formulários", "SEO", "Desempenho"],
    icon: ShieldCheck,
  },
  {
    n: "04",
    title: "Publicação",
    text: "Como preparar e colocar o site no ar, considerando domínio, hospedagem e verificações.",
    topics: ["Preparar o site", "Domínio", "Hospedagem", "Verificações antes de publicar"],
    icon: Globe,
  },
  {
    n: "05",
    title: "Clientes pelo Google Maps",
    text: "Como pesquisar empresas, identificar oportunidades e organizar uma prospecção responsável.",
    topics: ["Pesquisar empresas", "Identificar oportunidades", "Prospecção responsável"],
    icon: MapPinned,
  },
  {
    n: "06",
    title: "Proposta e venda",
    text: "Como conversar com clientes, apresentar projetos, definir escopo e conduzir negociações.",
    topics: ["Conversar com clientes", "Apresentar projetos", "Definir escopo", "Conduzir negociações"],
    icon: FilePenLine,
  },
  {
    n: "07",
    title: "Instagram e TikTok",
    text: "Como criar um perfil profissional, divulgar projetos e produzir conteúdo para atrair interessados.",
    topics: ["Perfil profissional", "Divulgar projetos", "Produzir conteúdo"],
    icon: Smartphone,
  },
  {
    n: "08",
    title: "Divulgação paga",
    text: "Introdução às estratégias de anúncios pagos e como avaliar campanhas.",
    topics: ["Estratégias de anúncios pagos", "Avaliar campanhas"],
    icon: Megaphone,
  },
  {
    n: "09",
    title: "Entrega ao cliente",
    text: "Como organizar acessos, domínio, documentação, responsabilidades e suporte.",
    topics: ["Acessos", "Domínio", "Documentação", "Responsabilidades", "Suporte"],
    icon: PackageCheck,
  },
  {
    n: "10",
    title: "Rotina e crescimento",
    text: "Como organizar o trabalho, melhorar processos e desenvolver o serviço ao longo do tempo.",
    topics: ["Organizar o trabalho", "Melhorar processos", "Desenvolver o serviço"],
    icon: TrendingUp,
  },
];

export const BONUS: string[] = [
  "Modelos prontos de briefing",
  "Modelo de proposta comercial",
  "Termo de entrega",
  "Glossário",
  "Referências e materiais para continuar aprendendo",
];

export type Step = { n: string; title: string; text: string };
export const LEARNING_STEPS: Step[] = [
  { n: "01", title: "Prepare-se", text: "Escolha um nicho e entenda o serviço." },
  { n: "02", title: "Crie", text: "Desenvolva um primeiro projeto com IA." },
  { n: "03", title: "Teste", text: "Verifique o funcionamento no computador e celular." },
  { n: "04", title: "Encontre oportunidades", text: "Pesquise empresas e organize contatos comerciais." },
  { n: "05", title: "Apresente sua proposta", text: "Aprenda a demonstrar o projeto e negociar." },
  { n: "06", title: "Entregue", text: "Organize os acessos, a publicação e a documentação." },
];

export const CHALLENGE_STEPS: string[] = [
  "Estude o processo.",
  "Desenvolva um projeto demonstrativo.",
  "Comece a apresentar seus serviços.",
];

export type BuyStep = { title: string; text: string; icon: LucideIcon };
export const BUY_STEPS: BuyStep[] = [
  { title: "Clique no botão", text: "Selecione “Garantir meu acesso”.", icon: MousePointerClick },
  { title: "Acesse a página de compra", text: "Você será direcionado ao checkout da Cakto.", icon: Globe },
  { title: "Finalize a compra", text: "Confira os dados e as condições exibidas na plataforma.", icon: CreditCard },
  {
    title: "Siga as instruções de acesso",
    text: "Após a confirmação do pagamento, siga as orientações de entrega fornecidas pelo vendedor ou pela plataforma.",
    icon: BadgeCheck,
  },
  { title: "Comece a estudar", text: "Utilize o material didático e coloque os exercícios em prática.", icon: BookOpen },
];

/** O que o material inclui (somente o que está confirmado no briefing). */
export const INCLUDED: string[] = [
  "10 módulos, do nicho à rotina de trabalho",
  "Exercícios e modelos práticos",
  "Projeto fictício Brisa Ar para praticar",
  "Bônus: briefing, proposta comercial, termo de entrega, glossário e referências",
];

export type Faq = { q: string; a: string };
export const FAQ: Faq[] = [
  { q: "Preciso saber programar?", a: "Não é necessário ter experiência prévia em programação para começar a aprender o processo de criação com IA." },
  { q: "O curso ensina a encontrar clientes?", a: "Sim. O material aborda Google Maps, redes sociais, prospecção e apresentação comercial." },
  { q: "Preciso pagar anúncios?", a: "Não para começar a aplicar as estratégias de divulgação gratuita apresentadas. O material também explica opções pagas." },
  { q: "Vou conseguir vender em 24 horas?", a: "O curso propõe um caminho para começar a aprender e agir rapidamente, mas não garante vendas nesse prazo." },
  { q: "O material inclui exercícios?", a: "Sim. O PDF contém exercícios, modelos práticos e um projeto fictício chamado Brisa Ar." },
  { q: "Como faço para comprar?", a: "Clique no botão de compra para acessar o checkout da Cakto." },
  { q: "Como tiro dúvidas?", a: "Utilize o botão de WhatsApp para falar com a Estilos Sites." },
];
