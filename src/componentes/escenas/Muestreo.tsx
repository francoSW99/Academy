"use client";

import { useMemo, useRef, useState } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import datos from "./datos/muestreo-es.json";
import { distribucion, elegir, type Candidata, type Frase, type Veredicto } from "./muestreo";

/**
 * Escena «muestreo» (estación 03, parada 2): elegir la frase, mover la temperatura y tirar los dados
 * sobre las probabilidades reales de un modelo. La matemática está en muestreo.ts.
 */

const frases = datos.frases as unknown as Frase[];
const VISIBLES = 6;
const VARIAS = 20;
/** Ollama da los 20 tokens más probables de cada paso: top-k = 20 es «sin límite». */
const K_MAX = 20;

type Tirada = { u: number; palabra: string };

const relleno: Record<Veredicto | "neutra", string> = {
  verdadero: "bg-verdadero",
  falso: "bg-falso",
  neutra: "bg-acento",
};
const tinta: Record<Veredicto | "neutra", string> = {
  verdadero: "text-verdadero",
  falso: "text-falso",
  neutra: "text-acento-texto",
};

function pista(t: number) {
  if (t === 0) return "cero";
  if (t < 0.6) return "baja";
  if (t < 1) return "media";
  if (t === 1) return "uno";
  if (t <= 1.5) return "alta";
  return "muyAlta";
}

export function Muestreo({ lang }: { lang: Idioma }) {
  const t = textos(lang).escenas.muestreo;
  const [fraseId, setFraseId] = useState(frases[0].id);
  const [temperatura, setTemperatura] = useState(1);
  const [k, setK] = useState(K_MAX);
  const [topP, setTopP] = useState(1);
  const [tirada, setTirada] = useState<Tirada | null>(null);
  const [revelada, setRevelada] = useState(false);
  const [varias, setVarias] = useState<Tirada[]>([]);
  const puntero = useRef<HTMLSpanElement>(null);

  const frase = frases.find((f) => f.id === fraseId)!;
  const tieneRespuesta = Object.keys(frase.veredictos).length > 0;

  // Las filas siguen el orden de temperatura 1, así no saltan de lugar al mover las perillas.
  const orden = useMemo(
    () => [...distribucion(frase, { t: 1, k: K_MAX, topP: 1 }).values()].sort((a, b) => b.p - a.p).map((c) => c.palabra),
    [frase],
  );
  const actual = useMemo(() => distribucion(frase, { t: temperatura, k, topP }), [frase, temperatura, k, topP]);
  const candidatas: Candidata[] = orden.map((palabra) => actual.get(palabra) ?? { palabra, p: 0, tokens: [], veredicto: frase.veredictos[palabra] });
  const p = candidatas.map((c) => c.p);
  const visibles = candidatas.length <= VISIBLES + 1 ? candidatas : candidatas.slice(0, VISIBLES);
  const resto = candidatas.slice(visibles.length);
  const pResto = resto.reduce((a, c) => a + c.p, 0);
  const pFalso = candidatas.filter((c) => c.veredicto === "falso").reduce((a, c) => a + c.p, 0);

  const formato = (x: number) => {
    if (x > 0 && x < 0.001) return `< ${new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: 1 }).format(0.001)}`;
    return new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: x < 0.1 && x > 0 ? 1 : 0 }).format(x);
  };
  const decimal = (x: number) => new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(x);

  const limpiar = () => {
    setTirada(null);
    setVarias([]);
    puntero.current?.getAnimations().forEach((a) => a.cancel());
  };
  /** Cambiar la frase o una perilla borra las tiradas: eran con otras probabilidades. */
  const cambiar = <T,>(fijar: (v: T) => void, v: T) => {
    fijar(v);
    limpiar();
  };

  const tirar = () => {
    const u = Math.random();
    const elegida = candidatas[elegir(p, u)];
    setVarias([]);
    setTirada({ u, palabra: elegida.palabra });
    setRevelada(false);
    const el = puntero.current;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || quieto || !el.animate) {
      setRevelada(true);
      return;
    }
    el.getAnimations().forEach((a) => a.cancel());
    // El dado rueda desde el comienzo de la ruleta y se frena en su punto.
    el.animate([{ left: "0%" }, { left: `${u * 100}%` }], { duration: 700, easing: "cubic-bezier(.2,.9,.25,1)" })
      .finished.then(() => setRevelada(true))
      .catch(() => {});
  };

  const tirarVarias = () => {
    limpiar();
    setVarias(
      Array.from({ length: VARIAS }, () => {
        const u = Math.random();
        return { u, palabra: candidatas[elegir(p, u)].palabra };
      }),
    );
  };

  const elegida = tirada && revelada ? candidatas.find((c) => c.palabra === tirada.palabra) : undefined;
  const conteo = new Map<string, number>();
  for (const v of varias) conteo.set(v.palabra, (conteo.get(v.palabra) ?? 0) + 1);
  const falsas = varias.filter((v) => frase.veredictos[v.palabra] === "falso").length;
  const tono = (c: { veredicto?: Veredicto }): Veredicto | "neutra" => c.veredicto ?? "neutra";

  const tramos = [...visibles.map((c) => ({ clave: c.palabra, etiqueta: c.palabra, p: c.p, tono: tono(c) })), ...(resto.length ? [{ clave: "resto", etiqueta: "", p: pResto, tono: "resto" as const }] : [])];
  const tramoElegido = elegida && (visibles.includes(elegida) ? elegida.palabra : "resto");
  const columnas =
    varias.length > 0
      ? "grid-cols-[minmax(0,6rem)_minmax(0,1fr)_3.4rem_1rem_2rem] sm:grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)_4rem_1.2rem_2.4rem]"
      : "grid-cols-[minmax(0,6rem)_minmax(0,1fr)_3.4rem_1rem] sm:grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)_4rem_1.2rem]";

  return (
    <section aria-labelledby="escena-muestreo" className="flex flex-col gap-6 rounded-[18px] sm:border sm:border-borde sm:bg-fondo sm:p-[clamp(16px,2.4vw,28px)]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-tenue">{textos(lang).escenas.ahoraTu}</span>
          <h3 id="escena-muestreo" className="text-[19px] font-medium">
            {t.titulo}
          </h3>
        </div>
        <div role="group" aria-label={t.elige} className="flex flex-wrap gap-2">
          {frases.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={f.id === fraseId}
              onClick={() => cambiar(setFraseId, f.id)}
              className={`min-h-10 rounded-full border px-4 text-left text-[15px] ${
                f.id === fraseId ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte hover:bg-suave"
              }`}
            >
              {f.texto}…
            </button>
          ))}
        </div>
      </div>

      <p className="font-serif text-[clamp(24px,2.6vw,34px)] leading-snug text-pretty">
        {frase.texto}{" "}
        <span
          className={`inline-flex min-w-[3.2em] justify-center rounded-[10px] border-2 px-2 ${
            elegida ? `border-current ${tinta[tono(elegida)]}` : "border-dashed border-borde-fuerte text-tenue"
          }`}
        >
          {elegida ? elegida.palabra : "?"}
        </span>
        {elegida && !elegida.veredicto && <span className="text-tenue">…</span>}
      </p>

      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-tenue">{t.candidatas}</span>
            <ol className="flex flex-col gap-2">
              {[...visibles, ...(resto.length ? [null] : [])].map((c) => {
                const palabra = c?.palabra ?? "resto";
                const pc = c ? c.p : pResto;
                const veces = c ? conteo.get(c.palabra) : resto.reduce((a, r) => a + (conteo.get(r.palabra) ?? 0), 0);
                const marcada = tramoElegido === palabra;
                return (
                  <li
                    key={palabra}
                    className={`-mx-2 grid ${columnas} items-center gap-2 rounded-[8px] px-2 py-0.5 sm:gap-3 ${pc === 0 ? "opacity-40" : ""} ${marcada ? "bg-suave" : ""}`}
                  >
                    <span className={`truncate ${c ? "font-serif text-[19px]" : "text-[14px] text-tenue"} ${pc === 0 ? "line-through" : ""}`}>
                      {c ? c.palabra : rellenar(t.otras, { n: resto.length })}
                    </span>
                    <span className="h-3 overflow-hidden rounded-full bg-[var(--pizarra-rejilla)]">
                      <span
                        className={`block h-full rounded-full transition-[width] duration-300 ease-out motion-reduce:transition-none ${c ? relleno[tono(c)] : "bg-borde-fuerte"}`}
                        style={{ width: `${pc * 100}%` }}
                      />
                    </span>
                    <span className="text-right text-[15px] tabular-nums">{formato(pc)}</span>
                    <span className="text-center">
                      {c?.veredicto === "verdadero" && <span className="text-verdadero" aria-label={t.verdadero}>✓</span>}
                      {c?.veredicto === "falso" && <span className="text-falso" aria-label={t.falso}>✗</span>}
                    </span>
                    {varias.length > 0 && <span className="text-right text-[13px] text-tenue tabular-nums">×{veces ?? 0}</span>}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative pt-3">
              <div aria-hidden className="flex h-11 overflow-hidden rounded-[10px] border border-borde">
                {tramos.map((tr, i) => (
                  <span
                    key={tr.clave}
                    className={`flex items-center justify-center overflow-hidden text-[13px] whitespace-nowrap transition-[width,opacity] duration-300 ease-out motion-reduce:transition-none ${
                      tr.tono === "resto" ? "bg-borde-fuerte" : relleno[tr.tono]
                    } ${tramoElegido ? (tramoElegido === tr.clave ? "opacity-100" : "opacity-30") : "opacity-85"} ${i > 0 ? "border-l-2 border-fondo" : ""}`}
                    style={{ width: `${tr.p * 100}%`, borderLeftWidth: tr.p === 0 ? 0 : undefined }}
                  >
                    {tr.p >= 0.12 && <span className="min-w-0 truncate px-1.5 font-medium text-acento-tinta">{tr.etiqueta}</span>}
                  </span>
                ))}
              </div>
              {varias.map((v, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="aparece absolute top-3 h-11 w-[2px] -translate-x-1/2 bg-tinta"
                  style={{ left: `${v.u * 100}%`, ["--retraso" as string]: `${i * 45}ms` }}
                />
              ))}
              <span
                ref={puntero}
                aria-hidden
                className={`absolute top-0 bottom-[-6px] w-[3px] -translate-x-1/2 rounded-full bg-tinta ${tirada ? "" : "hidden"}`}
                style={{ left: `${(tirada?.u ?? 0) * 100}%` }}
              >
                <span className="absolute -top-1 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-tinta bg-fondo" />
              </span>
            </div>
            <p className="text-sm text-tenue text-pretty">{t.ruleta}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="temperatura" className="flex items-baseline justify-between gap-3">
              <span className="font-medium">{t.temperatura}</span>
              <span className="font-serif text-[22px] tabular-nums">T = {decimal(temperatura)}</span>
            </label>
            <input
              id="temperatura"
              type="range"
              min={0}
              max={2}
              step={0.05}
              value={temperatura}
              onChange={(e) => cambiar(setTemperatura, Number(e.target.value))}
              aria-valuetext={`${decimal(temperatura)}: ${t.pistas[pista(temperatura)]}`}
              className="w-full accent-[var(--acento)]"
            />
            <p className="text-[15px] text-tinta-2">{t.pistas[pista(temperatura)]}</p>
            <p className={`text-[15px] ${tieneRespuesta && pFalso > 0 ? "text-falso" : "text-tenue"}`}>
              {!tieneRespuesta
                ? t.sinRespuesta
                : pFalso === 0
                  ? t.riesgoNunca
                  : pFalso > 0.9995
                    ? t.riesgoSiempre
                    : rellenar(t.riesgo, { p: formato(pFalso) })}
            </p>
          </div>

          <details className="rounded-[12px] border border-borde px-4 py-3">
            <summary className="cursor-pointer text-[15px] select-none">{t.masPerillas}</summary>
            <div className="mt-3 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="top-k" className="flex justify-between gap-3 text-[15px]">
                  <span>{t.topK}</span>
                  <span className="text-tenue">{k === K_MAX ? t.sinLimite : rellenar(t.topKValor, { k })}</span>
                </label>
                <input id="top-k" type="range" min={1} max={K_MAX} step={1} value={k} onChange={(e) => cambiar(setK, Number(e.target.value))} className="w-full accent-[var(--acento)]" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="top-p" className="flex justify-between gap-3 text-[15px]">
                  <span>{t.topP}</span>
                  <span className="text-tenue">{topP === 1 ? t.sinLimite : rellenar(t.topPValor, { p: formato(topP) })}</span>
                </label>
                <input id="top-p" type="range" min={0.05} max={1} step={0.05} value={topP} onChange={(e) => cambiar(setTopP, Number(e.target.value))} className="w-full accent-[var(--acento)]" />
              </div>
              <p className="text-[13px] text-tenue">{t.perillasNota}</p>
            </div>
          </details>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={tirar} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
              {t.tirar}
            </button>
            <button type="button" onClick={tirarVarias} className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-5 text-[15px] hover:bg-suave">
              {rellenar(t.tirarVarias, { n: VARIAS })}
            </button>
          </div>

          <div aria-live="polite" className="flex min-h-[5.5rem] flex-col gap-2">
            {elegida && (
              <>
                <p className="text-[17px]">
                  {rellenar(t.salio, { palabra: elegida.palabra })} ·{" "}
                  <span className={tinta[tono(elegida)]}>{elegida.veredicto ? t[elegida.veredicto] : t.sigue}</span>
                </p>
                <p className="text-sm text-tenue">
                  {elegida.tokens.length > 1 ? rellenar(t.tokens, { n: elegida.tokens.length, tokens: elegida.tokens.map((x) => `«${x}»`).join(" + ") }) : t.unToken}
                </p>
              </>
            )}
            {varias.length > 0 && (
              <>
                <p className="text-sm text-tenue">{rellenar(t.varias, { n: VARIAS, t: decimal(temperatura) })}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {varias.map((v, i) => {
                    const veredicto = frase.veredictos[v.palabra] ?? "neutra";
                    return (
                      <li
                        key={i}
                        className={`aparece rounded-full border border-current px-1.5 py-px text-[12.5px] ${tinta[veredicto]}`}
                        style={{ ["--retraso" as string]: `${i * 45}ms` }}
                      >
                        {v.palabra}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-[15px]">
                  {tieneRespuesta
                    ? falsas > 0
                      ? rellenar(t.falsas, { f: falsas, n: VARIAS })
                      : t.ningunaFalsa
                    : rellenar(t.distintas, { d: conteo.size })}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-tenue text-pretty">
        {rellenar(t.nota, { modelo: datos.modelo, fecha: new Date(`${datos.fecha}T12:00:00`).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" }), signos: formato(frase.signos) })}{" "}
        <a href="https://github.com/francoSW99/Academy/tree/main/lab/muestreo" className="underline underline-offset-2 hover:text-tinta">
          {t.codigo}
        </a>
      </p>
    </section>
  );
}
