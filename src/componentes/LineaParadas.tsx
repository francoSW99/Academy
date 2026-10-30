"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAvance } from "@/lib/avance";
import type { Idioma } from "@/lib/idiomas";
import { paradasMetodo } from "@/ruta/lineas";
import type { ParadaId } from "@/ruta/tipos";

/** Las 7 paradas de una estación, unidas por un riel. También registra la parada como vista. */
export function LineaParadas({ lang, estacion, actual }: { lang: Idioma; estacion: string; actual: ParadaId }) {
  const { avance, marcarVista } = useAvance();
  const datos = avance[estacion];

  useEffect(() => marcarVista(estacion, actual), [estacion, actual, marcarVista]);

  const hecha = (n: ParadaId) => n !== actual && (datos?.hecha || datos?.vistas.includes(n));

  return (
    <nav aria-label="Paradas de esta estación" className="overflow-x-auto">
      <ol className="grid min-w-[840px] grid-cols-[repeat(7,minmax(116px,1fr))] px-0.5 pt-1 pb-1.5">
        {paradasMetodo.map((p, i) => {
          const esActual = p.n === actual;
          const esHecha = hecha(p.n);
          const siguienteVista = i < 6 && (hecha(paradasMetodo[i + 1].n) || paradasMetodo[i + 1].n === actual);
          return (
            <li key={p.n} className="relative">
              {i < 6 && (
                <span
                  aria-hidden
                  className={`absolute top-[13px] right-0 left-3.5 h-[3px] ${esHecha && siguienteVista ? "bg-linea" : "bg-borde-fuerte"}`}
                />
              )}
              <Link
                href={`/${lang}/estacion/${estacion}/${p.n}/`}
                aria-current={esActual ? "step" : undefined}
                className="group relative flex min-h-11 flex-col items-start gap-2.5 pr-3 pb-1"
              >
                <span
                  className={`flex size-[29px] items-center justify-center rounded-full border-[3px] text-[12.5px] leading-none font-semibold ${
                    esActual
                      ? "aqui border-acento bg-acento text-acento-tinta"
                      : esHecha
                        ? "border-linea bg-linea text-pizarra"
                        : "border-borde-fuerte bg-fondo text-tenue"
                  }`}
                >
                  {esHecha ? "✓" : p.n}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className={`text-[15px] leading-tight group-hover:underline ${esActual ? "font-semibold text-tinta" : "text-tinta-2"}`}>
                    {p.nombre}
                  </span>
                  <span className="text-[12.5px] text-tenue">{p.que}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
