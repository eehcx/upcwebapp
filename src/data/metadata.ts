type Metadata = {
    [key: string]: {
        title: string;
        description: string;
    };
};

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