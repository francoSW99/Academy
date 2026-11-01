import type { Idioma } from "@/lib/idiomas";
import type { NombreFigura } from "@/ruta/tipos";
import { Bucle } from "./Bucle";
import { LeerEscribir } from "./LeerEscribir";
import { Ventana } from "./Ventana";

// Registro de diagramas: el contenido de una lección los nombra ({ figura: "bucle" }) y aquí se resuelven.
// Son HTML, no imágenes: el texto se lee en el celular, se reacomoda y carga al instante.
const figuras: Record<NombreFigura, React.ComponentType<{ lang: Idioma }>> = {
  bucle: Bucle,
  ventana: Ventana,
  leerEscribir: LeerEscribir,
};

export function Figura({ nombre, lang }: { nombre: NombreFigura; lang: Idioma }) {
  const Componente = figuras[nombre];
  return <Componente lang={lang} />;
}
