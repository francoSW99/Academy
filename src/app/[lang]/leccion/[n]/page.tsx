import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { Temario } from "@/componentes/Temario";
import { VideoBiblioteca } from "@/componentes/VideoBiblioteca";
import { CompletarLeccion, MarcarVista } from "@/componentes/leccion/AvanceLeccion";
import { BotonCopiar } from "@/componentes/leccion/BotonCopiar";
import { IdeaLeccion } from "@/componentes/leccion/IdeaLeccion";
import { IndiceLateral, IndiceMovil, type EntradaIndice } from "@/componentes/leccion/IndiceLeccion";
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

  // El índice de la lección: sus ideas, en orden, y el cierre.
  const indice: EntradaIndice[] = [
    ...c.ideas.map((idea, k) => ({ id: `idea-${k + 1}`, numero: k + 1, titulo: idea.titulo })),
    { id: "lo-que-sabe", titulo: t.loQueSabe },
    { id: "practica", titulo: t.practica },
  ];

  return (
    <>
      <Cabecera lang={lang} />
      <MarcarVista n={n} />
      <div className="mx-auto grid max-w-[1200px] gap-x-12 px-[clamp(16px,4vw,40px)] lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-0 max-h-screen overflow-y-auto py-8 pr-1">
            <Temario lang={lang} variante="lateral" actual={n} indice={<IndiceLateral entradas={indice} />} />
          </div>
        </aside>

        <main className="flex min-w-0 flex-col gap-12 pt-6 pb-16 lg:pt-8">
          <div className="flex flex-col gap-6">
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
          </div>

          <IndiceMovil entradas={indice} lang={lang} />

          <div className="flex flex-col gap-12">
            {c.ideas.map((idea, k) => (
              <IdeaLeccion key={idea.titulo} idea={idea} numero={k + 1} id={`idea-${k + 1}`} lang={lang} />
            ))}
          </div>

          <section id="lo-que-sabe" aria-labelledby="lo-que-sabe-titulo" className="flex scroll-mt-20 flex-col gap-5 border-t border-borde pt-12">
            <h2 id="lo-que-sabe-titulo" className="font-serif text-[clamp(28px,3.2vw,38px)] leading-tight font-normal">
              {t.loQueSabe}
            </h2>
            <ol className="flex max-w-[68ch] flex-col gap-3">
              {c.loQueSabe.map((p, k) => (
                <li key={p} className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline gap-2">
                  <span className="font-serif text-[24px] leading-none text-acento-texto">{k + 1}</span>
                  <span className="text-[17.5px] leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="practica" aria-labelledby="practica-titulo" className="flex scroll-mt-20 flex-col gap-4 rounded-[18px] border border-borde p-[clamp(20px,3vw,32px)]">
            <h2 id="practica-titulo" className="font-serif text-[clamp(26px,2.8vw,34px)] leading-tight font-normal">
              {t.practica}
            </h2>
            <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-pretty text-tinta-2">{c.practica}</p>
            <CompletarLeccion lang={lang} n={n} />
          </section>

          {c.preguntas && (
            <section aria-labelledby="preguntas" className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h2 id="preguntas" className="text-[21px] font-medium">
                  {t.preguntas}
                </h2>
                <p className="text-[15px] text-tenue">{t.preguntasTexto}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {c.preguntas.map((q) => (
                  <li key={q} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[14px] border border-borde px-4 py-3">
                    <span className="min-w-0 flex-1 basis-[280px] text-[16px] leading-relaxed">{q}</span>
                    <BotonCopiar texto={q} lang={lang} />
                  </li>
                ))}
              </ul>
            </section>
          )}

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
