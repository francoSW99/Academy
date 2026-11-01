import Link from "next/link";
import type { Idioma } from "@/lib/idiomas";
import { textos } from "@/lib/idiomas";

export function Cabecera({ lang }: { lang: Idioma }) {
  const t = textos(lang);
  return (
    <header className="border-b border-borde">
      <div className="mx-auto flex min-h-[64px] max-w-[1200px] items-center justify-between gap-x-6 px-[clamp(16px,4vw,40px)]">
        <Link href={`/${lang}/`} className="inline-flex min-h-11 items-center gap-2.5">
          <span aria-hidden className="grid grid-cols-2 gap-0.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="size-[7px] rounded-[2px] bg-acento" />
            ))}
          </span>
          <span className="text-[19px] font-medium tracking-tight">{t.sitio.nombre}</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-x-5 text-[15px] text-tinta-2">
          <Link href={`/${lang}/#temario`} className="inline-flex min-h-11 items-center hover:text-tinta">
            {t.cabecera.temario}
          </Link>
          <a href="/obsidian/" className="hidden min-h-11 items-center hover:text-tinta sm:inline-flex">
            {t.cabecera.grafo}
          </a>
        </nav>
      </div>
    </header>
  );
}
