import datos from "@/componentes/escenas/datos/prefill-es.json";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { Revelar } from "./Revelar";

// La pregunta de Carla sola (lab/prefill): el modelo la lee entera de una vez y después escribe de a un token.
// Los tiempos son los medidos en esta máquina, sin GPU.
const M = datos.mediciones.find((m) => m.id === "pregunta")!;
const RESPUESTA = M.respuesta.slice(0, 10).map((p) => p.trim()).filter(Boolean);
const ritmo = (x: { tokens: number; segundos: number }) => Math.round(x.tokens / x.segundos);
const fichas = ["bg-ficha-1", "bg-ficha-2", "bg-ficha-3", "bg-ficha-4", "bg-ficha-5"];

/** Leer es en paralelo; escribir, en fila. */
export function LeerEscribir({ lang }: { lang: Idioma }) {
  const t = textos(lang).figuras.leerEscribir;
  return (
    <figure className="flex flex-col gap-4 rounded-[18px] border border-borde p-[clamp(16px,2.6vw,28px)]">
      <Revelar className="grid gap-3 md:grid-cols-2">
        <div className="paso flex flex-col gap-2.5 rounded-[14px] bg-[var(--pizarra-rejilla)] px-4 py-3.5" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="text-[12.5px] font-medium text-tenue">{t.leer}</span>
          {/* Toda la pregunta entra junta: un solo paso. */}
          <span className="paso rounded-[6px] bg-ficha-1 px-2 py-1.5 font-serif text-[18px] leading-snug" style={{ "--i": 1 } as React.CSSProperties}>
            «{M.pedido}»
          </span>
          <span className="paso text-[14px] text-tinta-2" style={{ "--i": 1 } as React.CSSProperties}>
            {rellenar(t.dato, { tokens: M.leer.tokens, segundos: Math.round(M.leer.segundos), ritmo: ritmo(M.leer) })}
          </span>
        </div>

        <div className="paso flex flex-col gap-2.5 rounded-[14px] bg-[var(--pizarra-rejilla)] px-4 py-3.5" style={{ "--i": 2 } as React.CSSProperties}>
          <span className="text-[12.5px] font-medium text-tenue">{t.escribir}</span>
          {/* Cada token entra después del anterior. */}
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
            {RESPUESTA.map((p, k) => (
              <li key={k} className="paso flex items-center gap-1" style={{ "--i": 3 + k } as React.CSSProperties}>
                {k > 0 && <span aria-hidden className="text-[12px] text-tenue">→</span>}
                <span className={`rounded-[5px] px-1.5 py-0.5 font-serif text-[18px] ${fichas[k % fichas.length]}`}>{p}</span>
              </li>
            ))}
            <li className="paso text-tenue" style={{ "--i": 3 + RESPUESTA.length } as React.CSSProperties}>
              …
            </li>
          </ol>
          <span className="paso text-[14px] text-tinta-2" style={{ "--i": 3 + RESPUESTA.length } as React.CSSProperties}>
            {rellenar(t.dato, { tokens: M.escribir.tokens, segundos: Math.round(M.escribir.segundos), ritmo: ritmo(M.escribir) })}
          </span>
        </div>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}
