import { textos, type Idioma } from "@/lib/idiomas";
import { Revelar } from "./Revelar";

// Cada paso de la llamada y los consejos de la lección que lo explican (los números de la lista de abajo).
const PASOS = [
  { clave: "pregunta", consejos: [] },
  { clave: "fuente", consejos: [1] },
  { clave: "contexto", consejos: [4, 5] },
  { clave: "modelo", consejos: [2, 3] },
  { clave: "valida", consejos: [3] },
  { clave: "respuesta", consejos: [5] },
] as const;

/** Cómo arma un ingeniero de IA una llamada a un LLM: los consejos de la lección, juntos en un flujo. */
export function Llamada({ lang }: { lang: Idioma }) {
  const t = textos(lang).figuras.llamada;
  return (
    <figure className="flex flex-col gap-4 rounded-[18px] border border-borde p-[clamp(16px,2.6vw,28px)]">
      <Revelar className="grid items-center gap-x-8 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]">
        <ol className="flex flex-col">
          {PASOS.map((paso, k) => {
            const nodo = t.pasos[paso.clave];
            const esModelo = paso.clave === "modelo";
            return (
              <li key={paso.clave} className="paso flex flex-col" style={{ "--i": k } as React.CSSProperties}>
                <div
                  className={`flex items-start justify-between gap-3 rounded-[14px] px-4 py-3 ${
                    esModelo ? "border-[1.5px] border-linea" : "border border-borde bg-[var(--pizarra-rejilla)]"
                  }`}
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="font-serif text-[19px] leading-snug">{nodo.titulo}</span>
                    <span className="text-[14px] leading-snug text-pretty text-tenue">{nodo.texto}</span>
                  </span>
                  <Consejos numeros={paso.consejos} />
                </div>
                {k < PASOS.length - 1 && (
                  <span aria-hidden className="py-0.5 pl-6 text-[16px] text-tenue">
                    ↓
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <div className="paso flex flex-col gap-1.5 rounded-[14px] border-2 border-dashed border-borde-fuerte px-4 py-3.5" style={{ "--i": PASOS.length } as React.CSSProperties}>
          <span className="flex items-start justify-between gap-3">
            <span className="font-serif text-[19px] leading-snug">↺ {t.evals.titulo}</span>
            <Consejos numeros={[1, 3]} />
          </span>
          <span className="text-[14px] leading-snug text-pretty text-tenue">{t.evals.texto}</span>
        </div>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}

function Consejos({ numeros }: { numeros: readonly number[] }) {
  if (numeros.length === 0) return null;
  return (
    <span className="flex shrink-0 gap-1 pt-0.5">
      {numeros.map((n) => (
        <span key={n} className="flex size-6 items-center justify-center rounded-full border border-acento font-serif text-[13px] text-acento-texto">
          {n}
        </span>
      ))}
    </span>
  );
}
