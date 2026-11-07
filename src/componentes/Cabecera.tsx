import Link from "next/link";
import { BotonTema } from "@/componentes/BotonTema";
import { AvanceBarraSuperior } from "@/componentes/Continuar";
import { IconoGrafo } from "@/componentes/Iconos";
import logo from "@/componentes/logo-academy.svg";
import type { Idioma } from "@/lib/idiomas";
import { rellenar, textos } from "@/lib/idiomas";
import type { Especialidad } from "@/ruta/tipos";

/**
 * La barra superior flotante: a la izquierda, el logo y dónde estás; a la derecha, tu avance y el grafo de BrainFran.
 * Al centro va el Segmented Control de las 4 secciones, que vive en el layout (Secciones.tsx).
 * `movil` es lo que ocupa el centro en el celular: en una lección, el índice que abre el temario.
 */
export function Cabecera({
  lang,
  especialidad,
  leccion,
  movil,
}: {
  lang: Idioma;
  especialidad?: Especialidad;
  /** El número de la lección que estás leyendo: "03". */
  leccion?: string;
  movil?: React.ReactNode;
}) {
  const t = textos(lang);
  return (
    <header className="hud glass-board">
      <div className="hud-lado">
        <Link href={`/${lang}/`} aria-label={t.sitio.nombre} className="hud-marca">
          <img src={logo.src} alt="" width={32} height={32} className="size-8 shrink-0" />
          <span className="hud-nombre">{t.sitio.nombre}</span>
        </Link>
        {especialidad && (
          <nav aria-label={t.cabecera.migas}>
            <ol className="hud-migas">
              <li className="hud-miga-especialidad">
                <span aria-hidden className="hud-miga-separador">
                  /
                </span>
                <Link href={`/${lang}/${especialidad.slug}/`} className="text-tinta-2 hover:text-tinta">
                  {especialidad.nombre}
                </Link>
              </li>
              {leccion && (
                <li className="flex items-center gap-2.5">
                  <span aria-hidden className="hud-miga-separador">
                    /
                  </span>
                  <span aria-current="page" className="glass-pill insignia">
                    {rellenar(t.leccion.miga, { n: leccion })}
                  </span>
                </li>
              )}
            </ol>
          </nav>
        )}
      </div>
      {movil && <div className="hud-movil">{movil}</div>}
      <div className="hud-lado hud-derecha">
        {especialidad && !especialidad.enPreparacion && <AvanceBarraSuperior lang={lang} especialidad={especialidad} />}
        <BotonTema lang={lang} />
        <a href="/obsidian/" aria-label={t.cabecera.grafo} className="glass-pill hud-pill hud-grafo">
          <IconoGrafo className="size-[17px] shrink-0" />
          <span className="hud-grafo-texto">{t.cabecera.grafo}</span>
        </a>
      </div>
    </header>
  );
}
