import Link from "next/link";
import { notFound } from "next/navigation";
import { AvanceLinea } from "@/componentes/AvanceLinea";
import { Cabecera } from "@/componentes/Cabecera";
import { MapaLinea } from "@/componentes/MapaLinea";
import { esIdioma, rellenar, textos } from "@/lib/idiomas";
import { estaciones, linea1, linea2, paradasMetodo, totalEstaciones } from "@/ruta/lineas";

export default async function Portada({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos(lang).portada;
  const abiertas = estaciones.filter((e) => e.abierta);
  const proxima = abiertas[0];

  return (
    <>
      <Cabecera lang={lang} />
      <main className="mx-auto max-w-[1120px] px-[clamp(16px,4vw,40px)]">
        <section className="flex max-w-[760px] flex-col gap-5 pt-[clamp(56px,8vw,96px)] pb-11">
          <p className="text-sm text-tenue">{rellenar(t.lineaDe, { n: linea1.n })}</p>
          <h1 className="font-serif text-[clamp(44px,6vw,76px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">
            {linea1.nombre}
          </h1>
          <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{rellenar(t.lede, { total: totalEstaciones })}</p>
          <AvanceLinea lang={lang} total={totalEstaciones} abiertas={abiertas.length} />
        </section>

        {proxima && (
          <Link
            href={`/${lang}/estacion/${proxima.n}/1/`}
            className="mb-20 flex flex-col gap-4 rounded-[20px] border border-borde bg-pizarra p-[clamp(24px,3vw,36px)] hover:border-borde-fuerte"
          >
            <span className="flex items-center gap-3.5">
              <span aria-hidden className="aqui flex size-12 items-center justify-center rounded-full bg-acento font-serif text-2xl text-acento-tinta">
                {Number(proxima.n)}
              </span>
              <span className="flex flex-col gap-0.5 text-sm">
                <span className="font-medium text-acento-texto">{t.proxima}</span>
                <span className="text-tenue">
                  Zona {proxima.zona.n} · {proxima.zona.nombre} · 7 paradas
                </span>
              </span>
            </span>
            <span className="font-serif text-[clamp(30px,3.2vw,40px)] leading-tight">{proxima.titulo}</span>
            <span className="inline-flex min-h-11 items-center self-start rounded-full bg-primario px-5 text-[15px] font-medium text-primario-tinta">
              {t.entrar} →
            </span>
          </Link>
        )}

        <section id="mapa" aria-labelledby="titulo-mapa" className="flex flex-col gap-7 pb-24">
          <h2 id="titulo-mapa" className="font-serif text-[clamp(28px,3vw,40px)] leading-tight font-normal">
            {t.mapaTitulo}
          </h2>
          <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
            <MapaLinea lang={lang} linea={linea1} />
            <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-5">
              <section className="flex flex-col gap-3 rounded-[18px] border border-borde bg-pizarra p-6">
                <h3 className="font-serif text-[23px] font-normal">{t.comoSeRecorre}</h3>
                <p className="text-[15px] text-tinta-2">{t.comoSeRecorreTexto}</p>
                <ol className="flex flex-col">
                  {paradasMetodo.map((p) => (
                    <li key={p.n} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3 py-1.5">
                      <span aria-hidden className="mt-1 size-3 justify-self-center rounded-full border-[2.5px] border-linea" />
                      <span className="flex flex-col">
                        <span className="text-[15px] font-medium">
                          {p.n} · {p.nombre}
                        </span>
                        <span className="text-[13px] text-tenue">{p.que}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
              <section className="flex flex-col gap-2.5 rounded-[18px] border-[1.5px] border-dashed border-borde-fuerte p-6">
                <span className="inline-flex items-center gap-2.5 text-[13.5px] text-l2">
                  <span aria-hidden className="w-7 border-t-[3px] border-dashed border-l2" />
                  {t.enRevision}
                </span>
                <span className="font-serif text-[21px] leading-snug">{linea2.nombre}</span>
                <span className="text-[14.5px] text-tenue">{rellenar(t.enRevisionTexto, { zonas: linea2.zonas.length })}</span>
              </section>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
