import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { compromisosAmbientales, compromisosComunidad, type Compromiso } from "@/lib/company";
import { metadatos } from "@/lib/seo";
import { aviso } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Sustentabilidad",
  descripcion: "Compromisos ambientales y con la comunidad de Laboratorios Caldén. Metas de ejemplo.",
  ruta: "/sustentabilidad",
});

function Lista({ items }: { items: Compromiso[] }) {
  return (
    <ul className="divide-y divide-linea border-y border-linea">
      {items.map((c) => (
        <li key={c.titulo} className="py-7">
          <h3 className="text-xl">{c.titulo}</h3>
          <p className="mt-3">{c.texto}</p>
          <p className="mt-3 text-sm font-semibold text-baya-700">{c.meta}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Sustentabilidad() {
  return (
    <>
      <PageHeader
        titulo="Sustentabilidad"
        bajada="Fabricar medicamentos usa agua, energía y materiales. Estos son los compromisos de ejemplo que asumimos para usar menos."
      >
        <div className={`${aviso.info} max-w-3xl`}>
          <p>Las metas y cifras de esta página son de ejemplo.</p>
        </div>
      </PageHeader>

      <Section titulo="ambiente-titulo">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 id="ambiente-titulo" className="text-2xl">
              Compromisos ambientales
            </h2>
            <div className="mt-8">
              <Lista items={compromisosAmbientales} />
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-superficie lg:sticky lg:top-32">
            <Image
              src="/images/sustentabilidad.jpg"
              alt="Vista aérea de un río que desemboca en el mar, rodeado de bosque."
              fill
              sizes="(min-width: 70rem) 36vw, 100vw"
              className="object-cover object-[50%_65%]"
            />
          </div>
        </div>
      </Section>

      <Section tono="suave" titulo="comunidad-titulo">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-superficie">
            <Image
              src="/images/herbolario.jpg"
              alt="Manos agregando hierbas secas a un mortero de piedra sobre una mesa con otras hierbas y flores."
              fill
              sizes="(min-width: 70rem) 36vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="comunidad-titulo" className="text-2xl">
              Compromisos con la comunidad
            </h2>
            <div className="mt-8">
              <Lista items={compromisosComunidad} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
