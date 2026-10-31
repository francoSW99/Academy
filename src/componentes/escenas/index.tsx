"use client";

import dynamic from "next/dynamic";
import type { Idioma } from "@/lib/idiomas";
import type { NombreEscena } from "@/ruta/tipos";

// Registro de escenas: el contenido de una parada las nombra (escenas: ["tokens", "muestreo"]) y aquí se resuelven.
// Cada escena va en su propio archivo JS, con sus datos: solo lo descarga la parada que la usa.
const escenas: Record<NombreEscena, React.ComponentType<{ lang: Idioma }>> = {
  tokens: dynamic(() => import("./Tokens").then((m) => m.Tokens)),
  muestreo: dynamic(() => import("./Muestreo").then((m) => m.Muestreo)),
  contexto: dynamic(() => import("./Contexto").then((m) => m.Contexto)),
};

export function Escena({ nombre, lang }: { nombre: NombreEscena; lang: Idioma }) {
  const Componente = escenas[nombre];
  return <Componente lang={lang} />;
}
