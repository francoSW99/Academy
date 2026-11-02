import Link from "next/link";
import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { Continuar } from "@/componentes/Continuar";
import { COLOR, Punto } from "@/componentes/Especialidad";
import { Temario } from "@/componentes/Temario";
import { esIdioma, idiomas, rellenar, textos } from "@/lib/idiomas";
import { puentesEntre } from "@/ruta/conexiones";
import { especialidades, especialidadPorSlug, leccionesDe } from "@/ruta/especialidades";

export const dynamicParams = false;

export function generateStaticParams() {
  return idiomas.flatMap((lang) => especialidades.map((e) => ({ lang, especialidad: e.slug })));
}

type Props = { params: Promise<{ lang: string; especialidad: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang, especialidad } = await params;
  const e = especialidadPorSlug(especialidad);
  if (!esIdioma(lang) || !e) return {};
  return { title: `${e.nombre} · ${textos(lang).sitio.nombre}`, description: e.queHaces };
}

/** La sección de una especialidad: su temario, tu avance y con qué otras se conecta. */
export default async function PaginaEspecialidad({ params }: Props) {
  const { lang, especialidad } = await params;
  const e = especialidadPorSlug(especialidad);
  if (!esIdioma(lang) || !e) notFound();
  const t = textos(lang);
  const te = t.especialidad;
  const otras = especialidades.filter((o) => o.id !== e.id);

  return (
    <div className="marco">
      <Cabecera lang={lang} especialidad={e} />
      <main className="mt-2 flex flex-col gap-4 lg:mt-4">
        <section className="glass-board flex flex-col gap-5 rounded-[28px] p-[clamp(22px,5vw,64px)]">
          <p className={`glass-pill insignia self-start ${COLOR[e.id].texto}`}>
            <Punto id={e.id} />
            {rellenar(te.etiqueta, { rol: e.rol })}
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance text-white">{e.nombre}</h1>
          <p className="max-w-[62ch] text-[clamp(17px,1.6vw,19px)] leading-relaxed text-pretty text-tenue">{e.queHaces}</p>
          {e.enPreparacion ? (
            <div className="glass-callout flex max-w-[620px] flex-col gap-1.5 p-5" data-tono="aviso">
              <span className="text-[15.5px] font-medium">{te.preparacion}</span>
              <span className="text-[15px] leading-relaxed text-tinta-2">{te.preparacionTexto}</span>
            </div>
          ) : (
            <Continuar lang={lang} especialidad={e} />
          )}
        </section>

        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div id="temario" className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2 pt-6 lg:col-span-2">
            <h2 id="titulo-temario" className="text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.022em]">
              {t.curso.temario}
            </h2>
            <span className="text-sm text-tenue">{rellenar(te.cifras, { modulos: e.modulos.length, lecciones: leccionesDe(e).length })}</span>
          </div>
          <section aria-labelledby="titulo-temario">
            <Temario lang={lang} especialidad={e} variante="portada" />
          </section>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-[calc(var(--marco-y)+var(--hud-alto)+16px)]">
            <section className="glass-board flex flex-col gap-1.5 p-6">
              <span className="text-[13px] text-tenue">{te.meta}</span>
              <p className="text-[18px] leading-snug font-medium tracking-[-0.01em]">{e.meta}</p>
            </section>
            <section className="glass-board flex flex-col gap-3 p-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-[19px] font-medium tracking-[-0.012em]">{te.conectada}</h2>
                <p className="text-[14px] leading-relaxed text-tenue">{te.conectadaTexto}</p>
              </div>
              <ul className="flex flex-col gap-1">
                {otras.map((o) => (
                  <li key={o.id}>
                    <Link href={`/${lang}/${o.slug}/`} className="-mx-2 flex min-h-12 flex-col justify-center rounded-[14px] px-2 py-1.5 transition-colors duration-200 hover:bg-suave">
                      <span className="flex items-center gap-2 text-[15.5px] font-medium">
                        <Punto id={o.id} />
                        {o.nombre}
                      </span>
                      <span className="pl-4 text-[13.5px] text-tenue">{rellenar(te.puentes, { n: puentesEntre(e.id, o.id).length })}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
