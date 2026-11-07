"use client";

import { useEffect, useRef, useState } from "react";
import { BotonTema } from "@/componentes/BotonTema";
import { Punto } from "@/componentes/Especialidad";
import { IconoCerrar, IconoTemario } from "@/componentes/Iconos";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import type { Especialidad } from "@/ruta/tipos";

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
    <ol className="mx-2.5 mb-2.5 ml-[20px] flex flex-col border-l border-tinta/10 pl-2">
      {entradas.map((e) => {
        const esActiva = e.id === activa;
        return (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={esActiva ? "location" : undefined}
              className={`indice-entrada grid min-h-9 grid-cols-[16px_minmax(0,1fr)] items-baseline gap-1.5 rounded-lg px-1.5 py-1.5 text-[13px] leading-snug transition-colors duration-200 ${
                esActiva ? "font-medium" : "text-tenue hover:text-tinta"
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

/**
 * En el celular: la barra de arriba dice en qué idea vas. Al tocarla se abre el Glass Drawer,
 * con tu avance, el temario y el índice de la lección. `children` es lo que va adentro.
 */
export function TemarioMovil({ entradas, lang, especialidad, children }: { entradas: EntradaIndice[]; lang: Idioma; especialidad: Especialidad; children: React.ReactNode }) {
  const t = textos(lang).leccion;
  const activa = useEntradaActiva(entradas);
  const panel = useRef<HTMLDialogElement>(null);
  const actual = entradas.find((e) => e.id === activa) ?? entradas[0];

  // Si la pantalla crece hasta el computador con el panel abierto, se cierra: ahí el temario va al costado.
  useEffect(() => {
    const computador = window.matchMedia("(min-width: 1024px)");
    const alCambiar = () => {
      if (computador.matches) panel.current?.close();
    };
    computador.addEventListener("change", alCambiar);
    return () => computador.removeEventListener("change", alCambiar);
  }, []);

  return (
    <>
      <button type="button" aria-haspopup="dialog" aria-label={rellenar(t.abrirTemario, { titulo: actual.titulo })} onClick={() => panel.current?.showModal()} className="hud-indice">
        <span className="min-w-0 truncate">
          {actual.numero !== undefined && <span className="text-tenue tabular-nums">{actual.numero} · </span>}
          <span className="font-medium">{actual.titulo}</span>
        </span>
        <span aria-hidden className="glass-pill hud-indice-icono">
          <IconoTemario className="size-[18px]" />
        </span>
      </button>
      <dialog
        ref={panel}
        aria-label={rellenar(t.temarioDe, { especialidad: especialidad.nombre })}
        className="glass-drawer"
        onClick={(ev) => {
          // Se cierra al tocar fuera del panel o al elegir un enlace.
          const tocado = ev.target as HTMLElement;
          if (tocado === ev.currentTarget || tocado.closest("a")) ev.currentTarget.close();
        }}
      >
        <div className="glass-drawer-interior">
          <div className="flex items-center justify-between gap-3 pl-1.5">
            <span className="flex items-center gap-2 text-[15px] font-medium">
              <Punto id={especialidad.id} />
              {rellenar(t.temarioDe, { especialidad: especialidad.nombre })}
            </span>
            <span className="flex shrink-0 items-center gap-2">
              <BotonTema lang={lang} />
              <button type="button" aria-label={t.cerrar} onClick={() => panel.current?.close()} className="glass-pill grid size-11 shrink-0 place-items-center">
                <IconoCerrar className="size-[18px]" />
              </button>
            </span>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
