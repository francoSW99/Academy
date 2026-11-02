import type { IdEspecialidad } from "@/ruta/tipos";

// Las clases van escritas enteras para que Tailwind las encuentre.
export const COLOR: Record<IdEspecialidad, { texto: string; fondo: string; borde: string; suave: string }> = {
  ai: { texto: "text-esp-ai", fondo: "bg-esp-ai", borde: "border-esp-ai", suave: "bg-esp-ai/8" },
  ml: { texto: "text-esp-ml", fondo: "bg-esp-ml", borde: "border-esp-ml", suave: "bg-esp-ml/8" },
  ds: { texto: "text-esp-ds", fondo: "bg-esp-ds", borde: "border-esp-ds", suave: "bg-esp-ds/8" },
};

/** El punto de color de una especialidad: va delante de su nombre en toda la plataforma. */
export function Punto({ id, grande = false }: { id: IdEspecialidad; grande?: boolean }) {
  return <span aria-hidden className={`inline-block shrink-0 rounded-full ${grande ? "size-3" : "size-2"} ${COLOR[id].fondo}`} />;
}
