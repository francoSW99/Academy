"use client";

import { useState } from "react";
import { textos, type Idioma } from "@/lib/idiomas";

export function BotonCopiar({ texto, lang }: { texto: string; lang: Idioma }) {
  const t = textos(lang).leccion;
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Sin permiso para el portapapeles: el texto sigue a la vista para copiarlo a mano.
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-4 text-[14px] font-medium text-tinta hover:bg-suave"
    >
      <span aria-live="polite">{copiado ? `✓ ${t.copiado}` : t.copiar}</span>
    </button>
  );
}
