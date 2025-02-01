# Universidad Politecnica del Centro: upcwebapp project

Inicialización del **proyecto** Astro:
```sh
npm install     # Instalación de dependencias
npm run dev     # Ejecuta el proyecto
```

# Librerías

Para inspiración y visualización del funcionamiento de astro busca [astro themes](https://astro.build/themes/), a continuación mas información sobre las integraciones de astro:

- [Tailwindcss](https://tailwindcss.com/docs/guides/astro)

- [Shadcn UI](https://ui.shadcn.com/docs/installation/astro)

- [Typography](https://github.com/tailwindlabs/tailwindcss-typography)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## Arquitectura del proyecto

Dentro de *source* o **src** podrás ver una división de carpetas por funcionalidad de esta manera:

```text
/
├── public/
│   ├── logo.png
│   │
│   └── trailer.mp4
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── content/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Comandos principales

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
