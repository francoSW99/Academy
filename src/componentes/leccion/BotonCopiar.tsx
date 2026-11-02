"use client";

import { useState } from "react";
import { IconoCheck } from "@/componentes/Iconos";
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
    <button type="button" onClick={copiar} className="glass-pill inline-flex min-h-9 items-center px-3.5 text-[13px] font-medium text-tinta">
      <span aria-live="polite" className="inline-flex items-center gap-1.5">
        {copiado && <IconoCheck className="size-3.5" />}
        {copiado ? t.copiado : t.copiar}
      </span>
    </button>
  );
}
