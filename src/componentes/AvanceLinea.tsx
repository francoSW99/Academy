"use client";

import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";

export function AvanceLinea({ lang, total, abiertas }: { lang: Idioma; total: number; abiertas: number }) {
  const { avance } = useAvance();
  const hechas = Object.values(avance).filter((e) => e.hecha).length;
  return <p className="text-sm text-tenue">{rellenar(textos(lang).portada.avance, { hechas, total, abiertas })}</p>;
}
