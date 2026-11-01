"use client";

import Link from "next/link";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { lecciones, totalLecciones } from "@/ruta/curso";

/** El avance del curso y un botón para seguir donde quedaste (o empezar). */
export function Continuar({ lang }: { lang: Idioma }) {
  const t = textos(lang).curso;
  const { avance } = useAvance();
  const hechas = lecciones.filter((l) => avance[l.n]?.hecha).length;
  const disponibles = lecciones.filter((l) => l.disponible);
  const siguiente = disponibles.find((l) => !avance[l.n]?.hecha) ?? disponibles[0];
  const empezo = Object.values(avance).some((e) => e.vista);
  const texto = !siguiente
    ? null
    : avance[siguiente.n]?.hecha
      ? t.repasar
      : empezo
        ? t.continuar
        : t.empezar;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={totalLecciones}
          aria-valuenow={hechas}
          aria-label={rellenar(t.avance, { hechas, total: totalLecciones })}
          className="h-2 w-full max-w-[420px] overflow-hidden rounded-full bg-borde"
        >
          <div className="h-full rounded-full bg-linea" style={{ width: `${(100 * hechas) / totalLecciones}%` }} />
        </div>
        <p className="text-sm text-tenue">
          {rellenar(t.avance, { hechas, total: totalLecciones })} · {rellenar(t.disponibles, { n: disponibles.length })}
        </p>
      </div>
      {siguiente && texto && (
        <Link
          href={`/${lang}/leccion/${siguiente.n}/`}
          className="inline-flex min-h-12 items-center self-start rounded-full bg-primario px-6 py-2.5 text-[15.5px] leading-snug font-medium text-primario-tinta"
        >
          {rellenar(texto, { n: Number(siguiente.n), titulo: siguiente.titulo })} →
        </Link>
      )}
    </div>
  );
}
