import { idiomas } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";

// Las estaciones eran las lecciones de AI Engineering: "ai/03" → "03".
const estacionesViejas = Object.keys(contenidos).filter((ref) => ref.startsWith("ai/")).map((ref) => ref.slice(3));

export const dynamicParams = false;

export function generateStaticParams() {
  return idiomas.flatMap((lang) => estacionesViejas.map((n) => ({ lang, n })));
}

// Dirección vieja (cuando el curso tenía estaciones): /es/estacion/03/ lleva a /es/ai-engineering/leccion/03/.
// Va relativa, así funciona también en el borrador (/borrador/es/…).
export default async function EstacionVieja({ params }: { params: Promise<{ lang: string; n: string }> }) {
  const { n } = await params;
  const destino = `../../ai-engineering/leccion/${n}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Lección {Number(n)}</a>
    </>
  );
}
