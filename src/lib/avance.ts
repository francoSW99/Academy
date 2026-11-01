"use client";

import { useCallback, useEffect, useState } from "react";

// El avance vive solo en este navegador (sin login, decisión del plan).
// Forma: { "03": { vista: true, hecha: false } }: una entrada por lección.
type AvanceLeccion = { vista: boolean; hecha: boolean };
type Avance = Record<string, AvanceLeccion>;

const CLAVE = "academy:avance:v2";
// La versión con paradas: { "03": { vistas: [1, 2], hecha: false } }. Se convierte una vez.
const CLAVE_V1 = "academy:avance:v1";
const EVENTO = "academy:avance";

function leer(): Avance {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (crudo) return JSON.parse(crudo) as Avance;
    const viejo = localStorage.getItem(CLAVE_V1);
    if (!viejo) return {};
    const v1 = JSON.parse(viejo) as Record<string, { vistas: number[]; hecha: boolean }>;
    return Object.fromEntries(Object.entries(v1).map(([n, e]) => [n, { vista: e.vistas.length > 0, hecha: e.hecha }]));
  } catch {
    return {};
  }
}

function escribir(avance: Avance) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(avance));
  } catch {
    // Navegación privada o almacenamiento bloqueado: el avance no se guarda, pero la página funciona.
  }
  window.dispatchEvent(new Event(EVENTO));
}

export function useAvance() {
  const [avance, setAvance] = useState<Avance>({});

  useEffect(() => {
    const actualizar = () => setAvance(leer());
    actualizar();
    window.addEventListener(EVENTO, actualizar);
    window.addEventListener("storage", actualizar);
    return () => {
      window.removeEventListener(EVENTO, actualizar);
      window.removeEventListener("storage", actualizar);
    };
  }, []);

  const marcarVista = useCallback((n: string) => {
    const actual = leer();
    const e = actual[n] ?? { vista: false, hecha: false };
    if (e.vista) return;
    escribir({ ...actual, [n]: { ...e, vista: true } });
  }, []);

  const alternarHecha = useCallback((n: string) => {
    const actual = leer();
    const e = actual[n] ?? { vista: true, hecha: false };
    escribir({ ...actual, [n]: { ...e, vista: true, hecha: !e.hecha } });
  }, []);

  return { avance, marcarVista, alternarHecha };
}
