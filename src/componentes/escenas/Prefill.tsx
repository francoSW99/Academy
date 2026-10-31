"use client";

import { useEffect, useRef, useState } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import datos from "./datos/prefill-es.json";

/**
 * Escena «prefill» (estación 03, parada 3): mandar un prompt y ver las dos fases con los tiempos
 * medidos en esta máquina. Prefill: lee todo el prompt de una vez. Decode: escribe token a token.
 * Los datos salen de lab/prefill/medir_velocidad.py.
 */

type Fase = { tokens: number; segundos: number };
type Medicion = { id: string; pedido: string; leer: Fase; escribir: Fase; respuesta: string[] };
type Largo = "corta" | "larga";

const mediciones = datos.mediciones as Medicion[];
/** Tokens de la respuesta: los dos caben en lo que se midió (el modelo escribió 100). */
const LARGOS: Record<Largo, number> = { corta: 30, larga: 100 };
/** Segundos de animación del caso más largo; los demás van a la misma velocidad. */
const DURACION = 10;

const tokensDeRespuesta = (m: Medicion, largo: Largo) => Math.min(LARGOS[largo], m.escribir.tokens, m.respuesta.length);
const tiempos = (m: Medicion, n: number) => ({ leer: m.leer.segundos, escribir: (m.escribir.segundos / m.escribir.tokens) * n });
const TOTAL_MAXIMO = Math.max(
  ...mediciones.map((m) => {
    const x = tiempos(m, tokensDeRespuesta(m, "larga"));
    return x.leer + x.escribir;
  }),
);
const ACELERA = TOTAL_MAXIMO / DURACION;

export function Prefill({ lang }: { lang: Idioma }) {
  const textosEscenas = textos(lang).escenas;
  const t = textosEscenas.prefill;
  const [id, setId] = useState(mediciones[1].id);
  const [largo, setLargo] = useState<Largo>("corta");
  /** Segundos reales desde que se mandó el prompt; null si todavía no se manda. */
  const [reloj, setReloj] = useState<number | null>(null);
  const cuadro = useRef(0);

  const m = mediciones.find((x) => x.id === id)!;
  const n = tokensDeRespuesta(m, largo);
  const { leer, escribir } = tiempos(m, n);
  const total = leer + escribir;
  const fase = reloj === null ? "espera" : reloj < leer ? "lee" : reloj < total ? "escribe" : "listo";
  const escritos = fase === "listo" ? n : reloj === null || reloj < leer ? 0 : Math.min(n, Math.floor(((reloj - leer) / escribir) * n));

  useEffect(() => () => cancelAnimationFrame(cuadro.current), []);

  const parar = () => {
    cancelAnimationFrame(cuadro.current);
    setReloj(null);
  };
  const enviar = () => {
    cancelAnimationFrame(cuadro.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setReloj(total);
    const inicio = performance.now();
    const paso = (ahora: number) => {
      const real = ((ahora - inicio) / 1000) * ACELERA;
      setReloj(Math.min(real, total));
      if (real < total) cuadro.current = requestAnimationFrame(paso);
    };
    cuadro.current = requestAnimationFrame(paso);
  };

  const numero = (x: number, decimales = 0) => new Intl.NumberFormat(lang, { maximumFractionDigits: decimales, minimumFractionDigits: decimales }).format(x);
  const duracion = (x: number) =>
    x < 60
      ? rellenar(t.segundos, { n: numero(x, x < 10 ? 1 : 0) })
      : rellenar(t.minutos, { m: Math.floor(x / 60), s: String(Math.round(x % 60)).padStart(2, "0") });
  const porSegundo = (f: Fase) => rellenar(t.porSegundo, { n: numero(f.tokens / f.segundos, 1) });
  const veces = m.escribir.segundos / m.escribir.tokens / (m.leer.segundos / m.leer.tokens);
  /** La franja mide el tiempo total de esta opción; el tiempo de espera se siente en la animación. */
  const parte = (x: number) => `${(x / total) * 100}%`;

  const chip = (activo: boolean) =>
    `min-h-10 rounded-full border px-3.5 text-[14.5px] ${activo ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte hover:bg-suave"}`;

  return (
    <section aria-labelledby="escena-prefill" className="flex flex-col gap-6 rounded-[18px] sm:border sm:border-borde sm:bg-fondo sm:p-[clamp(16px,2.4vw,28px)]">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-tenue">{textosEscenas.ahoraTu}</span>
        <h3 id="escena-prefill" className="text-[19px] font-medium">
          {t.titulo}
        </h3>
        <p className="max-w-[46em] text-[15px] text-tinta-2 text-pretty">{t.lead}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div role="group" aria-label={t.mandas} className="flex flex-col gap-2">
          <span className="text-sm text-tenue">{t.mandas}</span>
          <div className="flex flex-wrap gap-2">
            {mediciones.map((x) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={x.id === id}
                onClick={() => {
                  setId(x.id);
                  parar();
                }}
                className={chip(x.id === id)}
              >
                {rellenar(t.conTokens, { nombre: t.prompts[x.id as keyof typeof t.prompts], n: numero(x.leer.tokens) })}
              </button>
            ))}
          </div>
        </div>
        <div role="group" aria-label={t.responde} className="flex flex-col gap-2">
          <span className="text-sm text-tenue">{t.responde}</span>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(LARGOS) as Largo[]).map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={l === largo}
                onClick={() => {
                  setLargo(l);
                  parar();
                }}
                className={chip(l === largo)}
              >
                {rellenar(t.conTokens, { nombre: t.largos[l], n: tokensDeRespuesta(m, l) })}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={enviar} className="inline-flex min-h-11 items-center rounded-full bg-primario px-6 text-[15px] font-medium text-primario-tinta">
            {fase === "listo" ? t.otraVez : t.enviar}
          </button>
          <span aria-live="polite" className="text-[15px] text-tinta-2">
            {fase === "espera" && t.estados.espera}
            {fase === "lee" && rellenar(t.estados.lee, { n: numero(m.leer.tokens), t: duracion(reloj!) })}
            {fase === "escribe" && rellenar(t.estados.escribe, { k: escritos, n, t: duracion(reloj!) })}
            {fase === "listo" && t.estados.listo}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <ul aria-hidden className="flex flex-wrap gap-x-4 text-[13px] text-tenue">
            <li className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-[3px] bg-acento" />
              {t.fases.leer}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-[3px] bg-tinta-2" />
              {t.fases.escribir}
            </li>
          </ul>
          <div aria-hidden className="relative h-10 overflow-hidden rounded-[10px] border border-borde-fuerte bg-[var(--pizarra-rejilla)]">
            <span className="absolute inset-y-0 left-0 bg-acento/25" style={{ width: parte(leer) }} />
            <span className="absolute inset-y-0 right-0 bg-tinta-2/20" style={{ left: parte(leer) }} />
            {reloj !== null && (
              <>
                <span className="absolute inset-y-0 left-0 bg-acento" style={{ width: parte(Math.min(reloj, leer)) }} />
                {reloj > leer && <span className="absolute inset-y-0 bg-tinta-2" style={{ left: parte(leer), width: parte(reloj - leer) }} />}
              </>
            )}
            <span className="absolute inset-y-0 w-0.5 bg-fondo" style={{ left: parte(leer) }} />
          </div>
          <div className="flex justify-between text-[13px] text-tenue tabular-nums">
            <span>0 s</span>
            <span>{duracion(total)}</span>
          </div>
        </div>
        <p className="text-[13px] text-tenue">{rellenar(t.acelerado, { k: numero(ACELERA) })}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className={`flex flex-col gap-2 rounded-[12px] border px-4 py-3 transition-colors duration-300 ${fase === "lee" ? "border-acento bg-suave" : "border-borde bg-pizarra"}`}>
          <span className="text-[13px] text-tenue">{rellenar(t.leyendo, { n: numero(m.leer.tokens) })}</span>
          <span className="text-[15.5px] leading-relaxed">{m.pedido}</span>
          {m.leer.tokens > 100 && <span className="text-[13px] text-tenue">{rellenar(t.conTexto, { n: numero(m.leer.tokens) })}</span>}
        </div>
        <div className={`flex min-h-[8rem] flex-col gap-2 rounded-[12px] border px-4 py-3 ${fase === "escribe" ? "border-tinta" : "border-borde"} bg-pizarra`}>
          <span className="text-[13px] text-tenue">{rellenar(t.escribiendo, { k: escritos, n })}</span>
          <span className="text-[15.5px] leading-relaxed whitespace-pre-line">
            {/* El modelo escribe en Markdown: aquí se muestran las palabras, sin los ** ni los ###. */}
            {m.respuesta.slice(0, escritos).join("").replace(/\*\*/g, "").replace(/^#+\s*/gm, "")}
            {/* Se cortó: o es la respuesta corta, o el modelo llegó al tope de tokens de la medición. */}
            {fase === "listo" && (n < m.respuesta.length || m.escribir.tokens >= datos.tope) && "…"}
            {fase === "escribe" && <span aria-hidden className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-tinta" />}
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        {[
          [t.primerToken, duracion(leer)],
          [t.completa, duracion(total)],
          [t.velocidadLee, porSegundo(m.leer)],
          [t.velocidadEscribe, porSegundo(m.escribir)],
        ].map(([nombre, valor]) => (
          <div key={nombre} className="flex flex-col gap-0.5">
            <dt className="text-[13px] text-tenue">{nombre}</dt>
            <dd className="font-serif text-[22px] tabular-nums">{valor}</dd>
          </div>
        ))}
      </dl>
      <p className="text-[15px] text-tinta-2">{rellenar(t.veces, { x: numero(veces) })}</p>

      <p className="text-[13px] leading-relaxed text-tenue text-pretty">
        {rellenar(t.nota, {
          maquina: datos.maquina,
          modelo: datos.modelo,
          fecha: new Date(`${datos.fecha}T12:00:00`).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" }),
        })}{" "}
        <a href="https://github.com/francoSW99/Academy/tree/main/lab/prefill" className="underline underline-offset-2 hover:text-tinta">
          {t.codigo}
        </a>
      </p>
    </section>
  );
}
