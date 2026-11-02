"use client";

import Link from "next/link";
import { COLOR } from "@/componentes/Especialidad";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import type { Especialidad, Leccion } from "@/ruta/tipos";

/** Las lecciones de una especialidad y cuántas completaste. */
export function useAvanceDe(especialidad: Especialidad) {
  const { avance } = useAvance();
  const lecciones = especialidad.modulos.flatMap((m) => m.lecciones);
  const estado = (l: Leccion) => avance[`${especialidad.id}/${l.n}`];
  const hechas = lecciones.filter((l) => estado(l)?.hecha).length;
  return { lecciones, estado, hechas };
}

/** La barra de avance de una especialidad, pintada con su color. */
export function BarraAvance({ lang, especialidad }: { lang: Idioma; especialidad: Especialidad }) {
  const t = textos(lang).curso;
  const { lecciones, hechas } = useAvanceDe(especialidad);
  const texto = rellenar(t.avance, { hechas, total: lecciones.length });
  return (
    <div className="flex flex-col gap-2">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={lecciones.length}
        aria-valuenow={hechas}
        aria-label={texto}
        className="h-2 w-full max-w-[420px] overflow-hidden rounded-full bg-borde"
      >
        <div className={`h-full rounded-full ${COLOR[especialidad.id].fondo}`} style={{ width: `${(100 * hechas) / lecciones.length}%` }} />
      </div>
      <p className="text-sm text-tenue">{texto}</p>
    </div>
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
    <div className="flex flex-col gap-4">
      <BarraAvance lang={lang} especialidad={especialidad} />
      {siguiente && texto && (
        <Link
          href={`/${lang}/${especialidad.slug}/leccion/${siguiente.n}/`}
          className="inline-flex min-h-12 items-center self-start rounded-full bg-primario px-6 py-2.5 text-[15.5px] leading-snug font-medium text-primario-tinta"
        >
          {rellenar(texto, { n: Number(siguiente.n), titulo: siguiente.titulo })} →
        </Link>
      )}
    </div>
  );
}
