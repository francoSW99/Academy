import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { COLOR, Punto } from "@/componentes/Especialidad";
import { Temario } from "@/componentes/Temario";
import { VideoBiblioteca } from "@/componentes/VideoBiblioteca";
import { CompletarLeccion, MarcarVista } from "@/componentes/leccion/AvanceLeccion";
import { BotonCopiar } from "@/componentes/leccion/BotonCopiar";
import { ListaFuentes, Respaldos } from "@/componentes/leccion/Fuentes";
import { IdeaLeccion } from "@/componentes/leccion/IdeaLeccion";
import { IndiceLateral, IndiceMovil, type EntradaIndice } from "@/componentes/leccion/IndiceLeccion";
import { Puentes } from "@/componentes/leccion/Puentes";
import { esIdioma, idiomas, rellenar, textos } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";
import { puentesDe } from "@/ruta/conexiones";
import { buscarLeccion, especialidadPorSlug, leccionesDe, rutaLeccion } from "@/ruta/especialidades";
import type { RefLeccion } from "@/ruta/tipos";

export const dynamicParams = false;

// Export estático: una página por idioma × lección disponible, dentro de su especialidad.
export function generateStaticParams() {
  return idiomas.flatMap((lang) =>
    Object.keys(contenidos).map((ref) => {
      const l = buscarLeccion(ref)!;
      return { lang, especialidad: l.especialidad.slug, n: l.n };
    }),
  );
}

type Props = { params: Promise<{ lang: string; especialidad: string; n: string }> };

export default async function PaginaLeccion({ params }: Props) {
  const { lang, especialidad: slug, n } = await params;
  const e = especialidadPorSlug(slug);
  const ref = `${e?.id}/${n}` as RefLeccion;
  const leccion = buscarLeccion(ref);
  const c = contenidos[ref];
  if (!esIdioma(lang) || !e || !leccion || !c) notFound();

  const t = textos(lang).leccion;
  // Anterior y siguiente: solo dentro de la especialidad. Las otras se cruzan por los puentes.
  const lecciones = leccionesDe(e);
  const i = lecciones.findIndex((l) => l.n === n);
  const previa = lecciones.slice(0, i).reverse().find((l) => l.disponible);
  const siguiente = lecciones[i + 1];
  const temario = `/${lang}/${e.slug}/#temario`;

  // El índice de la lección: sus ideas, en orden, y el cierre.
  const indice: EntradaIndice[] = [
    ...c.ideas.map((idea, k) => ({ id: `idea-${k + 1}`, numero: k + 1, titulo: idea.titulo })),
    { id: "consejos", titulo: t.consejos },
    { id: "practica", titulo: t.practica },
    ...(puentesDe(ref).length > 0 ? [{ id: "conexiones", titulo: textos(lang).puentes.titulo }] : []),
  ];

  return (
    <>
      <Cabecera lang={lang} actual={e.id} />
      <MarcarVista refLeccion={ref} />
      <div className="mx-auto grid max-w-[1200px] gap-x-12 px-[clamp(16px,4vw,40px)] lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-0 max-h-screen overflow-y-auto py-8 pr-1">
            <Temario lang={lang} especialidad={e} variante="lateral" actual={n} indice={<IndiceLateral entradas={indice} />} />
          </div>
        </aside>

        <main className="flex min-w-0 flex-col gap-12 pt-6 pb-16 lg:pt-8">
          <div className="flex flex-col gap-6">
            <details className="rounded-[14px] border border-borde lg:hidden">
              <summary className="flex min-h-12 cursor-pointer items-center gap-2 px-4 text-[15px] font-medium">
                <Punto id={e.id} />
                {rellenar(t.temarioDe, { especialidad: e.nombre })}
              </summary>
              <div className="px-2 pb-3">
                <Temario lang={lang} especialidad={e} variante="lateral" actual={n} />
              </div>
            </details>

            <header className="flex max-w-[780px] flex-col gap-3">
              <p className="flex flex-wrap items-center gap-x-2 text-sm text-tenue">
                <Link href={`/${lang}/${e.slug}/`} className={`inline-flex items-center gap-2 font-medium ${COLOR[e.id].texto} hover:underline`}>
                  <Punto id={e.id} />
                  {e.nombre}
                </Link>
                <span aria-hidden>·</span>
                {rellenar(t.leccionDe, { modulo: leccion.modulo.n, nombreModulo: leccion.modulo.nombre, n: Number(n), total: lecciones.length })}
              </p>
              <h1 className="font-serif text-[clamp(36px,4.6vw,56px)] leading-[1.04] font-normal tracking-[-0.015em] text-balance">{leccion.titulo}</h1>
              <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{c.resumen}</p>
              <a href="#fuentes" className="self-start text-[13.5px] text-tenue hover:text-tinta">
                {rellenar(t.revisada, { fecha: fechaLarga(c.revisada) })}
              </a>
            </header>
          </div>

          <IndiceMovil entradas={indice} lang={lang} />

          <div className="flex flex-col gap-12">
            {c.ideas.map((idea, k) => (
              <IdeaLeccion key={idea.titulo} idea={idea} numero={k + 1} id={`idea-${k + 1}`} fuentes={c.fuentes} lang={lang} />
            ))}
          </div>

          <section id="consejos" aria-labelledby="consejos-titulo" className="flex scroll-mt-20 flex-col gap-6 border-t border-borde pt-12">
            <div className="flex flex-col gap-2">
              <h2 id="consejos-titulo" className="font-serif text-[clamp(28px,3.2vw,38px)] leading-tight font-normal">
                {t.consejos}
              </h2>
              <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-tinta-2">{t.consejosTexto}</p>
            </div>
            <ol className="flex max-w-[72ch] flex-col gap-7">
              {c.consejos.map((consejo, k) => (
                <li key={consejo.titulo} className="grid grid-cols-[34px_minmax(0,1fr)] gap-x-2">
                  <span className="font-serif text-[26px] leading-[1.15] text-acento-texto tabular-nums">{k + 1}</span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-[clamp(21px,2.2vw,24px)] leading-snug font-normal">{consejo.titulo}</h3>
                    <p className="text-[16.5px] leading-relaxed text-pretty text-tinta-2">{consejo.texto}</p>
                    <Respaldos respaldos={consejo.fuentes} fuentes={c.fuentes} lang={lang} />
                    {c.ideas[k] && (
                      <a href={`#idea-${k + 1}`} className="inline-flex min-h-9 items-center self-start text-[13.5px] text-tenue hover:text-tinta">
                        ↑ {rellenar(t.volverIdea, { n: k + 1, titulo: c.ideas[k].titulo })}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="practica" aria-labelledby="practica-titulo" className="flex scroll-mt-20 flex-col gap-4 rounded-[18px] border border-borde p-[clamp(20px,3vw,32px)]">
            <h2 id="practica-titulo" className="font-serif text-[clamp(26px,2.8vw,34px)] leading-tight font-normal">
              {t.practica}
            </h2>
            <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-pretty text-tinta-2">{c.practica}</p>
            <CompletarLeccion lang={lang} refLeccion={ref} />
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

          <Puentes lang={lang} refLeccion={ref} />

          <ListaFuentes fuentes={c.fuentes} lang={lang} />

          <nav aria-label="Lecciones" className="flex flex-wrap items-center justify-between gap-3 border-t border-borde pt-6">
            <span>
              {previa && (
                <Link href={rutaLeccion(lang, previa)} className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-[18px] text-[15px] hover:bg-suave">
                  {rellenar(t.anterior, { n: Number(previa.n), titulo: previa.titulo })}
                </Link>
              )}
            </span>
            {siguiente?.disponible ? (
              <Link href={rutaLeccion(lang, siguiente)} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
                {rellenar(t.siguiente, { n: Number(siguiente.n), titulo: siguiente.titulo })}
              </Link>
            ) : (
              <span className="flex flex-wrap items-center gap-3">
                {siguiente && <span className="text-[14.5px] text-tenue">{rellenar(t.siguientePronto, { n: Number(siguiente.n), titulo: siguiente.titulo })}</span>}
                <Link href={temario} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
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

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/** "2026-11-01" → «1 de noviembre de 2026». */
function fechaLarga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
}
