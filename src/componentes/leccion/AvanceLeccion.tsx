"use client";

import { useEffect } from "react";
import { useAvance } from "@/lib/avance";
import { textos, type Idioma } from "@/lib/idiomas";

/** Anota la lección como vista al abrirla. No dibuja nada. */
export function MarcarVista({ n }: { n: string }) {
  const { marcarVista } = useAvance();
  useEffect(() => marcarVista(n), [n, marcarVista]);
  return null;
}

export function CompletarLeccion({ lang, n }: { lang: Idioma; n: string }) {
  const t = textos(lang).leccion;
  const { avance, alternarHecha } = useAvance();
  const hecha = avance[n]?.hecha ?? false;
  return (
    <button
      type="button"
      aria-pressed={hecha}
      onClick={() => alternarHecha(n)}
      className={`inline-flex min-h-12 items-center self-start rounded-full border px-6 text-[15px] font-medium ${
        hecha ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte text-tinta hover:bg-suave"
      }`}
    >
      {hecha ? `✓ ${t.hecha}` : t.marcarHecha}
    </button>
  );
}
