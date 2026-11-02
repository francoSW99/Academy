"use client";

import dynamic from "next/dynamic";
import type { Idioma } from "@/lib/idiomas";
import type { NombreEscena } from "@/ruta/tipos";

// Registro de escenas: el contenido de una lección las nombra (escenas: ["tokens"]) y aquí se resuelven.
// Cada escena va en su propio archivo JS, con sus datos: se descarga solo cuando la página la usa.
const escenas: Record<NombreEscena, React.ComponentType<{ lang: Idioma }>> = {
  tokens: dynamic(() => import("./Tokens").then((m) => m.Tokens)),
  muestreo: dynamic(() => import("./Muestreo").then((m) => m.Muestreo)),
  contexto: dynamic(() => import("./Contexto").then((m) => m.Contexto)),
  prefill: dynamic(() => import("./Prefill").then((m) => m.Prefill)),
  autocompletado: dynamic(() => import("./Autocompletado").then((m) => m.Autocompletado)),
};

export function Escena({ nombre, lang }: { nombre: NombreEscena; lang: Idioma }) {
  const Componente = escenas[nombre];
  return (
    <div className="tablero">
      <Componente lang={lang} />
    </div>
  );
}
