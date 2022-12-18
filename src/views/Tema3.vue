<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Endurecimiento del servicio

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p El endurecimiento del sistema es el proceso de asegurar un servidor o sistema computacional minimizando su superficie de ataque, o superficie de vulnerabilidad, y sus potenciales vectores de ataque. Es una forma de protección contra los ciberataques que consiste en cerrar las brechas del sistema que los ciber atacantes suelen utilizar para explotar el sistema y acceder a los datos sensibles de los usuarios.
        p Una definición oficial de endurecimiento del sistema, según el Instituto Nacional de Normas y Tecnología (NIST), es que se trata de <b>"un proceso destinado a eliminar un medio de ataque mediante la aplicación de parches a las vulnerabilidades y la desactivación de servicios no esenciales".</b>
        p Parte del proceso de eliminación del endurecimiento del sistema consiste en eliminar o desactivar las aplicaciones del sistema, los permisos, los puertos, las cuentas de usuario y otras características innecesarias para que los atacantes tengan menos oportunidades de acceder a la información sensible de un sistema informático de misión crítica o de infraestructura crítica. Ackerman, P. (2017).
      .col-lg-4.mb-4(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img01.png', alt='')

    .bg_30-1
      .row.mb-5
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema3/img02.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p Pero en esencia, el endurecimiento del sistema es un método para proteger un sistema contra los ataques perpetrados por los ciberdelincuentes. Consiste en asegurar el <em>software</em> de un sistema de cómputo, principalmente, pero también su <em>firmware</em>, redes y otros elementos del sistema para reducir las vulnerabilidades y un posible compromiso de todo el sistema.

    p.text-bold.mb-5 Existen cinco tipos principales de endurecimiento del sistema:

    .row.mb-4
      .col-lg-12.col-md-12.col-7
        .row.justify-content-xs-center.align-items-center.hover1
          .col-12.col-md-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")       
            .tarjeta--boton.color-acento-botones.p-4.m_left
              .row.justify-content-xs-center.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img03.svg', alt='')              
              p Endurecimiento de servidores.

          .col-12.col-md-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")        
            .tarjeta--boton.color-acento-botones.p-4.m_left1
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img04.svg', alt='')              
              p Endurecimiento de aplicaciones de <em>software.</em> 
          .col-12.col-md-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-left")        
            .tarjeta--boton.color-acento-botones.p-4.m_left2
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img05.svg', alt='')              
              p Endurecimiento del sistema operativo.
          .col-12.col-md-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")        
            .tarjeta--boton.color-acento-botones.p-4.m_left3
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img06.svg', alt='')              
              p Endurecimiento de la base de datos.
          .col-12.col-md-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-left")        
            .tarjeta--boton.color-acento-botones.p-4.m_left4
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img07.svg', alt='')              
              p Endurecimiento de la red.

    p Es importante tener en cuenta que los tipos de endurecimiento del sistema son lo suficientemente amplios como para ser universales y traducirse bien a través de diferentes configuraciones de servidores y sistemas computacionales; sin embargo, los métodos y herramientas utilizados para lograr prácticamente un estado endurecido o seguro por diseño varían ampliamente.              

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.1 Características

    .bg_14.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4
          figure.mb-4(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img10.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p Endurecer la infraestructura de una red es un proceso, no una tarea. Es algo que, una vez iniciado, no termina. Se debe permanecer constantemente atento a las amenazas que se ciernen sobre la red y emprender de forma continua acciones para prevenir cualquier peligro. Debido a la escala de una empresa, el endurecimiento de la infraestructura de la red no es un esfuerzo que deba emprender a la ligera. Dependiendo del tamaño y la complejidad de su entorno, podría pasar semanas o incluso meses planificando antes de realizar cualquier cambio Ackerman (2017). 
          p Al mismo tiempo, si se está estudiando cómo reforzar la red, probablemente se pueda reconocer que hay problemas de seguridad que deben ser abordados, incluso si no se está seguro de cuáles son exactamente esos problemas o cómo solucionarlos. Esto puede ser un inconveniente, ya que puede tener problemas que realmente necesitan ser abordados inmediatamente, antes de que comience el proceso de endurecimiento a gran escala.

    p Hay muchas tareas que se pueden realizar como parte del proceso de endurecimiento sistemático. Por lo general, todas ellas de gran envergadura, como por ejemplo, el endurecimiento de los routers y switches o la implementación de DMZ (Zonas desmilitarizadas) y dispositivos de red perimetral. Estas tareas llevan tiempo, a veces meses, desde la fase inicial de planificación y diseño hasta la implementación. Y aunque todas son necesarias, se debería realizar seis tareas, en particular, antes de hacer cualquier otra cosa en su red, tome nota: 

    .row.align-items-stretch.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img12.svg', alt='')
            p.text-bold.m-0 Revisar el diseño de la red
            p El primer paso para reforzar la red es comprenderla: cómo están interconectados los dispositivos, cómo fluyen los datos en la empresa. 
      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img13.svg', alt='')
            p.text-bold.m-0 Implantar un cortafuego
            p Tiene el mayor impacto de cualquier tarea que se pueda realizar para endurecer la infraestructura de red porque permite definir un perímetro.
      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img14.svg', alt='')
            p.text-bold.m-0 Implementar listas de control de acceso (ACL)
            p Se debería restringir y controlar todo el tráfico que entra y sale de la red al exterior y entre los segmentos de la red interna. Si no hay justificación comercial para el tráfico, hay que bloquearlo.  Filtrar el tráfico con ACL en los cortafuegos y routers tanto internos como externos.

      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='')
            p.text-bold.m-0 Desactivar funciones y servicios innecesarios
            p Aunque tradicionalmente se trata del ámbito de los servidores y las aplicaciones, los servicios innecesarios también afectan a los dispositivos de la infraestructura de red. Si no hay una razón para ejecutar un servicio concreto en el equipo de red, no hay que hacerlo.
      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4.p-md-3.p-lg-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img16.svg', alt='')
            p.text-bold.m-0 Implementar la protección contra virus
            p Los gusanos y virus actuales provocan a menudo ataques de denegación de servicio distribuido (DDoS) contra los routers y los conmutadores.  La forma más fácil de protegerse es con protección antivirus que incluya dispositivos de entrada y pasarelas SMTP, para evitar los virus y gusanos basados en el correo electrónico.
      .col-lg-4.col-md-6.col-12.mb-4
        .bg_41.p-4.p-md-3.p-lg-4
          .row.justify-content-center
            .col-lg-10.mb-4.mb-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema3/img17.svg', alt='')
            p.text-bold.m-0 Asegurar las conexiones inalámbricas
            p La conectividad inalámbrica presenta un problema único para asegurar la red. Si no está seguro de por qué utiliza una red inalámbrica, apáguela. Si se tiene que utilizar, asegúrese de implementar el cifrado y la autenticación para evitar que usuarios no autorizados se conecten y/o intercepten sus comunicaciones inalámbricas.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.2 Marcos y técnicas de endurecimiento

    p La seguridad de las aplicaciones engloba los controles y actividades destinados a encontrar, solucionar y prevenir las vulnerabilidades de las aplicaciones y su entorno de ejecución. Las vulnerabilidades que suelen encontrarse en las aplicaciones pueden dividirse en las categorías que se presentan a continuación.

    .row.mb-2.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_42.p-4
          h3.ms-4.text-white Vulnerabilidades de validación de entrada

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p La debilidad más común en la seguridad de las aplicaciones es no validar adecuadamente la entrada procedente de un usuario o del entorno en el que se ejecuta la aplicación antes de utilizarla. Al no escudriñar la entrada en su aplicación, se puede desencadenar un comportamiento inesperado de la aplicación al forzarla a ejecutar fragmentos de un lenguaje de scripting o reenviar comandos sensibles del sistema.
        p Las aplicaciones ICS pueden sufrir este tipo de vulnerabilidades tanto como cualquier otro <em>software</em>. Los programas HMI personalizados, la lógica de los controladores y las utilidades caseras a menudo no tienen en cuenta la validación de las entradas y son los principales candidatos a los ataques. Además, los dispositivos ICS a menudo vienen con páginas web integradas para fines de diagnóstico que se ejecutan en servidores web mal implementados con todo tipo de vulnerabilidades propias. Estos servidores web a menudo ejecutan aplicaciones web que utilizan una pobre validación de entrada, preparándose para ataques de inyección SQL, XSS y desbordamiento de búfer.
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img19.svg', alt='')

    p.text-bold.mb-5 Los ataques más comunes asociados a las vulnerabilidades de validación de entrada son:

    SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-4").color_i-1(data-aos="fade-right")       
      .tarjeta-avatar-b.m_tarslyder2
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4.py-5
            p.m-0.text-center Desbordamiento del búfer.        
      .tarjeta-avatar-b.m_tarslyder2
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            p.mt-2.text-center.flex-center-text Secuencia de comandos en sitios cruzados.        
      .tarjeta-avatar-b.m_tarslyder2
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4.py-5
            p.m-0.text-center Inyección de código.        
      .tarjeta-avatar-b.m_tarslyder2
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4.py-5
            p.m-0.text-center Inyección SQL.        
      .tarjeta-avatar-b.m_tarslyder2
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            p.mt-2.text-center.flex-center-text Canonización de comandos del sistema operativo.

    p Nunca hay que confiar en los datos externos, investigue las técnicas de validación de entrada adecuadas para su aplicación y haga que las pruebas de validación de entrada formen parte de su proceso de desarrollo de aplicaciones.

    .row.mb-4(data-aos="fade-right")
      .col-lg-5
        .bg_43.p-4
          h3.ms-4.text-white Manipulación del <em>software</em>

    .bg_14.mb-5.mb-lg-4
      .row.justify-content-center.align-items-center
        .col-lg-4
          figure.mb-4(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img22.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p La manipulación del <em>software</em> consiste en realizar modificaciones en el código de la aplicación antes o durante su ejecución. Al cambiar el código de una aplicación en la memoria o en el disco duro, se pueden eludir los controles de protección. Estas modificaciones pueden, por ejemplo, permitir al atacante eludir los mecanismos de autenticación o eludir las restricciones de licencia. Además, el <em>firmware</em> de un dispositivo puede ser alterado para permitir a un atacante el acceso por la puerta trasera al funcionamiento interno de un dispositivo. Con este tipo de acceso, el atacante puede buscar más vulnerabilidades en áreas del <em>firmware</em> que normalmente no son accesibles. Como ejemplo, en 2015 la empresa de seguridad ICS, CyberX, utilizó esta técnica para modificar el código del servidor web del <em>firmware de un PLC Micrologix 1100 de Rockwell Automation</em> para darles acceso al funcionamiento interno del PLC. Este acceso, a su vez, les permitió descubrir la vulnerabilidad <em>FrostyURL</em>.        

    p.text-bold Los ataques más comunes asociados a las vulnerabilidades de manipulación de <em>software</em> son:

    .row.justify-content-center
      .col-lg-12
        .row.justify-content-center.mb-5.m_tar-avatar2
          .col-xxl-3.col-xl-3.col-lg-4.col-md-6.mb-2.mb-xxl-0(data-aos="fade-right")
            .tarjeta-avatar
              img.img85.mx-auto(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Modificación del comportamiento en tiempo de ejecución de una aplicación para realizar acciones no autorizadas.
  
          .col-xxl-3.col-xl-3.col-lg-4.col-md-6.mb-2.mb-xxl-0(data-aos="fade-up")
            .tarjeta-avatar
              img.img85.mx-auto(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Explotación mediante parches binarios, sustitución de código o extensión de código Crackeo de licencias de <em>software</em>.
        
          .col-xxl-3.col-xl-3.col-lg-4.col-md-6.mb-2.mb-xxl-0(data-aos="fade-left")
            .tarjeta-avatar
              img.img85.mx-auto(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Troyanización de aplicaciones.

    p.mb-4 Siempre se debe obtener el <em>software</em> de fuentes fiables. Si se descarga <em>software</em> pirata, se obtienen las actualizaciones de lugares aleatorios o se utilizan medios de instalación que se han pasado, se está exponiendo a ataques de <em>software</em> "troyanizado" o a un <em>firmware</em> manipulado. Siempre que sea posible, sus dispositivos de automatización deberían permitirle ejecutar imágenes de <em>firmware</em> firmadas criptográficamente. Esto implica que el dispositivo tenga la capacidad de verificar la integridad y validez del <em>firmware</em> antes de arrancarlo. Para evitar que su <em>software</em> sea manipulado, siga estas recomendaciones de buenas prácticas:
    
    .row
      .col-lg-10
        .row.justify-content-lg-center.mb-5(data-aos="fade-down-right")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-t.m-auto.img_position(src='@/assets/curso/tema3/img28.svg')
          .col-lg-8
            .bg_34-1.p-4.ps-5
              .row.justify-content-center
                .col-xxl-9.col-xl-9.col-lg-9
                  ul.lista-ul--color.ms-0.ms-xxl-5.ms-xl-5.ms-lg-5.ps-lg-3.ps-xl-0
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Ejecute siempre cualquier aplicación como usuario restringido en un entorno restringido. 
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Mantenga las aplicaciones y el <em>firmware</em> actualizados.
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Descargue siempre los instaladores de <em>software</em> y las imágenes de <em>firmware</em> del sitio web del proveedor.  Restrinja el acceso al ordenador o dispositivo que ejecuta el <em>software</em> o <em>firmware</em> en la medida de lo posible, impidiendo  acceso a puertos periféricos, como USB y <em>Firmware</em>, a los puertos de diagnóstico y depuración, y acceso físico al ordenador o dispositivo.

    .row.mb-2.mb-lg-4(data-aos="fade-right")
      .col-lg-6
        .bg_44.p-4
          h3.ms-4.text-white Vulnerabilidades de autenticación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p.m-0 Las vulnerabilidades de esta categoría incluyen el no comprobar adecuadamente la autenticación del usuario o eludir el sistema de autenticación por completo. Al igual que las vulnerabilidades de validación de entrada, suelen estar causadas por los programadores que asumen que los usuarios se comportarán de una determinada manera y no prevén las consecuencias de que los usuarios hagan algo inesperado. Un ejemplo muy básico de una vulnerabilidad de autenticación, que se encuentra en las aplicaciones web o en los equipos de red, es cuando la aplicación simplemente pide un nombre de usuario y una contraseña en la página de inicio de sesión y luego permite a los usuarios autorizados el acceso sin restricciones a otras páginas web sin ninguna otra comprobación. 
        p El problema con esto es que asume que la única manera de llegar a las páginas de configuración es a través de la página de inicio de sesión. Por otro lado, ¿qué pasa si los usuarios pueden ir directamente a las páginas de configuración escribiendo la URL, saltándose la autenticación?
        p Muchos productos de proveedores de ICS han sufrido vulnerabilidades de derivación de autenticación. Un ejemplo es una vulnerabilidad de derivación de autenticación encontrada en varios productos de Siemens. La vulnerabilidad permite a un atacante eludir la autenticación del usuario en el proceso de inicio de sesión de SYMANTEC.
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img30.png')

    p.text-bold.mb-5 Los ataques más comunes asociados a las vulnerabilidades de autenticación son los siguientes:

    .row.justify-content-center
      .col-lg-12
        .row.mb-3.mb-lg-5.m_tarjeta-b.color_tarjeta-b.hover2
          .col-sm-6.col-lg-3.mb-4(data-aos="fade-right")       
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img31.svg', alt='')              
              p Evasión del inicio de sesión.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-right")        
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img31.svg', alt='')              
              p Manipulación de parámetros fijos Ataques de fuerza bruta y de diccionario.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")        
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img31.svg', alt='')              
              p Repetición de cookies. 
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")        
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img31.svg', alt='')              
              p Ataques "Pass-the-hash". 

    p.mb-4 Una medida eficaz, utilizada para detener los ataques de autenticación (automatizados), es añadir contenido aleatorio a la página de inicio de sesión presentada al cliente o usuario que se autentifica. El usuario debe ser capaz de enviar con éxito este contenido aleatorio como parte del proceso de autenticación para poder continuar en el sitio web o la aplicación. Otras medidas preventivas o correctivas incluyen procedimientos de autenticación rigurosos, el uso de tokens de autenticación sensibles al tiempo y restricciones a los intentos de autenticación fallidos.

    .row.mb-4(data-aos="fade-right")
      .col-lg-6
        .bg_45.p-4
          h3.ms-4.text-white Vulnerabilidades de autorización

    .bg_30-1
      .row.mb-5
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema3/img33.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p.mb-4 La autorización es el concepto de permitir el acceso a los recursos sólo a aquellos que están autorizados a utilizarlos. Es el proceso que viene después de una autenticación exitosa, por lo que el usuario, en este punto, tendrá credenciales válidas asociadas a un conjunto bien definido de roles y privilegios. Las vulnerabilidades de esta categoría implican la verificación de los roles y privilegios. Al usuario se le permite más acceso a la aplicación o al sistema de lo necesario para realizar la tarea.
          p.text-bold.d-none.d-lg-block Los ataques más comunes asociados a las vulnerabilidades de autorización son:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-xxl-3.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0.mb-lg-4
        .row.g-0.tarjeta1
          .col-auto.tarjeta1__img.p-3
            figure
              img.img_1(src='@/assets/curso/tema3/img47.svg', alt='')
              img.img_2(src='@/assets/curso/tema3/img47-1.svg', alt='')
          .col.tarjeta1__contenido.p-3.d-flex.align-items-center
            p.m-0 Elevación de privilegios. 
      .col-xxl-3.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0.mb-lg-4
        .row.g-0.tarjeta1
          .col-auto.tarjeta1__img.p-3
            figure
              img.img_1(src='@/assets/curso/tema3/img47.svg', alt='')
              img.img_2(src='@/assets/curso/tema3/img47-1.svg', alt='')
          .col.tarjeta1__contenido.p-3.d-flex.align-items-center
            p.m-0 Divulgación de datos confidenciales.
      .col-xxl-3.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0.mb-lg-4
        .row.g-0.tarjeta1
          .col-auto.tarjeta1__img.p-3
            figure
              img.img_1(src='@/assets/curso/tema3/img47.svg', alt='')
              img.img_2(src='@/assets/curso/tema3/img47-1.svg', alt='')
          .col.tarjeta1__contenido.p-3.d-flex.align-items-center
            p.m-0 Manipulación de datos.
      .col-xxl-3.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0.mb-lg-4
        .row.g-0.tarjeta1
          .col-auto.tarjeta1__img.p-3
            figure
              img.img_1(src='@/assets/curso/tema3/img47.svg', alt='')
              img.img_2(src='@/assets/curso/tema3/img47-1.svg', alt='')
          .col.tarjeta1__contenido.p-3.d-flex.align-items-center
            p.m-0 Ataques de seducción.  

    .row
      .col-lg-10
        .row.justify-content-center.mb-5(data-aos="fade-down-right")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-t.m-auto.img_position(src='@/assets/curso/tema3/img35.svg')
          .col-lg-8
            .bg_34-1.p-4.ps-5
              .row.justify-content-center
                .col-xxl-9.col-xl-9.col-lg-8
                  p.text-bold.ms-0.ms-xxl-5.ms-lg-5.ps-lg-3.ps-xl-0 Ante este tipo de vulnerabilidad, tenga en cuenta:
                  ul.lista-ul--color.ms-0.ms-xxl-5.ms-xl-5.ms-lg-5.ps-lg-3.ps-xl-0
                    li 
                      i.fas.fa-check-circle
                      |	Utilizar privilegios y funciones granulares para los usuarios.
                    li 
                      i.fas.fa-check-circle
                      | Adhiérase a las mejores prácticas de necesidad de conocimiento y de mínimo privilegio cuando configure cuentas o funciones de usuario.
                    li 
                      i.fas.fa-check-circle
                      | Imponga tiempos de espera en las sesiones iniciadas y realice comprobaciones. 

    .row.mb-2.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_46.p-4
          h3.ms-4.text-white Vulnerabilidades de configuración inseguras
              
    p.mb-4 Las configuraciones desempeñan un papel fundamental en la seguridad de una aplicación. A menudo, los sistemas y las aplicaciones se ejecutan con una configuración por defecto, extraída del manual del proveedor o de Internet. Esto hace que adivinar las contraseñas, eludir las páginas de inicio de sesión y encontrar vulnerabilidades de configuración bien conocidas sea muy fácil. Otra forma de gestión de la configuración insegura es cuando una configuración es simplemente errónea, ya sea desde el principio o después de haber realizado cambios que comprometen la seguridad de la aplicación o el sistema. Esta configuración defectuosa puede acabar utilizándose en cualquier lugar de la empresa. 

    p.text-bold.mb-5 Los ataques más comunes asociados a las vulnerabilidades en la gestión de la configuración son los siguientes:

    .bg_47.p-4.mb-5
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.align-self-center(data-aos="fade-right")
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img38.svg', alt='')
        .col-lg-6.align-self-center(data-aos="fade-left")
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              p.m-0 Defectos en el <em>software</em> del servidor o configuraciones erróneas que permiten el listado de directorios y los ataques de cruce de directorios.
            li 
              i.fas.fa-check-circle
              p.m-0 Archivos innecesarios por defecto, de copia de seguridad o de muestra, incluyendo scripts, aplicaciones, archivos de configuración y páginas web.
            li 
              i.fas.fa-check-circle
              p.m-0 Permisos inadecuados de archivos y directorios.
            li 
              i.fas.fa-check-circle
              p.m-0 Servicios innecesarios habilitados, incluyendo la gestión de contenidos y la administración remota.
            li 
              i.fas.fa-check-circle
              p.m-0 Cuentas por defecto con sus contraseñas por defecto.
            li 
              i.fas.fa-check-circle
              p.m-0 Funciones administrativas o de depuración habilitadas o accesibles.
            li 
              i.fas.fa-check-circle
              p.m-0 Mensajes de error demasiado informativos (más detalles en la sección de gestión de errores).
            li 
              i.fas.fa-check-circle
              p.m-0 Certificados SSL y ajustes de cifrado mal configurados.
            li 
              i.fas.fa-check-circle
              p.m-0 Uso de certificados autofirmados para lograr la autenticación y la protección man-in-the-middle.
            li 
              i.fas.fa-check-circle
              p.m-0 Uso de certificados por defecto.
            li 
              i.fas.fa-check-circle
              p.m-0 Autenticación incorrecta con sistemas externos.
            
    p La mejor defensa contra las vulnerabilidades de la configuración insegura es la gestión rigurosa de sus configuraciones. Debe adherirse a un estricto proceso de gestión de la configuración, definiendo los procedimientos en torno a la creación, el cambio y la verificación de las configuraciones. Debe detallar cómo deben configurarse las aplicaciones antes de su despliegue, cómo abordar los cambios de configuración y cómo verificar periódicamente que las configuraciones están actualizadas y siguen siendo relevantes desde el punto de vista de la seguridad.         

    .row.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_48.p-4
          h3.ms-4.text-white Vulnerabilidades en la gestión de sesiones

    .bg_14-1.mb-4
      .row.justify-content-center.mb-5.mb-lg-4
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
          p Una sesión de red es una secuencia de transacciones de solicitud y respuesta asociadas al mismo usuario. Las sesiones proporcionan la capacidad de establecer variables, como derechos de acceso y ajustes de localización, que se aplicarán a cada interacción que un usuario tenga con la aplicación web durante la duración de la sesión. Las aplicaciones web, por ejemplo, pueden crear sesiones para hacer un seguimiento de los usuarios conectados después del proceso de inicio de sesión. Esto asegura la capacidad de identificar al usuario en cualquier solicitud posterior, así como permite aplicar controles de seguridad de acceso, autorizar el acceso a los datos privados del usuario y aumentar la usabilidad de la aplicación. Las vulnerabilidades en esta categoría están relacionadas con la creación, el seguimiento y la eliminación de los identificadores de sesión. Mediante una mala gestión de la sesión, un atacante puede adivinar o reutilizar una clave/ID de sesión y apoderarse de la sesión y de la identidad de un usuario legítimo.
        .col-lg-4
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img40.png', alt='')

    p.text-bold.mb-5 Los ataques más comunes asociados a las vulnerabilidades de la gestión de sesiones incluyen:

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")      
            .tarjeta-avatar-b.m_tarslyder3
              .tarjeta-avatar-b__img
                img.img91(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.flex-center-text
                .p-4
                  p.text-center Secuestro de sesión.       
          .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar-b.m_tarslyder3
              .tarjeta-avatar-b__img
                img.img91(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.flex-center-text
                .p-4
                  p.text-center Repetición de sesión. 
          .col-md-6.col-lg-4(data-aos="fade-left")
            .tarjeta-avatar-b.m_tarslyder3
              .tarjeta-avatar-b__img
                img.img91(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.flex-center-text
                .p-4
                  p.m-0.text-center Ataques de intermediario <em>(Man-in-the-middle)</em>.       

    p Asegúrese de que utiliza técnicas adecuadas de gestión de sesiones, adhiriéndose a buenas prácticas como la generación aleatoria de sesiones (claves) el seguimiento adecuado de las sesiones y la finalización adecuada de las mismas. Añada valores únicos para el usuario a una clave de sesión para minimizar el riesgo de interceptación y reutilización de las claves de sesión.
    
    .row.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_49.p-4
          h3.ms-4.text-white Vulnerabilidades de manipulación de parámetros

    p Las vulnerabilidades de manipulación de parámetros permiten manipular los parámetros intercambiados entre un cliente y el servidor con el fin de modificar los datos de la aplicación, como las credenciales y los permisos de los usuarios, el precio y la cantidad de los productos.  Esta información puede almacenarse en cookies, en campos de formularios ocultos o en cadenas de consulta de URL.
    p En los primeros días de las tiendas web en línea, los programadores cometieron el costoso error de codificar el precio de un artículo como un campo de formulario oculto en sus páginas HTML. Los atacantes simplemente descargaban el archivo HTML de la tienda web, cambiaban el precio y hacían el pedido con un enorme descuento. Este es un ejemplo clásico de una vulnerabilidad de manipulación de parámetros.

    p.text-bold(data-aos="fade-right") Los ataques más comunes asociados a las vulnerabilidades de manipulación de parámetros son los siguientes:

    .row
      .col-lg-10
        .row.justify-content-center.mb-5(data-aos="fade-down-right")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-t.m-auto.img_position(src='@/assets/curso/tema3/img43.svg')
          .col-lg-8
            .bg_34-1.p-4.ps-5
              .row.justify-content-center
                .col-lg-8.pt-4
                  ul.lista-ul--color.ms-0.ms-lg-5
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Manipulación de cadenas de consulta. 
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Manipulación de campos de formulario Manipulación de cookies.
                    li 
                      i.fas.fa-check-circle
                      p.m-0 Manipulación de cabeceras HTTP.
                    li 
                      i.fas.fa-check-circle
                      p.m-0 La defensa contra este tipo de vulnerabilidades incluye prácticas de codificación adecuadas y una estricta validación de entradas.

    .row.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_50.p-4
          h3.ms-4.text-white Pruebas de seguridad de las aplicaciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img45.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Entonces, ¿cómo descubrir si alguna de estas vulnerabilidades está presente en las aplicaciones desplegadas en una red ICS? La respuesta es probando todas las aplicaciones instaladas en busca de vulnerabilidades. Se hace hincapié en todas las aplicaciones instaladas porque primero hay que conocer todas las aplicaciones que se están ejecutando en la red ICS. Aquí es donde los procedimientos de gestión de activos ayudarán. No se puede asegurar aquello que no se sabe que se tiene. Mantener una lista de activos actualizada con información que incluya versiones de <em>software</em>, niveles de parches y revisiones de <em>firmware</em> debería ser la mayor prioridad.
        p Una lista precisa de activos permite comparar la revisión y los niveles de parches de cada aplicación en la red ICS contra una lista de vulnerabilidades conocidas para la aplicación. Este proceso se puede hacer manualmente o con la ayuda de una herramienta automatizada como el escáner de vulnerabilidad Nessus.

    .bg_38
      .row.mb-5.mb-lg-4
        .col-lg-10(data-aos="fade-right")
          p Otra área de las pruebas de vulnerabilidad de las aplicaciones implica una comparación de la configuración de las aplicaciones con una base de datos de mejores prácticas y configuraciones seguras conocidas, mientras se buscan discrepancias. Una vez más, esto puede ser un proceso manual, o se puede lograr con la ayuda de una herramienta automatizada.
        .col-lg-2
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema3/img46.svg', alt='')

    p Los métodos de prueba mencionados anteriormente funcionan bien para aplicaciones conocidas que tienen listas y bases de datos de problemas y configuraciones conocidas. En el caso de las aplicaciones que no son bien conocidas -pensemos en las aplicaciones caseras o las construidas a medida- es necesario un enfoque diferente. Este tipo de aplicaciones necesitan ser verificadas manualmente para detectar la presencia de cualquiera de las vulnerabilidades discutidas en la sección anterior. Esto puede ser un proceso manual en el que, por ejemplo, una persona prueba todos los campos de entrada posibles de una aplicación para una validación de entrada adecuada.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
