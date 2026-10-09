export type Noticia = {
  slug: string;
  titulo: string;
  /** Fecha ISO (AAAA-MM-DD). */
  fecha: string;
  categoria: "Compañía" | "Investigación" | "Sustentabilidad" | "Calidad" | "Comunidad";
  resumen: string;
  cuerpo: string[];
  imagen?: { src: string; alt: string };
};

// Noticias de ejemplo. Las personas, instituciones y cifras son ficticias.
export const noticias: Noticia[] = [
  {
    slug: "nuevo-laboratorio-de-control-en-pilar",
    titulo: "Abrimos un laboratorio de control más grande en la planta de Pilar",
    fecha: "2026-09-18",
    categoria: "Calidad",
    resumen: "El nuevo espacio duplica la superficie de análisis y reúne en un mismo lugar a los equipos de control.",
    cuerpo: [
      "La planta de Pilar estrenó un laboratorio de control de calidad que duplica la superficie del anterior. Los equipos de análisis, que antes estaban en dos edificios, ahora trabajan juntos.",
      "Lucía Quiroga, directora de Calidad, explicó que el cambio acorta los tiempos de revisión de cada lote y facilita que el equipo se consulte en el momento.",
      "El espacio incluye una sala de muestras de retención, donde se guarda una parte de cada lote durante todo su período de vida útil.",
      "Nota de ejemplo: la inauguración, las personas y las cifras de este texto son ficticias.",
    ],
    imagen: {
      src: "/images/manufactura.jpg",
      alt: "Manos con guantes descartables sobre una línea de envasado en una planta farmacéutica.",
    },
  },
  {
    slug: "alianza-con-la-universidad-del-rio-salado",
    titulo: "Firmamos una alianza de investigación con la Universidad Nacional del Río Salado",
    fecha: "2026-08-27",
    categoria: "Investigación",
    resumen: "Cinco becarios trabajarán dos años en el laboratorio de la universidad con acompañamiento de nuestro equipo científico.",
    cuerpo: [
      "Laboratorios Caldén y la Universidad Nacional del Río Salado firmaron un convenio para desarrollar proyectos de investigación aplicada.",
      "Tomás Brunetti, director científico, contó que el convenio financia cinco becas de dos años y reserva tiempo del equipo de la compañía para acompañar a cada becario.",
      "Los resultados se publicarán en revistas científicas, con acceso abierto cuando sea posible.",
      "Nota de ejemplo: la universidad, el convenio y las personas son ficticios.",
    ],
    imagen: {
      src: "/images/alianzas.jpg",
      alt: "Dos personas con guardapolvo y guantes observan un matraz con líquido naranja en un laboratorio.",
    },
  },
  {
    slug: "informe-de-sustentabilidad-2025",
    titulo: "Publicamos el informe de sustentabilidad de 2025",
    fecha: "2026-07-09",
    categoria: "Sustentabilidad",
    resumen: "El informe cuenta cómo fue el uso de agua y energía en las plantas y qué metas quedaron para este año.",
    cuerpo: [
      "El informe resume el consumo de agua y energía de la planta de producción y los centros de distribución durante 2025.",
      "También detalla las metas de reducción de residuos para 2026 y cómo se va a medir el avance cada trimestre.",
      "Nota de ejemplo: las cifras y compromisos de este texto son ficticios.",
    ],
    imagen: {
      src: "/images/sustentabilidad.jpg",
      alt: "Vista aérea de un río que desemboca en el mar, rodeado de bosque.",
    },
  },
  {
    slug: "nuevo-centro-de-distribucion-en-mendoza",
    titulo: "Sumamos un centro de distribución en Mendoza",
    fecha: "2026-05-14",
    categoria: "Compañía",
    resumen: "El depósito atiende a farmacias y distribuidores de Cuyo y reduce los tiempos de entrega en la región.",
    cuerpo: [
      "El nuevo centro de distribución de Mendoza empezó a operar en mayo. Atiende pedidos de farmacias y distribuidores de la región de Cuyo.",
      "El depósito cuenta con áreas separadas por temperatura y un registro de cada movimiento de mercadería, desde que entra hasta que sale.",
      "Nota de ejemplo: la ubicación y las cifras son ficticias.",
    ],
  },
  {
    slug: "convocatoria-de-becas-de-posgrado",
    titulo: "Abrimos la convocatoria de becas de posgrado",
    fecha: "2026-04-02",
    categoria: "Comunidad",
    resumen: "Las becas están dirigidas a graduados de ciencias farmacéuticas, químicas y biológicas.",
    cuerpo: [
      "La convocatoria está abierta para graduados recientes de carreras de ciencias farmacéuticas, químicas y biológicas.",
      "Las becas incluyen un estipendio mensual, acompañamiento de un tutor de la compañía y acceso a los laboratorios.",
      "Nota de ejemplo: la convocatoria es ficticia y no recibe postulaciones.",
    ],
  },
  {
    slug: "jornada-de-farmacovigilancia",
    titulo: "Hicimos una jornada abierta sobre farmacovigilancia",
    fecha: "2026-03-11",
    categoria: "Calidad",
    resumen: "Profesionales y pacientes conversaron sobre por qué importa contar lo que pasa después de usar un medicamento.",
    cuerpo: [
      "La jornada reunió a profesionales de la salud, farmacéuticos y pacientes para hablar de cómo se registran y se analizan los reportes de efectos adversos.",
      "El equipo explicó el recorrido de un reporte: quién lo recibe, qué se pregunta y qué se hace con la información.",
      "Nota de ejemplo: la jornada y las personas son ficticias.",
    ],
  },
];

export function getNoticia(slug: string): Noticia | undefined {
  return noticias.find((n) => n.slug === slug);
}

export function formatearFecha(iso: string): string {
  const [a, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(a, m - 1, d)),
  );
}
