import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { vacantes } from "@/lib/jobs";
import { metadatos } from "@/lib/seo";
import { aviso, etiqueta } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Carreras",
  descripcion: "Vacantes de ejemplo y formulario de postulación de demostración de Laboratorios Caldén.",
  ruta: "/carreras",
});

export default function Carreras() {
  return (
    <>
      <PageHeader
        titulo="Carreras en Caldén"
        bajada="Trabajamos en laboratorio, planta, depósito y oficina. Estas son las búsquedas abiertas de ejemplo."
      >
        <div role="note" className={`${aviso.info} max-w-3xl`}>
          <p>
            <strong className="font-semibold">Vacantes de ejemplo.</strong> No existen y el formulario no envía nada.
          </p>
        </div>
      </PageHeader>

      <Section titulo="vacantes-titulo">
        <h2 id="vacantes-titulo" className="text-2xl">
          Búsquedas abiertas
        </h2>
        <ul className="mt-8 divide-y divide-linea border-y border-linea">
          {vacantes.map((v) => (
            <li key={v.slug} className="grid gap-4 py-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <h3 className="text-xl">{v.titulo}</h3>
                <p className="mt-2 text-tinta-suave">
                  {v.area} · {v.lugar}
                </p>
                <p className="mt-3">
                  <span className={etiqueta}>{v.modalidad}</span>
                </p>
              </div>
              <div>
                <p>{v.descripcion}</p>
                <h4 className="mt-5 font-sans text-base font-semibold">Buscamos</h4>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  {v.requisitos.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tono="suave" id="postularme" titulo="postulacion-titulo">
        <div className="mx-auto max-w-2xl">
          <h2 id="postulacion-titulo" className="text-2xl">
            Postulate
          </h2>
          <p className="mt-4 text-tinta-suave">Los campos sin la indicación “opcional” son obligatorios.</p>
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </div>
      </Section>
    </>
  );
}
