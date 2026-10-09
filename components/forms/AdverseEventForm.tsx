"use client";

import { Casilla, Field, GrupoRadios } from "./Field";
import { reEmail, texto, useFormulario, type Validador } from "./useFormulario";
import { aviso, boton, campo } from "@/lib/ui";

const validar: Validador = (d) => {
  const e: Record<string, string> = {};
  if (!texto(d, "quien")) e.quien = "Elegí quién está reportando.";
  if (!texto(d, "producto")) e.producto = "Escribí el nombre del producto. Si no lo recordás, escribí “No lo recuerdo”.";
  const desc = texto(d, "descripcion");
  if (!desc) e.descripcion = "Contanos qué pasó.";
  else if (desc.length < 20) e.descripcion = "Agregá un poco más de detalle: al menos 20 caracteres.";
  const fecha = texto(d, "fecha");
  if (fecha && fecha > new Date().toISOString().slice(0, 10)) e.fecha = "La fecha no puede ser posterior a hoy.";
  if (!texto(d, "atencion")) e.atencion = "Elegí una opción.";
  const email = texto(d, "email");
  if (email && !reEmail.test(email)) e.email = "Revisá el correo: tiene que verse como nombre@dominio.com.";
  if (d.get("consentimiento") !== "on") e.consentimiento = "Marcá la casilla para poder enviar la demostración.";
  return e;
};

export function AdverseEventForm() {
  const { formulario, errores, enviado, alEnviar, reiniciar } = useFormulario(validar);
  const claves = Object.keys(errores);
  const hoy = new Date().toISOString().slice(0, 10);

  if (enviado) {
    return (
      <div role="status" className={aviso.exito}>
        <h2 className="text-xl">Esto es una demostración: no enviamos nada</h2>
        <p className="mt-3">
          Si fuera un sitio real, tu reporte habría llegado al equipo de farmacovigilancia. Acá no se envió ni se guardó
          ningún dato, ni en nuestros servidores ni en tu navegador.
        </p>
        <p className="mt-3">Si estás pasando por algo que te preocupa ahora, llamá al 107 o al 911, o consultá a tu médico.</p>
        <p className="mt-6">
          <button type="button" onClick={reiniciar} className={boton("primario")}>
            Completar otro reporte de prueba
          </button>
        </p>
      </div>
    );
  }

  return (
    <form ref={formulario} onSubmit={alEnviar} noValidate className="space-y-8" aria-label="Reportar un efecto adverso">
      {claves.length > 0 ? (
        <div role="alert" className={aviso.error}>
          <h2 className="text-lg">
            {claves.length === 1 ? "Hay 1 dato para corregir" : `Hay ${claves.length} datos para corregir`}
          </h2>
          <p className="mt-2">Los marcamos abajo, junto a cada campo.</p>
        </div>
      ) : null}

      <GrupoRadios
        nombre="quien"
        leyenda="¿Quién reporta?"
        error={errores.quien}
        opciones={[
          { valor: "paciente", etiqueta: "Soy la persona que usó el producto" },
          { valor: "familiar", etiqueta: "Soy familiar o cuido a quien lo usó" },
          { valor: "profesional", etiqueta: "Soy profesional de la salud" },
        ]}
      />

      <Field id="producto" etiqueta="Producto" requerido error={errores.producto} ayuda="Como figura en el envase.">
        {(a) => <input {...a} name="producto" type="text" autoComplete="off" className={campo.control} />}
      </Field>

      <Field
        id="descripcion"
        etiqueta="¿Qué pasó?"
        requerido
        error={errores.descripcion}
        ayuda="Contalo con tus palabras: qué notaste y cuándo empezó."
      >
        {(a) => <textarea {...a} name="descripcion" rows={6} className={campo.control} />}
      </Field>

      <Field id="fecha" etiqueta="Fecha aproximada" error={errores.fecha} ayuda="Si no la sabés con exactitud, elegí una fecha cercana.">
        {(a) => <input {...a} name="fecha" type="date" max={hoy} className={`${campo.control} sm:max-w-xs`} />}
      </Field>

      <GrupoRadios
        nombre="atencion"
        leyenda="¿Necesitó atención médica?"
        error={errores.atencion}
        opciones={[
          { valor: "si", etiqueta: "Sí" },
          { valor: "no", etiqueta: "No" },
          { valor: "nose", etiqueta: "No lo sé" },
        ]}
      />

      <Field
        id="email"
        etiqueta="Correo para que podamos escribirte"
        error={errores.email}
        ayuda="Solo si querés que te contactemos para pedirte más datos."
      >
        {(a) => <input {...a} name="email" type="email" autoComplete="email" inputMode="email" className={campo.control} />}
      </Field>

      <Casilla nombre="consentimiento" error={errores.consentimiento}>
        Entiendo que este formulario es una demostración y que no envía ni guarda nada.
      </Casilla>

      <button type="submit" className={boton("primario", "lg")}>
        Enviar reporte de prueba
      </button>
    </form>
  );
}
