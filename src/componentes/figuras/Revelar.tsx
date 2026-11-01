"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hace entrar un diagrama paso a paso cuando llega a la pantalla (DESIGN.md: entrada de elementos).
 * Cada paso lleva la clase «paso» y su orden en --i. Con movimiento reducido, todo aparece directo.
 */
export function Revelar({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);
  return (
    <div ref={ref} data-visible={visible} className={`revelar ${className}`}>
      {children}
    </div>
  );
}
