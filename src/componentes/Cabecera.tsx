import Link from "next/link";
import { COLOR, Punto } from "@/componentes/Especialidad";
import type { Idioma } from "@/lib/idiomas";
import { textos } from "@/lib/idiomas";
import { especialidades } from "@/ruta/especialidades";
import type { IdEspecialidad } from "@/ruta/tipos";

/**
 * La barra de arriba: las 4 secciones de la plataforma (Inicio y las 3 especialidades).
 * La sección en la que estás queda subrayada con su color. En el celular, las secciones van en una segunda fila.
 */
export function Cabecera({ lang, actual }: { lang: Idioma; actual: IdEspecialidad | "inicio" }) {
  const t = textos(lang);
  // La pestaña activa se subraya con el color de su especialidad (el Inicio, con la tinta).
  const pestana = (activa: boolean, borde = "border-linea") =>
    `inline-flex min-h-11 shrink-0 items-center gap-1.5 border-b-2 whitespace-nowrap md:gap-2 ${
      activa ? `${borde} font-medium text-tinta` : "border-transparent text-tinta-2 hover:text-tinta"
    }`;
  return (
    <header className="border-b border-borde">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 px-[clamp(16px,4vw,40px)] md:min-h-[64px] md:flex-nowrap">
        <Link href={`/${lang}/`} className="inline-flex min-h-14 items-center gap-2.5 md:min-h-11">
          <span aria-hidden className="grid grid-cols-2 gap-0.5">
            {especialidades.map((e) => (
              <Punto key={e.id} id={e.id} />
            ))}
            <span className="size-2 rounded-full bg-linea" />
          </span>
          <span className="text-[19px] font-medium tracking-tight">{t.sitio.nombre}</span>
        </Link>
        <nav
          aria-label={t.cabecera.secciones}
          className="order-last -mx-[clamp(16px,4vw,40px)] flex w-[calc(100%+2*clamp(16px,4vw,40px))] justify-between gap-x-4 overflow-x-auto px-[clamp(16px,4vw,40px)] text-[14.5px] sm:justify-start sm:gap-x-6 md:order-none md:mx-0 md:w-auto md:gap-x-7 md:overflow-visible md:px-0 md:text-[15px]"
        >
          <Link href={`/${lang}/`} aria-current={actual === "inicio" ? "page" : undefined} className={pestana(actual === "inicio")}>
            {t.cabecera.inicio}
          </Link>
          {especialidades.map((e) => (
            <Link key={e.id} href={`/${lang}/${e.slug}/`} aria-current={actual === e.id ? "page" : undefined} className={pestana(actual === e.id, COLOR[e.id].borde)}>
              <Punto id={e.id} />
              {e.corto}
            </Link>
          ))}
        </nav>
        <a href="/obsidian/" className="hidden min-h-11 shrink-0 items-center text-[15px] text-tinta-2 hover:text-tinta lg:inline-flex">
          {t.cabecera.grafo}
        </a>
      </div>
    </header>
  );
}
