import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { productosPublicos } from "@/lib/products";
import { noticias } from "@/lib/news";

const rutas = [
  "/",
  "/productos",
  "/profesionales",
  "/investigacion",
  "/calidad",
  "/farmacovigilancia",
  "/nosotros",
  "/sustentabilidad",
  "/plantas",
  "/carreras",
  "/noticias",
  "/contacto",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const fijas = rutas.map((r) => ({ url: `${base}${r === "/" ? "" : r}` }));
  const productos = productosPublicos.map((p) => ({ url: `${base}/productos/${p.slug}` }));
  const nov = noticias.map((n) => ({ url: `${base}/noticias/${n.slug}`, lastModified: n.fecha }));
  return [...fijas, ...productos, ...nov];
}
