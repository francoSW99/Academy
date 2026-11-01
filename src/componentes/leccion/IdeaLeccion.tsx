import { Escena } from "@/componentes/escenas";
import { textos, type Idioma } from "@/lib/idiomas";
import type { Idea } from "@/ruta/tipos";

/**
 * Una idea de la lección, completa: la explicación con su escena, el caso real que la muestra
 * y lo que hace un ingeniero de IA con ella. Los dos recuadros llevan su nombre a la vista.
 */
export function IdeaLeccion({ idea, numero, id, lang }: { idea: Idea; numero: number; id: string; lang: Idioma }) {
  const t = textos(lang).leccion;
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="flex scroll-mt-20 flex-col gap-6 border-t border-borde pt-12 first-of-type:border-t-0 first-of-type:pt-0">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-3 font-serif text-[clamp(28px,3.2vw,38px)] leading-tight font-normal text-balance">
        <span className="text-acento-texto tabular-nums">{numero}</span>
        {idea.titulo}
      </h2>
      <Parrafos texto={idea.texto} />
      {idea.escenas?.map((e) => <Escena key={e} nombre={e} lang={lang} />)}

      {idea.caso && (
        <aside aria-label={t.caso} className="flex flex-col gap-4 rounded-[18px] bg-[var(--pizarra-rejilla)] p-[clamp(18px,2.6vw,28px)]">
          <Etiqueta>{t.caso}</Etiqueta>
          <h3 className="font-serif text-[clamp(21px,2.2vw,25px)] leading-tight font-normal">{idea.caso.titulo}</h3>
          {idea.caso.dato ? (
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[minmax(140px,auto)_minmax(0,1fr)]">
              <p className="flex flex-col gap-1.5">
                <span className="font-serif text-[clamp(38px,4.6vw,52px)] leading-none">{idea.caso.dato.cifra}</span>
                <span className="max-w-[26ch] text-[13.5px] leading-snug text-tenue">{idea.caso.dato.que}</span>
              </p>
              <Parrafos texto={idea.caso.texto} chico />
            </div>
          ) : (
            <Parrafos texto={idea.caso.texto} chico />
          )}
        </aside>
      )}

      {idea.ingeniero && (
        <aside aria-label={t.ingeniero} className="flex flex-col gap-4 rounded-[18px] border-[1.5px] border-linea p-[clamp(18px,2.6vw,28px)]">
          <Etiqueta>{t.ingeniero}</Etiqueta>
          <ul className="flex flex-col gap-3">
            {idea.ingeniero.map((d) => (
              <li key={d} className="grid grid-cols-[16px_minmax(0,1fr)] gap-2.5 text-[16.5px] leading-relaxed text-tinta">
                <span aria-hidden className="mt-[0.72em] size-[7px] rounded-full bg-linea" />
                {d}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
}

function Etiqueta({ children }: { children: React.ReactNode }) {
  return <span className="text-[12.5px] font-semibold tracking-[0.08em] text-tenue uppercase">{children}</span>;
}

function Parrafos({ texto, chico = false }: { texto: string[]; chico?: boolean }) {
  if (texto.length === 0) return null;
  return (
    <div className="flex max-w-[68ch] flex-col gap-3">
      {texto.map((p) => (
        <p key={p} className={`leading-relaxed text-pretty text-tinta-2 ${chico ? "text-[16px]" : "text-[17.5px]"}`}>
          {p}
        </p>
      ))}
    </div>
  );
}
