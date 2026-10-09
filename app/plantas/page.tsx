import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { PlantsMap } from "@/components/plants/PlantsMap";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Plantas, centros de distribución y oficinas",
  descripcion: "Mapa interactivo de ejemplo con la planta de producción, los centros de distribución y las oficinas de Laboratorios Caldén.",
  ruta: "/plantas",
});

export default function Plantas() {
  return (
    <>
      <PageHeader
        titulo="Plantas, centros de distribución y oficinas"
        bajada="Una planta de producción, tres centros de distribución y una sede central. Elegí una en la lista para verla en el mapa."
      />
      <Section>
        <PlantsMap />
      </Section>
    </>
  );
}
