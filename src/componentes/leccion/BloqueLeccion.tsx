import { Escena } from "@/componentes/escenas";
import type { Idioma } from "@/lib/idiomas";
import type { Bloque } from "@/ruta/tipos";
import { PromptAntesDespues } from "./PromptAntesDespues";

/** Un tema de la lección: título, texto corto y, si hay, el dato, la escena o el prompt de ejemplo. */
export function BloqueLeccion({ bloque, lang }: { bloque: Bloque; lang: Idioma }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-serif text-[clamp(23px,2.4vw,28px)] leading-tight font-normal">{bloque.titulo}</h3>
      {bloque.dato ? (
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[minmax(150px,auto)_minmax(0,1fr)]">
          <p className="flex flex-col gap-1">
            <span className="font-serif text-[clamp(40px,5vw,56px)] leading-none">{bloque.dato.cifra}</span>
            <span className="max-w-[24ch] text-[14px] leading-snug text-tenue">{bloque.dato.que}</span>
          </p>
          <Texto parrafos={bloque.texto} />
        </div>
      ) : (
        <Texto parrafos={bloque.texto} />
      )}
      {bloque.puntos && (
        <ol className="flex max-w-[68ch] flex-col gap-3">
          {bloque.puntos.map((p, k) => (
            <li key={p} className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline gap-2">
              <span className="font-serif text-[24px] leading-none text-acento-texto">{k + 1}</span>
              <span className="text-[17px] leading-relaxed">{p}</span>
            </li>
          ))}
        </ol>
      )}
      {bloque.escenas?.map((e) => <Escena key={e} nombre={e} lang={lang} />)}
      {bloque.prompt && <PromptAntesDespues prompt={bloque.prompt} lang={lang} />}
    </section>
  );
}

function Texto({ parrafos }: { parrafos: string[] }) {
  if (parrafos.length === 0) return null;
  return (
    <div className="flex max-w-[68ch] flex-col gap-3">
      {parrafos.map((p) => (
        <p key={p} className="text-[17.5px] leading-relaxed text-pretty text-tinta-2">
          {p}
        </p>
      ))}
    </div>
  );
}
