export default {
  global: {
    componenteFormativo:
      'Estrategias para el endurecimiento de la ciberseguridad',
    descripcionCurso:
      'El componente aborda los conceptos claves para la generación de estrategias en la mejora de los sistemas de computación referente a la seguridad de la información. Se describe el concepto de seguridad profunda, cómo se hace el diseño de controladores de puntos y técnicas específicas de seguridad para la mejora de la infraestructura de una red de datos.',
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
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        titulo: 'Defensa en profundidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de controles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Endurecimiento del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Marcos y técnicas de endurecimiento',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/233109_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
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
      tema: 'Defensa en profundidad ',
      referencia:
        'Hadlington, L. (2017). Human factors in cybersecurity; examining the link between Internet addiction, impulsivity, attitudes towards cybersecurity, and risky cybersecurity behaviours. Heliyon, 3(7), 1-18.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_c3640829408444539879ceeb75d871ba',
    },
    {
      tema: 'Defensa en profundidad ',
      referencia:
        'Rios Insua, D., Couce-Vieira, A., Rubio, J., Pieters, W., Labunets, K., & G Rasines, D. (2021). An Adversarial Risk Analysis Framework for Cybersecurity. Risk Analysis, 41(1), 16-36.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_1111_risa_13331',
    },
  ],
  glosario: [
    {
      termino: 'AWS',
      significado: 'Nube de Amazon.',
    },
    {
      termino: 'AZURE',
      significado: 'Nube de Microsoft.',
    },
    {
      termino: 'DOS',
      significado: 'Ataque de negación de servicio.',
    },
    {
      termino: 'SCI',
      significado: 'Sistema de control interno.',
    },
    {
      termino: 'SCD',
      significado: 'Sistema de control distribuido.',
    },
    {
      termino: 'ACL',
      significado: 'Listas de control de acceso.',
    },
    {
      termino: 'AAA',
      significado: 'Autenticación, autorización y contabilidad.',
    },
    {
      termino: 'IDS',
      significado: 'Sistemas de detección de intrusos.',
    },
    {
      termino: 'Sistemas ERP',
      significado: 'Estaciones de trabajo de usuarios finales.',
    },
    {
      termino: 'PLC',
      significado: 'Controlador lógico programable.',
    },
    {
      termino: 'DNS',
      significado: 'Protocolo de sistema de nombres de dominio.',
    },
    {
      termino: 'DHCP',
      significado: 'Protocolo de configuración dinámica de host.',
    },
    {
      termino: 'UI',
      significado: 'Interfaz de usuario.',
    },
    {
      termino: '<em>Dockerfile</em>',
      significado: 'Archivo para configurar contenedores de Docker.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ackerman, P. (2017). <em>Industrial cybersecurity: efficiently secure critical infrastructure systems.<em> Packt Publishing Ltd',
      link: '',
    },
    {
      referencia:
        'Cohen, M., Hurley, K. & Newson, P. (2014). <em>Google compute engine: managing secure and scalable cloud computing.<em>',
      link: '',
    },
    {
      referencia:
        'Kohnke, A., Shoemaker, D., & Sigler, K. E. (2016). <em>The complete guide to cybersecurity risks and controls.<em> CRC Press.',
      link: '',
    },
    {
      referencia:
        'Li, H. (2009). <em>Introduction to windows azure.<em>  Apress.',
      link: '',
    },
    {
      referencia:
        'Noonan, W. (2004). <em>Hardening Network Infrastructure: Bulletproof Your Systems Before You Are Hacked!.<em> Osborne.',
      link: '',
    },
    {
      referencia:
        'Popek, G. J., & Goldberg, R. P. (1974). Formal requirements for virtualizable third generation <em>architectures. Communications of the ACM,<em> 17(7), 412-421.',
      link: 'https://doi.org/10.1145/361011.361073 ',
    },
    {
      referencia:
        'Portnoy, M. (2012). <em>Virtualization essentials<em> (Vol. 19). John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Wittig, M. & Wittig, A. (2018). <em>Amazon web services in action.<em>  Manning.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Fernando Sánchez',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Pedagógica y Metodológica',
          centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Correctora de Estilo',
          centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
