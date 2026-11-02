"use client";

/**
 * Escena «autocompletado» (lección 03, idea 1): eres el modelo que redacta la respuesta a Carla.
 * Eliges cada palabra entre las 3 más probables, como en el teclado del celular, y la probabilidad
 * de la frase se multiplica en vivo. Datos medidos antes en lab/autocompletado (deepseek-r1:8b):
 * la página no llama a ningún modelo.
 */

import { useState } from "react";
import { textos, type Idioma } from "@/lib/idiomas";
import { CabeceraEscena } from "./CabeceraEscena";
import datos from "./datos/autocompletado-es.json";

type Opcion = { palabra: string; p: number; sigue?: Opcion[] };
const RAIZ = datos.opciones as Opcion[];

const porcentaje = (p: number) => `${(p * 100).toLocaleString("es", { maximumFractionDigits: p < 0.01 ? 1 : 0 })} %`;

export function Autocompletado({ lang }: { lang: Idioma }) {
  const t = textos(lang).escenas.autocompletado;
  const [elegidas, setElegidas] = useState<Opcion[]>([]);

  const sugerencias = elegidas.length === 0 ? RAIZ : (elegidas[elegidas.length - 1].sigue ?? []);
  const total = elegidas.reduce((s, o) => s * o.p, 1);
  // ¿Eligió siempre la más probable? Así escribe el modelo a temperatura 0.
  let nivel = RAIZ;
  const siemprePrimera = elegidas.every((o) => {
    const ok = nivel[0]?.palabra === o.palabra;
    nivel = o.sigue ?? [];
    return ok;
  });
  const fin = sugerencias.length === 0;

  return (
    <section aria-labelledby="escena-autocompletado" className="escena glass-card flex flex-col gap-6">
      <CabeceraEscena id="escena-autocompletado" titulo={t.titulo} lead={t.lead} lang={lang} />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px]">
        <div className="flex flex-col gap-5">
          {/* La respuesta que va escribiendo el bot. */}
          <p className="glass-pozo min-h-[4.5em] px-4 py-3.5 text-[19px] leading-snug" aria-live="polite">
            <span className="text-tinta-2">{datos.frase}</span>
            {elegidas.map((o, k) => (
              <span key={k} className="text-acento-texto">
                {" "}
                {o.palabra}
              </span>
            ))}
            <span aria-hidden className="cursor-parpadeo ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-acento" />
          </p>

          {fin ? (
            <p className="text-[15.5px] text-pretty">
              {siemprePrimera ? <strong className="font-medium">{t.finPrimera}</strong> : t.finOtra}
            </p>
          ) : (
            <div role="group" aria-label={t.sugiere} className="flex flex-col gap-2">
              <span className="text-sm text-tenue">{t.sugiere}</span>
              <div className="grid grid-cols-3 gap-2">
                {sugerencias.map((o, k) => (
                  <button
                    key={o.palabra}
                    type="button"
                    onClick={() => setElegidas([...elegidas, o])}
                    className={`glass-opcion flex min-h-16 flex-col items-center justify-center gap-1.5 px-2 py-2 ${k === 0 ? "border-acento/70" : ""}`}
                  >
                    <span className="text-[17px] leading-none font-medium">{o.palabra}</span>
                    <span className="flex w-full max-w-[110px] items-center gap-1.5">
                      <span className="h-1 flex-1 rounded-full bg-[var(--pizarra-rejilla)]">
                        <span className="brillo block h-full rounded-full bg-acento" style={{ width: `${o.p * 100}%` }} />
                      </span>
                      <span className="text-[12px] text-tenue tabular-nums">{porcentaje(o.p)}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={elegidas.length === 0}
              onClick={() => setElegidas(elegidas.slice(0, -1))}
              className="glass-pill min-h-10 px-3.5 text-[14.5px]"
            >
              {t.borrar}
            </button>
            <button
              type="button"
              disabled={elegidas.length === 0}
              onClick={() => setElegidas([])}
              className="glass-pill min-h-10 px-3.5 text-[14.5px]"
            >
              {t.reiniciar}
            </button>
          </div>
        </div>

        {/* La probabilidad de la frase: cada palabra elegida la multiplica. */}
        <div className="flex flex-col gap-2" aria-live="polite">
          <span className="text-sm font-medium">{t.probabilidad}</span>
          {elegidas.length === 0 ? (
            <span className="text-[14px] text-tenue">{t.vacia}</span>
          ) : (
            <>
              <ul className="flex flex-col gap-1 text-[15.5px]">
                {elegidas.map((o, k) => (
                  <li key={k} className="grid grid-cols-[16px_minmax(0,1fr)_auto] gap-1">
                    <span className="text-tenue">{k > 0 ? "×" : ""}</span>
                    <span className="truncate">{o.palabra}</span>
                    <span className="tabular-nums">{porcentaje(o.p)}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-[16px_minmax(0,1fr)] gap-1 border-t border-borde pt-1.5">
                <span className="text-[15.5px] text-tenue">=</span>
                <span className="text-right text-[28px] leading-tight font-light text-acento-texto tabular-nums">{porcentaje(total)}</span>
              </div>
              {elegidas.length > 1 && <span className="text-[13px] text-tenue text-pretty">{t.nota}</span>}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
