// Piezas comunes de los diagramas: un paso con su título y la flecha entre pasos. Entran con <Revelar>.

export function Paso({ i, titulo, children, className = "" }: { i: number; titulo: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`paso flex flex-col gap-2.5 rounded-[14px] bg-[var(--pizarra-rejilla)] px-4 py-3.5 ${className}`} style={{ "--i": i } as React.CSSProperties}>
      <span className="text-[12.5px] font-medium text-tenue">{titulo}</span>
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}

export function Flecha({ i, siempreAbajo = false }: { i: number; siempreAbajo?: boolean }) {
  return (
    <div aria-hidden className="paso flex items-center justify-center text-[18px] text-tenue" style={{ "--i": i } as React.CSSProperties}>
      <span className={siempreAbajo ? "" : "md:hidden"}>↓</span>
      {!siempreAbajo && <span className="hidden md:inline">→</span>}
    </div>
  );
}
