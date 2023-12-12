import { random } from "./random.js"

const DEPARTMENT_NAMES = [
  'Recursos Humanos',
  'Finanzas',
  'Marketing',
  'Ventas',
  'Producción',
  'Desarrollo de Producto',
  'Investigación y Desarrollo',
  'Servicio al Cliente',
  'Logística',
  'Calidad',
  'Tecnología de la Información',
  'Comunicaciones',
  'Legal',
  'Administración',
  'Compras',
  'Relaciones Públicas',
  'Seguridad',
  'Contabilidad',
  'Publicidad',
  'Operaciones',
  'Planificación Estratégica',
  'Innovación',
  'Ingeniería',
  'Gestión de Proyectos',
  'Desarrollo de Negocios',
  'Sostenibilidad',
  'Asuntos Regulatorios',
  'Servicios Corporativos',
  'Recuperación de Deudas',
  'Contratación',
  'Control de Calidad',
  'Soporte Técnico',
  'Desarrollo Organizacional',
  'Comunicaciones Internas',
  'Desarrollo de Talento',
  'Investigación de Mercado',
  'Adquisiciones',
  'Estrategia Digital',
  'Análisis de Datos',
  'Planificación Financiera',
  'Gestión de Riesgos',
  'Desarrollo Sostenible',
  'Servicios de Consultoría',
  'Asesoría Legal',
  'Control Interno',
  'Tesorería',
  'Gestión Ambiental',
  'Asuntos Públicos',
  'Desarrollo Comunitario',
  'Innovación Tecnológica',
  'Gestión de Activos',
  'Servicios Empresariales',
  'Investigación de Operaciones',
  'Planificación de la Producción',
  'Control de Inventarios',
  'Desarrollo Web',
  'Auditoría',
  'Gestión de la Cadena de Suministro',
  'Planificación de Recursos Empresariales (ERP)',
  'Diseño Gráfico',
  'Desarrollo de Software',
  'Relaciones Laborales',
  'Planificación de Eventos',
  'Desarrollo de Mercado',
  'Compensación y Beneficios',
  'Planificación de la Demanda',
  'Desarrollo de Franquicias',
  'Marketing Digital',
  'Control de Costos',
  'Servicios Financieros',
  'Relaciones con Inversionistas',
  'Desarrollo de Marca',
  'Servicios de Impuestos',
  'Gestión de Proveedores',
  'Evaluación de Riesgos',
  'Innovación de Producto',
  'Desarrollo de Negocios Internacionales',
  'Programación',
  'Diseño Industrial',
  'Desarrollo de Aplicaciones',
  'Control de Producción',
  'Gestión de Inventarios',
  'Desarrollo de Contenidos',
  'Gestión de Clientes',
  'Desarrollo de Negocios Sostenibles',
  'Análisis Financiero',
  'Investigación de la Competencia',
  'Relaciones Internacionales',
  'Desarrollo de Estrategias',
  'Planificación de Marketing',
  'Desarrollo de Alianzas',
  'Gestión de Crisis',
  'Desarrollo de Mercado',
  'Comunicaciones de Marca',
  'Estrategia de Producto',
  'Desarrollo de Negocios Digitales',
  'Diseño de Experiencia del Usuario (UX)',
  'Control de Calidad del Producto',
  'Desarrollo de Políticas',
  'Marketing de Contenidos',
  'Planificación de Producción',
  'Desarrollo de Clientes',
  'Diseño de Interfaz de Usuario (UI)',
  'Investigación de Políticas',
  'Desarrollo de Estrategias de Ventas',
  'Planificación de la Cadena de Suministro',
  'Diseño de Producto',
  'Desarrollo de Negocios Ecológicos',
  'Análisis de Datos Financieros',
  'Desarrollo de Estrategias de Negocios',
  'Gestión de Recursos Naturales',
  'Diseño de Servicios',
  'Desarrollo de Software Empresarial',
  'Gestión de Programas',
  'Diseño de Comunicación',
  'Desarrollo de Estrategias de Comunicación',
  'Análisis de Rendimiento',
  'Desarrollo de Estrategias de Recursos Humanos',
  'Investigación de Tecnologías Emergentes',
  'Gestión de la Innovación',
  'Planificación de la Capacidad de Producción',
  'Desarrollo de Estrategias de Marca',
  'Investigación de Usuarios',
  'Gestión de Proyectos de TI',
  'Desarrollo de Estrategias de Desempeño',
  'Planificación de la Demanda de Personal',
  'Diseño de Servicios Web',
  'Desarrollo de Estrategias de Marketing Digital',
  'Análisis de Rendimiento Organizacional',
  'Desarrollo de Estrategias de Desarrollo de Producto',
  'Investigación de Tendencias de Mercado',
  'Gestión de Datos Empresariales',
  'Diseño de Sistemas',
  'Desarrollo de Estrategias de Desarrollo de Negocios',
  'Planificación de la Cadena de Suministro Global',
  'Desarrollo de Estrategias de Desarrollo Sostenible',
  'Investigación de Opiniones Públicas',
  'Diseño de Experiencia del Cliente (CX)',
  'Desarrollo de Estrategias de Desarrollo de Franquicias',
  'Gestión de la Información Financiera',
  'Desarrollo de Estrategias de Marketing de Contenidos',
  'Planificación de la Demanda de Productos',
  'Investigación de la Competencia de Producto',
  'Diseño de Interfaz de Usuario Móvil (UI)',
  'Desarrollo de Estrategias de Desarrollo de Clientes',
  'Gestión de Datos de Clientes',
  'Investigación de Estrategias de Producto',
  'Planificación de la Capacidad de Producción de Software',
  'Desarrollo de Estrategias de Desarrollo de Negocios Internacionales',
  'Diseño de Estrategias de Ventas',
  'Investigación de Tecnologías de la Información',
  'Desarrollo de Estrategias de Desarrollo de Negocios Digitales',
  'Gestión de Datos de Producto',
  'Diseño de Estrategias de Marca',
  'Planificación de la Cadena de Suministro de Tecnologías de la Información',
  'Desarrollo de Estrategias de Desarrollo de Estrategias de Comunicación',
  'Investigación de Tecnologías de Desarrollo Sostenible',
  'Análisis de Rendimiento de Producto',
  'Gestión de Datos de Ventas',
  'Diseño de Estrategias de Desarrollo de Producto',
  'Desarrollo de Estrategias de Desarrollo de Estrategias de Recursos Humanos',
  'Planificación de la Demanda de Servicios',
  'Investigación de Tecnologías de Desarrollo de Franquicias',
  'Diseño de Estrategias de Marketing Digital',
]

function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

function fisherYatesshuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function* createDepartmentIterator() {
  const departmentList = fisherYatesshuffle(DEPARTMENT_NAMES)
  for(const department of departmentList) yield { id: generateRandomID(), name: department}

}

function randomDepartment() {
  return {
    id: generateRandomID(),
    name: DEPARTMENT_NAMES[Math.floor(Math.random() * DEPARTMENT_NAMES.length)]
  }
}

export {
  generateRandomID,
  randomDepartment,
  createDepartmentIterator
}
