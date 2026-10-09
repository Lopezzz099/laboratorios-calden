import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProfessionalGate } from "@/components/professionals/ProfessionalGate";
import { areas, getArea } from "@/lib/areas";
import { materialCientifico } from "@/lib/company";
import { productosProfesionales } from "@/lib/products";
import { metadatos } from "@/lib/seo";
import { aviso, etiqueta } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Zona de profesionales de la salud",
  descripcion: "Portafolio completo y material científico de ejemplo para profesionales de la salud. Sitio de demostración.",
  ruta: "/profesionales",
});

export default function Profesionales() {
  const porArea = areas
    .map((a) => ({ area: a, items: productosProfesionales.filter((p) => p.area === a.slug) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        titulo="Zona de profesionales de la salud"
        bajada="Portafolio completo y material científico de la compañía."
      />

      <ProfessionalGate>
        <Section titulo="portafolio-titulo">
          <h2 id="portafolio-titulo" className="text-2xl">
            Portafolio bajo receta
          </h2>
          <div className={`${aviso.info} mt-6 max-w-3xl`}>
            <p>
              Sitio de demostración: los productos y sus datos son ficticios y no constituyen consejo médico. Cada
              ficha muestra solo nombre, área, forma, presentación y un texto de ejemplo.
            </p>
          </div>
          <div className="mt-12 space-y-14">
            {porArea.map(({ area, items }) => (
              <div key={area.slug}>
                <h3 className="text-xl">{area.nombre}</h3>
                <ul className="mt-4 divide-y divide-linea border-y border-linea">
                  {items.map((p) => (
                    <li key={p.slug} className="grid gap-2 py-5 md:grid-cols-[1fr_1fr_1.2fr_auto] md:items-center md:gap-8">
                      <p className="font-display text-lg font-semibold">{p.nombre}</p>
                      <p>{p.forma}</p>
                      <p className="text-tinta-suave">{p.presentacion}</p>
                      <p>
                        <span className={etiqueta}>{p.categoria}</span>
                      </p>
                      <p className="text-tinta-suave md:col-span-4">{p.texto}</p>
                      <p className="sr-only">Área: {getArea(p.area)?.nombre}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section tono="suave" titulo="material-titulo">
          <h2 id="material-titulo" className="text-2xl">
            Material científico
          </h2>
          <p className="mt-4 max-w-2xl text-tinta-suave">
            Estos materiales son de ejemplo. No hay archivos para descargar.
          </p>
          <ul className="mt-8 grid gap-x-12 border-t border-linea lg:grid-cols-2">
            {materialCientifico.map((m) => (
              <li key={m.titulo} className="border-b border-linea py-6">
                <p className="font-display text-lg font-semibold">{m.titulo}</p>
                <p className="mt-1 text-sm font-semibold text-baya-700">{m.tipo}</p>
                <p className="mt-2 text-tinta-suave">{m.texto}</p>
              </li>
            ))}
          </ul>
        </Section>
      </ProfessionalGate>
    </>
  );
}
