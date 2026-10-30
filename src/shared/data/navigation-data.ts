/*NAVEGACION*/

export const navigation = [
    { name: "Inicio", href: "/" },
    { 
        name: "Conócenos", 
        submenu: [
            { name: "Mensaje del rector", href: "/conocenos#mensaje" },
            { name: "Historia", href: "/conocenos#historia" },
            { name: "Misión, visión y valores", href: "/conocenos#mision-vision" },
            { name: "Directorio", href: "/conocenos#directorio" },
            { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ]
    },
    { name: "Vinculación", href: "/vinculacion" },
    { name: "Boletines", href: "/boletines" },
    { name: "Admisión", href: "/admision" },
    { 
        name: "Normatividad", 
        submenu: [
            { name: "Leyes y reglamentos", href: "/leyes-reglamentos" },
            { name: "Información Financiera", href: "/informacion-financiera" },
        ]
    }
];

// Menu de acceso a sistemas

export const IS = [
    { name: "Alumnos", href: "http://200.94.123.67/Modulos/Seguridad/Vistas/Login.aspx" },
    { name: "Administrativos", href: "http://200.94.123.68/Modulos/Seguridad/Vistas/Login.aspx" },
    { name: "Moodle", href: "http://200.94.123.70/" },
]