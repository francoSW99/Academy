"use client";

import Link from "next/link";
import { Punto } from "@/componentes/Especialidad";
import { IconoFlecha } from "@/componentes/Iconos";
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
    <Link href={rutaLeccion(lang, l)} className="boton-luz min-h-12 gap-2.5 self-start rounded-[22px] py-2.5 pr-5 pl-6 text-[15.5px] leading-snug sm:rounded-full">
      <Punto id={l.especialidad.id} />
      {rellenar(t.seguir, { especialidad: l.especialidad.nombre, n: Number(l.n), titulo: l.titulo })}
      <IconoFlecha className="glass-flecha size-[18px]" />
    </Link>
  );
}
