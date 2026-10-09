"use client";

import { useRef, useState, type FormEvent } from "react";

/** Devuelve un objeto con un mensaje por cada campo inválido, en el orden en que aparecen en el formulario. */
export type Validador = (datos: FormData) => Record<string, string>;

/**
 * Formulario de demostración: valida al enviar, lleva el foco al primer error
 * y no envía ni guarda nada (los datos solo viven dentro del evento de envío).
 */
export function useFormulario(validar: Validador) {
  const formulario = useRef<HTMLFormElement>(null);
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  function alEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const encontrados = validar(new FormData(form));
    setErrores(encontrados);

    const primero = Object.keys(encontrados)[0];
    if (primero) {
      setEnviado(false);
      // Se espera al render para que el campo ya muestre su error al recibir el foco.
      setTimeout(() => {
        form.querySelector<HTMLElement>(`[name="${primero}"]`)?.focus();
      }, 0);
      return;
    }
    form.reset();
    setEnviado(true);
  }

  function reiniciar() {
    setErrores({});
    setEnviado(false);
  }

  return { formulario, errores, enviado, alEnviar, reiniciar };
}

export function texto(datos: FormData, nombre: string): string {
  const v = datos.get(nombre);
  return typeof v === "string" ? v.trim() : "";
}

export const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
