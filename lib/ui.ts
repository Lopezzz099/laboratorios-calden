/**
 * Clases repetidas del sitio, en un solo lugar.
 *
 * Regla: la clase base nunca define fondo ni borde. Cada variante trae
 * los suyos, así ninguna se pisa con otra en Tailwind.
 */

function unir(...partes: Array<string | false | null | undefined>): string {
  return partes.filter(Boolean).join(" ");
}

const botonBase =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 font-semibold text-center no-underline cursor-pointer transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const botonVariantes = {
  /** Acción principal sobre fondo claro. */
  primario:
    "bg-baya-700 border-baya-700 text-white hover:bg-baya-900 hover:border-baya-900",
  /** Acción secundaria sobre fondo claro. */
  secundario:
    "bg-fondo border-baya-700 text-baya-700 hover:bg-baya-100 hover:border-baya-800",
  /** Acción principal sobre fondo oscuro. */
  claro:
    "bg-fondo border-fondo text-baya-900 hover:bg-ocre-200 hover:border-ocre-200",
  /** Acción secundaria sobre fondo oscuro. */
  claroContorno:
    "bg-baya-900 border-fondo text-fondo hover:bg-fondo hover:text-baya-900",
  /** Acción discreta. */
  suave:
    "bg-superficie border-superficie text-tinta hover:bg-superficie-fuerte hover:border-superficie-fuerte",
} as const;

const botonTamanos = {
  compacto: "min-h-11 whitespace-nowrap px-3 py-1.5 text-sm leading-none lg:px-5 lg:text-[0.9375rem]",
  md: "min-h-11 px-5 py-2.5 text-base",
  lg: "min-h-14 px-7 py-3 text-base sm:text-lg",
} as const;

export type VarianteBoton = keyof typeof botonVariantes;
export type TamanoBoton = keyof typeof botonTamanos;

export function boton(variante: VarianteBoton = "primario", tamano: TamanoBoton = "md", extra?: string): string {
  return unir(botonBase, botonVariantes[variante], botonTamanos[tamano], extra);
}

/** Enlace de texto con subrayado visible. */
export const enlace =
  "text-baya-700 underline underline-offset-4 decoration-1 hover:text-baya-900 hover:decoration-2 rounded-sm";

export const enlaceClaro =
  "text-fondo underline underline-offset-4 decoration-1 hover:text-ocre-200 hover:decoration-2 rounded-sm";

/** Contenedor de ancho de página. */
export const contenedor = "mx-auto w-full max-w-[84rem] px-gutter";

/** Contenedor angosto para texto y formularios. */
export const contenedorAngosto = "mx-auto w-full max-w-[52rem] px-gutter";

/** Formularios */
export const campo = {
  etiqueta: "block text-base font-semibold text-tinta",
  ayuda: "mt-1 text-sm text-tinta-suave",
  control:
    "mt-2 block w-full min-h-12 rounded-campo border-2 border-borde-campo bg-fondo px-4 py-2.5 text-base text-tinta placeholder:text-tinta-suave aria-[invalid=true]:border-error aria-[invalid=true]:bg-error-fondo",
  error: "mt-2 flex items-start gap-2 text-sm font-semibold text-error",
} as const;

/** Cajas de aviso */
export const aviso = {
  info: "rounded-card border-2 border-baya-200 bg-baya-100 px-5 py-4 text-tinta",
  error: "rounded-card border-2 border-error bg-error-fondo px-5 py-4 text-tinta",
  exito: "rounded-card border-2 border-exito bg-exito-fondo px-5 py-4 text-tinta",
} as const;

/** Etiqueta chica (zona, categoría) */
export const etiqueta =
  "inline-flex items-center rounded-full border border-baya-700 bg-baya-100 px-3 py-1 text-sm font-semibold text-baya-900";

/** Superficies */
export const superficie = {
  claro: "bg-fondo text-tinta",
  suave: "bg-superficie text-tinta",
  oscuro: "bg-baya-900 text-fondo",
} as const;
