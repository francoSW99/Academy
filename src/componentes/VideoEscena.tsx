/**
 * Video de una escena de ManimGX. Hay un render por tema de la pizarra: se muestra el que
 * corresponde al modo del sistema (claro u oscuro). Solo se descarga al darle play.
 */
export function VideoEscena({ estacion, nombre, descripcion }: { estacion: string; nombre: string; descripcion: string }) {
  const base = `/escenas/${estacion}/${nombre}`;
  const clases = "aspect-video w-full rounded-[14px] border border-borde bg-pizarra";
  return (
    <figure className="flex max-w-[960px] flex-col gap-2">
      <video controls playsInline preload="none" poster={`${base}-blanca.jpg`} aria-label={descripcion} className={`${clases} block dark:hidden`}>
        <source src={`${base}-blanca.mp4`} type="video/mp4" />
      </video>
      <video controls playsInline preload="none" poster={`${base}-negra.jpg`} aria-label={descripcion} className={`${clases} hidden dark:block`}>
        <source src={`${base}-negra.mp4`} type="video/mp4" />
      </video>
      <figcaption className="text-sm text-pretty text-tenue">{descripcion}</figcaption>
    </figure>
  );
}
