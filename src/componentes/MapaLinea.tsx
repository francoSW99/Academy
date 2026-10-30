"use client";

import Link from "next/link";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import type { Linea } from "@/ruta/tipos";

/** Metro vertical: zonas = cuadrados numerados, estaciones = círculos sobre la línea. */
export function MapaLinea({ lang, linea }: { lang: Idioma; linea: Linea }) {
  const t = textos(lang).portada;
  const { avance } = useAvance();

  return (
    <ol aria-label={`Estaciones de la línea ${linea.n}, en orden`} className="min-w-0 flex-[999_1_560px]">
      {linea.zonas.map((zona, zi) => (
        <li key={zona.n}>
          <div className="grid min-h-[76px] grid-cols-[56px_minmax(0,1fr)]">
            <Riel desdeMitad={zi === 0}>
              <span className="relative flex size-[30px] items-center justify-center rounded-lg border-[3px] border-linea bg-fondo font-serif text-[15px] leading-none">
                {zona.n}
              </span>
            </Riel>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 self-center py-3.5 pl-2.5 pr-1">
              <h3 className="font-serif text-[clamp(22px,2.2vw,28px)] leading-tight font-normal">
                Zona {zona.n} · {zona.nombre}
              </h3>
              <span className="text-sm text-tenue">{rellenar(t.estaciones, { n: zona.estaciones.length })}</span>
            </div>
          </div>
          <ol>
            {zona.estaciones.map((e) => {
              const hecha = avance[e.n]?.hecha ?? false;
              const contenido = (
                <>
                  <Riel>
                    {e.abierta && !hecha ? (
                      <span className="aqui relative size-[22px] rounded-full bg-acento" />
                    ) : hecha ? (
                      <span className="relative size-4 rounded-full bg-linea" />
                    ) : (
                      <span className="relative size-4 rounded-full border-[3px] border-linea bg-fondo" />
                    )}
                  </Riel>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5 self-center py-3 pl-2.5 pr-3">
                    <span className={`text-sm tabular-nums ${e.abierta ? "text-acento-texto" : "text-tenue"}`}>{e.n}</span>
                    <span className={e.abierta ? "text-lg font-semibold" : "text-[16.5px] text-tinta-2"}>{e.titulo}</span>
                    {e.abierta && (
                      <span className="inline-flex min-h-7 items-center rounded-full bg-acento px-3 text-[13px] font-medium text-acento-tinta">
                        {hecha ? t.completada : t.abierta}
                      </span>
                    )}
                    {e.combinaL2 && (
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] text-l2">
                        <span aria-hidden className="w-3.5 border-t-2 border-dashed border-l2" />
                        L2 · {e.combinaL2}
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={e.n}>
                  {e.abierta ? (
                    <Link
                      href={`/${lang}/estacion/${e.n}/1/`}
                      className="grid min-h-[68px] grid-cols-[56px_minmax(0,1fr)] rounded-2xl hover:bg-suave"
                    >
                      {contenido}
                    </Link>
                  ) : (
                    <div className="grid min-h-14 grid-cols-[56px_minmax(0,1fr)]">{contenido}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </li>
      ))}
      {linea.destino && (
        <li>
          <div className="grid min-h-[104px] grid-cols-[56px_minmax(0,1fr)]">
            <span aria-hidden className="relative flex justify-center">
              <span className="absolute top-0 left-[calc(50%-1.5px)] h-[34px] w-[3px] bg-linea" />
              <span className="relative mt-[30px] size-6 rounded-md bg-linea" />
            </span>
            <span className="flex flex-col gap-1 pt-7 pr-3 pb-2 pl-2.5">
              <span className="text-[13px] text-tenue">{t.destino}</span>
              <span className="font-serif text-[26px] leading-tight">{linea.destino.titulo}</span>
              <span className="text-[15.5px] text-tinta-2">{linea.destino.texto}</span>
            </span>
          </div>
        </li>
      )}
    </ol>
  );
}

function Riel({ children, desdeMitad = false }: { children: React.ReactNode; desdeMitad?: boolean }) {
  return (
    <span aria-hidden className="relative flex items-center justify-center">
      <span className={`absolute bottom-0 left-[calc(50%-1.5px)] w-[3px] bg-linea ${desdeMitad ? "top-1/2" : "top-0"}`} />
      {children}
    </span>
  );
}
