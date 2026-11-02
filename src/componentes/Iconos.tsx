// Íconos de la interfaz, con el mismo trazo que los de las secciones.
const comun = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

type Props = { className?: string };

export function IconoFlecha({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconoFlechaAtras({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function IconoCheck({ className }: Props) {
  return (
    <svg {...comun} strokeWidth={2.25} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconoCerrar({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconoTemario({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function IconoRepetir({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" />
      <path d="M4.5 4.5v4h4" />
    </svg>
  );
}

export function IconoGrafo({ className }: Props) {
  return (
    <svg {...comun} className={className}>
      <path d="M8.2 7.8 11 11M15.9 7.6 13 11M11 13.4l-3 3.3M13.2 13.2l3.4 3.2" />
      <circle cx="6.5" cy="6" r="2.25" />
      <circle cx="17.5" cy="5.75" r="2.25" />
      <circle cx="12" cy="12" r="1.75" />
      <circle cx="6.5" cy="18.25" r="2.25" />
      <circle cx="18" cy="18.25" r="2.25" />
    </svg>
  );
}
