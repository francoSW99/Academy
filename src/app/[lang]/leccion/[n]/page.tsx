import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { Temario } from "@/componentes/Temario";
import { VideoBiblioteca } from "@/componentes/VideoBiblioteca";
import { CompletarLeccion, MarcarVista } from "@/componentes/leccion/AvanceLeccion";
import { BloqueLeccion } from "@/componentes/leccion/BloqueLeccion";
import { BotonCopiar } from "@/componentes/leccion/BotonCopiar";
import { IndiceLeccion } from "@/componentes/leccion/IndiceLeccion";
import { esIdioma, idiomas, rellenar, textos } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";
import { buscarLeccion, lecciones, totalLecciones } from "@/ruta/curso";

export const dynamicParams = false;

// Export estático: una página por idioma × lección disponible.
export function generateStaticParams() {
  return idiomas.flatMap((lang) => Object.keys(contenidos).map((n) => ({ lang, n })));
}

type Props = { params: Promise<{ lang: string; n: string }> };

export default async function PaginaLeccion({ params }: Props) {
  const { lang, n } = await params;
  const leccion = buscarLeccion(n);
  const c = contenidos[n];
  if (!esIdioma(lang) || !leccion || !c) notFound();

  const t = textos(lang).leccion;
  const i = lecciones.findIndex((l) => l.n === n);
  const previa = lecciones.slice(0, i).reverse().find((l) => l.disponible);
  const siguiente = lecciones[i + 1];

  return (
    <>
      <Cabecera lang={lang} />
      <MarcarVista n={n} />
      <div className="mx-auto grid max-w-[1200px] gap-x-12 px-[clamp(16px,4vw,40px)] lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-0 max-h-screen overflow-y-auto py-8 pr-1">
            <Temario lang={lang} variante="lateral" actual={n} />
          </div>
        </aside>

        <main className="flex min-w-0 flex-col gap-10 pt-6 pb-16 lg:pt-8">
          <details className="rounded-[14px] border border-borde lg:hidden">
            <summary className="flex min-h-12 cursor-pointer items-center px-4 text-[15px] font-medium">{t.temarioCurso}</summary>
            <div className="px-2 pb-3">
              <Temario lang={lang} variante="lateral" actual={n} />
            </div>
          </details>

          <header className="flex max-w-[780px] flex-col gap-3">
            <p className="text-sm text-tenue">
              {rellenar(t.leccionDe, { modulo: leccion.modulo.n, nombreModulo: leccion.modulo.nombre, n: Number(n), total: totalLecciones })}
            </p>
            <h1 className="font-serif text-[clamp(36px,4.6vw,56px)] leading-[1.04] font-normal tracking-[-0.015em] text-balance">{leccion.titulo}</h1>
            <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{c.resumen}</p>
          </header>

          <IndiceLeccion lang={lang} />

          <Parte id="teoria" n={1} titulo={t.partes.teoria}>
            {c.teoria.map((b) => (
              <BloqueLeccion key={b.titulo} bloque={b} lang={lang} />
            ))}
          </Parte>

          <Parte id="vida-real" n={2} titulo={t.partes.vidaReal}>
            {c.vidaReal.map((b) => (
              <BloqueLeccion key={b.titulo} bloque={b} lang={lang} />
            ))}
          </Parte>

          <Parte id="en-tu-prompt" n={3} titulo={t.partes.enTuPrompt}>
            {c.enTuPrompt.map((b) => (
              <BloqueLeccion key={b.titulo} bloque={b} lang={lang} />
            ))}
            {c.plantilla && (
              <section className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-[clamp(23px,2.4vw,28px)] leading-tight font-normal">{t.plantilla}</h3>
                  <BotonCopiar texto={c.plantilla} lang={lang} />
                </div>
                <pre className="max-w-[780px] rounded-[14px] bg-codigo-fondo px-5 py-4 font-mono text-[14.5px] leading-[1.7] whitespace-pre-wrap text-codigo-tinta">
                  {c.plantilla}
                </pre>
              </section>
            )}
          </Parte>

          <section id="practica" aria-labelledby="practica-titulo" className="flex scroll-mt-16 flex-col gap-4 rounded-[18px] border border-borde p-[clamp(20px,3vw,32px)]">
            <h2 id="practica-titulo" className="font-serif text-[clamp(26px,2.8vw,34px)] leading-tight font-normal">
              {t.partes.practica}
            </h2>
            <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-pretty text-tinta-2">{c.practica}</p>
            <CompletarLeccion lang={lang} n={n} />
          </section>

          {c.videos && (
            <section aria-labelledby="profundizar" className="flex flex-col gap-3">
              <h2 id="profundizar" className="text-[21px] font-medium">
                {t.profundizar}
              </h2>
              {c.videos.map((v) => (
                <VideoBiblioteca key={v.id} video={v} lang={lang} />
              ))}
            </section>
          )}

          <nav aria-label="Lecciones" className="flex flex-wrap items-center justify-between gap-3 border-t border-borde pt-6">
            <span>
              {previa && (
                <Link href={`/${lang}/leccion/${previa.n}/`} className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-[18px] text-[15px] hover:bg-suave">
                  {rellenar(t.anterior, { n: Number(previa.n), titulo: previa.titulo })}
                </Link>
              )}
            </span>
            {siguiente?.disponible ? (
              <Link href={`/${lang}/leccion/${siguiente.n}/`} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
                {rellenar(t.siguiente, { n: Number(siguiente.n), titulo: siguiente.titulo })}
              </Link>
            ) : (
              <span className="flex flex-wrap items-center gap-3">
                {siguiente && <span className="text-[14.5px] text-tenue">{rellenar(t.siguientePronto, { n: Number(siguiente.n), titulo: siguiente.titulo })}</span>}
                <Link href={`/${lang}/#temario`} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
                  {t.volverTemario}
                </Link>
              </span>
            )}
          </nav>
        </main>
      </div>
    </>
  );
}

function Parte({ id, n, titulo, children }: { id: string; n: number; titulo: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="flex scroll-mt-16 flex-col gap-10">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-3 font-serif text-[clamp(30px,3.4vw,42px)] leading-tight font-normal">
        <span className="text-acento-texto">{n}</span>
        {titulo}
      </h2>
      {children}
    </section>
  );
}
