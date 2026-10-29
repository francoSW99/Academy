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
      <body>{children}</body>
    </html>
  );
}
