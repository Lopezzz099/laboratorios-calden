export type AreaSlug =
  | "digestiva"
  | "respiratoria"
  | "dermatologia"
  | "bienestar"
  | "cardiometabolica"
  | "neurologia";

export type Area = {
  slug: AreaSlug;
  nombre: string;
  resumen: string;
};

export const areas: Area[] = [
  {
    slug: "digestiva",
    nombre: "Digestiva",
    resumen: "Productos de uso oral para el cuidado digestivo de todos los días.",
  },
  {
    slug: "respiratoria",
    nombre: "Respiratoria",
    resumen: "Presentaciones pensadas para que sean fáciles de usar en casa.",
  },
  {
    slug: "dermatologia",
    nombre: "Dermatología",
    resumen: "Cremas y geles de textura simple, para uso sobre la piel.",
  },
  {
    slug: "bienestar",
    nombre: "Bienestar y nutrición",
    resumen: "Suplementos y productos de bienestar de venta libre.",
  },
  {
    slug: "cardiometabolica",
    nombre: "Cardiometabólica",
    resumen: "Portafolio para profesionales de la salud, con material científico.",
  },
  {
    slug: "neurologia",
    nombre: "Neurología",
    resumen: "Portafolio para profesionales de la salud, con material científico.",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
