/**
 * El fondo de toda la página: el lienzo oscuro con 3 orbes de luz difusa, fijos.
 * Es uno solo: las pizarras de vidrio van encima y ninguna tiene un fondo propio.
 */
export function Lienzo() {
  return (
    <>
      <div aria-hidden className="aura aura-azul" />
      <div aria-hidden className="aura aura-indigo" />
      <div aria-hidden className="aura aura-ambar" />
    </>
  );
}
