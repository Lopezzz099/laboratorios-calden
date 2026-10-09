import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { pasosCalidad } from "@/lib/company";
import { metadatos } from "@/lib/seo";
import { aviso, boton } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Calidad, manufactura y trazabilidad",
  descripcion: "Cómo se controla cada lote en Laboratorios Caldén, explicado en lenguaje claro. Contenido de ejemplo.",
  ruta: "/calidad",
});

export default function Calidad() {
  return (
    <>
      <PageHeader
        titulo="Calidad, manufactura y trazabilidad"
        bajada="Un medicamento recorre varios controles antes de llegar a una farmacia. Así es ese recorrido en Caldén."
      >
        <div className={`${aviso.info} max-w-3xl`}>
          <p>
            <strong className="font-semibold">Contenido de ejemplo.</strong> Cumplimos las buenas prácticas de
            manufactura. Esta descripción es genérica y no menciona certificaciones ni registros.
          </p>
        </div>
      </PageHeader>

      <Section titulo="pasos-titulo">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 id="pasos-titulo" className="text-2xl">
              Seis pasos por cada lote
            </h2>
            <ol className="mt-8 divide-y divide-linea border-y border-linea">
              {pasosCalidad.map((p, i) => (
                <li key={p.titulo} className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6">
                  <span aria-hidden="true" className="font-display text-3xl font-semibold text-baya-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{p.titulo}</h3>
                    <p className="mt-2 max-w-2xl">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-superficie">
              <Image
                src="/images/manufactura.jpg"
                alt="Manos con guantes descartables sobre una línea de envasado en una planta farmacéutica."
                fill
                sizes="(min-width: 70rem) 36vw, 100vw"
                className="object-cover object-[35%_50%]"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tono="suave" titulo="traza-titulo">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="traza-titulo" className="text-2xl">
              Qué es la trazabilidad
            </h2>
            <div className="prosa mt-6">
              <p>
                Cada caja que sale de la planta lleva un código de lote. Con ese código podemos saber qué materias primas
                se usaron, qué día se fabricó, quién lo controló y a qué depósito se envió.
              </p>
              <p>
                Si hay un problema con un lote, esa información permite avisar rápido a quienes lo recibieron y sacarlo
                de circulación.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Cómo podés ayudar</h2>
            <div className="prosa mt-6">
              <p>
                Si notás algo raro en un envase o en un producto de la compañía, o si algo te pasó después de usarlo,
                avisanos. Tener el número de lote a mano ayuda.
              </p>
            </div>
            <p className="mt-8">
              <Link href="/farmacovigilancia" className={boton("primario", "lg")}>
                Reportar un efecto adverso
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
