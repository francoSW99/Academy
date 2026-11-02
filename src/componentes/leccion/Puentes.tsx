import Link from "next/link";
import { COLOR, Punto } from "@/componentes/Especialidad";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { puentesDe, type Relacion } from "@/ruta/conexiones";
import { rutaLeccion } from "@/ruta/especialidades";
import type { RefLeccion } from "@/ruta/tipos";

const RELACIONES: Relacion[] = ["antes", "aFondo", "seUsa"];

/**
 * Al final de la lección: las lecciones de otras especialidades que comparten su tema (src/ruta/conexiones.ts).
 * Cada una lleva el color y el nombre de su especialidad, para que se sepa a dónde lleva.
 */
export function Puentes({ lang, refLeccion }: { lang: Idioma; refLeccion: RefLeccion }) {
  const t = textos(lang).puentes;
  const puentes = puentesDe(refLeccion);
  if (puentes.length === 0) return null;

  return (
    <section id="conexiones" aria-labelledby="conexiones-titulo" className="flex scroll-mt-20 flex-col gap-6 border-t border-borde pt-12">
      <div className="flex flex-col gap-2">
        <h2 id="conexiones-titulo" className="font-serif text-[clamp(28px,3.2vw,38px)] leading-tight font-normal">
          {t.titulo}
        </h2>
        <p className="max-w-[68ch] text-[17.5px] leading-relaxed text-tinta-2">{t.texto}</p>
      </div>
      {RELACIONES.map((relacion) => {
        const grupo = puentes.filter((p) => p.relacion === relacion);
        if (grupo.length === 0) return null;
        return (
          <div key={relacion} className="flex flex-col gap-3">
            <h3 className="flex flex-wrap items-baseline gap-x-2 text-[17px] font-medium">
              {t.relaciones[relacion]}
              <span className="text-[14.5px] font-normal text-tenue">{t.relacionesTexto[relacion]}</span>
            </h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {grupo.map(({ leccion: l, tema }) => {
                const e = l.especialidad;
                const contenido = (
                  <>
                    <span className={`flex items-center gap-2 text-[13.5px] font-medium ${COLOR[e.id].texto}`}>
                      <Punto id={e.id} />
                      {e.nombre}
                    </span>
                    <span className="font-serif text-[20px] leading-snug">
                      {rellenar(t.leccion, { n: Number(l.n), titulo: l.titulo })}
                    </span>
                    <span className="text-[15px] leading-relaxed text-pretty text-tinta-2">{tema}</span>
                    <span className={`mt-auto pt-1 text-[13.5px] ${l.disponible ? "font-medium text-acento-texto" : "text-tenue"}`}>
                      {l.disponible ? `${t.ir} →` : t.pronto}
                    </span>
                  </>
                );
                const clases = "flex h-full flex-col gap-1.5 rounded-[16px] border border-borde p-5";
                return (
                  <li key={l.ref}>
                    {l.disponible ? (
                      <Link href={rutaLeccion(lang, l)} className={`${clases} hover:bg-suave`}>
                        {contenido}
                      </Link>
                    ) : (
                      <div className={clases}>{contenido}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
