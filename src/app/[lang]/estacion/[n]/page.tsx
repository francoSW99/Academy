import { idiomas } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";

export const dynamicParams = false;

export function generateStaticParams() {
  return idiomas.flatMap((lang) => Object.keys(contenidos).map((n) => ({ lang, n })));
}

// /es/estacion/03/ lleva a la primera parada (el export estático no tiene redirecciones de servidor).
export default async function Estacion({ params }: { params: Promise<{ lang: string; n: string }> }) {
  const { lang, n } = await params;
  const destino = `/${lang}/estacion/${n}/1/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Parada 1</a>
    </>
  );
}
