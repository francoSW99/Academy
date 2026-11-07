/**
 * El fondo de toda la página: blanco o negro según el tema, con las auroras en los colores del logo.
 * Es uno solo: las pizarras de vidrio van encima y ninguna tiene un fondo propio.
 */
export function Lienzo() {
  return <div aria-hidden className="aurora" />;
}
