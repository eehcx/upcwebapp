/**
 * Contenido de /conocenos.
 * Fuente: "PÁGINA WEB/SECCIÓN CONÓCENOS" (historia, mensaje del rector, visión y misión,
 * valores, directorio y contacto), entregado en octubre de 2026.
 */

export const FOUNDED = new Date("2008-05-28T00:00:00-06:00");

/** Años cumplidos desde la fundación, calculados al construir la página. */
export const yearsSinceFounding = (now = new Date()) => {
	let years = now.getFullYear() - FOUNDED.getFullYear();
	const beforeAnniversary =
		now.getMonth() < FOUNDED.getMonth() ||
		(now.getMonth() === FOUNDED.getMonth() && now.getDate() < FOUNDED.getDate());
	if (beforeAnniversary) years--;
	return years;
};

export const CHAPTERS = [
	{ id: "mensaje", number: "01", label: "Mensaje del rector" },
	{ id: "historia", number: "02", label: "Historia" },
	{ id: "mision-vision", number: "03", label: "Misión y visión" },
	{ id: "valores", number: "04", label: "Valores" },
	{ id: "directorio", number: "05", label: "Directorio" },
	{ id: "contacto", number: "06", label: "Contacto" },
] as const;

export const RECTOR = {
	name: "Mtro. José Luis Cortés Peñaloza",
	role: "Rector",
	greeting: "Estimada y querida comunidad de la UPC:",
	paragraphs: [
		"Hoy, con gran orgullo y emoción, les reitero que nuestra Universidad es mucho más que un conjunto de aulas; somos un faro de conocimiento y un motor de cambio.",
		"Nuestra Visión nos guía: queremos ser ese referente de excelencia donde la investigación y la academia florecen. Soñamos y trabajamos para ser una incubadora de negocios que no solo enseña, sino que impulsa la creatividad, la inclusión y el pensamiento crítico en cada uno de ustedes. Valoramos profundamente a nuestro capital humano, pues sabemos que la profesionalización continua es la clave para la formación integral de egresados que el mundo necesita.",
		"Nuestra Misión es nuestro compromiso con el futuro: estamos aquí para formar a ciudadanos del mundo, agentes de transformación que actúen con un profundo sentido humanista y contribuyan al desarrollo sustentable del planeta. Esto lo logramos a través de programas educativos tecnológicos, pertinentes e innovadores, impartidos con calidad y calidez humana.",
	],
	pullQuote:
		"Cada día en la UPC es una promesa de crecimiento. En cada pasillo, en cada laboratorio, se está forjando la próxima generación de líderes y profesionales.",
	closing: [
		"Su éxito es nuestro motor. Sigamos adelante, con el corazón lleno de esperanza y la mente abierta al conocimiento, construyendo juntos este gran legado.",
	],
	signOff: "Con el mayor de mis afectos,",
};

export interface Milestone {
	year: string;
	date: string;
	title: string;
	text: string;
}

export const MILESTONES: Milestone[] = [
	{
		year: "2008",
		date: "28 de mayo",
		title: "Nace la UPC",
		text: "Se funda la Universidad Politécnica del Centro como institución pública de educación superior e investigación, con un enfoque en ingeniería: Biotecnología, Mecatrónica, Electrónica y Telecomunicaciones, Mecánica Automotriz, Software y Animación y Efectos Visuales.",
	},
	{
		year: "2008",
		date: "28 de septiembre",
		title: "Primer día de clases",
		text: "Las actividades académicas comienzan en las instalaciones de la Universidad Pedagógica Nacional, en la colonia Casa Blanca, con tres ingenierías: Biotecnología, Mecatrónica y Electrónica y Telecomunicaciones.",
	},
	{
		year: "2010",
		date: "Casa propia",
		title: "Llegamos a Villa El Cielo",
		text: "La universidad se traslada a sus propias instalaciones, en el kilómetro 22.5 de la carretera Villahermosa–Teapa, dentro del fraccionamiento Villa El Cielo.",
	},
	{
		year: "2012",
		date: "Primera generación",
		title: "Egresan los primeros Papillones",
		text: "Egresa la primera generación de las ingenierías en Biotecnología, Mecatrónica y Electrónica y Telecomunicaciones.",
	},
	{
		year: "Hoy",
		date: "Nuevo Modelo Educativo",
		title: "Siete ingenierías",
		text: "Mecatrónica, Biotecnología, TI e Innovación Digital, Animación y Efectos Visuales, Sistemas Electrónicos, Mecánica Automotriz y Geofísica Petrolera, con planes de estudio del Nuevo Modelo Educativo.",
	},
];

export const VISION =
	"Somos una Institución consolidada, referente de excelencia académica y de investigación con programas educativos transversales, incubadora de negocios y certificadora, que fomenta la inclusión, la creatividad, el pensamiento crítico y el desarrollo tecnológico; valorando la profesionalización continua del factor humano que contribuye a la formación integral de los egresados que se incorporan al mercado laboral, local, nacional e internacional.";

export const MISSION =
	"Formar a ciudadanos del mundo que contribuyan al desarrollo sustentable del planeta, mediante servicios educativos tecnológicos de nivel superior con calidad y calidez, programas educativos pertinentes, innovadores e integrales con sentido humanista; personal académico y administrativo altamente calificados y comprometidos, con instalaciones funcionales, modernas, inclusivas y confortables.";

export const VALUES_INTRO =
	"Sabemos que el 10 representa la excelencia, pero en la casa de los Papillones Rojos se trabaja para dar siempre mucho más. Los once picos de la cola de Papillón simbolizan los valores y creencias de la UPC; son el reflejo de lo extraordinaria que es la comunidad universitaria, y el compromiso que se tiene de aportar a la sociedad ciudadanos profesionales e íntegros.";

export const VALUES = [
	{ name: "Lealtad", text: "Es una convicción, donde los Papillones Rojos se sienten comprometidos y honrados por pertenecer a la UPC." },
	{ name: "Equidad", text: "Promover una comunidad donde cada integrante, sin importar el género o clase social, reciba un trato justo con el fin de crear un equilibrio entre los Papillones Rojos." },
	{ name: "Responsabilidad", text: "Virtud humana de poseer la noción y capacidad de cumplir obligaciones, así como tener en cuenta las consecuencias de los actos que se presenten en el quehacer universitario." },
	{ name: "Respeto", text: "Valor indispensable que reconoce y considera el derecho ajeno, fundamental para un ambiente armonioso y estable entre los Papillones Rojos." },
	{ name: "Honestidad", text: "Tener respeto hacia la verdad, normas y reglas que regulan la convivencia de la sociedad con la finalidad de poder coexistir en un ambiente UPCino saludable." },
	{ name: "Libertad", text: "Ningún Papillón está sujeto, condicionado o impuesto a cumplir por la fuerza acciones que violenten su integridad humana." },
	{ name: "Compromiso", text: "Ser una comunidad que tenga la capacidad de cumplir responsablemente con una causa o actividad ya acordada." },
	{ name: "Creatividad", text: "Demostrar el sentido original, innovador e imaginativo en toda labor que se realiza dentro de la UPC." },
	{ name: "Solidaridad", text: "Condición humana indispensable de la cual la comunidad universitaria tiene la facultad moral de actuar ante el prójimo que se encuentre en apuros." },
	{ name: "Tolerancia", text: "Reconocer diferencias y respetar ideologías, opiniones, prácticas y creencias de todos los que conforman nuestra Casa de Estudios." },
	{ name: "Empatía", text: "Poseer la capacidad de sensibilidad al comprender los puntos de vista y emociones para mantener una grata relación personal en el ambiente universitario." },
];

export interface DirectoryEntry {
	role: string;
	name: string;
	ext?: string;
	email: string;
}

export interface DirectoryArea {
	id: string;
	label: string;
	entries: DirectoryEntry[];
}

export const SWITCHBOARD = { label: "(993) 312 58 93", tel: "+529933125893" };

export const DIRECTORY: DirectoryArea[] = [
	{
		id: "rectoria",
		label: "Rectoría",
		entries: [
			{ role: "Rector", name: "Mtro. José Luis Cortés Peñaloza", ext: "201", email: "rectoria@updc.edu.mx" },
			{ role: "Secretaría Técnica", name: "Lic. Deyanira González Landero", ext: "205", email: "secretario.tecnico@updc.edu.mx" },
			{ role: "Abogado General", name: "Mtro. Marvin Magaña Chan", email: "abogado.general@updc.edu.mx" },
			{ role: "Difusión", name: "Lic. Dulce Chávez Mora", ext: "223", email: "difusion@updc.edu.mx" },
			// En el documento aparece como "Subdirección.planeacion@": se normaliza sin mayúscula ni acento
			{ role: "Subdirección de Planeación", name: "C.P. Felipe Aguilar Balcázar", email: "subdireccion.planeacion@updc.edu.mx" },
		],
	},
	{
		id: "academica",
		label: "Académica",
		entries: [
			{ role: "Secretaría Académica", name: "Mtro. Martín Ernesto Bouchot Mollinedo", ext: "301", email: "secretaria.academica@updc.edu.mx" },
			{ role: "Coordinación de Docencia", name: "Mtra. Norma Aguilar Ovando", ext: "215", email: "docencia@updc.edu.mx" },
			{ role: "Control Escolar", name: "Mtra. Ana Lidia Valencia Ramón", ext: "220", email: "depto.controlescolar@updc.edu.mx" },
			{ role: "Formación Integral", name: "Lic. Cristel Hernández Gordillo", ext: "304", email: "formacionintegral@updc.edu.mx" },
		],
	},
	{
		id: "vinculacion",
		label: "Vinculación",
		entries: [
			{ role: "Vinculación", name: "Dra. Ana Martha Gavilla Pérez", email: "vinculacion@updc.edu.mx" },
			{ role: "Seguimiento a Egresados", name: "Lic. Rolando Humberto Solís Pérez", email: "egresados@updc.edu.mx" },
		],
	},
	{
		id: "administracion",
		label: "Administración",
		entries: [
			{ role: "Secretaría Administrativa", name: "Mtro. Juan Rogelio González Noverola", ext: "206", email: "secretaria.administrativa@updc.edu.mx" },
			{ role: "Recursos Humanos", name: "Lic. Virginia Hernández Basurto", ext: "217", email: "rh@updc.edu.mx" },
			{ role: "Recursos Materiales", name: "Lic. José Luis Guzmán Licona", ext: "208", email: "rm@updc.edu.mx" },
			{ role: "Contabilidad", name: "Lic. Sebastián Carrillo Félix", ext: "221", email: "contabilidad@updc.edu.mx" },
			{ role: "Control Presupuestal", name: "Lic. Yamileth Ramos", ext: "219", email: "presupuesto@updc.edu.mx" },
			{ role: "Servicios Generales", name: "Carlos Armando Villalobos Cordero", email: "serviciosgenerales@updc.edu.mx" },
			{ role: "Sistemas", name: "Ing. Jesús Francisco Molina González", ext: "209", email: "sistemas@updc.edu.mx" },
			{ role: "Soporte técnico", name: "Lic. Juan Roberto Cárdenas Hernández", ext: "288", email: "soporte1@updc.edu.mx" },
		],
	},
];

export const CONTACT = {
	email: "informes@updc.edu.mx",
	address: "Carretera Villahermosa–Teapa km 22.5, R/a Tumbulushal, Fraccionamiento Villa El Cielo, Tabasco",
	schedule: "Lunes a viernes, 08:00 a 16:00 h",
	mapEmbed:
		"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d474.82669374314435!2d-92.92437573741519!3d17.809850429764452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edc500716a85a1%3A0x56bdd5ef939d1166!2sUniversidad%20Polit%C3%A9cnica%20del%20Centro!5e0!3m2!1ses!2smx!4v1738609550638!5m2!1ses!2smx",
	mapLink: "https://www.google.com/maps/search/?api=1&query=Universidad+Polit%C3%A9cnica+del+Centro+Tabasco",
};
