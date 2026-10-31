"use client";

import { useMemo, useState } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import datos from "./datos/tokens-es.json";
import { contar, enPiezas, type Ejemplo } from "./tokens";

/**
 * Escena «tokens» (estación 03, parada 2): escribir un texto y verlo cortado en tokens, y comparar
 * cuántos tokens usa el español con distintos tokenizadores. Los ejemplos vienen ya cortados
 * (lab/tokens/contar_tokens.ts); el tokenizador completo solo se descarga si el alumno escribe.
 */

const ejemplos = datos.ejemplos as Ejemplo[];
const { pares, caracteres, tokenizadores } = datos.comparacion;
const MAXIMO = 2000;
const fichas = ["bg-ficha-1", "bg-ficha-2", "bg-ficha-3", "bg-ficha-4", "bg-ficha-5"];

type Tokenizador = Pick<typeof import("gpt-tokenizer/encoding/o200k_base"), "encode" | "decode">;
let cargando: Promise<Tokenizador> | null = null;
const cargarTokenizador = () => (cargando ??= import("gpt-tokenizer/encoding/o200k_base"));

export function Tokens({ lang }: { lang: Idioma }) {
  const textosEscenas = textos(lang).escenas;
  const t = textosEscenas.tokens;
  const [ejemploId, setEjemploId] = useState<string | null>(ejemplos[0].id);
  const [texto, setTexto] = useState(ejemplos[0].texto);
  const [tokenizador, setTokenizador] = useState<Tokenizador | null>(null);
  const [error, setError] = useState(false);
  const [numeros, setNumeros] = useState(false);

  const ejemplo = ejemplos.find((e) => e.id === ejemploId);
  const piezas = useMemo(() => {
    if (ejemplo) return ejemplo.piezas;
    if (!tokenizador) return null;
    // Sin tokens especiales: si alguien escribe «<|endoftext|>», se corta como texto común.
    return enPiezas(tokenizador.encode(texto, { disallowedSpecial: new Set() }), tokenizador.decode);
  }, [ejemplo, tokenizador, texto]);

  const cargar = () => {
    if (tokenizador) return;
    cargarTokenizador()
      .then((m) => {
        setTokenizador(m);
        setError(false);
      })
      .catch(() => {
        cargando = null;
        setError(true);
      });
  };

  const porcentaje = (x: number) => new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: 0 }).format(x);
  const extra = (c: { es: number; en: number }) => c.es / c.en - 1;
  const orden = [...tokenizadores].sort((a, b) => extra(b) - extra(a));
  const mayor = orden[0];
  const menor = orden[orden.length - 1];
  const nombre = (c: (typeof tokenizadores)[number]) => ("anio" in c ? `${c.nombre} (${c.anio})` : `${c.nombre} (${t.local})`);

  return (
    <section aria-labelledby="escena-tokens" className="flex flex-col gap-6 rounded-[18px] sm:border sm:border-borde sm:bg-fondo sm:p-[clamp(16px,2.4vw,28px)]">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-tenue">{textosEscenas.ahoraTu}</span>
        <h3 id="escena-tokens" className="text-[19px] font-medium">
          {t.titulo}
        </h3>
      </div>

      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm text-tenue">{t.ejemplos}</span>
            {ejemplos.map((e) => (
              <button
                key={e.id}
                type="button"
                aria-pressed={e.id === ejemploId}
                onClick={() => {
                  setEjemploId(e.id);
                  setTexto(e.texto);
                }}
                className={`min-h-9 rounded-full border px-3.5 text-[14.5px] ${
                  e.id === ejemploId ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte hover:bg-suave"
                }`}
              >
                {t.nombresEjemplos[e.id as keyof typeof t.nombresEjemplos]}
              </button>
            ))}
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-tenue">{t.etiqueta}</span>
            <textarea
              value={texto}
              maxLength={MAXIMO}
              rows={2}
              onFocus={cargar}
              onChange={(e) => {
                setTexto(e.target.value);
                setEjemploId(null);
                cargar();
              }}
              className="w-full resize-y rounded-[12px] border border-borde-fuerte bg-pizarra px-4 py-3 text-[17px] leading-relaxed"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-serif text-[22px] tabular-nums">{piezas ? rellenar(t.cuenta, { n: contar(piezas), c: [...texto].length }) : " "}</span>
            <div className="flex rounded-full border border-borde-fuerte p-0.5">
              {[false, true].map((n) => (
                <button
                  key={String(n)}
                  type="button"
                  aria-pressed={numeros === n}
                  onClick={() => setNumeros(n)}
                  className={`min-h-9 rounded-full px-3.5 text-[14.5px] ${numeros === n ? "bg-primario text-primario-tinta" : "hover:bg-suave"}`}
                >
                  {n ? t.numeros : t.pedazos}
                </button>
              ))}
            </div>
          </div>

          <div aria-live="polite" className="min-h-[7rem] rounded-[12px] border border-borde bg-pizarra px-4 py-3">
            {piezas ? (
              <p aria-label={rellenar(t.cortado, { n: contar(piezas) })} className={`break-words ${numeros ? "font-mono text-[17px] leading-[1.9]" : "text-[20px] leading-[2] whitespace-pre-wrap"}`}>
                {piezas.map((p, i) => (
                  <span key={i} className={`rounded-[4px] ${fichas[i % fichas.length]} ${numeros ? "mr-1 inline-block px-1.5 leading-[1.7]" : "py-0.5"}`}>
                    {numeros ? p.ids.join(" ") : p.t.replaceAll("\n", "↵\n")}
                  </span>
                ))}
              </p>
            ) : (
              <p className="text-[15px] text-tenue">{error ? t.error : t.cargando}</p>
            )}
          </div>

          <p className="text-[15px] text-tinta-2">{numeros ? t.asiLoVe : (ejemplo?.mira ?? t.pruebaTuya)}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-medium">{t.comparacionTitulo}</h4>
            <p className="text-sm text-tenue text-pretty">{rellenar(t.comparacionTexto, { pares: pares.length, es: caracteres.es, en: caracteres.en })}</p>
          </div>
          <ol className="flex flex-col gap-3">
            {orden.map((c) => (
              <li key={c.nombre} className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px]">{nombre(c)}</span>
                  <span className="font-serif text-[19px] tabular-nums">+{porcentaje(extra(c))}</span>
                </div>
                <span className="h-2.5 overflow-hidden rounded-full bg-[var(--pizarra-rejilla)]">
                  <span className="block h-full rounded-full bg-acento" style={{ width: `${(extra(c) / extra(mayor)) * 100}%` }} />
                </span>
                <span className="text-[13px] text-tenue">{rellenar(t.detalle, { es: c.es, en: c.en })}</span>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-tinta-2 text-pretty">
            {rellenar(t.conclusion, { max: porcentaje(extra(mayor)), nombreMax: mayor.nombre, min: porcentaje(extra(menor)), nombreMin: menor.nombre })}
          </p>
          <details className="rounded-[12px] border border-borde px-4 py-3">
            <summary className="cursor-pointer text-[15px] select-none">{t.verTextos}</summary>
            <ul className="mt-3 flex flex-col gap-3 text-[14px] leading-relaxed">
              {pares.map((p) => (
                <li key={p.es} className="flex flex-col gap-1">
                  <span>{p.es}</span>
                  <span className="text-tenue" lang="en">
                    {p.en}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-tenue text-pretty">
        {t.nota}{" "}
        <a href="https://github.com/francoSW99/Academy/tree/main/lab/tokens" className="underline underline-offset-2 hover:text-tinta">
          {t.codigo}
        </a>
      </p>
    </section>
  );
}
