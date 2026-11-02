import type { ContenidoLeccion, RefLeccion } from "../tipos";
import { leccion03 } from "./03";

// Una entrada por lección disponible, con su nombre en la plataforma («especialidad/número»).
export const contenidos: Partial<Record<RefLeccion, ContenidoLeccion>> = {
  "ai/03": leccion03,
};
