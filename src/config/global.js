export default {
  global: {
    Name: 'Programación de soluciones de <em>software</em>',
    Description:
      'Este componente formativo brinda las bases conceptuales y prácticas para comprender la gestión del desarrollo de <em>software</em> y el levantamiento de requisitos. Aborda metodologías tradicionales y ágiles, tipos de requisitos, técnicas de elicitación y roles del proceso, fortaleciendo el criterio técnico y comunicativo en equipos de desarrollo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodologías ágiles y tradicionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Características, ventajas y desventajas de las metodologías',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de los requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de requisitos de <em>software</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos y características de los requisitos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elicitación de requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y análisis de documentos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas para la recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Técnicas de recolección de información basadas en interacción y observación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Focus group como técnica de recopilación de información',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Talleres de Requisitos (JAD - Joint Application Development)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Roles en el desarrollo y levantamiento de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Usuarios, actores y stakeholders',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Cliente líder, dueño del producto, equipo de desarrollo y analista',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actor',
      significado:
        'Rol que desempeña una persona, sistema externo u organización al interactuar con el sistema en desarrollo. Se representa en diagramas de casos de uso de UML como una figura humana con el nombre del rol.',
    },
    {
      termino: 'Backlog',
      significado:
        'Lista priorizada y dinámica de todos los requisitos, funcionalidades y mejoras pendientes de un producto de <em>software</em>. En SCRUM es gestionada exclusivamente por el Product Owner.',
    },
    {
      termino: 'Elicitación',
      significado:
        'Proceso sistemático de descubrir, extraer y recopilar los requisitos de un sistema a partir de múltiples fuentes (stakeholders, documentos, sistemas existentes), utilizando diversas técnicas de recolección de información.',
    },
    {
      termino: 'Requisito funcional',
      significado:
        'Descripción de una funcionalidad específica que el sistema debe proporcionar, definiendo qué debe hacer el sistema en respuesta a entradas o situaciones particulares, desde la perspectiva observable del usuario.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'Atributo de calidad o restricción que define cómo debe funcionar el sistema (rendimiento, seguridad, usabilidad, disponibilidad, escalabilidad), en contraste con qué debe hacer. Tiene alto impacto en la arquitectura del sistema.',
    },
    {
      termino: 'Sprint',
      significado:
        'Iteración de duración fija (1 a 4 semanas) en SCRUM, al final de la cual el equipo debe entregar un incremento de <em>software</em> potencialmente desplegable que agrega valor al producto y puede ser mostrado al cliente para obtener retroalimentación.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de vincular cada requisito con su origen (stakeholder, documento de negocio o regulación) y con los artefactos de diseño, código y pruebas que lo implementan. Facilita la gestión de cambios y el cumplimiento regulatorio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boehm, B. & Turner, R. (2004). Balancing agility and discipline: a guide for the perplexed. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Cohn, M. (2004). User stories applied: for agile <em>software</em> development. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'IEEE Computer Society. (2014). IEEE guide to the <em>software</em> engineering body of knowledge (SWEBOK V3.0). IEEE Press.',
      link: '',
    },
    {
      referencia:
        'Leffingwell, D. (2021). SAFe 5.0 distilled: achieving business agility with the scaled agile framework. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). Ingeniería del <em>software</em>: un enfoque práctico (8.a ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Robertson, S., & Robertson, J. (2012). Mastering the requirements process: getting requirements right (3rd ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Rubin, K. S. (2012). Essential Scrum: a practical guide to the most popular agile process. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2019). Engineering <em>software</em> products: an introduction to modern <em>software</em> engineering. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Standish Group. (2015). CHAOS Report. Standish Group International.',
      link: '',
    },
    {
      referencia:
        'Wiegers, K., & Beatty, J. (2013). <em>Software</em> requirements (3rd ed.). Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
