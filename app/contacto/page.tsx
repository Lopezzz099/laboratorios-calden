import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { contactos } from "@/lib/company";
import { metadatos } from "@/lib/seo";
import { site } from "@/lib/site";
import { aviso, enlace } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Contacto",
  descripcion: "Direcciones de correo de ejemplo de Laboratorios Caldén, según el tipo de consulta.",
  ruta: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <PageHeader
        titulo="Contacto"
        bajada="Elegí el correo que corresponde a tu consulta y te va a responder la persona indicada."
      >
        <div className={`${aviso.info} max-w-3xl`}>
          <p>
            Las direcciones usan el dominio reservado “.example”, así que no reciben mensajes. Es un sitio de
            demostración.
          </p>
        </div>
      </PageHeader>

      <Section>
        <ul className="grid gap-x-16 border-t border-linea md:grid-cols-2">
          {contactos.map((c) => (
            <li key={c.publico} className="border-b border-linea py-7">
              <h2 className="text-xl">{c.publico}</h2>
              <p className="mt-2 text-tinta-suave">{c.texto}</p>
              <p className="mt-3">
                <a href={`mailto:${c.email}`} className={`${enlace} inline-flex min-h-11 items-center break-all`}>
                  {c.email}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tono="suave">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-xl">Sede central</h2>
            <p className="mt-3">
              {site.ciudad}. Dirección de ejemplo.
              <br />
              Teléfono de ejemplo: {site.telefono}
            </p>
            <p className="mt-4">
              <Link href="/plantas" className={`${enlace} inline-flex min-h-11 items-center font-semibold`}>
                Ver plantas y oficinas en el mapa
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-xl">¿Querés reportar un efecto adverso?</h2>
            <p className="mt-3">No uses estos correos. Hay un formulario específico, pensado para recibir esos datos.</p>
            <p className="mt-4">
              <Link href="/farmacovigilancia" className={`${enlace} inline-flex min-h-11 items-center font-semibold`}>
                Ir al formulario de farmacovigilancia
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
