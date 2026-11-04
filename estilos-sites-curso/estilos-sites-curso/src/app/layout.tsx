import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { site, siteUrl } from "@/config/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const title = `${site.course.name} | ${site.brand}`;
const description =
  "Aprenda a criar sites profissionais com inteligência artificial, encontrar possíveis clientes e oferecer seus serviços, mesmo começando do zero. Material por R$25.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  applicationName: site.brand,
  authors: [{ name: site.creator }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.brand,
    title,
    description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.course.name} — ${site.brand}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#061329",
  colorScheme: "dark",
};

// Marca o <html> com "js" antes da pintura: a vitrine do hero só se esconde para animar
// quando há JavaScript. Se o app não carregar em 9 s, tudo aparece mesmo assim.
const bootScript = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('build-armed'))d.classList.add('build-done')},9000)})(document.documentElement)`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
