import type { ContenidoLeccion } from "../tipos";
import { leccion03 } from "./03";

// Una entrada por lección disponible.
export const contenidos: Record<string, ContenidoLeccion> = {
  "03": leccion03,
};
