import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { BarraAvance } from "@/componentes/Continuar";
import { COLOR, Punto } from "@/componentes/Especialidad";
import { IconoFlecha } from "@/componentes/Iconos";
import { SeguirDondeQuedaste } from "@/componentes/SeguirDondeQuedaste";
import { esIdioma, rellenar, textos } from "@/lib/idiomas";
import { puentesEntre } from "@/ruta/conexiones";
import { especialidades, leccionesDe } from "@/ruta/especialidades";

/** El Inicio: qué es Academy, sus 3 especialidades para elegir y cómo se conectan entre ellas. */
export default async function Inicio({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos(lang);
  const ti = t.inicio;
  const pares = [0, 1, 2].map((k) => [especialidades[k % 3], especialidades[(k + 1) % 3]] as const);

  return (
    <div className="marco">
      <Cabecera lang={lang} />
      <main className="mt-2 flex flex-col gap-4 lg:mt-4">
        <section className="glass-board flex flex-col gap-5 rounded-[28px] p-[clamp(22px,5.4vw,72px)]">
          <p className="glass-pill insignia self-start">{rellenar(ti.etiqueta, { n: especialidades.length })}</p>
          <h1 className="max-w-[16em] text-[clamp(40px,6vw,76px)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance text-white">{ti.titulo}</h1>
          <p className="max-w-[62ch] text-[clamp(17px,1.6vw,19px)] leading-relaxed text-pretty text-tenue">{ti.lede}</p>
          <SeguirDondeQuedaste lang={lang} />
        </section>

        <section aria-labelledby="titulo-elige" className="flex flex-col gap-4">
          <div className="flex max-w-[720px] flex-col gap-2 px-2 pt-8">
            <h2 id="titulo-elige" className="text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em]">
              {ti.elige}
            </h2>
            <p className="text-[17px] leading-relaxed text-tinta-2">{ti.eligeTexto}</p>
          </div>
          <ul className="grid gap-4 lg:grid-cols-3">
            {especialidades.map((e) => {
              const disponibles = leccionesDe(e).filter((l) => l.disponible).length;
              return (
                <li key={e.id}>
                  <Link href={`/${lang}/${e.slug}/`} className="glass-board flex h-full flex-col gap-4 p-[clamp(20px,2.4vw,28px)]">
                    <span className={`flex items-center gap-2 text-[13.5px] font-medium ${COLOR[e.id].texto}`}>
                      <Punto id={e.id} />
                      {rellenar(ti.paraSer, { rol: e.rol })}
                    </span>
                    <span className="text-[clamp(26px,2.6vw,32px)] leading-tight font-semibold tracking-[-0.022em] text-white">{e.nombre}</span>
                    <span className="text-[16px] leading-relaxed text-pretty text-tinta-2">{e.queHaces}</span>
                    <span className="text-[15px] leading-relaxed text-pretty text-tenue">{rellenar(ti.eligela, { eligela: e.eligela })}</span>
                    <span className="mt-auto flex flex-col gap-3 border-t border-borde pt-4">
                      <span className="text-[14px] text-tenue">
                        {rellenar(ti.cifras, { modulos: e.modulos.length, lecciones: leccionesDe(e).length })} ·{" "}
                        {e.enPreparacion ? ti.enPreparacion : rellenar(ti.disponibles, { n: disponibles })}
                      </span>
                      {!e.enPreparacion && <BarraAvance lang={lang} especialidad={e} />}
                      <span className="flex items-center gap-2 text-[15.5px] font-medium">
                        {rellenar(ti.entrar, { nombre: e.nombre })}
                        <IconoFlecha className="glass-flecha size-[18px]" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="px-2 text-[15px] text-tenue">{ti.cambiar}</p>
        </section>

        <section aria-labelledby="titulo-conectan" className="glass-board mt-6 grid gap-x-12 gap-y-6 p-[clamp(20px,3.4vw,44px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col gap-3">
            <h2 id="titulo-conectan" className="text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em] text-balance">
              {ti.conectan}
            </h2>
            <p className="text-[17px] leading-relaxed text-pretty text-tinta-2">{ti.conectanTexto}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {pares.map(([a, b]) => {
              const puentes = puentesEntre(a.id, b.id);
              return (
                <li key={`${a.id}-${b.id}`} className="glass-card flex flex-col gap-2.5 p-5">
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

        <section aria-labelledby="titulo-como" className="glass-board flex flex-col gap-6 p-[clamp(20px,3.4vw,44px)]">
          <h2 id="titulo-como" className="text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em]">
            {ti.comoEs}
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {t.curso.partes.map((p, k) => (
              <li key={p.titulo} className="grid grid-cols-[26px_minmax(0,1fr)] items-baseline gap-2">
                <span className="text-[20px] leading-none font-medium text-acento-texto tabular-nums">{k + 1}</span>
                <span className="flex flex-col gap-1">
                  <span className="text-[17px] font-medium">{p.titulo}</span>
                  <span className="text-[15px] leading-relaxed text-tenue">{p.texto}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
