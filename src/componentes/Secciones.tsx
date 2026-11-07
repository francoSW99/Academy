"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { especialidades } from "@/ruta/especialidades";
import type { IdEspecialidad } from "@/ruta/tipos";

type IdSeccion = "inicio" | IdEspecialidad;
type Item = { id: IdSeccion; nombre: string; corto: string; href: string };

// Las clases van escritas enteras para que Tailwind las encuentre.
const COLOR_ICONO: Record<IdSeccion, string> = {
  inicio: "text-tinta",
  ai: "text-esp-ai-texto",
  ml: "text-esp-ml-texto",
  ds: "text-esp-ds-texto",
};

/** La sección de una dirección: /es/ es el Inicio; /es/ai-engineering/… es AI Engineering. */
function seccionDe(ruta: string, lang: string): IdSeccion | null {
  const partes = ruta.split("/").filter(Boolean);
  if (partes[0] !== lang) return null;
  if (partes.length === 1) return "inicio";
  return especialidades.find((e) => e.slug === partes[1])?.id ?? null;
}

/**
 * El selector de las 4 secciones, en vidrio. Vive en el layout: no se vuelve a montar al cambiar
 * de sección, así la burbuja de la elegida se desliza hasta la nueva.
 * - En el computador: una píldora arriba al centro.
 * - En el celular y la tablet: una manija chica en el borde izquierdo, para no tapar el estudio.
 *   Al tocarla se abre un dock vertical con las 4 secciones; se cierra al elegir, al tocar fuera,
 *   con Escape o al seguir leyendo (scroll).
 */
export function Secciones({ lang }: { lang: Idioma }) {
  const t = textos(lang).cabecera;
  const ruta = usePathname();
  const actual = seccionDe(ruta, lang);
  // Al tocar una sección, la burbuja se mueve de inmediato, sin esperar a que cargue la página.
  const [pendiente, setPendiente] = useState<IdSeccion | null>(null);
  const elegida = pendiente ?? actual;
  const [abierto, setAbierto] = useState(false);
  const manija = useRef<HTMLButtonElement>(null);
  const dock = useRef<HTMLElement>(null);

  useEffect(() => {
    setPendiente(null);
    setAbierto(false);
  }, [ruta]);

  useEffect(() => {
    if (!abierto) return;
    dock.current?.querySelector<HTMLElement>('[data-elegida="true"]')?.focus({ preventScroll: true });
    const desde = window.scrollY;
    const alTeclear = (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return;
      setAbierto(false);
      manija.current?.focus({ preventScroll: true });
    };
    // Si sigues leyendo, el dock se esconde solo.
    const alScroll = () => {
      if (Math.abs(window.scrollY - desde) > 24) setAbierto(false);
    };
    window.addEventListener("keydown", alTeclear);
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", alTeclear);
      window.removeEventListener("scroll", alScroll);
    };
  }, [abierto]);

  const elegir = (id: IdSeccion) => (ev: MouseEvent) => {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
    setPendiente(id);
  };

  const items: Item[] = [
    { id: "inicio", nombre: t.inicio, corto: t.inicio, href: `/${lang}/` },
    ...especialidades.map((e) => ({ id: e.id, nombre: e.nombre, corto: e.corto, href: `/${lang}/${e.slug}/` })),
  ];
  const enUso = items.find((i) => i.id === (actual ?? "inicio"))!;

  return (
    <>
      <nav aria-label={t.secciones} className="secciones-arriba">
        <Pista items={items} elegida={elegida} actual={actual} onElegir={elegir} conNombre="corto" />
      </nav>

      <div className="secciones-lado" data-abierto={abierto ? "" : undefined}>
        <button type="button" tabIndex={-1} aria-hidden className="secciones-fondo" onClick={() => setAbierto(false)} />
        <button
          ref={manija}
          type="button"
          aria-expanded={abierto}
          aria-controls="secciones-dock"
          aria-label={rellenar(t.cambiar, { seccion: enUso.nombre })}
          className="secciones-manija"
          onClick={() => setAbierto((a) => !a)}
        >
          <Icono id={enUso.id} className={COLOR_ICONO[enUso.id]} />
        </button>
        <nav ref={dock} id="secciones-dock" aria-label={t.secciones} className="secciones-dock" inert={!abierto}>
          <Pista items={items} elegida={elegida} actual={actual} onElegir={elegir} conNombre="nombre" />
        </nav>
      </div>
    </>
  );
}

type Caja = { x: number; y: number; w: number; h: number };

/** La pista de vidrio con sus 4 secciones y la burbuja blanca que marca la elegida. */
function Pista({
  items,
  elegida,
  actual,
  onElegir,
  conNombre,
}: {
  items: Item[];
  elegida: IdSeccion | null;
  actual: IdSeccion | null;
  onElegir: (id: IdSeccion) => (ev: MouseEvent) => void;
  conNombre: "nombre" | "corto";
}) {
  const pista = useRef<HTMLDivElement>(null);
  const [burbuja, setBurbuja] = useState<Caja | null>(null);
  const [animar, setAnimar] = useState(false);

  // La burbuja se mide sobre el botón elegido, y otra vez si la pista cambia de tamaño.
  useLayoutEffect(() => {
    const barra = pista.current;
    if (!barra) return;
    const medir = () => {
      const boton = barra.querySelector<HTMLElement>('[data-elegida="true"]');
      setBurbuja(boton && boton.offsetWidth > 0 ? { x: boton.offsetLeft, y: boton.offsetTop, w: boton.offsetWidth, h: boton.offsetHeight } : null);
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

  return (
    <div ref={pista} className="secciones-pista" data-lista={burbuja ? "" : undefined} data-animar={animar ? "" : undefined}>
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
      {items.map((item) => {
        const esElegida = item.id === elegida;
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={onElegir(item.id)}
            aria-current={item.id === actual ? "page" : undefined}
            data-elegida={esElegida}
            className="secciones-item"
          >
            <Icono id={item.id} className={esElegida ? COLOR_ICONO[item.id] : undefined} />
            <span className="max-w-full truncate">{item[conNombre]}</span>
          </Link>
        );
      })}
    </div>
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
