"use client";

import { useState } from "react";

const OPCIONES = [
  { id: "vidrio", nombre: "Vidrio" },
  { id: "hoy", nombre: "Hoy" },
] as const;

/**
 * Solo en el borrador de la propuesta de la Fase 5b: cambia las pizarras entre el vidrio
 * y como están hoy, para compararlas. No existe en el sitio publicado.
 */
export function PropuestaVidrio() {
  const [elegida, setElegida] = useState<(typeof OPCIONES)[number]["id"]>("vidrio");
  if (process.env.NEXT_PUBLIC_PROPUESTA_VIDRIO !== "1") return null;
  const elegir = (id: (typeof OPCIONES)[number]["id"]) => {
    setElegida(id);
    if (id === "hoy") delete document.documentElement.dataset.vidrio;
    else document.documentElement.dataset.vidrio = "";
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
