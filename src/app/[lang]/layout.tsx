import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Lienzo } from "@/componentes/Lienzo";
import { Secciones } from "@/componentes/Secciones";
import { esIdioma, idiomas, textos } from "@/lib/idiomas";
import "../globals.css";

export const dynamicParams = false;

// La barra del navegador del celular toma el color del fondo.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000a0c" },
  ],
};

// Corre antes de pintar, para que nunca se vea el tema equivocado: lo guardado o, si no hay, lo que pida el sistema.
const TEMA_INICIAL = `try{var t=localStorage.getItem("academy-tema");if(t!=="claro"&&t!=="oscuro")t=matchMedia("(prefers-color-scheme: light)").matches?"claro":"oscuro";document.documentElement.dataset.tema=t}catch(e){}`;

export function generateStaticParams() {
  return idiomas.map((lang) => ({ lang }));
}

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const t = textos(lang);
  return { title: t.sitio.nombre, description: t.sitio.descripcion };
}

export default async function LayoutIdioma({ children, params }: Props) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: TEMA_INICIAL }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300..700&family=Google+Sans+Code:wght@400;500&display=swap" />
      </head>
      <body>
        <Lienzo />
        {children}
        <Secciones lang={lang} />
      </body>
    </html>
  );
}
