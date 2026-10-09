import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { AdverseEventForm } from "@/components/forms/AdverseEventForm";
import { metadatos } from "@/lib/seo";
import { aviso } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Reportar un efecto adverso",
  descripcion: "Formulario de farmacovigilancia de ejemplo. Es una demostración: no envía ni guarda datos.",
  ruta: "/farmacovigilancia",
});

export default function Farmacovigilancia() {
  return (
    <>
      <PageHeader
        titulo="Reportar un efecto adverso"
        bajada="Si usaste un producto y te pasó algo que no esperabas, contanoslo. Un reporte tuyo puede ayudar a otras personas."
      >
        <div role="note" className={`${aviso.destacado} max-w-3xl`}>
          <p>
            <strong className="font-semibold">Si es una urgencia, llamá al 107 o al 911.</strong> Este formulario no
            reemplaza la atención médica.
          </p>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <h2 className="mb-8 text-2xl">Contanos qué pasó</h2>
            <AdverseEventForm />
          </div>

          <div className="space-y-12">
            <div className={aviso.info}>
              <h2 className="text-lg">Es una demostración</h2>
              <p className="mt-3">
                Este formulario no envía datos a ningún lado. No guardamos nada, ni en servidores ni en tu navegador.
                Aun así, evitá escribir datos reales de salud.
              </p>
            </div>

            <div>
              <h2 className="text-xl">Por qué importa reportar</h2>
              <div className="prosa mt-4">
                <p>
                  Antes de salir al mercado, un medicamento se estudia en grupos acotados de personas. Cuando miles de
                  personas lo usan durante años, aparecen cosas que esos estudios no alcanzaron a ver.
                </p>
                <p>
                  La farmacovigilancia junta esos reportes, los analiza y, si hace falta, cambia el prospecto, el
                  envase o el procedimiento de fabricación.
                </p>
                <p>No hace falta que estés seguro de que el producto causó lo que te pasó. Alcanza con que nos cuentes.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl">Qué pasa con un reporte</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li>Lo recibe una persona del equipo de farmacovigilancia.</li>
                <li>Si faltan datos, te escribe, siempre que nos hayas dejado un correo.</li>
                <li>El comité de seguridad del paciente lo analiza junto con otros reportes.</li>
                <li>Si corresponde, se informa a las autoridades y se actualiza el material del producto.</li>
              </ol>
              <p className="mt-4 text-sm text-tinta-suave">Descripción de ejemplo del proceso, sin cifras ni plazos reales.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
