import type { BoletinDTO } from "../entity";

/**
 * Contenido de respaldo para desarrollo o cuando el API no está disponible.
 * Mantener sincronizado con los boletines publicados más relevantes.
 */
export const BOLETIN_FIXTURES: BoletinDTO[] = [
    {
        id: 1,
        title: "¡Expertos en animación en la UPC!",
        slug: "expertos-en-animacion-en-la-upc",
        excerpt: "Del primer boceto a la pantalla: una mirada al proceso creativo detrás de los cortometrajes animados, junto a la comunidad de Animación y Efectos Visuales.",
        content: `Julio César Hernández Méndez y Saúl Israel Landero García imparten la conferencia "El proceso creativo en la realización de cortometrajes animados" a estudiantes de la UPC.

## Ideas que cobran vida

Una historia puede comenzar con un dibujo en una libreta, una pregunta o una experiencia cotidiana. Convertir esa primera idea en un cortometraje requiere imaginación, observación y un proceso que conecta muchas disciplinas.

Julio César Hernández Méndez y Saúl Israel Landero García comparten con estudiantes de la UPC la conferencia "El proceso creativo en la realización de cortometrajes animados". Un espacio para acercarse a las decisiones que dan forma a una historia y descubrir el trabajo que hay detrás de cada escena.

Para los Papillones Rojos de Ingeniería en Animación y Efectos Visuales, este encuentro representa una oportunidad para conectar lo que aprenden en el aula con los retos de una producción: comunicar una emoción, construir un personaje y encontrar una identidad visual propia.

## Del boceto a la pantalla

Antes de animar, hay una historia que contar. La preproducción permite explorar el argumento, conocer a los personajes y definir el ambiente en el que se mueven. Los bocetos y el guion gráfico ayudan a ordenar las ideas y a visualizar cómo se relacionan las escenas.

Después, el movimiento, el ritmo, el color y el sonido trabajan juntos. Cada elección cambia la manera en que el público percibe una secuencia. Una pausa puede crear expectativa; una expresión sencilla puede decir más que un diálogo completo.

El proceso también incluye revisar y volver a intentar. Compartir avances, escuchar otras miradas y hacer ajustes son parte de construir una pieza que comunique con claridad. La creatividad se fortalece cuando existe espacio para experimentar.

## Crear también es colaborar

Un cortometraje reúne distintas formas de mirar. Escritura, diseño de personajes, modelado, animación, iluminación y sonido encuentran un punto de conexión en el trabajo en equipo. Aprender a explicar una idea y recibir retroalimentación es tan valioso como dominar una herramienta.

Acercar experiencias profesionales a la comunidad universitaria abre conversaciones sobre los caminos que pueden seguir los estudiantes. También invita a reconocer que los proyectos pequeños son una oportunidad para practicar, descubrir intereses y comenzar a construir un portafolio.

La invitación es a seguir creando: observar el entorno, reunir referencias y transformar una idea propia en una historia que merezca compartirse. El siguiente personaje, escenario o cortometraje puede comenzar hoy, dentro de nuestra comunidad.`,
        author: {
            idPerson: 1,
            name: "Ana Karen",
            firstLastname: "García",
            secondLastname: "",
            fullName: "Ana Karen García",
            position: "Departamento de Difusión",
            email: "difusion@upc.edu.mx",
            profilePhoto: "",
            bio: ""
        },
        categories: {
            id: 1,
            name: "Animación y Efectos Visuales"
        },
        coverUrl: "https://images.unsplash.com/photo-1744686909443-eb72a54de998?auto=format&fit=crop&w=1800&q=85",
        isActive: true,
        status: "PUBLISHED",
        createdAt: new Date("2020-03-16T12:00:00-06:00"),
        publishedAt: new Date("2020-03-16T12:00:00-06:00")
    },
    {
        id: 2,
        title: "¡El Guardián Papillón está de vuelta!",
        slug: "el-guardian-papillon-esta-de-vuelta",
        excerpt: "Estudiantes de la UPC se sumaron al día de Papillón ¡Vuelve el Guardián!, un homenaje al majestuoso Crocodylus acutus, icono del estado de Tabasco.",
        content: `Este jueves 23 de enero, estudiantes de la UPC se sumaron al día de Papillón ¡Vuelve el Guardián! organizado por la Secretaría de Cultura del Estado.

## Un homenaje a nuestra fauna

El evento rinde homenaje al majestuoso *Crocodylus acutus*, icono del estado de Tabasco y símbolo de la riqueza natural de la región.

## Comunidad que participa

La comunidad universitaria se involucró en las actividades de conservación y difusión, reforzando el compromiso de los Papillones Rojos con el entorno.`,
        author: {
            idPerson: 2,
            name: "Josué Darío",
            firstLastname: "Hernández",
            secondLastname: "",
            fullName: "Josué Darío Hernández",
            position: "Departamento de Difusión",
            email: "difusion@upc.edu.mx",
            profilePhoto: "",
            bio: ""
        },
        categories: {
            id: 2,
            name: "Comunidad Universitaria"
        },
        coverUrl: null,
        isActive: true,
        status: "PUBLISHED",
        createdAt: new Date("2025-01-25T09:00:00-06:00"),
        publishedAt: new Date("2025-01-25T09:00:00-06:00")
    },
    {
        id: 3,
        title: "¡Gran Alianza!",
        slug: "gran-alianza",
        excerpt: "La UPC firmó un convenio de colaboración con el Centro de Interpretación con la Naturaleza YUMKA ANP para que los Papillones Rojos realicen su servicio social.",
        content: `La Universidad Politécnica del Centro firmó un convenio de colaboración con el Centro de Interpretación con la Naturaleza YUMKA ANP.

## Servicio social en un Área Natural Protegida

El acuerdo permitirá que los #PapillonesRojos realicen su servicio social en esta Área Natural Protegida de Tabasco.

La firma de convenio estuvo a cargo del rector de la UPC, Mtro. José Luis Cortés Peñaloza, y la M.C. Ana Victoria León Mendoza.`,
        author: {
            idPerson: 3,
            name: "Diana Laura",
            firstLastname: "Hernández",
            secondLastname: "",
            fullName: "Diana Laura Hernández",
            position: "Departamento de Difusión",
            email: "difusion@upc.edu.mx",
            profilePhoto: "",
            bio: ""
        },
        categories: {
            id: 3,
            name: "Administración"
        },
        coverUrl: null,
        isActive: true,
        status: "PUBLISHED",
        createdAt: new Date("2025-01-17T10:00:00-06:00"),
        publishedAt: new Date("2025-01-17T10:00:00-06:00")
    }
];
