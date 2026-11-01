import datos from "@/componentes/escenas/datos/autocompletado-es.json";
import { textos, type Idioma } from "@/lib/idiomas";
import { Flecha, Paso } from "./Piezas";
import { Revelar } from "./Revelar";

// El bot de soporte redacta la respuesta a Carla: las 3 palabras más probables después del comienzo, medidas en
// lab/autocompletado (deepseek-r1:8b). Del comienzo se muestran solo las últimas palabras.
const PROBABLES = datos.opciones.slice(0, 3).map((o) => ({ palabra: o.palabra, p: o.p }));
const COLA = `…${datos.frase.split(" ").slice(-4).join(" ")}`;
const ELEGIDA = PROBABLES[0].palabra;

/** El bucle con el que escribe un LLM: lee, calcula probabilidades, elige una palabra, la agrega y repite. */
export function Bucle({ lang }: { lang: Idioma }) {
  const t = textos(lang).figuras.bucle;
  return (
    <figure className="flex flex-col gap-4 rounded-[18px] border border-borde p-[clamp(16px,2.6vw,28px)]">
      <Revelar className="flex flex-col gap-2">
        <div className="grid items-stretch gap-1 md:grid-cols-[minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)] md:gap-2">
          <Paso i={0} titulo={t.lee}>
            <span className="font-serif text-[21px] leading-snug">«{COLA}»</span>
          </Paso>
          <Flecha i={1} />
          <Paso i={1} titulo={t.calcula}>
            <ul className="flex flex-col gap-1.5">
              {PROBABLES.map(({ palabra, p }, k) => (
                <li key={palabra} className="grid grid-cols-[minmax(40px,auto)_minmax(0,1fr)_36px] items-center gap-2">
                  <span className={`font-serif text-[17px] ${k === 0 ? "text-acento-texto" : ""}`}>{palabra}</span>
                  <span className="h-1.5 overflow-hidden rounded-full bg-borde">
                    <span className={`block h-full rounded-full ${k === 0 ? "bg-acento" : "bg-borde-fuerte"}`} style={{ width: `${p * 100}%` }} />
                  </span>
                  <span className="text-right text-[12.5px] text-tenue tabular-nums">{Math.round(p * 100)}&nbsp;%</span>
                </li>
              ))}
            </ul>
          </Paso>
          <Flecha i={2} />
          <Paso i={2} titulo={t.elige}>
            <span className="font-serif text-[21px] leading-snug text-acento-texto">«{ELEGIDA}»</span>
          </Paso>
          <Flecha i={3} />
          <Paso i={3} titulo={t.agrega}>
            <span className="font-serif text-[21px] leading-snug">
              «{COLA} <span className="text-acento-texto">{ELEGIDA}</span>»
            </span>
          </Paso>
        </div>

        {/* La vuelta: en el computador, una línea punteada que regresa al paso 1; en el celular, una nota. */}
        <div className="paso hidden pb-7 md:block" style={{ "--i": 4 } as React.CSSProperties}>
          <div className="relative mx-[12%] h-8 rounded-b-[16px] border-2 border-t-0 border-dashed border-borde-fuerte">
            <svg aria-hidden viewBox="0 0 12 10" className="absolute -top-[9px] -left-[7px] w-3 fill-borde-fuerte">
              <path d="M6 0 12 10H0z" />
            </svg>
            <span className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 font-serif text-[16px] whitespace-nowrap text-tenue italic">↺ {t.repite}</span>
          </div>
        </div>
        <p className="paso text-center font-serif text-[16px] text-tenue italic md:hidden" style={{ "--i": 4 } as React.CSSProperties}>
          ↺ {t.repite}
        </p>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}
