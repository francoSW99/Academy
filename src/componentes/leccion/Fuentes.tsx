import { textos, type Idioma } from "@/lib/idiomas";
import type { Fuente, Respaldo } from "@/ruta/tipos";

/** La línea chica al final de una idea o un consejo: en qué fuentes se apoya, con su página o minuto. */
export function Respaldos({ respaldos, fuentes, lang }: { respaldos?: Respaldo[]; fuentes: Fuente[]; lang: Idioma }) {
  if (!respaldos?.length) return null;
  const t = textos(lang).leccion;
  return (
    <p className="max-w-[68ch] text-[13.5px] leading-relaxed text-tenue">
      <span className="font-medium">{t.fuentesDe}</span>{" "}
      {respaldos.map((r, k) => {
        const f = fuentes.find((x) => x.id === r.fuente);
        if (!f) return null;
        return (
          <span key={`${r.fuente}-${k}`}>
            {k > 0 && " · "}
            <a href={`#fuente-${f.id}`} className="underline decoration-borde-fuerte underline-offset-2 hover:text-tinta">
              {f.corta}
            </a>
            {r.donde && `, ${r.donde}`}
          </span>
        );
      })}
    </p>
  );
}

/** La lista completa de fuentes, al final de la lección. */
export function ListaFuentes({ fuentes, lang }: { fuentes: Fuente[]; lang: Idioma }) {
  const t = textos(lang).leccion;
  return (
    <section id="fuentes" aria-labelledby="fuentes-titulo" className="flex flex-col gap-3">
      <h2 id="fuentes-titulo" className="text-[21px] font-medium tracking-[-0.012em]">
        {t.fuentes}
      </h2>
      <p className="text-[15px] text-tenue">{t.fuentesTexto}</p>
      <ol className="flex flex-col gap-2.5">
        {fuentes.map((f) => (
          <li key={f.id} id={`fuente-${f.id}`} className="grid gap-x-3 gap-y-0.5 sm:grid-cols-[110px_minmax(0,1fr)]">
            <span className="text-[13px] font-medium text-tenue">{t.tiposFuente[f.tipo]}</span>
            <span className="text-[15px] leading-relaxed text-pretty text-tinta-2">
              {f.cita}
              {f.url && (
                <>
                  {" "}
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="break-all text-acento-texto hover:underline">
                    {f.url.replace(/^https?:\/\/(www\.)?/, "")}
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
