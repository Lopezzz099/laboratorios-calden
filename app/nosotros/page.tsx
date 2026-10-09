import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { gobierno, hitos, liderazgo } from "@/lib/company";
import { metadatos } from "@/lib/seo";
import { aviso } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Nosotros",
  descripcion: "Historia, misión, liderazgo y gobierno corporativo de Laboratorios Caldén, una compañía ficticia de Buenos Aires.",
  ruta: "/nosotros",
});

function iniciales(nombre: string): string {
  return nombre
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Nosotros() {
  return (
    <>
      <PageHeader
        titulo="Nosotros"
        bajada="Somos un laboratorio de Buenos Aires con más de cincuenta años de historia. Esta es la versión de ejemplo de esa historia."
      >
        <div className={`${aviso.info} max-w-3xl`}>
          <p>La compañía, las fechas y las personas de esta página son ficticias.</p>
        </div>
      </PageHeader>

      <Section titulo="mision-titulo">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 id="mision-titulo" className="text-2xl">
              Nuestra misión
            </h2>
            <p className="mt-6 max-w-2xl font-display text-xl">
              Fabricar productos de salud con el cuidado con el que nos gustaría que fabricaran los que usa nuestra
              familia.
            </p>
            <div className="prosa mt-8">
              <p>
                Eso se traduce en tres hábitos: explicar lo que hacemos en palabras simples, controlar cada paso y
                escuchar lo que nos cuentan las personas que usan nuestros productos.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-superficie">
            <Image
              src="/images/trabajo.jpg"
              alt="Trabajadora de laboratorio con cofia, barbijo y guantes azules preparando muestras."
              fill
              sizes="(min-width: 70rem) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tono="suave" titulo="historia-titulo">
        <h2 id="historia-titulo" className="text-2xl">
          Nuestra historia
        </h2>
        <ol className="mt-10 border-t border-linea">
          {hitos.map((h) => (
            <li key={h.anio} className="grid gap-2 border-b border-linea py-7 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:grid-cols-[10rem_16rem_1fr]">
              <p className="font-display text-3xl font-semibold tabular-nums text-baya-700">{h.anio}</p>
              <h3 className="text-xl">{h.titulo}</h3>
              <p className="max-w-xl sm:col-start-2 lg:col-start-3">{h.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section titulo="liderazgo-titulo">
        <h2 id="liderazgo-titulo" className="text-2xl">
          Liderazgo
        </h2>
        <p className="mt-4 max-w-2xl text-tinta-suave">Personas ficticias, creadas para esta demostración.</p>
        <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {liderazgo.map((p) => (
            <li key={p.nombre} className="flex gap-5">
              <span
                aria-hidden="true"
                className="grid size-16 shrink-0 place-items-center rounded-full bg-baya-700 font-display text-xl font-semibold text-white"
              >
                {iniciales(p.nombre)}
              </span>
              <div>
                <h3 className="text-xl">{p.nombre}</h3>
                <p className="font-semibold text-baya-700">{p.cargo}</p>
                <p className="mt-2">{p.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tono="oscuro" titulo="gobierno-titulo">
        <h2 id="gobierno-titulo" className="text-2xl">
          Gobierno corporativo
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {gobierno.map((g) => (
            <div key={g.titulo} className="border-t-2 border-ocre-300 pt-5">
              <dt className="font-display text-xl font-semibold">{g.titulo}</dt>
              <dd className="mt-2">{g.texto}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm">Descripción de ejemplo, sin cifras ni nombres reales.</p>
      </Section>
    </>
  );
}
