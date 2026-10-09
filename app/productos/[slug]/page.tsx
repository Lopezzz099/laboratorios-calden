import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { DemoNotice } from "@/components/products/DemoNotice";
import { Flecha } from "@/components/ui/Flecha";
import { getArea } from "@/lib/areas";
import { getProductoPublico, productosPublicos } from "@/lib/products";
import { metadatos } from "@/lib/seo";
import { boton, enlace, etiqueta } from "@/lib/ui";

// Solo se generan fichas de la zona pública. Cualquier otro slug devuelve 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return productosPublicos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductoPublico(slug);
  if (!p) return {};
  return metadatos({
    titulo: `${p.nombre}, ${p.forma.toLowerCase()}`,
    descripcion: `Ficha de ejemplo de ${p.nombre}: ${getArea(p.area)?.nombre}, ${p.forma.toLowerCase()}, ${p.presentacion.toLowerCase()}. Sitio de demostración.`,
    ruta: `/productos/${p.slug}`,
  });
}

export default async function FichaProducto({ params }: PageProps<"/productos/[slug]">) {
  const { slug } = await params;
  const producto = getProductoPublico(slug);
  if (!producto) notFound();

  const area = getArea(producto.area);
  const mismaArea = productosPublicos.filter((p) => p.area === producto.area && p.slug !== producto.slug);

  const datos: [string, string][] = [
    ["Área terapéutica", area?.nombre ?? ""],
    ["Forma farmacéutica", producto.forma],
    ["Presentación", producto.presentacion],
    ["Categoría", producto.categoria],
  ];

  return (
    <>
      <PageHeader titulo={producto.nombre} migas={[{ href: "/productos", etiqueta: "Productos" }]}>
        <span className={etiqueta}>{producto.categoria}</span>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-xl">Datos de la ficha</h2>
            <dl className="mt-6 divide-y divide-linea border-y border-linea">
              {datos.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-tinta-suave">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="prosa mt-8">{producto.texto}</p>
          </div>

          <div className="space-y-8">
            <DemoNotice />
            <p className="text-tinta-suave">
              Si tomaste este producto u otro de la compañía y notaste algo, podés contárnoslo.
            </p>
            <p>
              <Link href="/farmacovigilancia" className={boton("secundario")}>
                Reportar un efecto adverso
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {mismaArea.length > 0 ? (
        <Section tono="suave" titulo="mismo-area">
          <h2 id="mismo-area" className="text-xl">
            Otros productos de {area?.nombre.toLowerCase()}
          </h2>
          <ul className="mt-6 grid border-t border-linea lg:grid-cols-2 lg:gap-x-12">
            {mismaArea.map((p) => (
              <li key={p.slug} className="border-b border-linea">
                <Link href={`/productos/${p.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-4 no-underline">
                  <span>
                    <span className="font-display text-lg font-semibold">{p.nombre}</span>
                    <span className="ml-3 text-tinta-suave">{p.forma}</span>
                  </span>
                  <Flecha className="size-5 text-baya-700" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section>
        <Link href="/productos" className={`${enlace} inline-flex min-h-11 items-center font-semibold`}>
          Volver al catálogo
        </Link>
      </Section>
    </>
  );
}
