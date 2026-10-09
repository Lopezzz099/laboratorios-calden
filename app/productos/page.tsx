import Link from "next/link";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { DemoNotice } from "@/components/products/DemoNotice";
import { formasPublicas, productosPublicos } from "@/lib/products";
import { metadatos } from "@/lib/seo";
import { enlace } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Productos de venta libre y bienestar",
  descripcion: "Catálogo de ejemplo con búsqueda y filtros por área terapéutica y forma farmacéutica. Sitio de demostración.",
  ruta: "/productos",
});

export default function Productos() {
  return (
    <>
      <PageHeader
        titulo="Productos de venta libre y de bienestar"
        bajada="Buscá por nombre o filtrá por área y forma. Cada ficha muestra el nombre, el área, la forma, la presentación y un texto de ejemplo."
      >
        <DemoNotice className="max-w-3xl" />
      </PageHeader>

      <Section>
        <Suspense fallback={<p className="text-tinta-suave">Cargando el catálogo…</p>}>
          <ProductCatalog productos={productosPublicos} formas={formasPublicas} />
        </Suspense>
      </Section>

      <Section tono="suave">
        <div className="max-w-3xl">
          <h2 className="text-2xl">¿Y los productos bajo receta?</h2>
          <p className="mt-4">
            No están acá. En un sitio real, los medicamentos de venta bajo receta no se publicitan al público general,
            y por eso los mostramos en una zona aparte para profesionales de la salud.
          </p>
          <p className="mt-4">
            <Link href="/profesionales" className={`${enlace} inline-flex min-h-11 items-center font-semibold`}>
              Ir a la zona de profesionales
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
