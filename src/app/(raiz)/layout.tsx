// Layout propio de "/": en producción Caddy redirige "/" a "/es/" antes de llegar aquí.
export default function LayoutRaiz({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ background: "#000a0c" }}>
      <body>{children}</body>
    </html>
  );
}
