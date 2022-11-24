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
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Defensa en profundidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Capas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conceptos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de controles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Titulo de primer nivel',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
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
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Joaquín Fernando Sánchez',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Maribel Avellaneda Nieves',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora pedagógica y metodológica',
        centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Correctora de estilo',
        centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
