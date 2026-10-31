"use client";

import { useState } from "react";
import { rellenar, textos, type Idioma } from "@/lib/idiomas";
import type { VideoBiblioteca as Video } from "@/ruta/tipos";

/**
 * Un video de la biblioteca de BrainFran. Muestra la miniatura; al tocarla, el video se ve aquí mismo.
 * El reproductor de YouTube (youtube-nocookie) carga recién en ese momento: la página sigue liviana.
 * Al lado va el enlace directo a YouTube.
 */
export function VideoBiblioteca({ video, lang }: { video: Video; lang: Idioma }) {
  const t = textos(lang).video;
  const [abierto, setAbierto] = useState(false);
  const enlace = `https://www.youtube.com/watch?v=${video.id}`;
  // Si el video está en otro idioma, se piden los subtítulos en el de la página.
  const parametros = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    hl: lang,
    ...(video.idioma !== lang ? { cc_load_policy: "1", cc_lang_pref: lang } : {}),
  });

  return (
    <figure
      className={`flex gap-4 rounded-[18px] border border-borde bg-pizarra p-4 ${abierto ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:gap-6"}`}
    >
      <div
        className={`relative aspect-video shrink-0 overflow-hidden rounded-[12px] bg-codigo-fondo ${abierto ? "w-full max-w-[960px]" : "w-full sm:w-[300px]"}`}
      >
        {abierto ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?${parametros}`}
            title={video.titulo}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setAbierto(true)}
            aria-label={rellenar(t.verAqui, { titulo: video.titulo })}
            className="group absolute inset-0"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-primario text-primario-tinta transition-transform duration-200 group-hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="ml-0.5 size-6 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex min-w-0 flex-col gap-1.5">
        <span className="text-[13px] text-tenue">{rellenar(t.explicado, { canal: video.canal })}</span>
        <span className="font-serif text-[21px] leading-snug text-pretty">{video.titulo}</span>
        <span className="text-[15px] text-pretty text-tinta-2">{video.queMirar}</span>
        <span className="flex flex-wrap items-center gap-x-4 text-[13.5px]">
          <span className="text-tenue">{rellenar(t[video.idioma], { minutos: video.minutos })}</span>
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-acento-texto hover:underline"
          >
            {t.enYoutube} ↗
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
