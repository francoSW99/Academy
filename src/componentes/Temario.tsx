"use client";

import Link from "next/link";
import { IconoCheck, IconoFlecha } from "@/componentes/Iconos";
import { useAvance } from "@/lib/avance";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import type { Especialidad, Leccion } from "@/ruta/tipos";

type Estado = "completada" | "disponible" | "pronto";

/**
 * El temario de una especialidad: módulos con sus lecciones y el avance de cada una.
 * «portada» es la lista grande de la página de la especialidad; «lateral», la barra de la lección.
 */
export function Temario({
  lang,
  especialidad,
  variante,
  actual,
  indice,
}: {
  lang: Idioma;
  especialidad: Especialidad;
  variante: "portada" | "lateral";
  /** El número de la lección que estás leyendo: "03". */
  actual?: string;
  /** En la barra lateral: el índice de la lección actual, que va debajo de ella. */
  indice?: React.ReactNode;
}) {
  const t = textos(lang).curso;
  const { avance } = useAvance();
  const estado = (l: Leccion): Estado => (avance[`${especialidad.id}/${l.n}`]?.hecha ? "completada" : l.disponible ? "disponible" : "pronto");
  const ruta = (l: Leccion) => `/${lang}/${especialidad.slug}/leccion/${l.n}/`;

  if (variante === "lateral") {
    return (
      <nav aria-label={t.temario} className="flex flex-col gap-5">
        {especialidad.modulos.map((m) => (
          <section key={m.n} className="flex flex-col gap-1">
            <h2 className="px-2.5 text-[12.5px] font-medium text-tenue">{rellenar(t.modulo, { n: m.n, nombre: m.nombre })}</h2>
            <ol className="flex flex-col gap-0.5">
              {m.lecciones.map((l) => {
                const e = estado(l);
                const clases = "grid min-h-11 grid-cols-[22px_minmax(0,1fr)] items-center gap-2.5 rounded-[14px] px-2.5 py-1.5";
                // La lección que estás leyendo: una tarjeta con un punto de luz y su índice adentro.
                if (l.n === actual) {
                  return (
                    <li key={l.n} className="glass-card-directional my-1 rounded-[16px]">
                      <Link href={ruta(l)} aria-current="page" className={clases}>
                        <span aria-hidden className="flex justify-center">
                          <span className="punto-luz" />
                        </span>
                        <span className="min-w-0 text-[14.5px] leading-snug font-medium text-white">{l.titulo}</span>
                      </Link>
                      {indice}
                    </li>
                  );
                }
                const contenido = (
                  <>
                    <Marca estado={e} n={l.n} chica />
                    <span className="min-w-0 text-[14px] leading-snug">{l.titulo}</span>
                  </>
                );
                return (
                  <li key={l.n}>
                    {e === "pronto" ? (
                      <div className={`${clases} text-tenue`}>{contenido}</div>
                    ) : (
                      <Link href={ruta(l)} className={`${clases} text-tenue transition-colors duration-200 hover:bg-suave hover:text-white`}>
                        {contenido}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </nav>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {especialidad.modulos.map((m) => {
        const disponibles = m.lecciones.filter((l) => l.disponible).length;
        return (
          <section key={m.n} aria-labelledby={`modulo-${m.n}`} className="glass-board flex flex-col gap-2 p-[clamp(14px,2.4vw,24px)]">
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2">
              <h3 id={`modulo-${m.n}`} className="text-[clamp(19px,2vw,22px)] leading-tight font-medium tracking-[-0.012em]">
                {rellenar(t.modulo, { n: m.n, nombre: m.nombre })}
              </h3>
              <span className="text-sm text-tenue">{rellenar(t.leccionesDe, { disponibles, total: m.lecciones.length })}</span>
            </header>
            <ol className="flex flex-col">
              {m.lecciones.map((l) => {
                const e = estado(l);
                const contenido = (
                  <>
                    <Marca estado={e} n={l.n} />
                    <span className={`min-w-0 text-[16px] leading-snug ${e === "pronto" ? "text-tenue" : "font-medium text-white"}`}>{l.titulo}</span>
                    <span
                      className={`inline-flex items-center gap-1 text-[13.5px] whitespace-nowrap ${e === "pronto" ? "text-tenue" : e === "completada" ? "font-medium text-[#34d399]" : "font-medium text-acento-texto"}`}
                    >
                      {e === "completada" ? t.completada : e === "pronto" ? t.pronto : t.disponible}
                      {e === "disponible" && <IconoFlecha className="glass-flecha size-[15px]" />}
                    </span>
                  </>
                );
                const clases = "grid min-h-14 grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 rounded-[14px] px-2 py-2";
                return (
                  <li key={l.n}>
                    {e === "pronto" ? (
                      <div className={clases}>{contenido}</div>
                    ) : (
                      <Link href={ruta(l)} className={`${clases} transition-colors duration-200 hover:bg-suave`}>
                        {contenido}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

/** La marca de cada lección: ✓ con luz si está completada, el número si está disponible, tenue si viene pronto. */
function Marca({ estado, n, chica = false }: { estado: Estado; n: string; chica?: boolean }) {
  const tamano = chica ? "size-[22px] text-[11.5px]" : "size-8 text-[13px]";
  const color = estado === "completada" ? "marca-hecha" : estado === "disponible" ? "border border-white/30 text-white" : "border border-white/10 text-tenue";
  return (
    <span aria-hidden className={`flex items-center justify-center rounded-full font-medium tabular-nums ${tamano} ${color}`}>
      {estado === "completada" ? <IconoCheck className={chica ? "size-3" : "size-4"} /> : Number(n)}
    </span>
  );
}
