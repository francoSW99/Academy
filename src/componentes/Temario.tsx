"use client";

import Link from "next/link";
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
            <h2 className="px-2 text-[13px] font-medium text-tenue">{rellenar(t.modulo, { n: m.n, nombre: m.nombre })}</h2>
            <ol className="flex flex-col">
              {m.lecciones.map((l) => {
                const e = estado(l);
                const esActual = l.n === actual;
                const contenido = (
                  <>
                    <Marca estado={e} n={l.n} chica />
                    <span className={`min-w-0 text-[14.5px] leading-snug ${esActual ? "font-semibold text-tinta" : e === "pronto" ? "text-tenue" : "text-tinta-2"}`}>
                      {l.titulo}
                    </span>
                  </>
                );
                const clases = `grid min-h-11 grid-cols-[24px_minmax(0,1fr)] items-center gap-2.5 rounded-xl px-2 py-1.5 ${esActual ? "bg-suave" : ""}`;
                return (
                  <li key={l.n}>
                    {e === "pronto" ? (
                      <div className={clases}>{contenido}</div>
                    ) : (
                      <Link href={ruta(l)} aria-current={esActual ? "page" : undefined} className={`${clases} hover:bg-suave`}>
                        {contenido}
                      </Link>
                    )}
                    {esActual && indice}
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
          <section key={m.n} aria-labelledby={`modulo-${m.n}`} className="flex flex-col gap-2 rounded-[18px] border border-borde p-[clamp(16px,2.4vw,24px)]">
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2">
              <h3 id={`modulo-${m.n}`} className="font-serif text-[clamp(21px,2.2vw,25px)] leading-tight font-normal">
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
                    <span className={`min-w-0 text-[16.5px] leading-snug ${e === "pronto" ? "text-tenue" : "font-medium text-tinta"}`}>{l.titulo}</span>
                    <span className={`text-[13.5px] whitespace-nowrap ${e === "pronto" ? "text-tenue" : "font-medium text-acento-texto"}`}>
                      {e === "completada" ? t.completada : e === "disponible" ? `${t.disponible} →` : t.pronto}
                    </span>
                  </>
                );
                const clases = "grid min-h-14 grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-2 py-2";
                return (
                  <li key={l.n}>
                    {e === "pronto" ? (
                      <div className={clases}>{contenido}</div>
                    ) : (
                      <Link href={ruta(l)} className={`${clases} hover:bg-suave`}>
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

/** El círculo de cada lección: ✓ si está completada, el número en azul si está disponible, gris si viene pronto. */
function Marca({ estado, n, chica = false }: { estado: Estado; n: string; chica?: boolean }) {
  const tamano = chica ? "size-6 text-[11px]" : "size-8 text-[13px]";
  const color =
    estado === "completada"
      ? "border-linea bg-linea text-fondo"
      : estado === "disponible"
        ? "border-acento text-acento-texto"
        : "border-borde-fuerte text-tenue";
  return (
    <span aria-hidden className={`flex items-center justify-center rounded-full border-2 font-semibold tabular-nums ${tamano} ${color}`}>
      {estado === "completada" ? "✓" : Number(n)}
    </span>
  );
}
