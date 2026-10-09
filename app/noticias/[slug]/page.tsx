import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { formatearFecha, getNoticia, noticias } from "@/lib/news";
import { metadatos } from "@/lib/seo";
import { aviso, enlace, etiqueta } from "@/lib/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return noticias.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/noticias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const n = getNoticia(slug);
  if (!n) return {};
  return metadatos({ titulo: n.titulo, descripcion: n.resumen, ruta: `/noticias/${n.slug}` });
}

export default async function Noticia({ params }: PageProps<"/noticias/[slug]">) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) notFound();

  const otras = [...noticias]
    .filter((n) => n.slug !== noticia.slug)
    .sort((a, b) => b.fecha.localeCompare(a.fecha))
    .slice(0, 3);

  return (
    <>
      <PageHeader titulo={noticia.titulo} migas={[{ href: "/noticias", etiqueta: "Noticias" }]}>
        <p className="flex flex-wrap items-center gap-3">
          <span className={etiqueta}>{noticia.categoria}</span>
          <time dateTime={noticia.fecha} className="text-tinta-suave">
            {formatearFecha(noticia.fecha)}
          </time>
        </p>
      </PageHeader>

      <Section>
        <article className="mx-auto max-w-3xl">
          {noticia.imagen ? (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-card bg-superficie">
              <Image src={noticia.imagen.src} alt={noticia.imagen.alt} fill priority sizes="(min-width: 52rem) 48rem, 100vw" className="object-cover" />
            </div>
          ) : null}
          <p className="font-display text-xl">{noticia.resumen}</p>
          <div className="prosa mt-8">
            {noticia.cuerpo.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className={`${aviso.info} mt-12`}>
            <p>Noticia de ejemplo de un sitio de demostración. Las personas, instituciones y cifras son ficticias.</p>
          </div>
        </article>
      </Section>

      <Section tono="suave" titulo="otras-titulo">
        <h2 id="otras-titulo" className="text-xl">
          Otras noticias
        </h2>
        <ul className="mt-6 border-t border-linea">
          {otras.map((n) => (
            <li key={n.slug} className="border-b border-linea">
              <Link href={`/noticias/${n.slug}`} className={`${enlace} flex min-h-14 items-center py-3`}>
                {n.titulo}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/noticias" className={`${enlace} inline-flex min-h-11 items-center font-semibold`}>
            Ver todas las noticias
          </Link>
        </p>
      </Section>
    </>
  );
}
