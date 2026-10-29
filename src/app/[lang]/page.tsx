import { notFound } from "next/navigation";
import { esIdioma, textos } from "@/lib/idiomas";

export default async function Portada({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos(lang);
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-3 px-4">
      <h1 className="text-4xl font-semibold">{t.sitio.nombre}</h1>
      <p className="text-tenue">{t.sitio.descripcion}</p>
      <p className="text-sm text-tenue">
        {t.portada.enConstruccion} · {t.portada.subtitulo}
      </p>
    </main>
  );
}
