import datos from "@/componentes/escenas/datos/tokens-es.json";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { Flecha, Paso } from "./Piezas";
import { Revelar } from "./Revelar";

// El ticket de la lección, cortado con o200k_base (lab/tokens). Cada token va con su número debajo:
// así se ve de una vez que el modelo no lee letras, lee números.
const TICKET = datos.ejemplos.find((e) => e.id === "ticket")!;
const fichas = ["bg-ficha-1", "bg-ficha-2", "bg-ficha-3", "bg-ficha-4", "bg-ficha-5"];

/** De texto a tokens y de tokens a números. */
export function ATokens({ lang }: { lang: Idioma }) {
  const t = textos(lang).figuras.tokens;
  return (
    <figure className="flex flex-col gap-4 rounded-[18px] border border-borde p-[clamp(16px,2.6vw,28px)]">
      <Revelar className="flex flex-col gap-1 md:gap-2">
        <Paso i={0} titulo={t.texto}>
          <span className="font-serif text-[21px] leading-snug">«{TICKET.texto}»</span>
        </Paso>
        <Flecha i={1} siempreAbajo />
        <Paso i={1} titulo={t.tokens}>
          <ul className="flex flex-wrap gap-x-1.5 gap-y-2.5">
            {TICKET.piezas.map((p, k) => (
              <li key={k} className="flex flex-col items-center gap-1">
                <span className={`rounded-[5px] px-1.5 py-0.5 font-serif text-[18px] whitespace-pre ${fichas[k % fichas.length]}`}>{p.t.trim()}</span>
                <span className="paso text-[12px] text-tenue tabular-nums" style={{ "--i": 3 } as React.CSSProperties}>
                  {p.ids[0]}
                </span>
              </li>
            ))}
          </ul>
        </Paso>
        <p className="paso px-1 pt-1 text-[14.5px] text-tinta-2" style={{ "--i": 3 } as React.CSSProperties}>
          {rellenar(t.numeros, { tokens: TICKET.piezas.length, caracteres: TICKET.texto.length })}
        </p>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}
