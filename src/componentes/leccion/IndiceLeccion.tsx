"use client";

import { useEffect, useState } from "react";
import { textos, type Idioma } from "@/lib/idiomas";

const PARTES = [
  { id: "teoria", clave: "teoria" },
  { id: "vida-real", clave: "vidaReal" },
  { id: "en-tu-prompt", clave: "enTuPrompt" },
  { id: "practica", clave: "practica" },
] as const;

/** Índice fijo arriba de la lección: las 3 partes y la práctica, con la que estás leyendo marcada. */
export function IndiceLeccion({ lang }: { lang: Idioma }) {
  const t = textos(lang).leccion;
  const [activa, setActiva] = useState<string>("teoria");

  useEffect(() => {
    const secciones = PARTES.map((p) => document.getElementById(p.id)).filter((s): s is HTMLElement => s !== null);
    // Cuenta como «la que lees» la parte que cruza la franja de arriba de la pantalla.
    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas.filter((e) => e.isIntersecting);
        if (visibles.length > 0) setActiva(visibles[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, []);

  return (
    <nav aria-label={t.enEstaLeccion} className="sticky top-0 z-10 -mx-1 border-b border-borde bg-fondo px-1">
      <ol className="flex gap-1 overflow-x-auto">
        {PARTES.map((p, i) => {
          const esActiva = p.id === activa;
          return (
            <li key={p.id} className="shrink-0">
              <a
                href={`#${p.id}`}
                aria-current={esActiva ? "location" : undefined}
                className={`-mb-px inline-flex min-h-12 items-center gap-2 border-b-2 px-3 text-[14.5px] whitespace-nowrap ${
                  esActiva ? "border-acento font-medium text-tinta" : "border-transparent text-tinta-2 hover:text-tinta"
                }`}
              >
                {i < 3 && <span className={`tabular-nums ${esActiva ? "text-acento-texto" : "text-tenue"}`}>{i + 1}</span>}
                {t.partes[p.clave]}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
