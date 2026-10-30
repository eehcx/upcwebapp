import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, ClipboardList, FileText, GraduationCap } from "lucide-react";

export interface FaqLink {
	label: string;
	href: string;
}

export interface FaqItem {
	id: string;
	question: string;
	/** Párrafos de la respuesta */
	answer: string[];
	list?: string[];
	links?: FaqLink[];
}

export interface FaqCategory {
	id: string;
	label: string;
	icon: LucideIcon;
	items: FaqItem[];
}

export const FAQ_CONTACT = {
	email: "informes@updc.edu.mx",
	phone: "9933125893",
	phoneLabel: "(993) 312 58 93",
	schedule: "Lunes a viernes de 08:00 a 16:00 horas",
};

/**
 * Fuente: "PÁGINA WEB/HERRAMIENTAS DE COMUNICACIÓN DIGITALES/Preguntas Frecuentes.docx" (oct 2026).
 * Se omitieron "correo institucional" y "Wi-Fi del campus": vienen sin respuesta en el documento.
 */
export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		id: "la-upc",
		label: "La UPC",
		icon: Building2,
		items: [
			{
				id: "mision-vision",
				question: "¿Cuál es la misión y visión de la UPC?",
				answer: [
					"La UPC busca formar profesionales competentes en tecnología e ingeniería, impulsando el desarrollo regional y la innovación. Puedes consultar nuestra misión y visión completas, así como nuestros valores institucionales.",
				],
				links: [{ label: "Misión, visión y valores", href: "/conocenos#mision-vision" }],
			},
			{
				id: "ubicacion",
				question: "¿Dónde se encuentra ubicada la Universidad Politécnica del Centro?",
				answer: [
					"En la carretera Villahermosa–Teapa km 22.5, R/a Tumbulushal, Fraccionamiento Villa El Cielo, Tabasco.",
				],
				links: [
					{
						label: "Ver en Google Maps",
						href: "https://www.google.com/maps/search/?api=1&query=Universidad+Polit%C3%A9cnica+del+Centro+Tabasco",
					},
				],
			},
			{
				id: "horarios",
				question: "¿Cuáles son los horarios de atención de las oficinas administrativas?",
				answer: ["Las oficinas administrativas atienden de lunes a viernes de 08:00 a 16:00 horas."],
			},
			{
				id: "contacto-areas",
				question:
					"¿Cómo puedo contactar a un departamento o área específica (por ejemplo, Servicios Escolares o Finanzas)?",
				answer: [
					"Puedes encontrar el directorio oficial con teléfonos y correos electrónicos de todas las áreas en el sitio web.",
				],
				links: [{ label: "Ver el directorio", href: "/conocenos#directorio" }],
			},
			{
				id: "directorio",
				question: "¿Cómo accedo al directorio telefónico de la UPC?",
				answer: [
					"Nuestro directorio telefónico y de correos está disponible en línea; busca por nombre, área o cargo. También puedes llamarnos al conmutador: (993) 312 58 93.",
				],
				links: [
					{ label: "Ver el directorio", href: "/conocenos#directorio" },
					{ label: "Llamar al conmutador", href: "tel:+529933125893" },
				],
			},
		],
	},
	{
		id: "oferta-educativa",
		label: "Oferta educativa",
		icon: GraduationCap,
		items: [
			{
				id: "carreras",
				question: "¿Qué carreras ofrece la UPC?",
				answer: ["Ofrecemos siete ingenierías:"],
				list: [
					"Mecatrónica",
					"Mecánica Automotriz",
					"Biotecnología",
					"Animación y Efectos Visuales",
					"Tecnologías de la Información e Innovación Digital",
					"Geofísica Petrolera",
					"Sistemas Electrónicos",
				],
				links: [{ label: "Conocer las carreras", href: "/carreras" }],
			},
			{
				id: "perfiles",
				question: "¿Dónde puedo consultar el perfil de ingreso y egreso de las carreras?",
				answer: ["En la página de cada carrera, dentro del menú Oferta Educativa."],
				links: [{ label: "Oferta educativa", href: "/carreras" }],
			},
			{
				id: "movilidad",
				question: "¿La UPC tiene programas de intercambio académico o movilidad estudiantil?",
				answer: [
					"¡Sí! Fomentamos la movilidad nacional e internacional. Para más información acude al Departamento de Estadía y Seguimiento de Egresados.",
				],
			},
			{
				id: "educacion-continua",
				question: "¿Cuáles son las opciones de especialización o diplomados disponibles?",
				answer: ["La oferta de educación continua se actualiza constantemente."],
			},
		],
	},
	{
		id: "admision",
		label: "Admisión",
		icon: ClipboardList,
		items: [
			{
				id: "requisitos",
				question: "¿Cuáles son los requisitos para ingresar a la UPC?",
				answer: [
					"Haber concluido la preparatoria y no tener ningún adeudo. Además, debes reunir los siguientes documentos:",
				],
				list: [
					"Comprobante de pago",
					"Acta de nacimiento",
					"Certificado de bachillerato, o constancia de estar cursando el 6.º semestre",
					"CURP",
					"Comprobante de domicilio",
					"Carta compromiso",
					"Número de Seguridad Social (IMSS)",
				],
				links: [{ label: "Proceso de admisión", href: "/admision" }],
			},
			{
				id: "convocatoria",
				question: "¿Cuándo es la próxima convocatoria de nuevo ingreso?",
				answer: ["La convocatoria de admisión se publica entre febrero y marzo de cada año."],
				links: [{ label: "Admisión", href: "/admision" }],
			},
			{
				id: "ficha",
				question: "¿Cómo puedo solicitar mi ficha para el examen de admisión?",
				answer: [
					"Realiza tu registro en línea durante el periodo que establece la convocatoria de admisión.",
				],
			},
			{
				id: "costos",
				question: "¿Cuál es el costo del examen de admisión y la colegiatura?",
				answer: [
					"El costo varía en cada proceso. Los montos se establecen en la convocatoria de cada año.",
				],
			},
		],
	},
	{
		id: "tramites",
		label: "Trámites y campus",
		icon: FileText,
		items: [
			{
				id: "constancias",
				question: "¿Cómo puedo tramitar una constancia de estudios o mi historial académico?",
				answer: ["Realiza el pago en caja y presenta el recibo en Control Escolar."],
			},
			{
				id: "reinscripciones",
				question: "¿Cuándo es el periodo de reinscripciones para el próximo cuatrimestre?",
				answer: ["Las fechas están marcadas en el calendario escolar de la UPC."],
				links: [{ label: "Calendario escolar", href: "/calendario" }],
			},
			{
				id: "bajas-cambio",
				question: "¿Cuál es el proceso para dar de baja una materia o cambiar de carrera?",
				answer: [
					"Las fechas para la baja de materias están marcadas en el calendario escolar de la UPC.",
					"Para cambiar de carrera debes cumplir el proceso de admisión y seguir los pasos de la convocatoria correspondiente: se inicia como alumno de nuevo ingreso.",
				],
				links: [{ label: "Calendario escolar", href: "/calendario" }],
			},
			{
				id: "credencial",
				question: "¿Dónde puedo solicitar mi credencial de estudiante o reportar su extravío?",
				answer: ["Directamente en la ventanilla de caja de la UPC."],
			},
			{
				id: "transporte",
				question: "¿Hay servicio de transporte para llegar al campus?",
				answer: [
					"El transporte público tiene varias rutas que llegan a las puertas de la Universidad Politécnica del Centro.",
				],
			},
		],
	},
	{
		id: "estadias",
		label: "Estadías y empleo",
		icon: Briefcase,
		items: [
			{
				id: "cuatrimestre-estadia",
				question: "¿En qué cuatrimestre debo realizar mis prácticas o estadías profesionales?",
				answer: [
					"La Estadía es un periodo de 600 horas, distribuidas en 15 semanas, que se realiza durante el sexto y el décimo cuatrimestre, conforme al plan de estudios. La Estadía profesional es requisito para la titulación.",
				],
			},
			{
				id: "encontrar-empresa",
				question: "¿Cómo puedo encontrar una empresa para realizar mis prácticas?",
				answer: ["Consulta el Catálogo de Empresas en el menú de Vinculación."],
				links: [{ label: "Vinculación", href: "/vinculacion" }],
			},
			{
				id: "requisitos-estadia",
				question: "¿Qué requisitos son necesarios para iniciar el proceso de Estadía?",
				answer: ["Debes cumplir con lo siguiente:"],
				list: [
					"Ser alumno regular",
					"No tener asignaturas pendientes de cuatrimestres anteriores",
					"Estar inscrito en el cuatrimestre de la estadía (6.º o 10.º) para los trámites en el SIUPC y en Moodle",
					"Tener vigente tu afiliación al IMSS con el carnet actual",
					"Asistir a la junta informativa donde se explica la continuación del proceso de estadía",
				],
			},
			{
				id: "bolsa-trabajo",
				question: "¿La UPC tiene una bolsa de trabajo para egresados?",
				answer: [
					"Sí. La Bolsa de Trabajo Universitaria es un punto de encuentro entre quienes buscan oportunidades laborales y quienes requieren talento. Así apoyamos a nuestros alumnos y egresados a insertarse con éxito en el mercado laboral.",
				],
			},
		],
	},
];
