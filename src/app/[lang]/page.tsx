import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { BarraAvance } from "@/componentes/Continuar";
import { COLOR, Punto } from "@/componentes/Especialidad";
import { SeguirDondeQuedaste } from "@/componentes/SeguirDondeQuedaste";
import { esIdioma, rellenar, textos } from "@/lib/idiomas";
import { puentesEntre } from "@/ruta/conexiones";
import { especialidades, leccionesDe } from "@/ruta/especialidades";

const BORDE_ARRIBA = { ai: "border-t-esp-ai", ml: "border-t-esp-ml", ds: "border-t-esp-ds" } as const;

/** El Inicio: qué es Academy, sus 3 especialidades para elegir y cómo se conectan entre ellas. */
export default async function Inicio({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos(lang);
  const ti = t.inicio;
  const pares = [0, 1, 2].map((k) => [especialidades[k % 3], especialidades[(k + 1) % 3]] as const);

  return (
    <>
      <Cabecera lang={lang} />
      <main className="mx-auto max-w-[1120px] px-[clamp(16px,4vw,40px)]">
        <section className="flex max-w-[780px] flex-col gap-5 pt-[clamp(48px,7vw,88px)] pb-14">
          <p className="text-sm text-tenue">{rellenar(ti.etiqueta, { n: especialidades.length })}</p>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">{ti.titulo}</h1>
          <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{ti.lede}</p>
          <SeguirDondeQuedaste lang={lang} />
        </section>

        <section aria-labelledby="titulo-elige" className="flex flex-col gap-6 pb-20">
          <div className="flex max-w-[720px] flex-col gap-2">
            <h2 id="titulo-elige" className="font-serif text-[clamp(28px,3vw,38px)] leading-tight font-normal">
              {ti.elige}
            </h2>
            <p className="text-[17px] leading-relaxed text-tinta-2">{ti.eligeTexto}</p>
          </div>
          <ul className="grid gap-4 lg:grid-cols-3">
            {especialidades.map((e) => {
              const disponibles = leccionesDe(e).filter((l) => l.disponible).length;
              return (
                <li key={e.id}>
                  <Link
                    href={`/${lang}/${e.slug}/`}
                    className={`flex h-full flex-col gap-4 rounded-[18px] border border-t-4 border-borde p-[clamp(20px,2.4vw,28px)] hover:bg-suave ${BORDE_ARRIBA[e.id]}`}
                  >
                    <span className={`flex items-center gap-2 text-[13.5px] font-medium ${COLOR[e.id].texto}`}>
                      <Punto id={e.id} />
                      {rellenar(ti.paraSer, { rol: e.rol })}
                    </span>
                    <span className="font-serif text-[clamp(28px,2.8vw,34px)] leading-tight">{e.nombre}</span>
                    <span className="text-[16px] leading-relaxed text-pretty text-tinta-2">{e.queHaces}</span>
                    <span className="text-[15px] leading-relaxed text-pretty text-tenue">{rellenar(ti.eligela, { eligela: e.eligela })}</span>
                    <span className="mt-auto flex flex-col gap-3 border-t border-borde pt-4">
                      <span className="text-[14px] text-tenue">
                        {rellenar(ti.cifras, { modulos: e.modulos.length, lecciones: leccionesDe(e).length })} ·{" "}
                        {e.enPreparacion ? ti.enPreparacion : rellenar(ti.disponibles, { n: disponibles })}
                      </span>
                      {!e.enPreparacion && <BarraAvance lang={lang} especialidad={e} />}
                      <span className="text-[15.5px] font-medium">{rellenar(ti.entrar, { nombre: e.nombre })} →</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-[15px] text-tenue">{ti.cambiar}</p>
        </section>

        <section aria-labelledby="titulo-conectan" className="grid gap-x-12 gap-y-6 border-t border-borde pt-14 pb-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col gap-3">
            <h2 id="titulo-conectan" className="font-serif text-[clamp(28px,3vw,38px)] leading-tight font-normal text-balance">
              {ti.conectan}
            </h2>
            <p className="text-[17px] leading-relaxed text-pretty text-tinta-2">{ti.conectanTexto}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {pares.map(([a, b]) => {
              const puentes = puentesEntre(a.id, b.id);
              return (
                <li key={`${a.id}-${b.id}`} className="flex flex-col gap-2.5 rounded-[18px] border border-borde p-5">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15.5px] font-medium">
                      <span className="flex items-center gap-2">
                        <Punto id={a.id} grande />
                        {a.nombre}
                      </span>
                      <span aria-hidden className="h-px w-6 bg-borde-fuerte" />
                      <span className="flex items-center gap-2">
                        <Punto id={b.id} grande />
                        {b.nombre}
                      </span>
                    </span>
                    <span className="text-[13.5px] text-tenue">{rellenar(ti.puentes, { n: puentes.length })}</span>
                  </div>
                  <ul className="flex flex-col gap-1 border-l border-borde pl-3.5">
                    {puentes.slice(0, 2).map((p) => (
                      <li key={`${p.desde}-${p.hacia}`} className="text-[14.5px] leading-relaxed text-tinta-2">
                        {p.tema}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="titulo-como" className="flex flex-col gap-6 border-t border-borde pt-14 pb-24">
          <h2 id="titulo-como" className="font-serif text-[clamp(28px,3vw,38px)] leading-tight font-normal">
            {ti.comoEs}
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {t.curso.partes.map((p, k) => (
              <li key={p.titulo} className="grid grid-cols-[30px_minmax(0,1fr)] items-baseline gap-2">
                <span className="font-serif text-[26px] leading-none text-acento-texto">{k + 1}</span>
                <span className="flex flex-col gap-1">
                  <span className="text-[17px] font-medium">{p.titulo}</span>
                  <span className="text-[15px] leading-relaxed text-tenue">{p.texto}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
