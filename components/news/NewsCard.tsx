import Image from "next/image";
import Link from "next/link";
import { formatearFecha, type Noticia } from "@/lib/news";
import { etiqueta } from "@/lib/ui";

type Props = {
  noticia: Noticia;
  /** Tamaño grande: imagen arriba y título más grande. */
  destacada?: boolean;
  nivelTitulo?: 2 | 3;
};

export function NewsCard({ noticia, destacada = false, nivelTitulo = 3 }: Props) {
  const Titulo = nivelTitulo === 2 ? "h2" : "h3";
  return (
    <article className="group relative flex flex-col">
      {noticia.imagen && destacada ? (
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-card bg-superficie">
          <Image
            src={noticia.imagen.src}
            alt={noticia.imagen.alt}
            fill
            sizes="(min-width: 70rem) 56vw, 100vw"
            className="object-cover transition-transform duration-500 ease-salida group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className={etiqueta}>{noticia.categoria}</span>
        <time dateTime={noticia.fecha} className="text-tinta-suave">
          {formatearFecha(noticia.fecha)}
        </time>
      </div>
      <Titulo className={`mt-4 ${destacada ? "text-xl" : "text-lg"}`}>
        <Link
          href={`/noticias/${noticia.slug}`}
          className="no-underline after:absolute after:inset-0 hover:underline hover:underline-offset-4"
        >
          {noticia.titulo}
        </Link>
      </Titulo>
      <p className="mt-3 text-tinta-suave">{noticia.resumen}</p>
    </article>
  );
}
