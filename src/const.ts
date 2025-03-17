// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Universidad Politécnica del Centro';
export const SITE_DESCRIPTION = 'Welcome to my website!';

/*NAVEGACION*/

export const navigation = [
    { name: "Inicio", href: "/" },
    { 
        name: "Conócenos", 
        submenu: [
            { name: "Bienvenida", href: "/bienvenida" },
            { name: "Antecedentes", href: "/antecedentes" },
        ]
    },
    { name: "Vinculación", href: "/vinculacion" },
    { name: "Admisión", href: "/admision" },
    { 
        name: "Normatividad", 
        submenu: [
            { name: "Leyes y reglamentos", href: "/leyes-reglamentos" },
            { name: "Información Financiera", href: "/informacion-financiera" },
        ]
    }
];

export const IS = [
    { name: "Alumnos", href: "http://200.94.123.67/Modulos/Seguridad/Vistas/Login.aspx" },
    { name: "Administrativos", href: "http://200.94.123.68/Modulos/Seguridad/Vistas/Login.aspx" },
    { name: "Moodle", href: "http://200.94.123.70/" },
]
