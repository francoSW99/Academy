import { idiomas } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";

export const dynamicParams = false;

// Las 7 paradas viejas de cada estación, y a qué parte de la lección nueva corresponde cada una.
const PARTE_DE_PARADA: Record<string, string> = {
  "1": "idea-1",
  "2": "idea-1",
  "3": "consejos",
  "4": "idea-3",
  "5": "idea-1",
  "6": "consejos",
  "7": "practica",
};

export function generateStaticParams() {
  return idiomas.flatMap((lang) =>
    Object.keys(contenidos).flatMap((n) => Object.keys(PARTE_DE_PARADA).map((parada) => ({ lang, n, parada }))),
  );
}

// Dirección vieja: /es/estacion/03/7/ lleva a /es/leccion/03/#practica.
export default async function ParadaVieja({ params }: { params: Promise<{ lang: string; n: string; parada: string }> }) {
  const { n, parada } = await params;
  const destino = `../../../leccion/${n}/#${PARTE_DE_PARADA[parada]}`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Lección {Number(n)}</a>
    </>
  );
}
