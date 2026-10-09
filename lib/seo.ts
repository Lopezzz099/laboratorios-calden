import type { Metadata } from "next";
import { site } from "./site";

type Opciones = { titulo: string; descripcion: string; ruta: string };

/** Metadatos por página con Open Graph. El título se completa con la plantilla del layout raíz. */
export function metadatos({ titulo, descripcion, ruta }: Opciones): Metadata {
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: site.nombre,
      title: `${titulo} · ${site.nombre}`,
      description: descripcion,
      url: ruta,
    },
    twitter: { card: "summary_large_image", title: `${titulo} · ${site.nombre}`, description: descripcion },
  };
}
