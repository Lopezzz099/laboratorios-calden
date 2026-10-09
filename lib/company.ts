import type { AreaSlug } from "./areas";

// Todo el contenido de este archivo es de ejemplo: la compañía, las personas y las cifras son ficticias.

export type Hito = { anio: number; titulo: string; texto: string };

export const hitos: Hito[] = [
  {
    anio: 1974,
    titulo: "Nace Caldén",
    texto: "Un grupo de cuatro farmacéuticos abre un pequeño laboratorio de preparados en Buenos Aires.",
  },
  {
    anio: 1989,
    titulo: "Primera planta propia",
    texto: "La producción se muda a un edificio construido para ese fin, con control de calidad en el mismo lugar.",
  },
  {
    anio: 2003,
    titulo: "Área de investigación",
    texto: "Se crea el equipo científico y los primeros convenios con universidades públicas.",
  },
  {
    anio: 2014,
    titulo: "Distribución federal",
    texto: "Se abren los primeros centros de distribución fuera del área metropolitana.",
  },
  {
    anio: 2020,
    titulo: "Unidad de farmacovigilancia",
    texto: "Se arma un equipo dedicado a recibir y analizar reportes de efectos adversos.",
  },
  {
    anio: 2025,
    titulo: "Metas ambientales públicas",
    texto: "La compañía publica sus metas de agua, energía y residuos, y se compromete a informar el avance.",
  },
];

export type Persona = { nombre: string; cargo: string; texto: string };

export const liderazgo: Persona[] = [
  {
    nombre: "Marcela Ibarra",
    cargo: "Directora general",
    texto: "Farmacéutica. Dirige la compañía desde 2018 y empezó en el área de producción.",
  },
  {
    nombre: "Tomás Brunetti",
    cargo: "Director científico",
    texto: "Doctor en Química. Coordina las líneas de investigación y las alianzas con universidades.",
  },
  {
    nombre: "Lucía Quiroga",
    cargo: "Directora de Calidad",
    texto: "Bioquímica. Responde por el control de cada lote, desde la materia prima hasta la entrega.",
  },
  {
    nombre: "Gustavo Heredia",
    cargo: "Director de Finanzas",
    texto: "Contador. Lleva las cuentas de la compañía y la relación con inversores.",
  },
];

export const gobierno: { titulo: string; texto: string }[] = [
  {
    titulo: "Directorio",
    texto: "Siete integrantes, dos de ellos independientes. Se reúne todos los meses y publica un resumen de lo resuelto.",
  },
  {
    titulo: "Comité de auditoría",
    texto: "Revisa los estados contables y los controles internos junto con auditores externos.",
  },
  {
    titulo: "Código de ética",
    texto: "Rige para todas las personas de la compañía y para sus proveedores. Hay un canal confidencial para consultas y denuncias.",
  },
  {
    titulo: "Comité de seguridad del paciente",
    texto: "Analiza los reportes de farmacovigilancia y decide qué acciones tomar.",
  },
];

export type Cifra = { valor: string; etiqueta: string };

export const cifras: Cifra[] = [
  { valor: "52", etiqueta: "años de trayectoria" },
  { valor: "1.140", etiqueta: "personas trabajan en la compañía" },
  { valor: "3", etiqueta: "centros de distribución en el país" },
  { valor: "24", etiqueta: "programas en investigación" },
];

export type LineaInvestigacion = { titulo: string; texto: string; area: AreaSlug };

export const lineasInvestigacion: LineaInvestigacion[] = [
  {
    titulo: "Formas farmacéuticas más fáciles de usar",
    texto: "Estudiamos presentaciones que ayuden a tomar o aplicar un medicamento sin errores: sabores, envases y formas de dosificar.",
    area: "digestiva",
  },
  {
    titulo: "Estabilidad y conservación",
    texto: "Medimos cómo cambia un producto con el tiempo, el calor y la luz, para definir el envase y la fecha de vencimiento.",
    area: "dermatologia",
  },
  {
    titulo: "Salud cardiometabólica",
    texto: "Un equipo trabaja en nuevas combinaciones para profesionales de la salud, en etapas tempranas de estudio.",
    area: "cardiometabolica",
  },
  {
    titulo: "Neurología",
    texto: "Una línea de estudios preclínicos con universidades, en etapa de descubrimiento.",
    area: "neurologia",
  },
];

export const etapasPipeline = ["Descubrimiento", "Preclínica", "Fase I", "Fase II", "Fase III", "Presentación"] as const;

export type Programa = {
  codigo: string;
  area: AreaSlug;
  etapa: (typeof etapasPipeline)[number];
};

// Códigos internos inventados. No hay moléculas ni indicaciones.
export const pipeline: Programa[] = [
  { codigo: "CAL-101", area: "cardiometabolica", etapa: "Fase II" },
  { codigo: "CAL-114", area: "cardiometabolica", etapa: "Preclínica" },
  { codigo: "CAL-207", area: "neurologia", etapa: "Descubrimiento" },
  { codigo: "CAL-215", area: "neurologia", etapa: "Fase I" },
  { codigo: "CAL-308", area: "dermatologia", etapa: "Fase III" },
  { codigo: "CAL-322", area: "respiratoria", etapa: "Presentación" },
];

export type Alianza = { nombre: string; ciudad: string; texto: string };

export const alianzas: Alianza[] = [
  {
    nombre: "Universidad Nacional del Río Salado",
    ciudad: "Santa Fe",
    texto: "Cinco becas de investigación aplicada y un laboratorio compartido.",
  },
  {
    nombre: "Instituto Tecnológico Pampeano",
    ciudad: "La Pampa",
    texto: "Estudios de estabilidad y de materiales de envase.",
  },
  {
    nombre: "Universidad de la Cuenca Austral",
    ciudad: "Buenos Aires",
    texto: "Pasantías para estudiantes de Farmacia y Bioquímica.",
  },
];

export type PasoCalidad = { titulo: string; texto: string };

export const pasosCalidad: PasoCalidad[] = [
  {
    titulo: "Revisamos lo que llega",
    texto: "Cada materia prima se identifica y se analiza antes de entrar a producción. Si algo no coincide con lo esperado, vuelve al proveedor.",
  },
  {
    titulo: "Fabricamos con procedimientos escritos",
    texto: "Cada lote se hace siguiendo instrucciones detalladas. Quien opera la línea firma cada paso.",
  },
  {
    titulo: "Controlamos durante la producción",
    texto: "Se toman muestras en distintos momentos para confirmar que el producto mantiene sus características.",
  },
  {
    titulo: "Liberamos el lote",
    texto: "Una persona del área de Calidad, independiente de producción, revisa todos los registros y decide si el lote sale.",
  },
  {
    titulo: "Seguimos cada envase",
    texto: "Cada lote tiene un código. Con ese código sabemos qué materias primas se usaron, quién lo fabricó y a dónde se envió.",
  },
  {
    titulo: "Escuchamos lo que pasa después",
    texto: "Los reportes de farmacovigilancia vuelven al equipo de Calidad y pueden cambiar un procedimiento.",
  },
];

export type Compromiso = { titulo: string; texto: string; meta: string };

export const compromisosAmbientales: Compromiso[] = [
  {
    titulo: "Menos agua por cada lote",
    texto: "Reutilizamos el agua de enfriamiento y medimos el consumo de cada línea.",
    meta: "Meta de ejemplo: bajar 25 % el consumo por unidad producida hacia 2030.",
  },
  {
    titulo: "Energía renovable en la planta",
    texto: "Sumamos paneles solares sobre los techos de la planta y de los depósitos.",
    meta: "Meta de ejemplo: cubrir la mitad del consumo de la planta con energía renovable.",
  },
  {
    titulo: "Residuos bien separados",
    texto: "Separamos cartón, plástico, vidrio y residuos que requieren tratamiento especial.",
    meta: "Meta de ejemplo: reciclar tres de cada cuatro kilos de residuo no peligroso.",
  },
];

export const compromisosComunidad: Compromiso[] = [
  {
    titulo: "Becas de posgrado",
    texto: "Financiamos estudios de posgrado en ciencias farmacéuticas y biológicas.",
    meta: "Ejemplo: diez becas por año.",
  },
  {
    titulo: "Donaciones a hospitales públicos",
    texto: "Entregamos productos de bienestar y material educativo a hospitales de cercanía.",
    meta: "Ejemplo: tres campañas por año.",
  },
  {
    titulo: "Charlas en escuelas técnicas",
    texto: "Nuestro equipo cuenta en qué consiste trabajar en un laboratorio y cómo se llega.",
    meta: "Ejemplo: veinte escuelas visitadas por año.",
  },
];

export type Contacto = { publico: string; texto: string; email: string };

export const contactos: Contacto[] = [
  {
    publico: "Pacientes y público general",
    texto: "Consultas sobre productos de venta libre y de bienestar.",
    email: "consultas@laboratorioscalden.example",
  },
  {
    publico: "Profesionales de la salud",
    texto: "Información científica y pedidos de material.",
    email: "profesionales@laboratorioscalden.example",
  },
  {
    publico: "Farmacias y distribuidores",
    texto: "Pedidos, entregas y condiciones comerciales.",
    email: "comercial@laboratorioscalden.example",
  },
  {
    publico: "Inversores",
    texto: "Informes anuales, gobierno corporativo y reuniones.",
    email: "inversores@laboratorioscalden.example",
  },
  {
    publico: "Candidatos a empleo",
    texto: "Postulaciones espontáneas y consultas sobre vacantes.",
    email: "talento@laboratorioscalden.example",
  },
  {
    publico: "Prensa",
    texto: "Entrevistas, imágenes y datos de la compañía.",
    email: "prensa@laboratorioscalden.example",
  },
];

export type Material = { titulo: string; tipo: string; texto: string };

export const materialCientifico: Material[] = [
  { titulo: "Guía de presentación de resultados clínicos", tipo: "Documento de ejemplo", texto: "Cómo se organizan los informes de estudio de la compañía." },
  { titulo: "Monografías del portafolio", tipo: "Documento de ejemplo", texto: "Una ficha técnica por producto, con estructura de muestra." },
  { titulo: "Boletín de farmacovigilancia", tipo: "Boletín de ejemplo", texto: "Resumen trimestral de reportes recibidos y acciones tomadas." },
  { titulo: "Calendario de jornadas científicas", tipo: "Calendario de ejemplo", texto: "Encuentros presenciales y virtuales para profesionales." },
];
