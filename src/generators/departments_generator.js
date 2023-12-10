import { random } from "./random.js"

const DEPARTMENT_NAMES = [
  'Recursos Humanos',
  'Finanzas',
  'Desarrollo de Producto',
  'Ventas',
  'Tecnología de la Información',
  'Comunicaciones',
  'Operaciones',
  'Investigación y Desarrollo',
  'Servicio al Cliente',
  'Calidad',
  'Logística',
  'Legal',
  'Desarrollo Empresarial',
  'Marketing',
  'Compras',
  'Recursos Ambientales',
  'Desarrollo Sostenible',
  'Innovación',
  'Relaciones Públicas',
  'Recursos Educativos',
  'Seguridad',
  'Asuntos Regulatorios',
  'Control de Calidad',
  'Planificación Estratégica',
  'Compliance',
  'Servicios Corporativos',
  'Desarrollo de Negocios',
  'Investigación de Mercado',
  'Relaciones Laborales',
  'Desarrollo de Talento',
  'Ingeniería',
  'Desarrollo de Software',
  'Publicidad',
  'Producción',
  'Planificación Financiera',
  'Estrategia de Producto',
  'Asesoría Legal',
  'Desarrollo de Marca',
  'Asuntos Públicos',
  'Recursos Culturales',
  'Servicios de Consultoría',
  'Desarrollo de Proyectos',
  'Innovación Tecnológica',
  'Control de Procesos',
  'Planificación de Eventos',
  'Relaciones Internacionales',
  'Gestión de Proyectos',
  'Comunicación Interna',
  'Desarrollo Web',
  'Desarrollo de Producto',
  'Análisis de Datos',
  'Sostenibilidad',
  'Operaciones Globales',
  'Ingeniería de Sistemas',
  'Desarrollo de Mercado',
  'Innovación de Producto',
  'Asuntos Corporativos',
  'Gestión de Riesgos',
  'Educación Continua',
  'Desarrollo de Contenidos',
  'Planificación de Recursos',
  'Asesoría Financiera',
  'Desarrollo de Aplicaciones',
  'Investigación Científica',
  'Servicio al Cliente Global',
  'Relaciones Comunitarias',
  'Desarrollo de Estrategias',
  'Gestión de Datos',
  'Asuntos Ambientales',
  'Desarrollo Organizacional',
  'Ingeniería de Calidad',
  'Planificación de Proyectos',
  'Investigación Social',
  'Desarrollo de Recursos',
  'Asesoría Tecnológica',
  'Comunicación Estratégica',
  'Desarrollo de Habilidades',
  'Servicios de Salud',
  'Desarrollo de Alianzas',
  'Análisis Financiero',
  'Desarrollo de Políticas',
  'Innovación Social',
  'Desarrollo de Negocios Internacionales',
  'Planificación de Marketing',
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

function* departmentIterator() {
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
  randomDepartment,
  departmentIterator
}
