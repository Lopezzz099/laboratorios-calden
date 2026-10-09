export type Vacante = {
  slug: string;
  titulo: string;
  area: string;
  lugar: string;
  modalidad: "Presencial" | "Híbrida";
  descripcion: string;
  requisitos: string[];
};

// Vacantes de ejemplo: no existen y no reciben postulaciones.
export const vacantes: Vacante[] = [
  {
    slug: "analista-de-control-de-calidad",
    titulo: "Analista de Control de Calidad",
    area: "Calidad",
    lugar: "Pilar, Buenos Aires",
    modalidad: "Presencial",
    descripcion: "Analizás muestras de materias primas y de producto terminado y registrás los resultados en el sistema de calidad.",
    requisitos: ["Título de grado en Química, Bioquímica o Farmacia", "Experiencia previa en laboratorio", "Manejo de planillas"],
  },
  {
    slug: "tecnico-de-produccion",
    titulo: "Técnico/a de Producción",
    area: "Manufactura",
    lugar: "Pilar, Buenos Aires",
    modalidad: "Presencial",
    descripcion: "Operás equipos de la línea de envasado y seguís los procedimientos escritos de cada lote.",
    requisitos: ["Secundario técnico completo", "Disponibilidad para turnos rotativos", "Atención al detalle"],
  },
  {
    slug: "analista-de-asuntos-regulatorios",
    titulo: "Analista de Asuntos Regulatorios",
    area: "Regulatorio",
    lugar: "Ciudad de Buenos Aires",
    modalidad: "Híbrida",
    descripcion: "Preparás y ordenás la documentación de cada producto y llevás el calendario de presentaciones.",
    requisitos: ["Título en Farmacia o carrera afín", "Inglés lector", "Redacción clara"],
  },
  {
    slug: "asistente-de-farmacovigilancia",
    titulo: "Asistente de Farmacovigilancia",
    area: "Seguridad del paciente",
    lugar: "Ciudad de Buenos Aires",
    modalidad: "Híbrida",
    descripcion: "Recibís los reportes de efectos adversos, completás la ficha de cada caso y coordinás el seguimiento.",
    requisitos: ["Formación en ciencias de la salud", "Trato cuidadoso con las personas", "Manejo de bases de datos"],
  },
  {
    slug: "operador-de-deposito",
    titulo: "Operador/a de depósito",
    area: "Logística",
    lugar: "Rosario, Santa Fe",
    modalidad: "Presencial",
    descripcion: "Recibís, ubicás y despachás mercadería respetando las condiciones de almacenamiento de cada producto.",
    requisitos: ["Secundario completo", "Carnet de autoelevador (deseable)", "Trabajo en equipo"],
  },
];
