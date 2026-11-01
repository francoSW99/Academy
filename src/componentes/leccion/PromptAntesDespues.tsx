import { textos, type Idioma } from "@/lib/idiomas";
import type { PromptEjemplo } from "@/ruta/tipos";
import { BotonCopiar } from "./BotonCopiar";

/** Un prompt como se suele escribir, al lado del que hace justo lo que quieres, y por qué funciona. */
export function PromptAntesDespues({ prompt, lang }: { prompt: PromptEjemplo; lang: Idioma }) {
  const t = textos(lang).leccion;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid items-start gap-3 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <figure className="flex flex-col gap-2.5 rounded-[14px] border border-dashed border-borde-fuerte p-4">
          <figcaption className="flex flex-col text-[13px] text-tenue">
            <span className="font-medium text-tinta-2">{t.antes}</span>
            {prompt.dondeAntes && <span>{prompt.dondeAntes}</span>}
          </figcaption>
          <pre className="font-mono text-[14px] leading-relaxed whitespace-pre-wrap text-tinta-2">{prompt.antes}</pre>
        </figure>
        <figure className="flex flex-col gap-2.5 rounded-[14px] border border-borde p-4">
          <figcaption className="flex flex-wrap items-start justify-between gap-2 text-[13px] text-tenue">
            <span className="flex flex-col">
              <span className="font-medium text-tinta">{t.despues}</span>
              {prompt.dondeDespues && <span>{prompt.dondeDespues}</span>}
            </span>
            <BotonCopiar texto={prompt.despues} lang={lang} />
          </figcaption>
          <pre className="rounded-[10px] bg-codigo-fondo px-4 py-3.5 font-mono text-[14px] leading-relaxed whitespace-pre-wrap text-codigo-tinta">
            {prompt.despues}
          </pre>
        </figure>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-medium text-tenue">{t.porQue}</span>
        <ul className="flex max-w-[68ch] flex-col gap-1.5">
          {prompt.porQue.map((p) => (
            <li key={p} className="grid grid-cols-[14px_minmax(0,1fr)] gap-2 text-[16px] leading-relaxed text-tinta-2">
              <span aria-hidden className="mt-[0.7em] size-1.5 rounded-full bg-linea" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
