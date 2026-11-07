"use client";

import { useEffect } from "react";
import { IconoLuna, IconoSol } from "@/componentes/Iconos";
import { textos, type Idioma } from "@/lib/idiomas";

const COLOR_BARRA = { claro: "#ffffff", oscuro: "#000a0c" };

/** La barra del navegador del celular toma el color del fondo. */
function pintarBarra(tema: keyof typeof COLOR_BARRA) {
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", COLOR_BARRA[tema]));
}

/** Cambia entre claro y oscuro. El tema vive en <html data-tema> y queda guardado en este navegador. */
export function BotonTema({ lang, className = "" }: { lang: Idioma; className?: string }) {
  useEffect(() => {
    pintarBarra(document.documentElement.dataset.tema === "claro" ? "claro" : "oscuro");
  }, []);

  function alternar() {
    const tema = document.documentElement.dataset.tema === "claro" ? "oscuro" : "claro";
    document.documentElement.dataset.tema = tema;
    localStorage.setItem("academy-tema", tema);
    pintarBarra(tema);
  }

  return (
    <button type="button" aria-label={textos(lang).cabecera.tema} onClick={alternar} className={`glass-pill boton-tema ${className}`}>
      <IconoSol className="tema-sol size-[18px]" />
      <IconoLuna className="tema-luna size-[18px]" />
    </button>
  );
}
