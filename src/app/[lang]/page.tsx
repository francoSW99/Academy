import { notFound } from "next/navigation";
import { Cabecera } from "@/componentes/Cabecera";
import { Continuar } from "@/componentes/Continuar";
import { Temario } from "@/componentes/Temario";
import { esIdioma, rellenar, textos } from "@/lib/idiomas";
import { curso, curso2, totalLecciones } from "@/ruta/curso";

export default async function Portada({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos(lang).curso;

  return (
    <>
      <Cabecera lang={lang} />
      <main className="mx-auto max-w-[1120px] px-[clamp(16px,4vw,40px)]">
        <section className="flex max-w-[760px] flex-col gap-5 pt-[clamp(48px,7vw,88px)] pb-14">
          <p className="text-sm text-tenue">{rellenar(t.etiqueta, { modulos: curso.modulos.length, lecciones: totalLecciones })}</p>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">{curso.nombre}</h1>
          <p className="text-[19px] leading-relaxed text-pretty text-tinta-2">{t.lede}</p>
          <Continuar lang={lang} />
        </section>

        <div className="grid items-start gap-x-12 gap-y-10 pb-24 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section id="temario" aria-labelledby="titulo-temario" className="flex scroll-mt-6 flex-col gap-5">
            <h2 id="titulo-temario" className="font-serif text-[clamp(28px,3vw,38px)] leading-tight font-normal">
              {t.temario}
            </h2>
            <Temario lang={lang} variante="portada" />
          </section>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:mt-[72px]">
            <section className="flex flex-col gap-3 rounded-[18px] border border-borde p-6">
              <h2 className="font-serif text-[22px] font-normal">{t.comoEs}</h2>
              <ol className="flex flex-col gap-3">
                {t.partes.map((p, k) => (
                  <li key={p.titulo} className="grid grid-cols-[26px_minmax(0,1fr)] items-baseline gap-2">
                    <span className="font-serif text-[22px] leading-none text-acento-texto">{k + 1}</span>
                    <span className="flex flex-col">
                      <span className="text-[15.5px] font-medium">{p.titulo}</span>
                      <span className="text-[14px] text-tenue">{p.texto}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
            {curso.meta && (
              <section className="flex flex-col gap-1.5 rounded-[18px] border border-borde p-6">
                <span className="text-[13px] text-tenue">{t.meta}</span>
                <p className="font-serif text-[20px] leading-snug">{curso.meta}</p>
              </section>
            )}
            <section className="flex flex-col gap-1.5 rounded-[18px] border-[1.5px] border-dashed border-borde-fuerte p-6">
              <span className="text-[13px] text-tenue">{t.otroCurso}</span>
              <span className="font-serif text-[20px] leading-snug">{curso2.nombre}</span>
              <span className="text-[14px] text-tenue">{rellenar(t.otroCursoTexto, { modulos: curso2.modulos.length })}</span>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
