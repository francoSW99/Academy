"use client";

import { useState } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import datos from "./datos/contexto-es.json";

/**
 * Escena «contexto» (estación 03, parada 4): una conversación real que se llena turno a turno.
 * En el último turno no cabe en la ventana chica: se recorta lo viejo (la regla de Ollama) o se
 * resume. Los datos salen de lab/contexto/llenar_ventana.py.
 */

type Rol = "system" | "user" | "assistant";
type Mensaje = { rol: Rol; texto: string; tokens: number };
type Modo = "grande" | "recorta" | "compacta";
type Final = {
  respuesta: string;
  leidos: number;
  mani: "cuida" | "usa" | "no-dice";
  desde?: number;
  resumen?: string;
  resumenTokens?: number;
  resumenGuarda?: boolean;
};

const mensajes = datos.mensajes as Mensaje[];
const finales = datos.final as Record<Modo, Final>;
const TURNOS = datos.turnos.length + 1; // Los turnos con respuesta, más la pregunta final.
const modos: Modo[] = ["grande", "recorta", "compacta"];
/** La pregunta final es el último mensaje. */
const ULTIMA = mensajes.length - 1;

const relleno: Record<Rol | "resumen", string> = {
  system: "bg-borde-fuerte",
  user: "bg-acento",
  assistant: "bg-tinta-2",
  resumen: "bg-l2",
};

export function Contexto({ lang }: { lang: Idioma }) {
  const textosEscenas = textos(lang).escenas;
  const t = textosEscenas.contexto;
  const [turno, setTurno] = useState(0);
  const [modo, setModo] = useState<Modo>("recorta");

  const final = turno === TURNOS ? finales[modo] : null;
  const ventana = modo === "grande" ? datos.ventanaGrande : datos.ventanaChica;
  const numero = (n: number) => new Intl.NumberFormat(lang).format(n);

  // Lo que el modelo lee en este turno: las instrucciones y la conversación hasta la última pregunta.
  const hasta = turno === 0 ? 0 : 2 * turno - 1;
  const fuera = new Set<number>();
  if (final && modo === "recorta") for (let i = 1; i < final.desde!; i++) fuera.add(i);
  if (final && modo === "compacta") for (let i = 1; i < hasta; i++) fuera.add(i);
  const leidos = mensajes.slice(0, hasta + 1).filter((_, i) => !fuera.has(i));
  const tramos = [
    ...leidos.slice(0, 1).map((m) => ({ clave: "0", rol: m.rol as Rol | "resumen", tokens: m.tokens })),
    ...(final?.resumen ? [{ clave: "resumen", rol: "resumen" as const, tokens: final.resumenTokens! }] : []),
    ...leidos.slice(1).map((m, i) => ({ clave: `m${i}`, rol: m.rol as Rol | "resumen", tokens: m.tokens })),
  ];
  const usados = tramos.reduce((a, x) => a + x.tokens, 0);
  const porTurno = [...datos.turnos.map((x) => x.leidos), ...(final ? [final.leidos] : [])].slice(0, turno);
  const total = porTurno.reduce((a, b) => a + b, 0);
  const maximo = Math.max(...datos.turnos.map((x) => x.leidos), finales.grande.leidos);

  const visibles = turno === 0 ? 1 : Math.min(2 * turno + 1, mensajes.length);
  const tokensFuera = [...fuera].reduce((a, i) => a + mensajes[i].tokens, 0);
  // Por qué respondió así: la alergia está en el primer mensaje (el 1).
  const porque = !final ? "" : modo === "grande" ? t.porque.vista : modo === "recorta" ? t.porque.recortada : final.resumenGuarda ? t.porque.resumenGuarda : t.porque.resumenPierde;

  const tarjeta = (m: Mensaje, i: number) => (
    <li key={i} className={`flex flex-col gap-1 rounded-[12px] border px-4 py-3 ${fuera.has(i) ? "border-dashed border-borde opacity-45" : "border-borde"} ${m.rol === "user" ? "bg-suave" : "bg-pizarra"}`}>
      <span className="flex flex-wrap items-baseline gap-x-2 text-[13px] text-tenue">
        <span className="font-medium text-tinta-2">{t.roles[m.rol]}</span>
        <span>{rellenar(t.tokens, { n: m.tokens })}</span>
        {fuera.has(i) && <span className={modo === "compacta" ? "text-l2" : "text-falso"}>· {modo === "compacta" ? t.resumido : t.fuera}</span>}
      </span>
      <span className={`text-[15.5px] leading-relaxed ${fuera.has(i) ? "line-through decoration-1" : ""}`}>{m.texto}</span>
    </li>
  );

  const ventanaUI = (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-medium">{t.ventana}</span>
        <span className="font-serif text-[19px] tabular-nums">{rellenar(t.ocupa, { usados: numero(usados), v: numero(ventana) })}</span>
      </div>
      <div aria-hidden className="flex h-9 overflow-hidden rounded-[10px] border border-borde-fuerte bg-[var(--pizarra-rejilla)]">
        {tramos.map((x, i) => (
          <span
            key={x.clave}
            className={`h-full transition-[width] duration-300 ease-out motion-reduce:transition-none ${relleno[x.rol]} ${i > 0 ? "border-l-2 border-fondo" : ""}`}
            style={{ width: `${(x.tokens / ventana) * 100}%` }}
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-tenue">
        {(["system", "user", "assistant", ...(final?.resumen ? ["resumen" as const] : [])] as const).map((r) => (
          <li key={r} className="flex items-center gap-1.5">
            <span aria-hidden className={`size-2.5 rounded-[3px] ${relleno[r]}`} />
            {t.roles[r]}
          </li>
        ))}
      </ul>
      {fuera.size > 0 && modo === "recorta" && <p className="text-[14px] text-falso">{rellenar(t.quedaronFuera, { m: fuera.size, n: tokensFuera })}</p>}
    </div>
  );

  const avanzarUI = (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        {turno < TURNOS ? (
          <button type="button" onClick={() => setTurno(turno + 1)} className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
            {t.siguiente}
          </button>
        ) : (
          <button type="button" onClick={() => setTurno(0)} className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-5 text-[15px] hover:bg-suave">
            {t.reiniciar}
          </button>
        )}
        <span className="text-sm text-tenue tabular-nums">{rellenar(t.turnoDe, { t: turno, n: TURNOS })}</span>
      </div>
      {turno < TURNOS && <p className="text-[14px] text-tenue text-pretty">{t.pista}</p>}
    </div>
  );

  return (
    <section aria-labelledby="escena-contexto" className="flex flex-col gap-6 rounded-[18px] sm:border sm:border-borde sm:bg-fondo sm:p-[clamp(16px,2.4vw,28px)]">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-tenue">{textosEscenas.ahoraTu}</span>
        <h3 id="escena-contexto" className="text-[19px] font-medium">
          {t.titulo}
        </h3>
        <p className="max-w-[44em] text-[15px] text-tinta-2 text-pretty">{t.lead}</p>
      </div>

      <div role="group" aria-label={t.modo} className="flex flex-col gap-2">
        <span className="text-sm text-tenue">{t.modo}</span>
        <div className="flex flex-wrap gap-2">
          {modos.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={modo === m}
              onClick={() => setModo(m)}
              className={`min-h-10 rounded-full border px-3.5 text-[14.5px] ${modo === m ? "border-primario bg-primario text-primario-tinta" : "border-borde-fuerte hover:bg-suave"}`}
            >
              {t.modos[m]}
            </button>
          ))}
        </div>
        <p className="text-[14px] text-tinta-2 text-pretty">{rellenar(t.modosTexto[modo], { v: numero(ventana) })}</p>
      </div>

      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <div className="flex flex-col gap-3">
          {/* En el celular, la ventana queda fija arriba mientras se lee la conversación. */}
          <div className="sticky top-0 z-10 -mx-1 bg-pizarra px-1 py-2 lg:hidden">{ventanaUI}</div>
          <ol aria-live="polite" className="flex flex-col gap-3">
            {mensajes.slice(0, Math.min(visibles, ULTIMA)).map(tarjeta)}
            {final?.resumen && (
              <li className="flex flex-col gap-1 rounded-[12px] border border-l2 px-4 py-3">
                <span className="flex flex-wrap items-baseline gap-x-2 text-[13px] text-tenue">
                  <span className="font-medium text-l2">{t.roles.resumen}</span>
                  <span>{rellenar(t.tokens, { n: final.resumenTokens! })}</span>
                </span>
                <span className="text-[15.5px] leading-relaxed">{final.resumen}</span>
              </li>
            )}
            {visibles > ULTIMA && tarjeta(mensajes[ULTIMA], ULTIMA)}
            {final && (
              <li className="aparece flex flex-col gap-1 rounded-[12px] border-2 border-tinta px-4 py-3">
                <span className="flex flex-wrap items-baseline gap-x-2 text-[13px] text-tenue">
                  <span className="font-medium text-tinta-2">{t.roles.assistant}</span>
                  <span className={final.mani === "usa" ? "text-falso" : final.mani === "cuida" ? "text-verdadero" : ""}>· {t.veredictos[final.mani]}</span>
                </span>
                <span className="text-[15.5px] leading-relaxed whitespace-pre-line">{final.respuesta}</span>
                <span className="mt-1 text-[14px] text-tinta-2">{porque}</span>
              </li>
            )}
            {turno === 0 && <li className="text-[15px] text-tenue">{t.empieza}</li>}
          </ol>
          <div className="mt-2 lg:hidden">{avanzarUI}</div>
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
          <div className="hidden lg:block">{ventanaUI}</div>
          {turno > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-tenue">{t.porTurno}</span>
              <div aria-hidden className="flex h-16 items-end gap-2">
                {porTurno.map((n, i) => (
                  <span key={i} className="flex flex-1 flex-col items-center justify-end gap-1">
                    <span className="text-[11px] text-tenue tabular-nums">{n}</span>
                    <span className="w-full rounded-t-[4px] bg-acento transition-[height] duration-300" style={{ height: `${(n / maximo) * 40}px` }} />
                  </span>
                ))}
              </div>
              <p className="text-[14px] text-tinta-2">{rellenar(t.leyoTotal, { t: turno, n: numero(total) })}</p>
            </div>
          )}
          <div className="hidden lg:block">{avanzarUI}</div>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-tenue text-pretty">
        {rellenar(t.nota, {
          modelo: datos.modelo,
          fecha: new Date(`${datos.fecha}T12:00:00`).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" }),
        })}{" "}
        <a href="https://github.com/francoSW99/Academy/tree/main/lab/contexto" className="underline underline-offset-2 hover:text-tinta">
          {t.codigo}
        </a>
      </p>
    </section>
  );
}
