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
    <>
      <Cabecera lang={lang} actual={e.id} />
      <main className="mx-auto max-w-[1120px] px-[clamp(16px,4vw,40px)]">
        <section className="flex max-w-[760px] flex-col gap-5 pt-[clamp(40px,6vw,80px)] pb-14">
          <p className={`flex items-center gap-2 text-sm font-medium ${COLOR[e.id].texto}`}>
            <Punto id={e.id} />
            {rellenar(te.etiqueta, { rol: e.rol })}
          </p>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">{e.nombre}</h1>
          <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{e.queHaces}</p>
          {e.enPreparacion ? (
            <div className="flex max-w-[620px] flex-col gap-1.5 rounded-[18px] border-[1.5px] border-dashed border-borde-fuerte p-5">
              <span className="text-[15.5px] font-medium">{te.preparacion}</span>
              <span className="text-[15px] leading-relaxed text-tenue">{te.preparacionTexto}</span>
            </div>
          ) : (
            <Continuar lang={lang} especialidad={e} />
          )}
        </section>

        <div className="grid items-start gap-x-12 gap-y-10 pb-24 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section id="temario" aria-labelledby="titulo-temario" className="flex scroll-mt-6 flex-col gap-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id="titulo-temario" className="font-serif text-[clamp(28px,3vw,38px)] leading-tight font-normal">
                {t.curso.temario}
              </h2>
              <span className="text-sm text-tenue">{rellenar(te.cifras, { modulos: e.modulos.length, lecciones: leccionesDe(e).length })}</span>
            </div>
            <Temario lang={lang} especialidad={e} variante="portada" />
          </section>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:mt-[72px]">
            <section className="flex flex-col gap-1.5 rounded-[18px] border border-borde p-6">
              <span className="text-[13px] text-tenue">{te.meta}</span>
              <p className="font-serif text-[20px] leading-snug">{e.meta}</p>
            </section>
            <section className="flex flex-col gap-3 rounded-[18px] border border-borde p-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-serif text-[22px] font-normal">{te.conectada}</h2>
                <p className="text-[14px] leading-relaxed text-tenue">{te.conectadaTexto}</p>
              </div>
              <ul className="flex flex-col gap-1">
                {otras.map((o) => (
                  <li key={o.id}>
                    <Link href={`/${lang}/${o.slug}/`} className="-mx-2 flex min-h-12 flex-col justify-center rounded-xl px-2 py-1.5 hover:bg-suave">
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
    </>
  );
}
