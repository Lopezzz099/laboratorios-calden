"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { boton, enlace } from "@/lib/ui";

const CLAVE = "calden:cookies";
const EVENTO = "calden:cookies-cambio";

type Estado = "cargando" | "sin-elegir" | "aceptadas" | "rechazadas";

function leer(): Estado {
  try {
    const v = window.localStorage.getItem(CLAVE);
    if (v === "aceptadas" || v === "rechazadas") return v;
  } catch {
    // Sin acceso al almacenamiento: se vuelve a preguntar en cada visita.
  }
  return "sin-elegir";
}

function suscribir(avisar: () => void) {
  window.addEventListener(EVENTO, avisar);
  window.addEventListener("storage", avisar);
  return () => {
    window.removeEventListener(EVENTO, avisar);
    window.removeEventListener("storage", avisar);
  };
}

function guardar(valor: "aceptadas" | "rechazadas" | null) {
  try {
    if (valor) window.localStorage.setItem(CLAVE, valor);
    else window.localStorage.removeItem(CLAVE);
  } catch {
    // Se ignora: el aviso se cierra igual en esta visita.
  }
  window.dispatchEvent(new Event(EVENTO));
}

/** Aviso de cookies. No carga nada de terceros: "Aceptar" y "Rechazar" pesan igual. */
export function CookieNotice() {
  const estado = useSyncExternalStore<Estado>(suscribir, leer, () => "cargando");
  if (estado !== "sin-elegir") return null;

  return (
    <section
      aria-labelledby="cookies-titulo"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-(--z-aviso) mx-auto max-w-3xl rounded-card border-2 border-baya-900 bg-fondo p-5 shadow-panel sm:inset-x-6 sm:bottom-6"
    >
      <h2 id="cookies-titulo" className="font-display text-lg font-semibold">
        Cookies en este sitio
      </h2>
      <p className="mt-2 text-sm text-tinta-suave sm:text-base">
        Hoy no cargamos cookies de terceros ni herramientas de medición. Si las sumáramos, solo se activarían si aceptás.
        Es un aviso de ejemplo.{" "}
        <Link href="/privacidad#cookies" className={enlace}>
          Leer más
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" className={boton("primario")} onClick={() => guardar("rechazadas")}>
          Rechazar
        </button>
        <button type="button" className={boton("primario")} onClick={() => guardar("aceptadas")}>
          Aceptar
        </button>
      </div>
    </section>
  );
}

/** Botón del pie para volver a elegir. */
export function PreferenciasCookies({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => guardar(null)}>
      Preferencias de cookies
    </button>
  );
}
