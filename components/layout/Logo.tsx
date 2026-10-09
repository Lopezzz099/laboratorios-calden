type Props = { className?: string };

/** Marca de Caldén: una hoja con tres nervaduras. Usa currentColor. */
export function LogoMarca({ className }: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 3.5c9.6 6 11.6 18.2 0 33-11.6-14.8-9.6-27 0-33Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M20 12v24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="m20 21 5.2-4.2M20 27.5l-5-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className ?? ""}`}>
      <LogoMarca className="size-8 shrink-0 sm:size-9" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight">Caldén</span>
        <span className="mt-1 text-sm font-medium">Laboratorios</span>
      </span>
    </span>
  );
}
