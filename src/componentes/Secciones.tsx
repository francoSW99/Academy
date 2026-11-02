"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { textos, type Idioma } from "@/lib/idiomas";
import { especialidades } from "@/ruta/especialidades";
import type { IdEspecialidad } from "@/ruta/tipos";

type IdSeccion = "inicio" | IdEspecialidad;

// Las clases van escritas enteras para que Tailwind las encuentre.
const COLOR_ICONO: Record<IdSeccion, string> = {
  inicio: "text-tinta",
  ai: "text-esp-ai",
  ml: "text-esp-ml",
  ds: "text-esp-ds",
};

/** La sección de una dirección: /es/ es el Inicio; /es/ai-engineering/… es AI Engineering. */
function seccionDe(ruta: string, lang: string): IdSeccion | null {
  const partes = ruta.split("/").filter(Boolean);
  if (partes[0] !== lang) return null;
  if (partes.length === 1) return "inicio";
  return especialidades.find((e) => e.slug === partes[1])?.id ?? null;
}

type Caja = { x: number; y: number; w: number; h: number };

/**
 * El selector de las 4 secciones: una barra de vidrio que flota sobre la página.
 * En el celular y la tablet va abajo, como una barra de pestañas; en el computador, arriba al centro.
 * Vive en el layout, así no se vuelve a montar al cambiar de sección y la burbuja de la elegida
 * se desliza hasta la nueva.
 */
export function Secciones({ lang }: { lang: Idioma }) {
  const t = textos(lang).cabecera;
  const ruta = usePathname();
  const actual = seccionDe(ruta, lang);
  // Al tocar una sección, la burbuja se mueve de inmediato, sin esperar a que cargue la página.
  const [pendiente, setPendiente] = useState<IdSeccion | null>(null);
  const elegida = pendiente ?? actual;

  const pista = useRef<HTMLDivElement>(null);
  const [burbuja, setBurbuja] = useState<Caja | null>(null);
  const [animar, setAnimar] = useState(false);

  useEffect(() => setPendiente(null), [ruta]);

  // La burbuja se mide sobre el botón elegido, y otra vez si la barra cambia de forma (celular ↔ computador).
  useLayoutEffect(() => {
    const barra = pista.current;
    if (!barra) return;
    const medir = () => {
      const boton = barra.querySelector<HTMLElement>('[data-elegida="true"]');
      setBurbuja(boton ? { x: boton.offsetLeft, y: boton.offsetTop, w: boton.offsetWidth, h: boton.offsetHeight } : null);
    };
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(barra);
    return () => observador.disconnect();
  }, [elegida]);

  // La primera vez la burbuja aparece en su lugar; desde ahí, se desliza.
  useEffect(() => {
    const cuadro = requestAnimationFrame(() => setAnimar(true));
    return () => cancelAnimationFrame(cuadro);
  }, []);

  const elegir = (id: IdSeccion) => (ev: MouseEvent) => {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
    setPendiente(id);
  };

  const items: { id: IdSeccion; nombre: string; href: string }[] = [
    { id: "inicio", nombre: t.inicio, href: `/${lang}/` },
    ...especialidades.map((e) => ({ id: e.id, nombre: e.corto, href: `/${lang}/${e.slug}/` })),
  ];

  return (
    <nav aria-label={t.secciones} className="secciones" data-lista={burbuja ? "" : undefined} data-animar={animar ? "" : undefined}>
      <div ref={pista} className="secciones-pista">
        {burbuja && elegida && (
          <span
            aria-hidden
            className="secciones-burbuja"
            style={{
              transform: `translate(${burbuja.x}px, ${burbuja.y}px)`,
              width: burbuja.w,
              height: burbuja.h,
              ["--tinte" as string]: elegida === "inicio" ? "transparent" : `var(--esp-${elegida})`,
            }}
          />
        )}
        {items.map(({ id, nombre, href }) => {
          const esElegida = id === elegida;
          return (
            <Link
              key={id}
              href={href}
              onClick={elegir(id)}
              aria-current={id === actual ? "page" : undefined}
              data-elegida={esElegida}
              className="secciones-item"
            >
              <Icono id={id} className={esElegida ? COLOR_ICONO[id] : undefined} />
              <span className="max-w-full truncate">{nombre}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/** Íconos dibujados a mano, con el mismo trazo: casa, agente, red neuronal y gráfico de barras. */
function Icono({ id, className }: { id: IdSeccion; className?: string }) {
  const comun = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: `secciones-icono ${className ?? ""}`,
  };
  switch (id) {
    case "inicio":
      return (
        <svg {...comun}>
          <path d="M3.5 11 12 4l8.5 7" />
          <path d="M6 9.5V19a1 1 0 0 0 1 1h3.5v-5h3v5H17a1 1 0 0 0 1-1V9.5" />
        </svg>
      );
    case "ai":
      return (
        <svg {...comun}>
          <rect x="4.5" y="8" width="15" height="11.5" rx="3.2" />
          <path d="M12 8V5.2" />
          <circle cx="12" cy="4" r="1.2" />
          <path d="M9.5 12.6v1.6M14.5 12.6v1.6M2.5 12.5v2.5M21.5 12.5v2.5" />
        </svg>
      );
    case "ml":
      return (
        <svg {...comun} strokeWidth={1.5}>
          <path d="M5 8 12 5.5M5 8l7 4M5 16l7-4M5 16l7 2.5M12 5.5 19 12M12 12h7M12 18.5 19 12" />
          <g fill="currentColor" stroke="none">
            <circle cx="5" cy="8" r="2" />
            <circle cx="5" cy="16" r="2" />
            <circle cx="12" cy="5.5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="18.5" r="2" />
            <circle cx="19" cy="12" r="2" />
          </g>
        </svg>
      );
    case "ds":
      return (
        <svg {...comun}>
          <path d="M4 4v15a1 1 0 0 0 1 1h15" />
          <rect x="7.5" y="12.5" width="3" height="4.5" rx="0.8" />
          <rect x="12" y="9" width="3" height="8" rx="0.8" />
          <rect x="16.5" y="5.5" width="3" height="11.5" rx="0.8" />
        </svg>
      );
  }
}
