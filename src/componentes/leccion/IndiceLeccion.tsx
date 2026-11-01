"use client";

import { useEffect, useState } from "react";
import { textos, type Idioma } from "@/lib/idiomas";

export type EntradaIndice = { id: string; numero?: number; titulo: string };

/** Marca la entrada que estás leyendo: la que cruza la franja de arriba de la pantalla. */
function useEntradaActiva(entradas: EntradaIndice[]) {
  const [activa, setActiva] = useState(entradas[0]?.id);
  useEffect(() => {
    const secciones = entradas.map((e) => document.getElementById(e.id)).filter((s): s is HTMLElement => s !== null);
    const observador = new IntersectionObserver(
      (vistas) => {
        const dentro = vistas.filter((v) => v.isIntersecting);
        if (dentro.length > 0) setActiva(dentro[0].target.id);
      },
      { rootMargin: "-15% 0px -75% 0px" },
    );
    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, [entradas]);
  return activa;
}

function Nombre({ e }: { e: EntradaIndice }) {
  return (
    <>
      {/* La primera columna va siempre, con número o vacía, para que el título no caiga en ella. */}
      <span className="tabular-nums">{e.numero}</span>
      <span className="min-w-0">{e.titulo}</span>
    </>
  );
}

/** El índice de la lección dentro de la barra lateral, debajo de la lección que estás leyendo. */
export function IndiceLateral({ entradas }: { entradas: EntradaIndice[] }) {
  const activa = useEntradaActiva(entradas);
  return (
    <ol className="mt-1 mb-2 ml-[19px] flex flex-col border-l border-borde pl-3">
      {entradas.map((e) => {
        const esActiva = e.id === activa;
        return (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={esActiva ? "location" : undefined}
              className={`grid min-h-9 grid-cols-[16px_minmax(0,1fr)] items-baseline gap-1.5 rounded-lg px-2 py-1 text-[13.5px] leading-snug ${
                esActiva ? "font-medium text-tinta" : "text-tenue hover:text-tinta"
              }`}
            >
              <Nombre e={e} />
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** En el celular: una franja fija arriba que dice en qué idea vas; al tocarla, se abre el índice. */
export function IndiceMovil({ entradas, lang }: { entradas: EntradaIndice[]; lang: Idioma }) {
  const t = textos(lang).leccion;
  const activa = useEntradaActiva(entradas);
  const [abierto, setAbierto] = useState(false);
  const actual = entradas.find((e) => e.id === activa) ?? entradas[0];
  return (
    <details
      open={abierto}
      onToggle={(ev) => setAbierto(ev.currentTarget.open)}
      className="sticky top-0 z-20 -mx-[clamp(16px,4vw,40px)] border-b border-borde bg-fondo lg:hidden"
    >
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-[clamp(16px,4vw,40px)] [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 truncate text-[14.5px]">
          <span className="text-tenue">{t.enEstaLeccion} · </span>
          <span className="font-medium">
            {actual.numero !== undefined && `${actual.numero} · `}
            {actual.titulo}
          </span>
        </span>
        <span aria-hidden className={`text-tenue transition-transform ${abierto ? "rotate-180" : ""}`}>
          ▾
        </span>
      </summary>
      <ol className="flex flex-col px-[clamp(16px,4vw,40px)] pb-3">
        {entradas.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              onClick={() => setAbierto(false)}
              className={`grid min-h-11 grid-cols-[20px_minmax(0,1fr)] items-center gap-2 text-[15px] ${e.id === activa ? "font-medium text-tinta" : "text-tinta-2"}`}
            >
              <Nombre e={e} />
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
