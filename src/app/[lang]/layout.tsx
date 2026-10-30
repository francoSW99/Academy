import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { esIdioma, idiomas, textos } from "@/lib/idiomas";
import "../globals.css";

export const dynamicParams = false;

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
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300..700&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
