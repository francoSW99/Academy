"use client";

import { useState } from "react";

const OPCIONES = [
  { id: "a", nombre: "A" },
  { id: "b", nombre: "B" },
  { id: "hoy", nombre: "Hoy" },
] as const;

/**
 * Solo en el borrador de la propuesta de la Fase 5b: cambia las pizarras entre la variante A
 * (vidrio nocturno), la B (vidrio de color) y como están hoy. No existe en el sitio publicado.
 */
export function PropuestaVidrio() {
  const [elegida, setElegida] = useState<(typeof OPCIONES)[number]["id"]>("a");
  if (process.env.NEXT_PUBLIC_PROPUESTA_VIDRIO !== "1") return null;
  const elegir = (id: (typeof OPCIONES)[number]["id"]) => {
    setElegida(id);
    if (id === "hoy") delete document.documentElement.dataset.vidrio;
    else document.documentElement.dataset.vidrio = id;
  };
  return (
    <div className="propuesta-vidrio" role="group" aria-label="Propuesta de pizarras">
      <span>Pizarras</span>
      {OPCIONES.map((o) => (
        <button key={o.id} type="button" aria-pressed={elegida === o.id} onClick={() => elegir(o.id)}>
          {o.nombre}
        </button>
      ))}
    </div>
  );
}
