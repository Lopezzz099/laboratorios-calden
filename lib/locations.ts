export type TipoUbicacion = "Planta de producción" | "Centro de distribución" | "Oficina";

export type Ubicacion = {
  id: string;
  nombre: string;
  tipo: TipoUbicacion;
  ciudad: string;
  /** Dirección ficticia. */
  direccion: string;
  lat: number;
  lng: number;
  descripcion: string;
};

// Ubicaciones de ejemplo. Las coordenadas son aproximadas a la ciudad y no marcan edificios reales de la compañía.
export const ubicaciones: Ubicacion[] = [
  {
    id: "pilar",
    nombre: "Planta de producción Pilar",
    tipo: "Planta de producción",
    ciudad: "Pilar, Buenos Aires",
    direccion: "Parque industrial, dirección de ejemplo",
    lat: -34.4587,
    lng: -58.9142,
    descripcion: "Fabricación, envasado y laboratorio de control de calidad.",
  },
  {
    id: "rosario",
    nombre: "Centro de distribución Rosario",
    tipo: "Centro de distribución",
    ciudad: "Rosario, Santa Fe",
    direccion: "Zona logística, dirección de ejemplo",
    lat: -32.9442,
    lng: -60.6505,
    descripcion: "Atiende a farmacias y distribuidores del Litoral.",
  },
  {
    id: "cordoba",
    nombre: "Centro de distribución Córdoba",
    tipo: "Centro de distribución",
    ciudad: "Córdoba, Córdoba",
    direccion: "Zona logística, dirección de ejemplo",
    lat: -31.4201,
    lng: -64.1888,
    descripcion: "Atiende a farmacias y distribuidores del centro y el norte.",
  },
  {
    id: "mendoza",
    nombre: "Centro de distribución Mendoza",
    tipo: "Centro de distribución",
    ciudad: "Mendoza, Mendoza",
    direccion: "Zona logística, dirección de ejemplo",
    lat: -32.8895,
    lng: -68.8458,
    descripcion: "Atiende a farmacias y distribuidores de Cuyo.",
  },
  {
    id: "sede",
    nombre: "Sede central",
    tipo: "Oficina",
    ciudad: "Ciudad de Buenos Aires",
    direccion: "Dirección de ejemplo",
    lat: -34.5875,
    lng: -58.43,
    descripcion: "Dirección general, administración, asuntos regulatorios y farmacovigilancia.",
  },
];
