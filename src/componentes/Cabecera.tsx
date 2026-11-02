import Link from "next/link";
import { Punto } from "@/componentes/Especialidad";
import type { Idioma } from "@/lib/idiomas";
import { textos } from "@/lib/idiomas";
import { especialidades } from "@/ruta/especialidades";

/**
 * La franja de arriba: el logo, que lleva al Inicio, y el grafo de BrainFran.
 * Las 4 secciones van aparte, en la barra de vidrio que flota sobre la página (Secciones.tsx).
 */
export function Cabecera({ lang }: { lang: Idioma }) {
  const t = textos(lang);
  return (
    <header className="border-b border-borde">
      <div className="mx-auto flex min-h-14 max-w-[1200px] items-center justify-between gap-x-8 px-[clamp(16px,4vw,40px)] lg:min-h-16">
        <Link href={`/${lang}/`} className="inline-flex min-h-11 items-center gap-2.5">
          <span aria-hidden className="grid grid-cols-2 gap-0.5">
            {especialidades.map((e) => (
              <Punto key={e.id} id={e.id} />
            ))}
            <span className="size-2 rounded-full bg-linea" />
          </span>
          <span className="text-[19px] font-medium tracking-tight">{t.sitio.nombre}</span>
        </Link>
        <a href="/obsidian/" className="hidden min-h-11 shrink-0 items-center text-[15px] text-tinta-2 hover:text-tinta lg:inline-flex">
          {t.cabecera.grafo}
        </a>
      </div>
    </header>
  );
}
