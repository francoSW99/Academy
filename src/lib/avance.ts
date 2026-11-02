"use client";

import { useCallback, useEffect, useState } from "react";

// El avance vive solo en este navegador (sin login, decisión del plan).
// Forma: { "ai/03": { vista: true, hecha: false } }: una entrada por lección, con su especialidad.
type AvanceLeccion = { vista: boolean; hecha: boolean };
type Avance = Record<string, AvanceLeccion>;

const CLAVE = "academy:avance:v3";
// Antes de las especialidades: { "03": { vista, hecha } }. Todas eran de AI Engineering. Se convierte una vez.
const CLAVE_V2 = "academy:avance:v2";
// La versión con paradas: { "03": { vistas: [1, 2], hecha: false } }.
const CLAVE_V1 = "academy:avance:v1";
const EVENTO = "academy:avance";

function deAiEngineering(avance: Avance): Avance {
  return Object.fromEntries(Object.entries(avance).map(([n, e]) => [`ai/${n}`, e]));
}

function leer(): Avance {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (crudo) return JSON.parse(crudo) as Avance;
    const v2 = localStorage.getItem(CLAVE_V2);
    if (v2) return deAiEngineering(JSON.parse(v2) as Avance);
    const v1 = localStorage.getItem(CLAVE_V1);
    if (!v1) return {};
    const viejo = JSON.parse(v1) as Record<string, { vistas: number[]; hecha: boolean }>;
    return deAiEngineering(Object.fromEntries(Object.entries(viejo).map(([n, e]) => [n, { vista: e.vistas.length > 0, hecha: e.hecha }])));
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

  const marcarVista = useCallback((ref: string) => {
    const actual = leer();
    const e = actual[ref] ?? { vista: false, hecha: false };
    if (e.vista) return;
    escribir({ ...actual, [ref]: { ...e, vista: true } });
  }, []);

  const alternarHecha = useCallback((ref: string) => {
    const actual = leer();
    const e = actual[ref] ?? { vista: true, hecha: false };
    escribir({ ...actual, [ref]: { ...e, vista: true, hecha: !e.hecha } });
  }, []);

  return { avance, marcarVista, alternarHecha };
}
