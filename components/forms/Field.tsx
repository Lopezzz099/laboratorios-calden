import type { ReactNode } from "react";
import { campo } from "@/lib/ui";

export type AtributosCampo = {
  id: string;
  "aria-invalid": boolean | undefined;
  "aria-describedby": string | undefined;
  "aria-required": boolean | undefined;
};

type Props = {
  id: string;
  etiqueta: string;
  ayuda?: string;
  error?: string;
  requerido?: boolean;
  children: (atributos: AtributosCampo) => ReactNode;
};

function IconoError() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7v6M12 16.5v.01" />
    </svg>
  );
}

export function MensajeError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className={campo.error}>
      <IconoError />
      <span>
        <span className="sr-only">Error: </span>
        {children}
      </span>
    </p>
  );
}

/** Etiqueta visible, ayuda y error junto al campo. */
export function Field({ id, etiqueta, ayuda, error, requerido, children }: Props) {
  const idAyuda = ayuda ? `${id}-ayuda` : undefined;
  const idError = error ? `${id}-error` : undefined;
  const describedby = [idAyuda, idError].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className={campo.etiqueta}>
        {etiqueta}
        {requerido ? null : <span className="font-normal text-tinta-suave"> (opcional)</span>}
      </label>
      {ayuda ? (
        <p id={idAyuda} className={campo.ayuda}>
          {ayuda}
        </p>
      ) : null}
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedby,
        "aria-required": requerido ? true : undefined,
      })}
      {error && idError ? <MensajeError id={idError}>{error}</MensajeError> : null}
    </div>
  );
}

type GrupoProps = {
  nombre: string;
  leyenda: string;
  ayuda?: string;
  error?: string;
  opciones: { valor: string; etiqueta: string }[];
};

/** Grupo de opciones (radios) con leyenda visible y error junto al grupo. */
export function GrupoRadios({ nombre, leyenda, ayuda, error, opciones }: GrupoProps) {
  const idAyuda = ayuda ? `${nombre}-ayuda` : undefined;
  const idError = error ? `${nombre}-error` : undefined;
  const describedby = [idAyuda, idError].filter(Boolean).join(" ") || undefined;
  return (
    <fieldset aria-describedby={describedby}>
      <legend className={campo.etiqueta}>{leyenda}</legend>
      {ayuda ? (
        <p id={idAyuda} className={campo.ayuda}>
          {ayuda}
        </p>
      ) : null}
      <div className="mt-3 space-y-1">
        {opciones.map((o) => (
          <label key={o.valor} className="flex min-h-11 cursor-pointer items-center gap-3 text-base">
            <input
              type="radio"
              name={nombre}
              value={o.valor}
              aria-invalid={error ? true : undefined}
              className="size-6 shrink-0 accent-baya-700"
            />
            {o.etiqueta}
          </label>
        ))}
      </div>
      {error && idError ? <MensajeError id={idError}>{error}</MensajeError> : null}
    </fieldset>
  );
}

type CasillaProps = {
  nombre: string;
  error?: string;
  children: ReactNode;
};

export function Casilla({ nombre, error, children }: CasillaProps) {
  const idError = error ? `${nombre}-error` : undefined;
  return (
    <div>
      <label className="flex min-h-11 cursor-pointer items-start gap-3 py-1 text-base">
        <input
          type="checkbox"
          name={nombre}
          aria-invalid={error ? true : undefined}
          aria-describedby={idError}
          className="mt-0.5 size-6 shrink-0 accent-baya-700"
        />
        <span>{children}</span>
      </label>
      {error && idError ? <MensajeError id={idError}>{error}</MensajeError> : null}
    </div>
  );
}
