import { textos, type Idioma } from "@/lib/idiomas";

/** El título de una escena, la píldora «Pruébalo» y, si hace falta, una frase que la presenta. */
export function CabeceraEscena({ id, titulo, lead, lang }: { id: string; titulo: string; lead?: string; lang: Idioma }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <h3 id={id} className="text-[20px] leading-snug font-medium tracking-[-0.012em]">
          {titulo}
        </h3>
        <span className="glass-pill insignia shrink-0">{textos(lang).escenas.ahoraTu}</span>
      </div>
      {lead && <p className="max-w-[46em] text-[15px] text-pretty text-tinta-2">{lead}</p>}
    </div>
  );
}
