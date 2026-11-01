import { Escena } from "@/componentes/escenas";
import type { Idioma } from "@/lib/idiomas";
import type { Idea } from "@/ruta/tipos";

/**
 * Una idea de la lección, que se lee de corrido: la explicación, la escena para tocar y, después,
 * el ejemplo real y la conclusión. Sin recuadros que corten el hilo.
 */
export function IdeaLeccion({ idea, numero, id, lang }: { idea: Idea; numero: number; id: string; lang: Idioma }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="flex scroll-mt-20 flex-col gap-6 border-t border-borde pt-12 first-of-type:border-t-0 first-of-type:pt-0">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-3 font-serif text-[clamp(28px,3.2vw,38px)] leading-tight font-normal text-balance">
        <span className="text-acento-texto tabular-nums">{numero}</span>
        {idea.titulo}
      </h2>
      <Parrafos texto={idea.texto} />
      {idea.escenas?.map((e) => <Escena key={e} nombre={e} lang={lang} />)}
      {idea.despues && <Parrafos texto={idea.despues} />}
    </section>
  );
}

export function Parrafos({ texto }: { texto: string[] }) {
  if (texto.length === 0) return null;
  return (
    <div className="flex max-w-[68ch] flex-col gap-4">
      {texto.map((p) => (
        <p key={p} className="text-[17.5px] leading-relaxed text-pretty text-tinta-2">
          <ConEnfasis texto={p} />
        </p>
      ))}
    </div>
  );
}

/** «**así**» en el contenido se lee como lo importante del párrafo. */
export function ConEnfasis({ texto }: { texto: string }) {
  return texto.split(/\*\*(.+?)\*\*/g).map((trozo, k) =>
    k % 2 === 1 ? (
      <strong key={k} className="font-medium text-tinta">
        {trozo}
      </strong>
    ) : (
      trozo
    ),
  );
}
