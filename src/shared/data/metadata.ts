import type { Metadata } from '@/shared/types';

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Universidad Politécnica del Centro';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const metadata: Metadata = {
    '/': {
        title: 'Inicio',
        description: 'Bienvenido a la Universidad Politecnica del Centro',
    },
    '/academico': {
        title: 'Académico',
        description: 'Conoce nuestras oportunidades academicas',
    },
    '/conocenos': { 
        title: "Conócenos", 
        description: "Conoce a papillon y la Universidad Politecnica del centro" 
    },
    '/vinculacion': { 
        title: "Vinculación", 
        description: "Conoce a papillon y la Universidad Politecnica del centro"
    },
    '/admisiones': { 
        title: "Admisiones",
        description: "Conoce a papillon y la Universidad Politecnica del centro"
    },
    '/normatividad': { 
        title: "Normatividad",
        description: "Conoce a papillon y la Universidad Politecnica del centro"
    }
};