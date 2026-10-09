"use client";

import { Casilla, Field } from "./Field";
import { reEmail, texto, useFormulario, type Validador } from "./useFormulario";
import { vacantes } from "@/lib/jobs";
import { aviso, boton, campo } from "@/lib/ui";

const validar: Validador = (d) => {
  const e: Record<string, string> = {};
  if (!texto(d, "nombre")) e.nombre = "Escribí tu nombre y apellido.";
  const email = texto(d, "email");
  if (!email) e.email = "Escribí tu correo.";
  else if (!reEmail.test(email)) e.email = "Revisá el correo: tiene que verse como nombre@dominio.com.";
  const tel = texto(d, "telefono");
  if (tel && !/^[0-9+()\-\s]{8,20}$/.test(tel)) e.telefono = "Usá solo números, espacios, guiones y el signo +, entre 8 y 20 caracteres.";
  if (!texto(d, "vacante")) e.vacante = "Elegí una vacante.";
  const perfil = texto(d, "perfil");
  if (perfil) {
    try {
      const u = new URL(perfil);
      if (u.protocol !== "http:" && u.protocol !== "https:") throw new Error();
    } catch {
      e.perfil = "Pegá una dirección completa, que empiece con https://";
    }
  }
  const msg = texto(d, "mensaje");
  if (!msg) e.mensaje = "Contanos por qué te interesa la vacante.";
  else if (msg.length < 30) e.mensaje = "Escribí al menos 30 caracteres.";
  if (d.get("consentimiento") !== "on") e.consentimiento = "Marcá la casilla para poder enviar la demostración.";
  return e;
};

export function ApplicationForm({ vacanteInicial }: { vacanteInicial?: string }) {
  const { formulario, errores, enviado, alEnviar, reiniciar } = useFormulario(validar);
  const claves = Object.keys(errores);

  if (enviado) {
    return (
      <div role="status" className={aviso.exito}>
        <h3 className="text-xl">Esto es una demostración: no enviamos nada</h3>
        <p className="mt-3">
          Las vacantes de esta página son de ejemplo y no reciben postulaciones. No se envió ni se guardó ningún dato,
          ni en nuestros servidores ni en tu navegador.
        </p>
        <p className="mt-6">
          <button type="button" onClick={reiniciar} className={boton("primario")}>
            Completar otra postulación de prueba
          </button>
        </p>
      </div>
    );
  }

  return (
    <form ref={formulario} onSubmit={alEnviar} noValidate className="space-y-8" aria-label="Postulación">
      {claves.length > 0 ? (
        <div role="alert" className={aviso.error}>
          <h3 className="text-lg">
            {claves.length === 1 ? "Hay 1 dato para corregir" : `Hay ${claves.length} datos para corregir`}
          </h3>
          <p className="mt-2">Los marcamos abajo, junto a cada campo.</p>
        </div>
      ) : null}

      <Field id="nombre" etiqueta="Nombre y apellido" requerido error={errores.nombre}>
        {(a) => <input {...a} name="nombre" type="text" autoComplete="name" className={campo.control} />}
      </Field>

      <Field id="email" etiqueta="Correo" requerido error={errores.email}>
        {(a) => <input {...a} name="email" type="email" autoComplete="email" inputMode="email" spellCheck={false} className={campo.control} />}
      </Field>

      <Field id="telefono" etiqueta="Teléfono" error={errores.telefono} ayuda="Con código de área, por ejemplo 11 5555 0123.">
        {(a) => <input {...a} name="telefono" type="tel" autoComplete="tel" inputMode="tel" spellCheck={false} className={campo.control} />}
      </Field>

      <Field id="vacante" etiqueta="Vacante" requerido error={errores.vacante}>
        {(a) => (
          <select {...a} name="vacante" defaultValue={vacanteInicial ?? ""} className={campo.control}>
            <option value="">Elegí una vacante</option>
            {vacantes.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.titulo} · {v.lugar}
              </option>
            ))}
          </select>
        )}
      </Field>

      <Field id="perfil" etiqueta="Enlace a tu perfil profesional" error={errores.perfil} ayuda="Por ejemplo, tu perfil en una red profesional.">
        {(a) => <input {...a} name="perfil" type="url" inputMode="url" autoComplete="off" spellCheck={false} className={campo.control} />}
      </Field>

      <Field id="mensaje" etiqueta="¿Por qué te interesa?" requerido error={errores.mensaje} ayuda="Contanos en pocas líneas tu experiencia y lo que buscás.">
        {(a) => <textarea {...a} name="mensaje" rows={6} className={campo.control} />}
      </Field>

      <Casilla nombre="consentimiento" error={errores.consentimiento}>
        Entiendo que este formulario es una demostración y que no envía ni guarda nada.
      </Casilla>

      <button type="submit" className={boton("primario", "lg")}>
        Enviar postulación de prueba
      </button>
    </form>
  );
}
