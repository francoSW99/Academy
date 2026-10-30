"use client";

import { useAvance } from "@/lib/avance";
import { textos, type Idioma } from "@/lib/idiomas";

export function PracticaHecha({ lang, estacion }: { lang: Idioma; estacion: string }) {
  const t = textos(lang).estacion;
  const { avance, alternarHecha } = useAvance();
  const hecha = avance[estacion]?.hecha ?? false;

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        aria-pressed={hecha}
        onClick={() => alternarHecha(estacion)}
        className={`inline-flex min-h-11 items-center self-start rounded-full border px-5 text-[15px] font-medium ${
          hecha ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte text-tinta hover:bg-suave"
        }`}
      >
        {hecha ? `✓ ${t.hecha}` : t.marcarHecha}
      </button>
      {hecha && <p className="text-acento-texto">{t.completada}</p>}
    </div>
  );
}
