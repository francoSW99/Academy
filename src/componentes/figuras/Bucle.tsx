import datos from "@/componentes/escenas/datos/autocompletado-es.json";
import { IconoFlecha, IconoRepetir } from "@/componentes/Iconos";
import { textos, type Idioma } from "@/lib/idiomas";
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
    <figure className="escena glass-card @container flex flex-col gap-4">
      <Revelar className="flex flex-col gap-2">
        <div className="grid items-stretch gap-1 @min-[720px]:grid-cols-[minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)] @min-[720px]:gap-2">
          <Paso i={0} titulo={t.lee}>
            <span className="text-[18px] leading-snug font-medium tracking-[-0.01em]">«{COLA}»</span>
          </Paso>
          <Flecha i={1} />
          <Paso i={1} titulo={t.calcula}>
            <ul className="flex flex-col gap-1.5">
              {PROBABLES.map(({ palabra, p }, k) => (
                <li key={palabra} className="grid grid-cols-[minmax(40px,auto)_minmax(0,1fr)_36px] items-center gap-2">
                  <span className={`text-[15.5px] font-medium ${k === 0 ? "text-acento-texto" : ""}`}>{palabra}</span>
                  <span className="h-1.5 rounded-full bg-[var(--pizarra-rejilla)]">
                    <span className={`block h-full rounded-full ${k === 0 ? "brillo bg-acento" : "bg-borde-fuerte"}`} style={{ width: `${p * 100}%` }} />
                  </span>
                  <span className="text-right text-[12.5px] text-tenue tabular-nums">{Math.round(p * 100)}&nbsp;%</span>
                </li>
              ))}
            </ul>
          </Paso>
          <Flecha i={2} />
          <Paso i={2} titulo={t.elige}>
            <span className="text-[18px] leading-snug font-medium tracking-[-0.01em] text-acento-texto">«{ELEGIDA}»</span>
          </Paso>
          <Flecha i={3} />
          <Paso i={3} titulo={t.agrega}>
            <span className="text-[18px] leading-snug font-medium tracking-[-0.01em]">
              «{COLA} <span className="text-acento-texto">{ELEGIDA}</span>»
            </span>
          </Paso>
        </div>

        {/* La vuelta: si hay ancho, una línea punteada que regresa al paso 1; si no, una nota. */}
        <div className="paso hidden pb-7 @min-[720px]:block" style={{ "--i": 4 } as React.CSSProperties}>
          <div className="relative mx-[12%] h-8 rounded-b-[16px] border-2 border-t-0 border-dashed border-borde-fuerte">
            <svg aria-hidden viewBox="0 0 12 10" className="absolute -top-[9px] -left-[7px] w-3 fill-borde-fuerte">
              <path d="M6 0 12 10H0z" />
            </svg>
            <span className="absolute top-full left-1/2 mt-1.5 flex -translate-x-1/2 items-center gap-1.5 text-[14.5px] whitespace-nowrap text-tenue">
              <IconoRepetir className="size-4 shrink-0" />
              {t.repite}
            </span>
          </div>
        </div>
        <p className="paso flex items-center justify-center gap-1.5 text-center text-[14.5px] text-tenue @min-[720px]:hidden" style={{ "--i": 4 } as React.CSSProperties}>
          <IconoRepetir className="size-4 shrink-0" />
          {t.repite}
        </p>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}

function Paso({ i, titulo, children }: { i: number; titulo: string; children: React.ReactNode }) {
  return (
    <div className="paso flex flex-col gap-2.5 rounded-[14px] border border-white/[0.06] bg-white/[0.04] px-4 py-3.5" style={{ "--i": i } as React.CSSProperties}>
      <span className="text-[12.5px] font-medium text-tenue">{titulo}</span>
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}

function Flecha({ i }: { i: number }) {
  return (
    <div aria-hidden className="paso flex items-center justify-center text-tenue" style={{ "--i": i } as React.CSSProperties}>
      <IconoFlecha className="size-[18px] rotate-90 @min-[720px]:rotate-0" />
    </div>
  );
}
