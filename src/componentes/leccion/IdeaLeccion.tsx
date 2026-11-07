import { Escena } from "@/componentes/escenas";
import { Figura } from "@/componentes/figuras";
import type { Idioma } from "@/lib/idiomas";
import type { Fuente, Idea, Trozo } from "@/ruta/tipos";
import { Respaldos } from "./Fuentes";

/**
 * Una idea de la lección, que se lee de corrido: la explicación, la escena para tocar y, después,
 * el ejemplo real y la conclusión. Sin recuadros que corten el hilo.
 */
export function IdeaLeccion({ idea, numero, id, fuentes, lang }: { idea: Idea; numero: number; id: string; fuentes: Fuente[]; lang: Idioma }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="flex flex-col gap-6 border-t border-borde pt-12 first-of-type:border-t-0 first-of-type:pt-0">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-3 text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em] text-balance">
        <span className="text-marca-grande tabular-nums">{numero}</span>
        {idea.titulo}
      </h2>
      <Parrafos texto={idea.texto} lang={lang} />
      {idea.escenas?.map((e) => <Escena key={e} nombre={e} lang={lang} />)}
      {idea.despues && <Parrafos texto={idea.despues} lang={lang} />}
      <Respaldos respaldos={idea.fuentes} fuentes={fuentes} lang={lang} />
    </section>
  );
}

/** Los párrafos de una idea, con los diagramas que van entre ellos. */
export function Parrafos({ texto, lang }: { texto: Trozo[]; lang: Idioma }) {
  if (texto.length === 0) return null;
  return (
    <div className="flex flex-col gap-4">
      {texto.map((trozo, k) =>
        typeof trozo === "string" ? (
          <p key={k} className="max-w-[68ch] text-[17.5px] leading-relaxed text-pretty text-tinta-2">
            <ConEnfasis texto={trozo} />
          </p>
        ) : (
          <div key={k} className="py-2">
            <Figura nombre={trozo.figura} lang={lang} />
          </div>
        ),
      )}
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
