import { idiomas } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";

export const dynamicParams = false;

export function generateStaticParams() {
  return idiomas.flatMap((lang) => Object.keys(contenidos).map((n) => ({ lang, n })));
}

// Dirección vieja (cuando el curso tenía estaciones): /es/estacion/03/ lleva a /es/leccion/03/.
// Va relativa, así funciona también en el borrador (/borrador/es/…).
export default async function EstacionVieja({ params }: { params: Promise<{ lang: string; n: string }> }) {
  const { n } = await params;
  const destino = `../../leccion/${n}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Lección {Number(n)}</a>
    </>
  );
}
