"use client";

import { useEffect } from "react";
import { IconoCheck } from "@/componentes/Iconos";
import { useAvance } from "@/lib/avance";
import { textos, type Idioma } from "@/lib/idiomas";

/** Anota la lección como vista al abrirla. No dibuja nada. */
export function MarcarVista({ refLeccion }: { refLeccion: string }) {
  const { marcarVista } = useAvance();
  useEffect(() => marcarVista(refLeccion), [refLeccion, marcarVista]);
  return null;
}

export function CompletarLeccion({ lang, refLeccion }: { lang: Idioma; refLeccion: string }) {
  const t = textos(lang).leccion;
  const { avance, alternarHecha } = useAvance();
  const hecha = avance[refLeccion]?.hecha ?? false;
  return (
    <button
      type="button"
      aria-pressed={hecha}
      onClick={() => alternarHecha(refLeccion)}
      className="glass-pill completar inline-flex min-h-14 w-full items-center justify-center gap-2.5 px-4 py-3 text-[15.5px] leading-snug font-medium sm:w-auto sm:self-start sm:px-8"
    >
      {hecha && <IconoCheck className="size-[18px]" />}
      {hecha ? t.hecha : t.marcarHecha}
    </button>
  );
}
