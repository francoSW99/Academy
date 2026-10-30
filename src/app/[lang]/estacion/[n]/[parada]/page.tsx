import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { LineaParadas } from "@/componentes/LineaParadas";
import { PracticaHecha } from "@/componentes/PracticaHecha";
import { esIdioma, idiomas, rellenar, textos } from "@/lib/idiomas";
import { contenidos } from "@/ruta/contenido";
import { buscarEstacion, estaciones, paradasMetodo, totalEstaciones } from "@/ruta/lineas";
import type { ParadaId } from "@/ruta/tipos";

export const dynamicParams = false;

// Export estático: una página por idioma × estación abierta × parada.
export function generateStaticParams() {
  return idiomas.flatMap((lang) =>
    Object.keys(contenidos).flatMap((n) => paradasMetodo.map((p) => ({ lang, n, parada: String(p.n) }))),
  );
}

type Props = { params: Promise<{ lang: string; n: string; parada: string }> };

export default async function Parada({ params }: Props) {
  const { lang, n, parada } = await params;
  const estacion = buscarEstacion(n);
  const contenido = contenidos[n];
  const pn = Number(parada) as ParadaId;
  const metodo = paradasMetodo.find((p) => p.n === pn);
  if (!esIdioma(lang) || !estacion || !contenido || !metodo) notFound();

  const t = textos(lang).estacion;
  const c = contenido.paradas[pn];
  const previa = paradasMetodo.find((p) => p.n === pn - 1);
  const proximaParada = paradasMetodo.find((p) => p.n === pn + 1);
  const i = estaciones.findIndex((e) => e.n === n);
  const proximaEstacion = estaciones[i + 1];
  const base = `/${lang}/estacion/${n}`;

  return (
    <>
      <Cabecera lang={lang} />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-6 px-[clamp(16px,4vw,40px)] pt-8 pb-14">
        <section className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <div className="flex min-w-0 items-center gap-[clamp(14px,2vw,22px)]">
            <span
              aria-hidden
              className="flex size-[clamp(54px,5.5vw,72px)] shrink-0 items-center justify-center rounded-full border-[3px] border-acento font-serif text-[clamp(26px,2.8vw,36px)] text-acento-texto"
            >
              {Number(n)}
            </span>
            <div className="flex min-w-0 flex-col gap-1.5">
              <span className="text-sm text-tenue">
                {rellenar(t.estacionDe, { n: Number(n), total: totalEstaciones, zona: estacion.zona.n, nombreZona: estacion.zona.nombre })}
              </span>
              <h1 className="font-serif text-[clamp(34px,4.4vw,56px)] leading-[1.04] font-normal tracking-[-0.015em]">{estacion.titulo}</h1>
            </div>
          </div>
        </section>

        <LineaParadas lang={lang} estacion={n} actual={pn} />

        <section aria-labelledby="pregunta" className="pizarra flex min-h-[440px] flex-col gap-6 rounded-[20px] border border-borde p-[clamp(20px,3vw,44px)]">
          <p className="text-[13px] text-tenue">{rellenar(t.paradaDe, { n: pn, nombre: metodo.nombre })}</p>
          <h2 id="pregunta" className="font-serif text-[clamp(26px,2.8vw,36px)] leading-tight font-normal">
            {c.pregunta}
          </h2>
          <p className="max-w-[38em] text-lg leading-relaxed text-pretty text-tinta-2">{c.texto}</p>

          {c.indicacion && (
            <div className="flex max-w-[780px] flex-col gap-2">
              <span className="text-[15px] text-tenue">{t.indicacion}</span>
              <div className="flex flex-col rounded-[14px] bg-codigo-fondo px-5 py-4 font-mono text-[15px] leading-[1.7] text-codigo-tinta">
                {c.indicacion.map((linea) => (
                  <span key={linea}>{linea}</span>
                ))}
              </div>
            </div>
          )}

          {c.puntos &&
            (c.indicacion ? (
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm text-tenue">{t.queRevisar}</span>
                {c.puntos.map((p) => (
                  <span key={p} className="rounded-full border border-borde bg-pizarra px-3 py-1.5 text-[14.5px]">
                    {p}
                  </span>
                ))}
              </div>
            ) : (
              <ol className="flex max-w-[780px] flex-col gap-5">
                {c.puntos.map((p, k) => (
                  <li key={p} className="grid grid-cols-[48px_minmax(0,1fr)] items-baseline gap-3">
                    <span className="font-serif text-[34px] leading-none text-acento-texto">{k + 1}</span>
                    <span className="text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ol>
            ))}

          {c.escena && <p className="text-sm text-tenue italic">{t.escenaPronto}</p>}
          {pn === 7 && <PracticaHecha lang={lang} estacion={n} />}
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>
            {previa && (
              <Link href={`${base}/${previa.n}/`} className="inline-flex min-h-11 items-center rounded-full border border-borde-fuerte px-[18px] text-[15px] hover:bg-suave">
                {rellenar(t.anterior, { n: previa.n, nombre: previa.nombre })}
              </Link>
            )}
          </span>
          <Link
            href={proximaParada ? `${base}/${proximaParada.n}/` : `/${lang}/#mapa`}
            className="inline-flex min-h-11 items-center rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta"
          >
            {proximaParada ? rellenar(t.siguiente, { n: proximaParada.n, nombre: proximaParada.nombre }) : t.volverMapa}
          </Link>
        </div>

        {pn === 7 && contenido.material && (
          <section className="flex flex-col gap-3 rounded-[18px] border border-borde p-6">
            <h2 className="text-[21px] font-medium">{t.material}</h2>
            <ul className="flex flex-col gap-3">
              {contenido.material.map((m) => (
                <li key={m.titulo} className="flex flex-col">
                  <span className="font-medium">{m.titulo}</span>
                  <span className="text-sm text-tenue">{m.detalle}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {proximaEstacion && (
          <div className="flex flex-wrap items-center gap-3.5 rounded-[18px] border-[1.5px] border-dashed border-borde-fuerte px-6 py-4">
            <span aria-hidden className="flex size-[38px] items-center justify-center rounded-full border-[3px] border-borde-fuerte font-serif text-lg text-tenue">
              {Number(proximaEstacion.n)}
            </span>
            <span className="flex flex-col">
              <span className="text-[13px] text-tenue">{t.proximaEstacion}</span>
              <span className="font-serif text-[22px] leading-tight">{proximaEstacion.titulo}</span>
            </span>
          </div>
        )}
      </main>
    </>
  );
}
