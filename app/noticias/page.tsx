import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { NewsCard } from "@/components/news/NewsCard";
import { noticias } from "@/lib/news";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Noticias",
  descripcion: "Novedades de Laboratorios Caldén. Noticias de ejemplo de un sitio de demostración.",
  ruta: "/noticias",
});

export default function Noticias() {
  const ordenadas = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha));
  const [primera, ...resto] = ordenadas;

  return (
    <>
      <PageHeader
        titulo="Noticias"
        bajada="Novedades de la compañía, de más reciente a más antigua. Todas son de ejemplo."
      />
      <Section>
        <div className="max-w-4xl">
          <NewsCard noticia={primera} destacada nivelTitulo={2} />
        </div>
        <ul className="mt-16 grid gap-x-12 gap-y-12 border-t border-linea pt-12 md:grid-cols-2 lg:grid-cols-3">
          {resto.map((n) => (
            <li key={n.slug}>
              <NewsCard noticia={n} nivelTitulo={2} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
