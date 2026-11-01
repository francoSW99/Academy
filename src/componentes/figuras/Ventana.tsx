import datos from "@/componentes/escenas/datos/contexto-es.json";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import { Revelar } from "./Revelar";

// La conversación de Carla (lab/contexto), contada en tokens. En cada turno la app vuelve a mandar las
// instrucciones y toda la conversación: la barra crece hasta que deja de caber en la ventana chica.
type Mensaje = (typeof datos.mensajes)[number];
const VENTANA = datos.ventanaChica;
const [instrucciones, ...conversacion] = datos.mensajes;
// El turno n lee las instrucciones y los mensajes hasta la n-ésima pregunta de Carla.
const TURNOS: Mensaje[][] = [];
conversacion.forEach((m, k) => {
  if (m.rol === "user") TURNOS.push([instrucciones, ...conversacion.slice(0, k + 1)]);
});
const suma = (ms: Mensaje[]) => ms.reduce((s, m) => s + m.tokens, 0);
const ESCALA = Math.max(...TURNOS.map(suma)) * 1.06;
const ancho = (tokens: number) => `${(tokens / ESCALA) * 100}%`;

const color: Record<string, string> = { system: "bg-tinta-2", user: "bg-acento", assistant: "bg-borde-fuerte" };

/** Qué lee el modelo en cada turno: todo de nuevo, cada vez más. */
export function Ventana({ lang }: { lang: Idioma }) {
  const t = textos(lang).figuras.ventana;
  return (
    <figure className="flex flex-col gap-4 rounded-[18px] border border-borde p-[clamp(16px,2.6vw,28px)]">
      <Revelar className="flex flex-col gap-3">
        <ul className="paso flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-tinta-2" style={{ "--i": 0 } as React.CSSProperties}>
          {(["system", "user", "assistant"] as const).map((rol) => (
            <li key={rol} className="flex items-center gap-1.5">
              <span aria-hidden className={`size-2.5 rounded-[3px] ${color[rol]}`} />
              {t[rol]}
            </li>
          ))}
        </ul>

        <div className="relative flex flex-col gap-3 pt-6">
          {/* El borde de la ventana: una línea punteada que cruza todos los turnos. */}
          <div aria-hidden className="paso pointer-events-none absolute inset-y-0 left-0 w-full" style={{ "--i": 0 } as React.CSSProperties}>
            <div className="absolute inset-y-0 border-l-2 border-dashed border-falso/70" style={{ left: ancho(VENTANA) }}>
              <span className="absolute top-0 right-1.5 text-[12.5px] font-medium whitespace-nowrap text-falso">{rellenar(t.ventana, { tokens: VENTANA })}</span>
            </div>
          </div>

          {TURNOS.map((ms, k) => {
            const total = suma(ms);
            const noCabe = total > VENTANA;
            return (
              <div key={k} className="paso flex flex-col gap-1" style={{ "--i": k + 1 } as React.CSSProperties}>
                <span className={`text-[13px] ${noCabe ? "font-medium text-falso" : "text-tenue"}`}>
                  {rellenar(t.turno, { n: k + 1, tokens: total })}
                  {noCabe && ` · ${t.noCabe}`}
                </span>
                <div className="relative flex h-4 gap-[2px]">
                  {ms.map((m, j) => (
                    <span key={j} className={`h-full shrink-0 rounded-[3px] ${color[m.rol]}`} style={{ width: ancho(m.tokens) }} />
                  ))}
                  {/* Lo que queda fuera de la ventana: rayado, porque el modelo no lo alcanza a leer. */}
                  {noCabe && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 right-0"
                      style={{
                        left: ancho(VENTANA),
                        background: "repeating-linear-gradient(135deg, var(--pizarra) 0 3px, transparent 3px 7px)",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Revelar>
      <figcaption className="text-[13.5px] text-tenue">{t.pie}</figcaption>
    </figure>
  );
}
