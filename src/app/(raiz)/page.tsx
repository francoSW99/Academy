import { idiomaPorDefecto } from "@/lib/idiomas";

// Respaldo para la vista local (next dev o out/ servido sin Caddy).
export default function Raiz() {
  const destino = `/${idiomaPorDefecto}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <a href={destino}>Academy</a>
    </>
  );
}
