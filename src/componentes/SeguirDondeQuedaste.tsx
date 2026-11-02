"use client";

import Link from "next/link";
import { Punto } from "@/componentes/Especialidad";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { lecciones, rutaLeccion } from "@/ruta/especialidades";

/** En el Inicio: si ya empezaste una lección y no la terminaste, un botón para volver a ella. */
export function SeguirDondeQuedaste({ lang }: { lang: Idioma }) {
  const t = textos(lang).inicio;
  const { avance } = useAvance();
  const l = lecciones.find((l) => l.disponible && avance[l.ref]?.vista && !avance[l.ref]?.hecha);
  if (!l) return null;
  return (
    <Link
      href={rutaLeccion(lang, l)}
      className="inline-flex min-h-12 items-center gap-2.5 self-start rounded-full bg-primario px-6 py-2.5 text-[15.5px] leading-snug font-medium text-primario-tinta"
    >
      <Punto id={l.especialidad.id} />
      {rellenar(t.seguir, { especialidad: l.especialidad.nombre, n: Number(l.n), titulo: l.titulo })} →
    </Link>
  );
}
