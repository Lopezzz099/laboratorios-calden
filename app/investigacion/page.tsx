import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { alianzas, etapasPipeline, lineasInvestigacion, pipeline } from "@/lib/company";
import { getArea } from "@/lib/areas";
import { metadatos } from "@/lib/seo";
import { aviso, enlace } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Investigación",
  descripcion: "Líneas de investigación, pipeline por etapas y alianzas con universidades de Laboratorios Caldén. Contenido de ejemplo.",
  ruta: "/investigacion",
});

export default function Investigacion() {
  return (
    <>
      <PageHeader
        titulo="Investigación"
        bajada="Un equipo científico, cuatro líneas de trabajo y tres alianzas con universidades. Todo lo que figura acá es de ejemplo."
      />

      <Section titulo="lineas-titulo">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 id="lineas-titulo" className="text-2xl">
              En qué trabajamos
            </h2>
            <ul className="mt-8 divide-y divide-linea border-y border-linea">
              {lineasInvestigacion.map((l) => (
                <li key={l.titulo} className="py-7">
                  <h3 className="text-xl">{l.titulo}</h3>
                  <p className="mt-3 max-w-2xl">{l.texto}</p>
                  <p className="mt-3 text-sm font-semibold text-baya-700">{getArea(l.area)?.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-superficie lg:sticky lg:top-32">
            <Image
              src="/images/investigacion.jpg"
              alt="Material de vidrio de laboratorio transparente sobre una mesada, con el fondo desenfocado."
              fill
              sizes="(min-width: 70rem) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tono="suave" titulo="pipeline-titulo">
        <h2 id="pipeline-titulo" className="text-2xl">
          Programas en desarrollo
        </h2>
        <p className="mt-4 max-w-3xl">
          Un programa pasa por seis etapas antes de llegar a una presentación. Muchos no llegan al final, y eso es parte
          del proceso. La tabla muestra seis programas de ejemplo con códigos internos inventados: no indicamos
          moléculas ni usos.
        </p>
        <div className={`${aviso.info} mt-6 max-w-3xl`}>
          <p>Contenido de ejemplo. Ningún programa es real.</p>
        </div>

        <ul className="mt-10 border-t border-linea">
          {pipeline.map((p) => {
            const indice = etapasPipeline.indexOf(p.etapa);
            return (
              <li key={p.codigo} className="grid gap-4 border-b border-linea py-6 lg:grid-cols-[10rem_14rem_1fr] lg:items-center lg:gap-10">
                <p className="font-display text-xl font-semibold">{p.codigo}</p>
                <p className="text-tinta-suave">{getArea(p.area)?.nombre}</p>
                <div>
                  <p className="font-semibold">
                    Etapa {indice + 1} de {etapasPipeline.length}: {p.etapa}
                  </p>
                  <div aria-hidden="true" className="mt-3 grid grid-cols-6 gap-1.5">
                    {etapasPipeline.map((e, i) => (
                      <span key={e} className={`h-3 rounded-full ${i <= indice ? "bg-baya-700" : "bg-superficie-fuerte"}`} />
                    ))}
                  </div>
                  <p aria-hidden="true" className="mt-2 hidden grid-cols-6 gap-1.5 text-sm text-tinta-suave lg:grid">
                    {etapasPipeline.map((e) => (
                      <span key={e}>{e}</span>
                    ))}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section titulo="alianzas-titulo">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-superficie">
            <Image
              src="/images/alianzas.jpg"
              alt="Dos personas con guardapolvo y guantes observan un matraz con líquido naranja en un laboratorio."
              fill
              sizes="(min-width: 70rem) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="alianzas-titulo" className="text-2xl">
              Alianzas con universidades
            </h2>
            <p className="mt-4">Instituciones ficticias, usadas como ejemplo.</p>
            <ul className="mt-6 divide-y divide-linea border-y border-linea">
              {alianzas.map((a) => (
                <li key={a.nombre} className="py-5">
                  <h3 className="text-lg">{a.nombre}</h3>
                  <p className="text-sm text-tinta-suave">{a.ciudad}</p>
                  <p className="mt-2">{a.texto}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              ¿Sos investigador y querés proponer un proyecto?{" "}
              <Link href="/contacto" className={enlace}>
                Escribinos
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
