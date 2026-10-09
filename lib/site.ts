export const site = {
  nombre: "Laboratorios Caldén",
  nombreCorto: "Caldén",
  descripcion:
    "Laboratorio farmacéutico ficticio con sede en Buenos Aires. Sitio de demostración: la información no es consejo médico.",
  ciudad: "Buenos Aires, Argentina",
  email: "contacto@laboratorioscalden.example",
  telefono: "+54 11 5555-0100",
  aviso:
    "Sitio de demostración. Laboratorios Caldén, sus productos y las personas que aparecen son ficticios. Nada de lo que se publica es consejo médico.",
} as const;

export function getSiteUrl(): string {
  const explicita = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicita) return explicita.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  return "http://localhost:3000";
}

export type EnlaceNav = { href: string; etiqueta: string; descripcion?: string };

/** Ordenados de más a menos importante para quien llega por primera vez. */
export const navPrincipal: EnlaceNav[] = [
  { href: "/productos", etiqueta: "Productos", descripcion: "Venta libre y bienestar" },
  { href: "/investigacion", etiqueta: "Investigación", descripcion: "Líneas, pipeline y alianzas" },
  { href: "/calidad", etiqueta: "Calidad", descripcion: "Cómo fabricamos y controlamos" },
  { href: "/nosotros", etiqueta: "Nosotros", descripcion: "Historia, equipo y gobierno" },
  { href: "/noticias", etiqueta: "Noticias", descripcion: "Novedades de la compañía" },
  { href: "/contacto", etiqueta: "Contacto", descripcion: "Escribinos según tu consulta" },
];

export const navSecundaria: EnlaceNav[] = [
  { href: "/farmacovigilancia", etiqueta: "Reportar un efecto adverso", descripcion: "Formulario de farmacovigilancia" },
  { href: "/sustentabilidad", etiqueta: "Sustentabilidad" },
  { href: "/plantas", etiqueta: "Plantas y oficinas" },
  { href: "/carreras", etiqueta: "Carreras" },
];

export const enlaceProfesionales: EnlaceNav = {
  href: "/profesionales",
  etiqueta: "Zona de profesionales",
};

export const navLegal: EnlaceNav[] = [
  { href: "/privacidad", etiqueta: "Privacidad" },
  { href: "/terminos", etiqueta: "Términos de uso" },
];

export function estaActivo(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
