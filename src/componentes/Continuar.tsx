"use client";

import Link from "next/link";
import { IconoFlecha } from "@/componentes/Iconos";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { idDe, propias } from "@/ruta/especialidades";
import type { Especialidad, Leccion } from "@/ruta/tipos";

/** Las lecciones de una especialidad y cuántas completaste. */
export function useAvanceDe(especialidad: Especialidad) {
  const { avance } = useAvance();
  const lecciones = especialidad.modulos.flatMap(propias);
  const estado = (l: Leccion) => avance[`${especialidad.id}/${idDe(l)}`];
  const hechas = lecciones.filter((l) => estado(l)?.hecha).length;
  return { lecciones, estado, hechas };
}

/** La línea de avance: un trazo luminoso y un punto brillante donde vas. */
function LineaAvance({ hechas, total, etiqueta, luz }: { hechas: number; total: number; etiqueta: string; luz?: string }) {
  const porcentaje = `${(100 * hechas) / total}%`;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={hechas}
      aria-label={etiqueta}
      className="barra-luz"
      style={luz ? ({ "--luz": luz } as React.CSSProperties) : undefined}
    >
      <span className="barra-luz-relleno" style={{ width: porcentaje }} />
      <span className="barra-luz-punto" style={{ left: porcentaje }} />
    </div>
  );
}

/** El avance de una especialidad, con la luz de su color. */
export function BarraAvance({ lang, especialidad }: { lang: Idioma; especialidad: Especialidad }) {
  const t = textos(lang).curso;
  const { lecciones, hechas } = useAvanceDe(especialidad);
  const texto = rellenar(t.avance, { hechas, total: lecciones.length });
  return (
    <div className="flex flex-col gap-2.5">
      <div className="max-w-[420px]">
        <LineaAvance hechas={hechas} total={lecciones.length} etiqueta={texto} luz={`var(--esp-${especialidad.id})`} />
      </div>
      <p className="text-sm text-tenue">{texto}</p>
    </div>
  );
}

/** Arriba del temario de la lección: cuánto llevas del curso. */
export function WidgetAvance({ lang, especialidad }: { lang: Idioma; especialidad: Especialidad }) {
  const t = textos(lang).curso;
  const { lecciones, hechas } = useAvanceDe(especialidad);
  return (
    <section aria-label={t.tuAvance} className="glass-card flex shrink-0 flex-col gap-3 p-4">
      <div className="flex items-baseline justify-between gap-3 text-[13px] text-tenue">
        <span>{t.tuAvance}</span>
        <span className="tabular-nums">{rellenar(t.avanceCorto, { hechas, total: lecciones.length })}</span>
      </div>
      <p className="text-[34px] leading-none font-light tracking-[-0.02em] tabular-nums">{Math.round((100 * hechas) / lecciones.length)}&nbsp;%</p>
      <LineaAvance hechas={hechas} total={lecciones.length} etiqueta={rellenar(t.avance, { hechas, total: lecciones.length })} />
    </section>
  );
}

/** En la barra de arriba: tu avance en la especialidad, en una píldora que lleva a su temario. */
export function AvanceBarraSuperior({ lang, especialidad }: { lang: Idioma; especialidad: Especialidad }) {
  const t = textos(lang).curso;
  const { lecciones, hechas } = useAvanceDe(especialidad);
  return (
    <Link
      href={`/${lang}/${especialidad.slug}/#temario`}
      aria-label={rellenar(t.avance, { hechas, total: lecciones.length })}
      className="glass-pill hud-pill tabular-nums"
    >
      <span aria-hidden className="punto-luz" />
      {hechas}/{lecciones.length}
    </Link>
  );
}

/** El avance de la especialidad y un botón para seguir donde quedaste (o empezar). */
export function Continuar({ lang, especialidad }: { lang: Idioma; especialidad: Especialidad }) {
  const t = textos(lang).curso;
  const { lecciones, estado } = useAvanceDe(especialidad);
  const disponibles = lecciones.filter((l) => l.disponible);
  const siguiente = disponibles.find((l) => !estado(l)?.hecha) ?? disponibles[0];
  const empezo = lecciones.some((l) => estado(l)?.vista);
  const texto = !siguiente ? null : estado(siguiente)?.hecha ? t.repasar : empezo ? t.continuar : t.empezar;

  return (
    <div className="flex flex-col gap-5">
      <BarraAvance lang={lang} especialidad={especialidad} />
      {siguiente && texto && (
        <Link href={`/${lang}/${especialidad.slug}/leccion/${idDe(siguiente)}/`} className="boton-luz min-h-12 gap-2.5 self-start rounded-[22px] py-2.5 pr-5 pl-6 text-[15.5px] leading-snug sm:rounded-full">
          {rellenar(texto, { n: Number(siguiente.n), titulo: siguiente.titulo })}
          <IconoFlecha className="glass-flecha size-[18px]" />
        </Link>
      )}
    </div>
  );
}
