import type { AreaSlug } from "./areas";

export type Forma =
  | "Comprimidos"
  | "Comprimidos masticables"
  | "Cápsulas"
  | "Jarabe"
  | "Solución oral"
  | "Spray nasal"
  | "Crema"
  | "Gel"
  | "Sobres"
  | "Gotas"
  | "Solución para nebulizar";

export type Categoria = "Venta libre" | "Bienestar" | "Bajo receta";

/** Los productos de zona "profesional" solo se muestran en /profesionales. */
export type Zona = "publica" | "profesional";

export type Producto = {
  slug: string;
  nombre: string;
  area: AreaSlug;
  forma: Forma;
  presentacion: string;
  categoria: Categoria;
  zona: Zona;
  /** Texto neutro de ejemplo. Sin indicaciones, dosis ni promesas. */
  texto: string;
};

// Todos los nombres comerciales son inventados.
export const productos: Producto[] = [
  {
    slug: "aldivia",
    nombre: "Aldivia",
    area: "digestiva",
    forma: "Comprimidos masticables",
    presentacion: "Caja con 24 comprimidos",
    categoria: "Venta libre",
    zona: "publica",
    texto: "Ficha de ejemplo. Producto de uso oral en comprimidos masticables, envasado en blíster individual.",
  },
  {
    slug: "fibrela",
    nombre: "Fibrela",
    area: "digestiva",
    forma: "Sobres",
    presentacion: "Caja con 14 sobres",
    categoria: "Bienestar",
    zona: "publica",
    texto: "Ficha de ejemplo. Polvo para disolver en agua, en sobres de una sola toma.",
  },
  {
    slug: "brisanta",
    nombre: "Brisanta",
    area: "respiratoria",
    forma: "Jarabe",
    presentacion: "Frasco de 120 ml con vasito dosificador",
    categoria: "Venta libre",
    zona: "publica",
    texto: "Ficha de ejemplo. Jarabe de sabor suave, con tapa de seguridad para niños.",
  },
  {
    slug: "nivalen",
    nombre: "Nivalen",
    area: "respiratoria",
    forma: "Spray nasal",
    presentacion: "Frasco de 15 ml",
    categoria: "Venta libre",
    zona: "publica",
    texto: "Ficha de ejemplo. Envase con válvula pulverizadora y tapa protectora.",
  },
  {
    slug: "dermaluz",
    nombre: "Dermaluz",
    area: "dermatologia",
    forma: "Crema",
    presentacion: "Pomo de 60 g",
    categoria: "Venta libre",
    zona: "publica",
    texto: "Ficha de ejemplo. Crema de textura liviana, para uso externo, en pomo de aluminio.",
  },
  {
    slug: "pielara",
    nombre: "Pielara",
    area: "dermatologia",
    forma: "Gel",
    presentacion: "Tubo de 100 g",
    categoria: "Bienestar",
    zona: "publica",
    texto: "Ficha de ejemplo. Gel transparente, sin fragancia agregada, en tubo flexible.",
  },
  {
    slug: "vitalba",
    nombre: "Vitalba",
    area: "bienestar",
    forma: "Cápsulas",
    presentacion: "Frasco con 30 cápsulas",
    categoria: "Bienestar",
    zona: "publica",
    texto: "Ficha de ejemplo. Suplemento en cápsulas, en frasco con cierre hermético.",
  },
  {
    slug: "hebrona",
    nombre: "Hebrona",
    area: "bienestar",
    forma: "Gotas",
    presentacion: "Frasco gotero de 30 ml",
    categoria: "Bienestar",
    zona: "publica",
    texto: "Ficha de ejemplo. Gotas de uso oral, en frasco de vidrio color ámbar con gotero.",
  },
  {
    slug: "lumari",
    nombre: "Lumarí",
    area: "bienestar",
    forma: "Sobres",
    presentacion: "Caja con 20 sobres",
    categoria: "Bienestar",
    zona: "publica",
    texto: "Ficha de ejemplo. Polvo para preparar una bebida, en sobres individuales.",
  },
  {
    slug: "cormelia",
    nombre: "Cormelia",
    area: "cardiometabolica",
    forma: "Comprimidos",
    presentacion: "Caja con 30 comprimidos recubiertos",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "glucavia",
    nombre: "Glucavia",
    area: "cardiometabolica",
    forma: "Comprimidos",
    presentacion: "Caja con 60 comprimidos",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "lipandra",
    nombre: "Lipandra",
    area: "cardiometabolica",
    forma: "Cápsulas",
    presentacion: "Caja con 28 cápsulas",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "calvenor",
    nombre: "Calvenor",
    area: "neurologia",
    forma: "Comprimidos",
    presentacion: "Caja con 30 comprimidos",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "epirelta",
    nombre: "Epirelta",
    area: "neurologia",
    forma: "Solución oral",
    presentacion: "Frasco de 150 ml",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "torvenia",
    nombre: "Torvenia",
    area: "dermatologia",
    forma: "Crema",
    presentacion: "Pomo de 30 g",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
  {
    slug: "respidora",
    nombre: "Respidora",
    area: "respiratoria",
    forma: "Solución para nebulizar",
    presentacion: "Caja con 20 ampollas",
    categoria: "Bajo receta",
    zona: "profesional",
    texto: "Ficha de ejemplo para profesionales. Monografía y material científico de muestra, sin datos reales.",
  },
];

export const productosPublicos = productos.filter((p) => p.zona === "publica");
export const productosProfesionales = productos.filter((p) => p.zona === "profesional");

/** Solo devuelve productos de la zona pública: el resto no tiene ficha propia. */
export function getProductoPublico(slug: string): Producto | undefined {
  return productosPublicos.find((p) => p.slug === slug);
}

export const formasPublicas: Forma[] = Array.from(new Set(productosPublicos.map((p) => p.forma))).sort((a, b) =>
  a.localeCompare(b, "es"),
);

export function areasConProductosPublicos(): Set<AreaSlug> {
  return new Set(productosPublicos.map((p) => p.area));
}
