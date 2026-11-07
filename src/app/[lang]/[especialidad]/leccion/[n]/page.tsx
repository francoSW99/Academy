import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { WidgetAvance } from "@/componentes/Continuar";
import { Punto } from "@/componentes/Especialidad";
import { IconoFlecha, IconoFlechaAtras } from "@/componentes/Iconos";
import { Temario } from "@/componentes/Temario";
import { VideoBiblioteca } from "@/componentes/VideoBiblioteca";
import { CompletarLeccion, MarcarVista } from "@/componentes/leccion/AvanceLeccion";
import { BotonCopiar } from "@/componentes/leccion/BotonCopiar";
import { ListaFuentes, Respaldos } from "@/componentes/leccion/Fuentes";
import { IdeaLeccion } from "@/componentes/leccion/IdeaLeccion";
import { IndiceLateral, TemarioMovil, type EntradaIndice } from "@/componentes/leccion/IndiceLeccion";
import { Puentes } from "@/componentes/leccion/Puentes";
import { esIdioma, idiomas, rellenar, textos } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";
import { puentesDe } from "@/ruta/conexiones";
import { buscarLeccion, especialidadPorSlug, idDe, leccionesDe, rutaLeccion } from "@/ruta/especialidades";
import { minutosDeLectura } from "@/ruta/lectura";
import type { RefLeccion } from "@/ruta/tipos";

export const dynamicParams = false;

// Export estático: una página por idioma × lección disponible, dentro de su especialidad.
export function generateStaticParams() {
  return idiomas.flatMap((lang) =>
    Object.keys(contenidos).map((ref) => {
      const l = buscarLeccion(ref)!;
      return { lang, especialidad: l.especialidad.slug, n: idDe(l) };
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
  const i = lecciones.findIndex((l) => idDe(l) === n);
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
    <div className="marco">
      <Cabecera
        lang={lang}
        especialidad={e}
        leccion={leccion.n}
        movil={
          <TemarioMovil entradas={indice} lang={lang} especialidad={e}>
            <WidgetAvance lang={lang} especialidad={e} />
            <Temario lang={lang} especialidad={e} variante="lateral" actual={n} indice={<IndiceLateral entradas={indice} />} />
          </TemarioMovil>
        }
      />
      <MarcarVista refLeccion={ref} />
      <div className="mt-2 grid gap-4 lg:mt-4 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="panel-temario glass-board">
            <WidgetAvance lang={lang} especialidad={e} />
            <div className="panel-temario-lista">
              <Temario lang={lang} especialidad={e} variante="lateral" actual={n} indice={<IndiceLateral entradas={indice} />} />
            </div>
          </div>
        </aside>

        <main className="glass-reader flex min-w-0 flex-col gap-10 p-1.5 sm:p-2.5">
          <header className="glass-card-directional flex flex-col gap-5 p-[clamp(20px,3.6vw,48px)]">
            <div className="flex flex-wrap items-center gap-2">
              <Link href={`/${lang}/${e.slug}/`} className="glass-pill insignia lg:hidden">
                <Punto id={e.id} />
                {e.nombre}
              </Link>
              <span className="glass-pill insignia tracking-[0.05em] uppercase">{rellenar(t.insignia, { modulo: leccion.modulo.n, n: leccion.n })}</span>
              <span className="glass-pill insignia">{rellenar(t.minutos, { n: minutosDeLectura(c) })}</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.03] font-semibold tracking-[-0.03em] text-balance text-tinta">{leccion.titulo}</h1>
            <p className="max-w-[62ch] text-[clamp(17px,1.5vw,19px)] leading-relaxed text-pretty text-tenue">{c.resumen}</p>
            <a href="#fuentes" className="self-start text-[13.5px] text-tenue transition-colors duration-200 hover:text-tinta">
              {rellenar(t.revisada, { fecha: fechaLarga(c.revisada) })}
            </a>
          </header>

          <div className="flex flex-col gap-12 px-[clamp(10px,2.6vw,32px)] pb-[clamp(14px,2.6vw,32px)]">
            <div className="flex flex-col gap-12">
              {c.ideas.map((idea, k) => (
                <IdeaLeccion key={idea.titulo} idea={idea} numero={k + 1} id={`idea-${k + 1}`} fuentes={c.fuentes} lang={lang} />
              ))}
            </div>

            <section id="consejos" aria-labelledby="consejos-titulo" className="flex flex-col gap-6 border-t border-borde pt-12">
              <div className="flex flex-col gap-2">
                <h2 id="consejos-titulo" className="text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em] text-balance">
                  {t.consejos}
                </h2>
                <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-tinta-2">{t.consejosTexto}</p>
              </div>
              <ol className="glass-callout flex flex-col" data-tono="tip">
                {c.consejos.map((consejo, k) => (
                  <li key={consejo.titulo} className="glass-callout-linea grid grid-cols-[28px_minmax(0,1fr)] gap-x-2 border-t p-[clamp(16px,2.2vw,24px)] first:border-t-0">
                    <span className="glass-callout-numero text-[20px] leading-[1.3] font-medium tabular-nums">{k + 1}</span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[clamp(18px,2vw,20px)] leading-snug font-medium tracking-[-0.01em]">{consejo.titulo}</h3>
                      <p className="max-w-[68ch] text-[16.5px] leading-relaxed text-pretty text-tinta-2">{consejo.texto}</p>
                      <Respaldos respaldos={consejo.fuentes} fuentes={c.fuentes} lang={lang} />
                      {c.ideas[k] && (
                        <a href={`#idea-${k + 1}`} className="inline-flex min-h-9 items-center gap-1.5 self-start text-[13.5px] text-tenue transition-colors duration-200 hover:text-tinta">
                          <IconoFlecha className="size-3.5 -rotate-90" />
                          {rellenar(t.volverIdea, { n: k + 1, titulo: c.ideas[k].titulo })}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="practica" aria-labelledby="practica-titulo" className="glass-callout flex flex-col gap-4 p-[clamp(18px,3vw,32px)]">
              <h2 id="practica-titulo" className="text-[clamp(24px,2.6vw,32px)] leading-tight font-semibold tracking-[-0.02em]">
                {t.practica}
              </h2>
              <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-pretty text-tinta-2">{c.practica}</p>
              <CompletarLeccion lang={lang} refLeccion={ref} />
            </section>

            {c.preguntas && (
              <section aria-labelledby="preguntas" className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 id="preguntas" className="text-[21px] font-medium tracking-[-0.012em]">
                    {t.preguntas}
                  </h2>
                  <p className="text-[15px] text-tenue">{t.preguntasTexto}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {c.preguntas.map((q) => (
                    <li key={q} className="glass-code">
                      <div className="glass-code-cabecera">
                        <span>{t.prompt}</span>
                        <BotonCopiar texto={q} lang={lang} />
                      </div>
                      <p className="px-4 py-3.5 font-mono text-[14.5px] leading-relaxed text-pretty text-tinta-2">{q}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {c.videos && (
              <section aria-labelledby="profundizar" className="flex flex-col gap-4">
                <h2 id="profundizar" className="text-[21px] font-medium tracking-[-0.012em]">
                  {t.profundizar}
                </h2>
                {c.videos.map((v) => (
                  <VideoBiblioteca key={v.id} video={v} lang={lang} />
                ))}
              </section>
            )}

            <Puentes lang={lang} refLeccion={ref} />

            <ListaFuentes fuentes={c.fuentes} lang={lang} />

            <nav aria-label="Lecciones" className={`grid gap-3 ${previa ? "sm:grid-cols-2" : ""}`}>
              {previa && (
                <Link href={rutaLeccion(lang, previa)} className="glass-opcion flex min-h-24 items-center gap-4 rounded-[20px] p-5">
                  <IconoFlechaAtras className="glass-flecha glass-flecha-atras size-5 text-tenue" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[13px] text-tenue">{t.anterior}</span>
                    <span className="text-[17px] leading-snug font-medium">{rellenar(t.leccionTitulo, { n: Number(previa.n), titulo: previa.titulo })}</span>
                  </span>
                </Link>
              )}
              {siguiente?.disponible ? (
                <Link href={rutaLeccion(lang, siguiente)} className="glass-opcion flex min-h-24 items-center justify-between gap-4 rounded-[20px] p-5">
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[13px] text-tenue">{t.siguiente}</span>
                    <span className="text-[17px] leading-snug font-medium">{rellenar(t.leccionTitulo, { n: Number(siguiente.n), titulo: siguiente.titulo })}</span>
                  </span>
                  <IconoFlecha className="glass-flecha size-5" />
                </Link>
              ) : (
                <Link href={temario} className="glass-opcion flex min-h-24 items-center justify-between gap-4 rounded-[20px] p-5">
                  <span className="flex min-w-0 flex-col gap-1">
                    {siguiente && <span className="text-[13px] text-tenue">{rellenar(t.siguientePronto, { n: Number(siguiente.n), titulo: siguiente.titulo })}</span>}
                    <span className="text-[17px] leading-snug font-medium">{t.volverTemario}</span>
                  </span>
                  <IconoFlecha className="glass-flecha size-5" />
                </Link>
              )}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/** "2026-11-01" → «1 de noviembre de 2026». */
function fechaLarga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
}
