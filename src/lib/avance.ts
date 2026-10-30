"use client";

import { useCallback, useEffect, useState } from "react";
import type { ParadaId } from "@/ruta/tipos";

// El avance vive solo en este navegador (sin login, decisión del plan).
// Forma: { "03": { vistas: [1, 2], hecha: false } }
type AvanceEstacion = { vistas: ParadaId[]; hecha: boolean };
type Avance = Record<string, AvanceEstacion>;

const CLAVE = "academy:avance:v1";
const EVENTO = "academy:avance";

function leer(): Avance {
  try {
    const crudo = localStorage.getItem(CLAVE);
    return crudo ? (JSON.parse(crudo) as Avance) : {};
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

  const marcarVista = useCallback((estacion: string, parada: ParadaId) => {
    const actual = leer();
    const e = actual[estacion] ?? { vistas: [], hecha: false };
    if (e.vistas.includes(parada)) return;
    escribir({ ...actual, [estacion]: { ...e, vistas: [...e.vistas, parada] } });
  }, []);

  const alternarHecha = useCallback((estacion: string) => {
    const actual = leer();
    const e = actual[estacion] ?? { vistas: [], hecha: false };
    escribir({ ...actual, [estacion]: { ...e, hecha: !e.hecha } });
  }, []);

  return { avance, marcarVista, alternarHecha };
}
