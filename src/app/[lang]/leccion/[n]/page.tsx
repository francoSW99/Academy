import { idiomas } from "@/lib/idiomas";
import { buscarLeccion } from "@/ruta/especialidades";
import { contenidos } from "@/ruta/contenido";

export const dynamicParams = false;

// Las lecciones de antes de las especialidades eran todas de AI Engineering.
export function generateStaticParams() {
  return idiomas.flatMap((lang) =>
    Object.keys(contenidos)
      .filter((ref) => ref.startsWith("ai/"))
      .map((ref) => ({ lang, n: buscarLeccion(ref)!.n })),
  );
}

// Dirección vieja: /es/leccion/03/ lleva a /es/ai-engineering/leccion/03/.
// Va relativa, así funciona también en el borrador (/borrador/es/…).
export default async function LeccionVieja({ params }: { params: Promise<{ lang: string; n: string }> }) {
  const { n } = await params;
  const destino = `../../ai-engineering/leccion/${n}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Lección {Number(n)}</a>
    </>
  );
}
