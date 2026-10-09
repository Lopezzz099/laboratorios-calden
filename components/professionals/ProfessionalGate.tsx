"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { aviso, boton } from "@/lib/ui";

/**
 * Confirmación de demostración. No hay cuentas, no se verifica matrícula y no
 * se guarda nada: si se recarga la página, la zona vuelve a cerrarse.
 * No es una medida de seguridad: el contenido es de ejemplo y no es secreto.
 */
export function ProfessionalGate({ children }: { children: ReactNode }) {
  const [confirmado, setConfirmado] = useState(false);
  const zona = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confirmado) zona.current?.focus();
  }, [confirmado]);

  if (!confirmado) {
    return (
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl">Antes de entrar</h2>
          <div className="prosa mt-6">
            <p>
              Esta zona es para profesionales de la salud. Tiene el portafolio completo, incluidos los productos de
              venta bajo receta, y material científico.
            </p>
            <p>
              En un sitio real, los medicamentos de venta bajo receta no se publicitan al público general. Por eso el
              acceso pide una confirmación.
            </p>
          </div>
          <div className={`${aviso.info} mt-8`}>
            <p>
              <strong className="font-semibold">Esto es una demostración.</strong> No hay cuentas, no verificamos
              matrículas y no guardamos ningún dato, ni en servidores ni en tu navegador. Si recargás la página, la
              zona se vuelve a cerrar.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => setConfirmado(true)} className={boton("primario", "lg")}>
              Soy profesional de la salud
            </button>
            <Link href="/" className={boton("secundario", "lg")}>
              No lo soy, volver al inicio
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <div ref={zona} tabIndex={-1} className="outline-none">
      <div className="border-b border-linea bg-baya-100">
        <div className="mx-auto flex max-w-[84rem] flex-wrap items-center justify-between gap-4 px-gutter py-4">
          <p>
            <strong className="font-semibold">Zona de profesionales abierta.</strong> Contenido de ejemplo.
          </p>
          <button type="button" onClick={() => setConfirmado(false)} className={boton("secundario")}>
            Salir de la zona
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
