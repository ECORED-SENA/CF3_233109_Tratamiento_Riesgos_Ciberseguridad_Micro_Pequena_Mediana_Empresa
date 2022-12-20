<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Defensa en profundidad

    p(data-aos="fade-right") Ninguna solución única puede proteger realmente contra todos los vectores de ataque y tapar todos los agujeros de seguridad de un sistema. Aplicando un modelo de defensa en profundidad y estratificando las medidas de protección, las brechas en la seguridad de una capa pueden cerrarse con controles en otra capa, creando una postura de seguridad integral. 
    p.text-bold.mb-5 La superposición de medidas de protección en un sistema informático es muy parecida a la forma en que, en la Edad Media, se alzaban las medidas de seguridad en un castillo, observe con atención: 

    .bg_01.p-5.mb-5(data-aos="fade-down-right") 
      .row.justify-content-center.mb-4
        .col-lg-8
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img02.svg', alt='Texto que describa la imagen')                

            .tarjeta.color1.p-3(x="7%" y="77.6%" numero="+")
              .h5.mb-2 Guardias
              p La primera línea o capa de defensa eran los guardias en las torres que vigilaban cualquier cosa fuera de lo común que se acercara a los alrededores del castillo.

            .tarjeta.color1.p-3(x="92.2%" y="77.4%" numero="+")
              .h5.mb-2 Claro alrededor del castillo
              p Al mantener una extensión de terreno abierta alrededor del castillo, no había lugares fáciles de esconder para un atacante. El claro se convierte en una forma de defensa.            

            .tarjeta.color1.p-3(x="35%" y="80.9%" numero="+")
              .h5.mb-2 Foso
              p La segunda capa de defensa era el foso que rodeaba el castillo, a menudo lleno de animales hambrientos.
            
            .tarjeta.color1.p-3(x="16.3%" y="52.6%" numero="+")
              .h5.mb-2 Muro
              p Si un ladrón lograba atravesar el agua, debía escalar un gran muro. Lo ideal, sin grietas, agujeros u otros puntos de apoyo que pudiera usar como palanca para ascender.  Los guardias en las torres seguían vigilando a intrusos que se acercaban o escalaban los muros.

            .tarjeta.color1.p-3(x="72.8%" y="40.3%" numero="+")
              .h5.mb-2 Interior
              p Si un intruso llegaba hasta la muralla interior, tendría que recorrer pasillos y escaleras hasta las mazmorras para llegar a la sala del tesoro lo que prolongaba el viaje por el castillo aumentando las posibilidades de ser atrapado.

            .tarjeta.color1.p-3(x="77.7%" y="62.3%" numero="+")
              .h5.mb-2 Puertas
              p Por lo general, la última capa de defensa es una puerta fortificada y cerrada en la sala del tesoro con un par de guardias a cada lado.

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema1/img03.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p En el ejemplo del castillo medieval, los controles de seguridad aplicados son en su mayoría de naturaleza física, ya que implican principalmente impedir de forma física que la gente entre en el castillo o detectar una violación física del perímetro.
        p Ahora, tomemos en consideración que el rey del castillo hubiera encontrado una forma de hacer oro a partir del hierro mediante un proceso secreto de alquimia. En lugar de oro y joyas, la mazmorra alberga ahora un sofisticado proceso de fundición, controlado por un Sistema de Control Distribuido (DCS) de última generación. La fórmula secreta que convierte el hierro en oro está almacenada en un servidor en una de las cámaras de la torre. 
        p El proceso de alquimia está a cargo de un puñado de empleados de confianza bien evaluados y todos los sistemas de control y supervisión del SCI (Sistema de control interno) están conectados entre sí a través de una red Ethernet con una solución de acceso remoto que permite la interacción a distancia. El rey tiene acceso a todo el ICS (Sistemas de control industrial) desde su trono, por lo que puede vigilar la rapidez con la que se enriquece e interactuar con los sistemas siempre que lo necesite.
              
    p.text-bold.mb-5 Al instalar una red ICS accesible de forma remota ya no son eficientes sólo las defensas físicas contra los intrusos, lo que hace necesaria una estrategia defensiva que incluya entre otros los siguientes aspectos:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-xxl-12.col-lg-12.col-md-12
        SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-4")
          .tarjeta.bg_02.p-4
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img05.svg')
              .col-lg-8.col-md-12.col-11
                p.m-0 Protección contra personas no autorizadas que utilicen acceso remoto.
          
          .tarjeta.bg_02.p-4
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img06.svg')
              .col-lg-8.col-md-12.col-10
                p.m-0 Restricción de acceso a usuarios autorizados mientras interactúan física o remotamente con los sistemas ICS.
          
          .tarjeta.bg_02.p-4
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img07.svg')
              .col-lg-8.col-md-12.col-11
                p.m-0 Trato adecuado para usuarios e invitados de la red.
          
          .tarjeta.bg_02.p-4
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img08.svg')
              .col-lg-8.col-md-12.col-11
                p.m-0 Protección de los datos en tránsito o almacenados en discos ante posible robo o manipulación.            
          
          .tarjeta.bg_02.p-4.p-lg-3
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img09.svg')
              .col-lg-8.col-md-12.col-11
                p.m-0 Defensa del sistema contra el tiempo de inactividad de la producción por manipulación de equipos ICS o ataques a la red. 
          
          .tarjeta.bg_02.p-4.p-lg-3
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-4.mb-3.mb-lg-4
                figure
                  img.img-t.mt-0.mt-lg-4(src='@/assets/curso/tema1/img10.svg')
              .col-lg-8.col-md-12.col-11
                p.m-0 Protección ante riesgos de seguridad por manipulación o cambios que provoquen comportamiento inesperado en equipos y procesos. 
                    
    p.mb-5 La forma adecuada de abordar todas las preocupaciones relacionadas con la seguridad y la defensa de un ICS es mediante la implementación de una estrategia de defensa en profundidad. A continuación, las capas a tener en cuenta para la elaboración de estrategias pertinentes:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-md-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg_03.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img12.png')
            h4.text-white Físico
            p.text-white Limitar el acceso físico de personal autorizado a zonas de áreas, paneles de control, dispositivos, cableado y salas de control, mediante el uso de cerraduras, puertas, tarjetas llave y biometría. También implica el uso de políticas, procedimientos y tecnología para escoltar y rastrear a los visitantes.
          .tarjeta.bg_03.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img13.png')
            h4.text-white Red
            p.text-white Marco de seguridad: políticas de cortafuegos, políticas ACL (listas de control de acceso) para conmutadores y routers, AAA, detección de intrusiones y sistemas de prevención.
          .tarjeta.bg_03.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img14.png')
            h4.text-white Computación
            p.text-white Gestión de parches, <em>software</em> antimalware, eliminación de aplicaciones/protocolos/servicios no utilizados, cierre de puertos lógicos innecesarios y protección de puertos físicos.
          .tarjeta.bg_03.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img15.png')
            h4.text-white Aplicación
            p.text-white Autenticación, autorización y contabilidad (AAA), gestión de vulnerabilidades, gestión de parches y gestión del ciclo de vida del desarrollo seguro.
          .tarjeta.bg_03.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img16.png')
            h4.text-white Dispositivo
            p.text-white Endurecimiento de dispositivos, cifrado de comunicaciones y acceso restrictivo, gestión de parches, gestión del ciclo de vida de los dispositivos y gestión de la configuración y los cambios.

    p El modelo adopta un enfoque sistemático para asegurar todas las capas de un ICS. Cubrir todas las capas del modelo guiará al implementador a través del proceso de asegurar un ICS desde todos los aspectos.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.1 Capas

    p A continuación, se revisan cada una de las capas del modelo, sus principales características, alcances e implicaciones.

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_04.p-4
          h3.ms-4.text-white Seguridad física 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-5(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img18.svg')
      .col-lg-8(data-aos="fade-left")
        p.m-0 El objetivo de la seguridad física es mantener a las personas fuera de las zonas en las que no están autorizadas a estar. Esto incluye áreas restringidas, salas de control, áreas de alta seguridad, paneles eléctricos y de red, salas de servidores y otras áreas restringidas o sensibles. Si un atacante tiene acceso físico a la red o a los equipos de computación, es sólo cuestión de tiempo que consiga acceder a la red o al sistema de computación. La capa de defensa física incluye recomendaciones como la construcción de muros de tamaño suficiente, la aplicación de cerraduras en las puertas, la instalación de cámaras de CCTV y la definición de políticas y controles para tratar a los visitantes e invitados (Noonan, 2004).  

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_05.p-4
          h3.ms-4.text-white Seguridad de la red 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Al igual que la seguridad física, consiste en restringir el acceso a las áreas lógicas de la red ICS. La idea es dividir la red en zonas de seguridad, aplicando reglas de firewall, estableciendo listas de control de acceso e implementando sistemas de detección de intrusos (IDS) para separar las partes más sensibles (zonas más seguras) de la red de las zonas menos seguras. Al controlar y supervisar estrechamente el tráfico que atraviesa las zonas de seguridad, se pueden detectar y gestionar eficazmente las anomalías.
        p La implementación de una seguridad sólida comienza literalmente desde los cimientos. Al aplicar una base sólida a una red ICS, se allana el camino para permitir una implementación más ágil del programa de seguridad de la red. Una base sólida viene en forma de decisiones de diseño de arquitectura de red centradas en la seguridad, por ejemplo:
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img20.png')

    .row.justify-content-center.mb-3.mb-lg-4
      .col-lg-6(data-aos="fade-right").mb-4.mb-lg-0
        .bg_06.p-2.py-3.hg-100
          .row.align-items-center.hg-100
            .col-auto
              img.img-t.m-auto(src='@/assets/curso/tema1/img21.svg', alt='')
            .col-xxl-9.col-lg-8.col-md-9.col-8
              p.m-0 La provisión de puntos de control del tráfico de red en lugares estratégicos de la arquitectura de red, que faciliten la captura efectiva de paquetes, utilizada por herramientas de seguridad como los sistemas de detección de intrusiones (IDS).
              
      .col-lg-6(data-aos="fade-left")
        .bg_06.p-2.py-3.hg-100
          .row.align-items-center.hg-100
            .col-auto
              img.img-t.m-auto(src='@/assets/curso/tema1/img22.svg', alt='')
            .col-xxl-9.col-lg-8.col-md-9.col-8
              p.m-0 El diseño de una segmentación de la red que permita confinar y detectar los incidentes de seguridad y mantener las interrupciones, como las tormentas de difusión de paquetes, dentro de la zona, protegiendo la red en general.

    p Al dedicar un poco más de tiempo por adelantado, diseñando adecuadamente los cimientos de la red ICS, el trabajo de asegurar la red se vuelve más fácil en general. 

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_07.p-4
          h3.ms-4.text-white Segmentación de la red 

    .row.mb-2.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img25.svg')
      .col-lg-6(data-aos="fade-left")
        p El primer paso en el diseño de una arquitectura de red ICS consciente de la seguridad es definir la segmentación de la red. 
        .bg_08.p-2.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.m-0 Un segmento de red, también conocido como zona de seguridad de la red, es una agrupación lógica de sistemas de información y automatización en una red ICS.
            .col-auto 
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img24.svg')
        p La red ICS debe ser dividida en segmentos de red manejables con el fin de limitar el dominio de difusión, restringir el uso de ancho de banda, y reducir la superficie de ataque. Una zona de seguridad de la red tiene un perímetro bien definido y una protección estricta de los límites. 

    p.mb-5 Las zonas de seguridad reciben un nivel de confianza de seguridad (alto, bajo o medio) En el contexto de una red ICS, la Zona Industrial se considera la zona de alta seguridad y la Zona Empresarial la zona de baja seguridad. Esto permite que sistemas con requisitos de seguridad similares sean colocados dentro de la misma zona. Por ejemplo, una estación de trabajo suministrada por un fabricante de equipos originales, construida a medida por ese proveedor, se utiliza para controlar una parte crítica del proceso de producción que tiene prohibido por contrato que se le apliquen actualizaciones sin la estricta aprobación del proveedor, que se alojaría en la Zona Industrial, donde puede estar protegida del acceso directo desde zonas menos seguras por medio de la IDMZ. Por otro lado, un computador de mesa se utiliza simplemente para ejecutar informes de producción y no tiene restricciones de actualización ni valor particular para el proceso de producción y se situará en la Zona Empresarial, donde se puede restringir el acceso directo a los sistemas y dispositivos críticos de producción mediante la IDMZ.  

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 1.
      span <em>Zonas de seguridad de red</em>
    
    .bg_09.p-5.mb-4.mb-lg-5
      .row.justify-content-center
        .col-lg-12
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img26.svg', alt='')

    p.mb-5 El establecimiento de un pequeño número de zonas de seguridad de la red con requisitos de seguridad claramente definidos limita la complejidad y elimina la ambigüedad a la hora de seleccionar una zona para nuevos sistemas y dispositivos. Observe la siguiente tabla que detalla cada una de las zonas de seguridad de una red ICS, sus principales características, sistemas y servicios: 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Tabla 1.
      span <em>Zonas de seguridad en una red ICS</em>             

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-12    
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.bg_color1
                td.h4.text-center(colspan="2") Nombre
                td.h4.text-center(colspan="5") Características
                td.h4.text-center(colspan="5") Sistemas y servicios              
            tbody
              tr
                td.text-bold.text-center(colspan="2") Zona empresarial
                td(colspan="5") Donde residen los sistemas de los usuarios de la empresa incluidas estaciones de trabajo, impresoras, teléfonos VoIP.  Usuarios y sistemas de esta zona requieren conectividad a Internet y acceso a correo electrónico y chat. Los controles de seguridad incluyen protección de puntos finales, actualizaciones (automáticas) de Windows y de las aplicaciones, y esfuerzos de cumplimiento y exploración de vulnerabilidades. 
                td(colspan="5")
                  ul.lista-ul--color.mb_1
                    li.mb_1 
                      i.lista-ul__vineta
                      | Sistemas ERP. 
                    li.mb_1 
                      i.lista-ul__vineta
                      | Estaciones de trabajo de usuarios finales con conectividad a Internet.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Sistemas de bases de datos de toda la empresa.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Soluciones de aterrizaje de acceso remoto (Citrix, VPN y RDP).
              tr
                td.text-bold.text-center(colspan="2") Zona industrial
                td(colspan="5") Alberga sistemas y dispositivos críticos para la producción incluyendo estaciones de trabajo, servidores, bases de datos y automatización, y dispositivos de instrumentación y control. Un fallo en la disponibilidad, integridad o confidencialidad de cualquiera de los sistemas de esta zona podría afectar negativamente la productividad y la rentabilidad, la reputación o la seguridad de la empresa. Esta zona debe tener el más alto nivel de protección.  
                td(colspan="5")
                  ul.lista-ul--color.mb_1
                    li.mb_1 
                      i.lista-ul__vineta
                      | Servidores de etiquetas.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Servidores de recogida de datos históricos.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Estaciones de trabajo, estaciones de operador y servidores relacionados con el sistema de producción. 
                    li.mb_1 
                      i.lista-ul__vineta
                      | Dispositivos de automatización y control, como PLCs, HMIs y VFDs.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Cualquier sistema relacionado con la producción que sea demasiado restrictivo para asegurarlo por medios convencionales.
              tr
                td.text-bold.text-center(colspan="2") Zonas de Área Celular
                td(colspan="5") La Zona Industrial debe subdividirse en enclaves o Zonas de Área Celular, cada una con los sistemas y dispositivos que tengan una tarea común o un interés mutuo en el proceso de producción.  Las Zonas de Área Celular permiten esquemas de control de seguridad más granulares y confinan más el tráfico de red relacionado.
                td(colspan="5")
                  ul.lista-ul--color.mb_1
                    li.mb_1 
                      i.lista-ul__vineta
                      | Dispositivos de automatización como PLCs, HMIs y VFDs.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Actuadores inteligentes como motores, servos y bancos de válvulas neumáticas.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Dispositivos de instrumentación habilitados para Ethernet, como sondas de temperatura, sensores de presión y velocímetros.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Sistemas de cómputo suministrados por algún proveedor que interactúan directamente con el equipo de producción.                    
              tr
                td.text-bold.text-center(colspan="2") Operaciones del sitio de nivel 3
                td(colspan="5") Sin ser técnicamente una zona de área celular, sino más bien una subzona dedicada de la zona industrial, las operaciones del sitio de nivel 3 consisten en todos los sistemas y recursos que deben compartirse entre los sistemas de producción de todas las zonas de área celular. Se convierte en la zona de aterrizaje para las interacciones con los usuarios y los sistemas de nivel 4 y superior, como el extremo industrial de una solución de pasarela de escritorio remoto o el servidor de entrega de una actualización de antivirus.
                td(colspan="5")
                  ul.lista-ul--color.mb_1
                    li.mb_1 
                      i.lista-ul__vineta
                      | Entornos de desarrollo de automatización y controles virtuales (infraestructura de escritorio virtual).
                    li.mb_1 
                      i.lista-ul__vineta
                      | Servicios de red y seguridad para la zona industrial, que incluyen Directorio Activo DNS, DHCP, servicios de identidad (AAA, ISE).
                    li.mb_1 
                      i.lista-ul__vineta
                      | Almacenamiento y recuperación.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Servicios de automatización y control: recogida de datos históricos, servidores de etiquetas.
                    li.mb_1 
                      i.lista-ul__vineta
                      | Servicios de actualización de antivirus, Windows y aplicaciones. 
                    li.mb_1 
                      i.lista-ul__vineta
                      | Solución de red industrial inalámbrica.

    .bg_10.p-5
      p.mb-5 La definición de lo que entra en una Zona de Área Celular depende del objetivo de los esfuerzos de seguridad para toda la red ICS, pudiendo establecerse por:

      .row.justify-content-center.mb-4.mb-lg-5
        .col-xxl-10.col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .tarjeta.bg_03.p-4
                figure.mb-5
                  img.img-t.m-auto(src='@/assets/curso/tema1/img29.png')
                h4.text-white Áreas funcionales de un proceso de producción
                p.text-white Por ejemplo, la línea de producción 1 será una Zona de Área Celular separada, la línea de producción 2 será otra Zona de Área Celular, y las áreas de envío y recepción formarán Zonas de Área Celular separadas. 
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
              .tarjeta.bg_03.p-4
                figure.mb-5
                  img.img-t.m-auto(src='@/assets/curso/tema1/img30.png')
                h4.text-white Capacidad de supervivencia
                p.text-white Por ejemplo, si ciertas partes de un proceso de producción están vinculadas a los mismos servicios públicos como el gas, la electricidad y el aire, entonces tiene sentido colocar esos sistemas con servicios públicos comunes en sus propias Zonas de Área Celular. 
            .col-lg-4(data-aos="fade-left")
              .tarjeta.bg_03.p-4
                figure.mb-5
                  img.img-t.m-auto(src='@/assets/curso/tema1/img31.png')
                h4.text-white Ubicación
                p.text-white En el caso de un proceso de producción que se extiende a través de edificios separados, incluso en ciudades separadas; entonces, podría asignarse áreas celulares a cada ubicación. 

    p.mt-4.mt-lg-0 El modelo de zonas de seguridad de la red utiliza el concepto de confianza como base de su funcionamiento. A cada zona se le asigna un nivel de confianza. La confianza aumenta desde la zona exterior hasta la interior, que alberga los activos y datos de producción más críticos de la empresa. Sólo se permite la comunicación entre los sistemas de las zonas adyacentes y no se permite saltarse las zonas. Se colocan controles de seguridad entre cada zona, como cortafuegos de inspección de estado, sistemas de prevención y detección de intrusiones y sólidos controles de acceso. Los controles de seguridad implementados dentro de una zona permiten la detección de actividades maliciosas entre los sistemas de una zona.
    p.mb-5 La direccionalidad del tráfico también se puede tener en cuenta a la hora de definir las reglas de comunicación entre zonas. Por ejemplo, se podría permitir que el tráfico HTTPS entre la Zona Empresarial y la Zona Industrial sólo se origine en los clientes de la Zona Empresarial.

    .row(data-aos="fade-right")
      .col-lg-5
        .bg_11.p-4
          h3.ms-4.text-white Seguridad de computación

    .row.justify-content-center.mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-right")
        p La seguridad de la computación consiste en evitar la infiltración en los sistemas computacionales (estaciones de trabajo, servidores, computadores portátiles, etc.). Esto se consigue aplicando estrategias de parcheo, realizando ejercicios de endurecimiento de los sistemas informáticos e instalando aplicaciones y soluciones de seguridad como antivirus, protección de puntos finales y <em>software</em> de detección/prevención de intrusiones en los <em>hosts</em> (HIDS / HIPS).
        p Los controles de seguridad de computación también incluyen la restricción o la prevención del acceso a los puertos de comunicación no utilizados de los dispositivos informáticos, como el bloqueo del acceso a los puertos USB y <em>FireWire</em> mediante bloqueadores de puertos físicos (o <em>hot glue</em>) así como la aplicación de una política de dispositivos con una solución de protección de puntos finales como <em>Symantec Endpoint Protection</em> (SCP) Mantener los sistemas de computación libres de vulnerabilidades mediante la actualización y la aplicación de parches es también una forma de seguridad informática. 
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img33.png')

    p.mb-5 Veamos en qué consisten algunos de estos controles de seguridad:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.mb-5
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Endurecimiento de los <em>endpoint</em>")
            .col-lg-11              
              p Una parte integral de la seguridad informática de los ICS es el endurecimiento de los puntos finales, que tiene como objetivo reducir la superficie de ataque del punto final, así como limitar el impacto de un compromiso potencial del punto final.
          .row(titulo="Reducción de la superficie de ataque")
            .col-lg-11              
              p El ejercicio implica revisar todos los sistemas y desactivar los servicios de Windows que no se utilicen, desinstalar las aplicaciones que no se usen y deshacerse de los scripts, programas, bases de datos y otros archivos instalados. Estas actividades realizadas al momento de la implementación del <em>endpoint</em>, deberían ser un ejercicio programado, realizado de forma regular después de la implementación del <em>endpoint</em>.
          .row(titulo="Limitar el impacto de un compromiso")
            .col-lg-11              
              p Limitar el impacto de una violación de la seguridad del punto final, por ejemplo, cuando un servicio o aplicación del sistema se ve comprometido, se logra restringiendo los permisos y privilegios dados al servicio o aplicación expuestos. Una forma de hacerlo es configurando los servicios y aplicaciones para que se ejecuten bajo cuentas de usuario dedicadas y restringidas.
          .row(titulo="Kit de herramientas de mitigación mejorada de Microsoft")
            .col-lg-11
              p Otra forma de limitar el impacto de un compromiso es utilizar una solución de <em>software</em> de mitigación de seguridad, como el <em>Enhanced Mitigation Experience Toolkit</em> (EMET) de Microsoft o AppLocker de Microsoft. El EMET de Microsoft intercepta las llamadas a la interfaz de programación de aplicaciones y aplica perfiles de protección a esas llamadas, evitando llamadas peligrosas o maliciosas.

    .bg_12
      .row.mb-5
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img34.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p El <em>Enhanced Mitigation Experience Toolkit</em> (EMET) no se ejecuta como un servicio y no se adjunta a una aplicación como un depurador. En su lugar, aprovecha una infraestructura de cuña integrada en Windows, llamada marco de compatibilidad de aplicaciones. Se trata de una interfaz de bajo nivel altamente optimizada y, como tal, EMET no presenta una sobrecarga adicional de recursos para las aplicaciones y servicios protegidos.

    p Una infraestructura de cuña implementa una forma de enganche de la interfaz de programación de aplicaciones. En concreto, aprovecha la naturaleza de la vinculación para redirigir las llamadas a la API de Windows a un código alternativo: la propia cuña. La especificación de Windows Portable Executable (PE) y <em>Common Object File Format</em> (COFF) incluye varias cabeceras, y los directorios de datos de esta cabecera proporcionan una capa de indirección entre la aplicación y el archivo vinculado.
    p.mb-5 Por ejemplo, si un ejecutable hace una llamada a una función de Windows, esta llamada a los archivos de la biblioteca externa tendrá lugar a través de la tabla de direcciones de importación (IAT), como se muestra en el siguiente diagrama:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure.mb-4(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img35.svg', alt='')
        figcaption Tomado de Li (2009)

    p.mb-5 Utilizando la infraestructura de cuña, puede modificar la dirección de la función de Windows resuelta en la tabla de importación, sustituyéndola por un puntero a una función en el código de cuña alternativo:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-4(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img36.svg', alt='')
        figcaption Tomado de Li (2009)

    p.mb-5 EMET aprovecha esta arquitectura de cuña para imponer sus perfiles de protección. Los perfiles de protección de EMET son archivos XML que contienen ajustes preconfigurados de EMET. Las empresas pueden proporcionar perfiles de protección de EMET adaptados para que funcionen con las aplicaciones y sistemas que venden. La empresa prueba y valida que la configuración del perfil de protección funcione para una variedad de sistemas operativos y aplicaciones.

    .row.mb-5(data-aos="fade-right")
      .col-lg-5
        .bg_13.p-4
          h3.ms-4.text-white Seguridad de las aplicaciones

    .bg_14
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure.mb-4(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img38.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p Mientras que la seguridad de la información consiste en mantener a un intruso fuera de un sistema informático, la seguridad de las aplicaciones consiste en evitar que un usuario realice interacciones no autorizadas con los programas y servicios que se ejecutan en el sistema informático. Esto se consigue implementando la autenticación, la autorización y la auditoría. Aquí, la autenticación verifica que el usuario es quien dice ser, la autorización restringe las acciones del usuario y la auditoría registra todas las interacciones que el usuario tiene con el sistema. Mantener las aplicaciones libres de vulnerabilidades mediante la detección y la aplicación de parches es también una forma de seguridad de las aplicaciones.

    .row.mb-4(data-aos="fade-right")
      .col-lg-5
        .bg_13.p-4
          h3.ms-4.text-white Seguridad de los dispositivos

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-left")
        p La seguridad de los dispositivos implica las acciones y los controles de seguridad relativos a la tríada AIC de los dispositivos ICS, donde AIC significa disponibilidad, integridad y confidencialidad. En el caso de los sistemas y redes computacionales habituales, el orden de la tríada de seguridad es AIC, o sea, confidencialidad, integridad y disponibilidad, pero en el contexto de un ICS, la disponibilidad está por encima de las demás, ya que el tiempo de actividad (disponibilidad) es el objetivo número uno en la producción y el que más repercute en la rentabilidad.
        p La seguridad de los dispositivos incluye la aplicación de parches, el endurecimiento de los dispositivos, las restricciones de acceso físico y lógico, y el establecimiento de un programa de ciclo de vida de los dispositivos que incluya la definición de procedimientos para la adquisición, la implementación, el mantenimiento, la gestión de la configuración y los cambios, y la eliminación de los dispositivos.
      .col-lg-4
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img39.svg', alt='')

    .row.mb-4(data-aos="fade-right")
      .col-lg-8
        .bg_15.p-4
          h3.ms-4.text-white Políticas, procedimientos y concienciación

    .bg_12-1
      .row
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img41.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p Por último, están, las políticas, los procedimientos y la concienciación, elementos que unen todos los controles de seguridad. Las políticas son una directriz de alto nivel sobre cuál es la postura de seguridad esperada para los sistemas y dispositivos, por ejemplo, cifrando todas las bases de datos. Los procedimientos son instrucciones paso a paso sobre cómo lograr los objetivos de las políticas, como, por ejemplo, implementar el cifrado AES en las bases de datos. La toma de conciencia de los riesgos en seguridad ayuda a conseguir y mantener la atención sobre los aspectos relacionados con la seguridad del ICS y su funcionamiento. La formación de conciencia suele consistir en una formación de seguridad anual que abarca temas como el spam, las amenazas internas y las prácticas de seguimiento (un intruso que sigue de cerca a un empleado legítimo en una instalación protegida por controles de acceso físico).

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.2 Conceptos

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p La plataforma en la nube es cada vez más atractiva para el mundo de la computación. Hoy en día, las técnicas de arquitectura orientada a servicios (SOA) y de programación orientada a aspectos (AOP) se utilizan ampliamente en las soluciones empresariales. Una pregunta que puede hacerse un equipo de gestión de TI o un equipo de desarrollo de <em>software</em> es: ¿cuál va a ser la próxima tendencia? La computación en nube parece ser la respuesta correcta. Se utilizan diferentes nombres para este tipo de plataforma, como computación de servicios, plataforma bajo demanda y plataforma como servicio. En relación con la computación en nube se ha extendido el uso de un conjunto de nuevas palabras de moda, como Programa como Servicio (PaaS) <em>software</em> como Servicio (SaaS) y cualquier cosa que se pueda imaginar como servicio (XaaS).
        p.text-bold A continuación, se presentan algunos servicios de computación en la nube y sus principales características.
      .col-lg-4
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img42.svg', alt='')

    .row(data-aos="fade-right")
      .col-lg-5
        .bg_16.p-4
          h3.ms-4.text-white Azure

    p.mb-4.mb-lg-5 Azure es un nuevo sistema en la nube de Microsoft que permite que las aplicaciones se ejecuten desde un sistema conectado de forma remota, alojado en un centro de datos de Microsoft, y que almacene los datos en la nube. La plataforma consta de tres partes:

    .row.justify-content-center.mb-5
      .col-xxl-9.col-xl-11.col-lg-12
        div
          .row.justify-content-center
            .col-xxl-4.col-xl-4.col-lg-4.col-md-6.d-flex.justify-content-center(data-aos="fade-right")
              .tarjeta-avatar
                img.img85.mx-auto(src='@/assets/curso/tema1/img44.svg' alt='AvatarTop')        
                .tarjeta.color-primario
                  .p-4
                    p.text-center <b>Tiempo de ejecución de desarrollo:</b> simula el tiempo de ejecución permitiendo probar, depurar y ajustar la aplicación en un entorno de desarrollo local antes de desplegarla en la nube.

            .col-xxl-4.col-xl-4.col-lg-4.col-md-6.d-flex.justify-content-center(data-aos="fade-up")
              .tarjeta-avatar
                img.img85.mx-auto(src='@/assets/curso/tema1/img45.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4        
                    p.text-center <b>Tiempo de ejecución:</b> incluye la estructura, el servicio de almacenamiento y el sistema operativo de Windows Azure.

            .col-xxl-4.col-xl-4.col-lg-4.col-md-6.d-flex.justify-content-center(data-aos="fade-left")
              .tarjeta-avatar
                img.img85.mx-auto(src='@/assets/curso/tema1/img46.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4        
                    p.text-center <b>Aplicaciones:</b> las aplicaciones se ejecutan desde el tiempo de ejecución de Azure. Un conjunto de servicios basados en Internet funciona como bloques de construcción para desarrollar aplicaciones. El paquete de servicios incluye .NET <em>Services (antes BizTalk Services) SQL Azure y Live Services</em>.

    p.mb-5 La figura 2 describe el concepto de la plataforma Azure. Cualquier aplicación de tipo on-premise construida en una organización podría también aprovechar los servicios proporcionados por Azure a través de Internet. Sin embargo, para alojar y ejecutar aplicaciones desde la plataforma en la nube de Azure, las aplicaciones deben ser desarrolladas utilizando el .NET <em>Framework</em>. Tanto las aplicaciones de Azure como las locales pueden acceder al servicio de almacenamiento de Azure utilizando un enfoque de transferencia de estado representativo (RESTful) El almacenamiento en la nube ya no se basa en el modelo relacional para cumplir con los requisitos de escalabilidad de Internet. Hay tres tipos de almacenamiento disponibles en la plataforma Azure: almacenamiento de blobs, almacenamiento de colas y almacenamiento de tablas.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 2.
      span <em>Concepto de la plataforma Azure</em>
    
    .bg_17.p-4.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.my-5(src='@/assets/curso/tema1/img49.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Introduction to Windows Azure</em> (p. xvii), por H. Li, 2009, H. (2009), <em>Apress</em>.

    .bg_18
      .row.mb-4
        .col-lg-10(data-aos="fade-right")
          p Azure Fabric es una tecnología innovadora y puede entenderse como el contexto de ejecución de Azure. El concepto de una aplicación Azure (ver figura 3) muestra que, para alcanzar el objetivo de escalabilidad en Internet, cada instancia de rol web y de rol trabajador tiene su núcleo de procesador dedicado. El número de instancias por defecto está configurado en uno cuando se crea una aplicación en la nube desde Visual Studio. El propietario de la cuenta puede aumentarlo a través del archivo de configuración <em>Web.config</em> incluso después del despliegue.
        .col-lg-2
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img50.svg', alt='')

    p El marco de Azure también proporciona un entorno de simulación de red local para simular el entorno de la nube, lo que permite depurar, probar y ajustar la aplicación localmente antes de desplegarla en producción. La red local puede iniciarse manualmente.
    p.text-bold Las funciones de la red se resumen en la siguiente lista:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Monitorizar el estado de la aplicación")
        .row.align-items-center
          .col-xxl-9.col-lg-8.mb-4
            h4 Monitorizar el estado de la aplicación
            p.m_right Cada aplicación de Azure tiene un propietario que controla algunos aspectos de la aplicación cambiando la configuración para gobernar la seguridad y la escalabilidad (número de instancias) La estructura Azure supervisa el estado de la configuración de la aplicación para satisfacer las solicitudes de las aplicaciones en tiempo de ejecución.
          .col-xxl-2.col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img53.svg', alt='Texto que describa la imagen')

        
      .tarjeta.color-acento-botones--borde.p-4(titulo="Garantizar el rendimiento de las aplicaciones")
        .row.align-items-center
          .col-xxl-9.col-lg-8.mb-4
            h4 Garantizar el rendimiento de las aplicaciones
            p Una aplicación en la nube se ejecuta en una máquina virtual (VM). Azure mantiene relación de uno a uno entre la VM y un núcleo de procesador físico. Si una aplicación solicita aumentar el número de instancias, la red asignará nuevos recursos de VM desde la nube a los núcleos.          
          .col-xxl-2.col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img54.svg', alt='Texto que describa la imagen')
            
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión de la conmutación por error")
        .row.align-items-center
          .col-xxl-9.col-lg-8.mb-4
            h4 Gestión de la conmutación por error
            p La estructura supervisa el estado de ejecución de la aplicación. Cuando una instancia falla, el tejido iniciará una nueva instancia desde un nuevo recurso VM.
          .col-xxl-2.col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img55.svg', alt='Texto que describa la imagen')

        
      .tarjeta.color-acento-botones--borde.p-4(titulo="Registro y seguimiento")
        .row.align-items-center
          .col-xxl-9.col-lg-8.mb-4
            h4 Registro y seguimiento
            p Cuando una aplicación se ha desplegado en la nube, la única forma de registrar la información en tiempo de ejecución y enviar alertas o notificaciones al propietario de la aplicación es a través del tejido.            
          .col-xxl-2.col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img52.svg', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 3.
      span <em>Aplicación Azure</em>
    
    .bg_19.p-4.py-5.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img57.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Introduction to Windows Azure</em> (p. xvii), por H. Li, 2009, H. (2009), <em>Apress.F</em>.

    .row.mb-4(data-aos="fade-right")
      .col-lg-5
        .bg_27.p-4
          h3.ms-4.text-white Google Cloud
    
    .bg_30
      .row.mb-4
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img59.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p Google Compute Engine es un servicio que proporciona máquinas virtuales (VM) que se ejecutan en la infraestructura de Google. Se pueden crear máquinas virtuales con una variedad de configuraciones utilizando un gran número de sistemas operativos disponibles. Los datos de la instancia se almacenan y se mantienen en un almacenamiento de bloques persistente que se replica para la redundancia y persiste más allá del ciclo de vida de la VM. El acceso a la red puede configurarse para permitir que las máquinas virtuales se comuniquen entre sí, con Internet o con una red privada propia.

    p.mb-4.mb-lg-5 Google Compute Engine proporciona varias herramientas para interactuar y gestionar las instancias y configuraciones de Compute Engine.  Por ejemplo, se puede iniciar y detener instancias, adjuntar almacenamiento en disco y configurar el acceso a la red utilizando cada uno de estos puntos de acceso. Las herramientas incluyen: 

    .bg_28.p-4.mb-4
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img60.svg', alt='')
        .col-lg-8.align-self-center(data-aos="fade-left")
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              p.m-0 Consola de desarrolladores de Google (http:// console.developers.google.com), que proporciona una interfaz de usuario (UI) basada en la <em>web</em> con formularios HTML para la creación y la configuración de instancias.
            li 
              i.fas.fa-check-circle
              p.m-0 Gcloud compute, una interfaz de línea de comandos que puede utilizarse de forma interactiva o en <em>scripts</em> para una automatización sencilla.
            li 
              i.fas.fa-check-circle
              p.m-0 API de Compute Engine, una API RESTful para la integración en su propio código y en aplicaciones de gestión de la nube.

    p Para empezar a trabajar con Google Compute Engine, primero se debe crear un proyecto Compute Engine en la Consola de Desarrolladores. Un proyecto de Compute Engine es una colección de información sobre la aplicación y actúa como un contenedor para los recursos y configuraciones de Compute Engine. Los discos, los cortafuegos, las redes y las instancias están asociados a un único proyecto y contenidos en él. La facturación se aplica a un proyecto en función de la cantidad de recursos utilizados. Los miembros del equipo pueden añadirse al proyecto con permisos específicos para acceder a los recursos de Compute Engine del proyecto.
    p.mb-5 El siguiente video ilustra paso a paso el proceso para desplegar una aplicación en Google Cloud:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/c7F0qr9xXG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row(data-aos="fade-right")
      .col-lg-5
        .bg_29.p-4
          h3.ms-4.text-white Amazon Web Services

    .row.justify-content-center.mb-5
      .col-lg-8
        p Amazon Web Services (AWS) es una plataforma de servicios web que ofrece soluciones de computación, almacenamiento y redes, en diferentes capas de abstracción. Puede utilizar estos servicios para alojar sitios web, ejecutar aplicaciones empresariales y extraer enormes cantidades de datos. El término servicio web implica que los servicios pueden controlarse a través de una interfaz web que puede ser utilizada por máquinas o por humanos a través de una interfaz gráfica de usuario. Los servicios más destacados son EC2, que ofrece servidores virtuales, y S3, que ofrece capacidad de almacenamiento. Los servicios de AWS funcionan bien juntos; pueden ser utilizados para replicar la configuración local existente o diseñar una nueva configuración desde cero. Los servicios se cobran según un modelo de precios de pago por uso.
        p Un cliente de AWS, puede elegir entre diferentes centros de datos distribuidos en Estados Unidos, Europa, Asia y Sudamérica. Por ejemplo, puede iniciar un servidor virtual en Japón de la misma manera que puede iniciar un servidor virtual en Irlanda, lo que permite atender a clientes de todo el mundo con una infraestructura global.
      .col-lg-4 
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img62.svg', alt='')   
                
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 4.
      span <em>Centros de datos AWS</em>
    
    .bg_20.p-4.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.my-5(src='@/assets/curso/tema1/img64.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Introduction to Windows Azure</em> (p. xvii), por H. Li, 2009, H. (2009), <em>Apress.F</em>.

    p.mb-4 Detalle a través de la situación descrita en el siguiente video, las posibilidades que ofrece AWS en el proceso de implementación de una arquitectura de sistema tolerante a fallos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/D2Rc8EaltTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Con la idea general de lo que se puede hacer con AWS, a continuación, se destacan los beneficios más importantes que ofrece la plataforma en cuanto a capacidad y servicios:

    h4.border_b1 Capacidad flexible (escalabilidad)
    p.mb-5 La capacidad flexible libera de la planificación, pudiendo escalar de un servidor a miles de servidores. Su almacenamiento puede crecer de gigabytes a petabytes, sin tener que predecir futuras necesidades de capacidad para los próximos meses y años.  Si se dirige una tienda web, se tiene patrones de tráfico estacionales, como se muestra en la figura 5. Se puede pensar en el día frente a la noche, y en los días laborables frente a los fines de semana o las vacaciones. ¿No sería bueno poder añadir capacidad cuando el tráfico crece y eliminar capacidad cuando el tráfico disminuye? En eso consiste exactamente la capacidad flexible. Se pueden poner en marcha nuevos servidores en cuestión de minutos y desecharlos unas horas después. La nube casi no tiene limitaciones de capacidad. Ya no tiene que pensar en el espacio de los bastidores, los conmutadores y las fuentes de alimentación: puede añadir tantos servidores como se quiera. Si el volumen de datos crece, siempre puede añadir nueva capacidad de almacenamiento.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 5.
      span <em>Patrones de tráfico</em>
    
    .bg_21.p-4.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.my-5(src='@/assets/curso/tema1/img66.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Amazon web services in action</em> (p. 11), por M. Wittig & A. Wittig, 2018, Manning.
    
    h4.border_b1 Los servicios de AWS

    p El <em>hardware</em> para la computación, el almacenamiento y las redes es la base de la nube de AWS. AWS ejecuta servicios de <em>software</em> sobre el <em>hardware</em> para proporcionar la nube (Ver figura 6).  Una interfaz <em>web</em>, la API, actúa como una interfaz entre los servicios de AWS y sus aplicaciones. Se puede gestionar los servicios enviando peticiones a la API manualmente a través de una GUI o programando los eventos a través de un SDK. Para ello, se puede utilizar una herramienta como la consola de administración, una interfaz de usuario basada en la web o una herramienta de línea de comandos.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 6.
      span <em>Servicios AWS</em>
    
    .bg_22.p-4.py-5.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img68.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Amazon web services in action</em> (p. 16), por M. Wittig & A. Wittig, 2018, Manning.

    p Los servidores virtuales tienen una peculiaridad: se puede hacer la conexión a los servidores virtuales a través de SSH, por ejemplo, y obtener acceso de administrador. Esto significa que se puede instalar el <em>software</em> que quiera en un servidor virtual. Otros servicios, como el servicio de base de datos NoSQL, ofrecen sus características a través de una API y ocultan todo lo que ocurre entre bastidores. La Figura 7 muestra un administrador instalando una aplicación web PHP personalizada en un servidor virtual y gestionando servicios dependientes como una base de datos NoSQL utilizada por la aplicación web PHP.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 7.
      span <em>Administrador instalando una aplicación web PHP</em>
    
    .bg_23.p-4.py-5.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img70.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Amazon web services in action</em> (p. 17), por M. Wittig & A. Wittig, 2018, Manning.

    p.mb-5 Los usuarios envían peticiones HTTP a un servidor virtual. En este servidor virtual se instala un servidor web junto con una aplicación web PHP personalizada. La aplicación web necesita hablar con los servicios de AWS para responder a las solicitudes HTTP de los usuarios. Por ejemplo, la aplicación web necesita consultar datos de una base de datos NoSQL, almacenar archivos estáticos y enviar correos electrónicos. La comunicación entre la aplicación web y los servicios de AWS se gestiona mediante la API, como muestra la siguiente figura.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 8.
      span <em>Comunicación entre procesos</em>
    
    .bg_24.p-4.py-5.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img72.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <em>Amazon web services in action</em> (p. 17), por M. Wittig & A. Wittig, 2018, Manning. 

    p.mb-5 La cantidad de servicios disponibles puede asustar al principio. <b>La siguiente categorización de los servicios de AWS le ayudará a orientarse en la jungla:</b>

    .bg_31.p-4.py-5.mb-5
      .row.justify-content-center
        .col-lg-11(data-aos="fade-right")
          ul.lista-ul--color.mb_1
            li.mb_1 
              i.fas.fa-check-circle
              | Los servicios de computación ofrecen potencia de cálculo y memoria. Puede iniciar servidores virtuales y utilizarlos para ejecutar sus aplicaciones.
            li.mb_1 
              i.fas.fa-check-circle
              | Los servicios de aplicaciones ofrecen soluciones para casos de uso comunes como colas de mensajes, temas y búsqueda de grandes cantidades de datos para integrarlos en sus aplicaciones.
            li.mb_1 
              i.fas.fa-check-circle
              | Los servicios para empresas ofrecen soluciones independientes como servidores de correo y servicios de directorio.
            li.mb_1 
              i.fas.fa-check-circle
              | Los servicios de implementación y administración funcionan sobre los servicios mencionados hasta ahora. Le ayudan a conceder y revocar el acceso a los recursos de la nube, a supervisar sus servidores virtuales y a desplegar aplicaciones.
            li.mb_1 
              i.fas.fa-check-circle
              | El almacenamiento es necesario para recoger, persistir y archivar datos. AWS ofrece diferentes opciones de almacenamiento: un almacén de objetos o una solución de almacenamiento conectado a la red para su uso con servidores virtuales.
            li.mb_1 
              i.fas.fa-check-circle
              | El almacenamiento de bases de datos tiene algunas ventajas sobre las soluciones de almacenamiento simples cuando se necesitan gestionar datos estructurados. AWS ofrece soluciones para bases de datos relacionales y NoSQL.
            li.mb_1 
              i.fas.fa-check-circle
              | Los servicios de red son una parte elemental de AWS. Puede definir redes privadas y utilizar un DNS bien integrado.

    .row(data-aos="fade-right")
      .col-lg-5
        .bg_32.p-4
          h3.ms-4.text-white Comparación de alternativas     

    .bg_33
      .row.mb-5.mb-lg-4
        .col-lg-10(data-aos="fade-right")
          p AWS no es el único proveedor de computación en la nube. Microsoft y Google también tienen ofertas en la nube.  <em>OpenStack</em> es diferente porque es de código abierto y está desarrollado por más de 200 empresas, entre ellas IBM, HP y Rackspace. Cada una de estas empresas utiliza <em>OpenStack</em> para operar sus propias ofertas de nube, a veces con complementos de código cerrado. Comparar los proveedores de nubes no es fácil, porque la mayoría de los estándares abiertos están ausentes. Funcionalidades como las redes virtuales y las colas de mensajes se realizan de forma diferente. Si se sabe qué características se necesita para una aplicación en particular, se puede comparar los detalles y tomar una decisión.
        .col-lg-2
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img50.svg', alt='')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Tabla 2.
      span <em>Proveedores de computación en la nube</em>             

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-12    
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.bg_color1
                td.h4.text-center(colspan="2") Nombre
                td.h4.text-center(colspan="3") AWS
                td.h4.text-center(colspan="3") Microsoft Azure
                td.h4.text-center(colspan="2") Google Cloud
                td.h4.text-center(colspan="2") OpenStack         
            tbody
              tr
                td.text-bold.text-center(colspan="2") Número de servicio
                td.text-center(colspan="3") La mayoría
                td.text-center(colspan="3") Muchos
                td.text-center(colspan="2") Suficiente
                td.text-center(colspan="2") Pocos
              tr
                td.text-bold.text-center(colspan="2") Número de ubicaciones (varios centros de datos por ubicación)
                td.text-center(colspan="3") 9
                td.text-center(colspan="3") 13
                td.text-center(colspan="2") 3
                td.text-center(colspan="2") Sí (depende del proveedor de OpenStack)
              tr
                td.text-bold.text-center(colspan="2") Cumplimiento
                td.text-center(colspan="3") Normas comunes (ISO 27001, HIPAA, FedRAMP, SOC), IT Grundschutz (Alemania), G-Cloud (Reino Unido)
                td.text-center(colspan="3") Normas comunes (ISO 27001, HIPAA, FedRAMP, SOC), ISO 27018 (seguridad en la nube), G-Cloud (Reino Unido)
                td.text-center(colspan="2") Normas comunes (ISO 27001, HIPAA, FedRAMP, SOC)
                td.text-center(colspan="2") Sí (depende del proveedor de OpenStack)
              tr
                td.text-bold.text-center(colspan="2") Idiomas del SDK
                td.text-center(colspan="3") Android, Navegadores (JavaScript), iOS, Java, .NET, Node.js (JavaScript), PHP, Python, Ruby, Go
                td.text-center(colspan="3") Android, iOS, Java, .NET, Node.js (JavaScript), PHP, Python, Ruby
                td.text-center(colspan="2") Java, Navegadores (JavaScript), .NET, PHP, Python
                td.text-center(colspan="2")
              tr
                td.text-bold.text-center(colspan="2") Integración en el proceso de desarrollo
                td.text-center(colspan="3") Medio, no vinculado a ecosistemas específicos
                td.text-center(colspan="3") Alta, vinculada al ecosistema de Microsoft (por ejemplo, el desarrollo de .NET)
                td.text-center(colspan="2") Alta, vinculada al ecosistema de Google (por ejemplo, Android)
                td.text-center(colspan="2")
              tr
                td.text-bold.text-center(colspan="2") Almacenamiento a nivel de bloque (conectado a través de la red)
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") Sí (puede ser utilizado por varios servidores virtuales simultáneamente)
                td.text-center(colspan="2") No
                td.text-center(colspan="2") Sí (puede ser utilizado por varios servidores virtuales simultáneamente)
              tr
                td.text-bold.text-center(colspan="2") Base de datos relacional
                td.text-center(colspan="3") Sí (MySQL, Postgr- eSQL, Oracle Data- base, Microsoft SQL Server)
                td.text-center(colspan="3") Sí (Azure SQL Data-base, Microsoft SQL Server)
                td.text-center(colspan="2") Sí (MySQL)
                td.text-center(colspan="2") Sí (depende del proveedor de OpenStack)
              tr
                td.text-bold.text-center(colspan="2") Base de datos NoSQL
                td.text-center(colspan="3") Si (propietario)
                td.text-center(colspan="3") Si (propietario)
                td.text-center(colspan="2") Si (propietario)
                td.text-center(colspan="2") No
              tr
                td.text-bold.text-center(colspan="2") DNS
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") No
                td.text-center(colspan="2") Sí
                td.text-center(colspan="2") No
              tr
                td.text-bold.text-center(colspan="2") Red virtual
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") Sí
                td.text-center(colspan="2") No
                td.text-center(colspan="2") Sí
              tr
                td.text-bold.text-center(colspan="2") Herramientas de aprendizaje automático
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") Sí
                td.text-center(colspan="2") Sí
                td.text-center(colspan="2") No
              tr
                td.text-bold.text-center(colspan="2") Herramientas de despliegue
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") Sí
                td.text-center(colspan="2") Sí
                td.text-center(colspan="2") No
              tr
                td.text-bold.text-center(colspan="2") Integración en el centro de datos local
                td.text-center(colspan="3") Sí
                td.text-center(colspan="3") Sí
                td.text-center(colspan="2") Sí
                td.text-center(colspan="2") No

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.3 Características

    .bg_14-1
      .row.justify-content-center.mb-5.mb-lg-4
        .col-lg-8
          p A lo largo de los últimos cincuenta años, ciertas tendencias clave crearon cambios fundamentales en la forma de prestar servicios de computación. El procesamiento de mainframe impulsó los años sesenta y setenta. Los computadores personales, la digitalización del escritorio físico y la tecnología cliente/servidor encabezaron los años ochenta y noventa. Internet, el auge y la burbuja, abarcó el siglo pasado y el actual y continúa en la actualidad. Pero estamos en medio de otra de esas tendencias que cambian el modelo: la virtualización, una tecnología disruptiva, que rompe el statu quo de cómo se manejan los computadores físicos, se prestan los servicios y se asignan los presupuestos. 
          p Para entender por qué la virtualización ha tenido un efecto tan profundo en el entorno computacional actual, es necesario comprender mejor lo que ha sucedido en el pasado. La palabra virtual ha sufrido un cambio en los últimos años, su uso se ha ampliado junto con la expansión de la computación, especialmente con el uso generalizado de Internet y los teléfonos inteligentes. Las aplicaciones en línea han permitido comprar en tiendas virtuales, examinar posibles lugares de vacaciones a través de visitas virtuales, e incluso guardar libros virtuales en bibliotecas virtuales. Muchas personas invierten tiempo y dinero en explorar y aventurarse por mundos enteros que sólo existen en la imaginación de alguien y en un servidor de juegos.
        .col-lg-4
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img73.png', alt='')

    p.mb-5 La virtualización en computación suele referirse a la abstracción de algún componente físico en un objeto lógico. Al virtualizar un objeto, se puede obtener una mayor utilidad del recurso que proporciona el objeto. Por ejemplo, las LAN (redes de área local) virtuales, o VLAN, proporcionan un mayor rendimiento de la red y una mejor capacidad de gestión al estar separadas del <em>hardware</em> físico. Del mismo modo, las redes de área de almacenamiento (SAN) proporcionan una mayor flexibilidad, una mejor disponibilidad y un uso más eficiente de los recursos de almacenamiento al abstraer los dispositivos físicos en objetos lógicos que pueden manipularse rápida y fácilmente. Sin embargo, el análisis se centrará en la virtualización de ordenadores completos.
                
    .bg_12-1.mb-5
      .row
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img74.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p Si todavía no está familiarizado con la idea de la virtualización computacional, es posible que sus primeros pensamientos sean los de la realidad virtual, la tecnología que, mediante el uso de sofisticadas proyecciones visuales y retroalimentación sensorial, puede dar a una persona la experiencia de estar realmente en ese entorno creado. En un nivel fundamental, esto es exactamente lo que es la virtualización computacional: es cómo una aplicación computacional experimenta su entorno creado.

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img75.svg')
      .col-lg-8
        .bg_34.p-4.pt-xxl-5
          .row.justify-content-center
            .col.pe-5
              p La primera virtualización generalizada se realizó en los <em>mainframes</em> de IBM en los años 60, pero fueron <em>Gerald Popek y Robert Goldberg</em> quienes en 1974 codificaron el marco que describe los requisitos para que un sistema computacional soporte la virtualización. Su artículo  Formal <em>requirements for virtualizable third generation architectures</em> describe las funciones y propiedades de las máquinas virtuales y de los monitores de máquinas virtuales que se siguen utilizando en la actualidad (Popek & Goldberg, 1974). 

    p Por su definición, una máquina virtual (VM) puede virtualizar todos los recursos de <em>hardware</em>, incluidos los procesadores, la memoria, el almacenamiento y la conectividad de red. Un monitor de máquina virtual (VMM), que hoy en día se denomina comúnmente hipervisor, es el <em>software</em> que proporciona el entorno en el que operan las VM. La siguiente figura ilustra de forma sencilla un VMM.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 9.
      span <em>Diagrama de una máquina virtual</em>
    
    .bg_25.p-4.py-5.mb-4
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img77.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <b>Virtualization essentials</b> (Vol. 19), por M. Portnoy, 2012, John Wiley & Sons. Según Popek y Goldberg.

    p.text-bold.mb-5 Un VMM debe presentar tres propiedades para satisfacer correctamente su definición:

    .row.justify-content-center.mb-5
      .col-lg-9
        .row.justify-content-center.mb-3.mb-lg-5
          .col-sm-6.col-lg-4.mb-4(data-aos="fade-right")       
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img78.svg', alt='')
              h4 Fidelidad
              p El entorno que se crea para la VM es esencialmente idéntico al de la máquina física original (<em>hardware</em>).

          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-right")        
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img79.svg', alt='')
              h4 Aislamiento o seguridad
              p El VMM debe tener un control total de los recursos del sistema.
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-left")        
            .tarjeta--boton.color-acento-contenido.p-4
              .row.mb-5
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img80.svg', alt='')
              h4 Rendimiento
              p Debe haber poca o ninguna diferencia de rendimiento entre la VM y un equivalente físico.

    .row.mb-4.mb-lg-5(data-aos="fade-right")
      .col-lg-5
        .bg_35.p-4
          h3.ms-4.text-white La importancia de la virtualización

    .bg_14
      .row.justify-content-center.align-items-center.mb-5.mb-lg-4
        .col-lg-4
          figure.mb-5(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img81.png', alt='')
        .col-lg-8
          p Aquí es donde se unen las dos historias. Hubo una explosión salvaje de centros de datos repletos de servidores; pero con el paso del tiempo, en una combinación del efecto de la Ley de Moore y el modelo "un servidor, una aplicación", esos servidores hicieron cada vez menos trabajo. Afortunadamente, la ayuda llegó en forma de virtualización. La idea y la ejecución de la virtualización no eran nuevas, ya funcionaba en los <em>mainframes</em> de IBM a principios de los años 70, pero se actualizó para los sistemas informáticos modernos. 
          p Siguiendo la definición de <em>Popek y Goldberg</em> (1974), la virtualización permite que muchos sistemas operativos se ejecuten en el mismo <em>hardware</em> de servidor al mismo tiempo, manteniendo cada máquina virtual funcionalmente aislada de todas las demás. Así, la primera solución comercialmente disponible para proporcionar virtualización para ordenadores x86 vino de la mano de VMware en 2001.  Y dos años después, llegó una oferta paralela de código abierto llamada Xen. Estas soluciones (VMMs, o hipervisores) tomaron la forma de una capa de <em>software</em> que vivía entre un sistema operativo y las máquinas virtuales (VMs) o se instalaba directamente en el <em>hardware</em>, al igual que un sistema operativo tradicional como Windows o Linux.

    p.mb-5 Lo que la virtualización aportó a esos centros de datos sobrecargados y a los servidores infrautilizados fue la capacidad de condensar varios servidores físicos en un servidor que ejecutará muchas máquinas virtuales, lo que permitiría que ese servidor físico funcionará a una tasa de utilización mucho mayor. Esta condensación de servidores se denomina consolidación (Ver figura 10). Una medida de la consolidación se denomina ratio de consolidación y se calcula contando el número de máquinas virtuales en un servidor; por ejemplo, un servidor que tiene ocho máquinas virtuales funcionando en él tiene una ratio de consolidación de 8:1. La consolidación fue una bendición para los asediados centros de datos y los gestores de operaciones porque resolvió una serie de problemas cruciales justo cuando se había alcanzado un umbral crítico. Incluso un modesto ratio de consolidación de 4:1 podría eliminar tres cuartas partes de los servidores de un centro de datos.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 10.
      span <em>Consolidación de virtualización</em>
    
    .bg_26.p-4.py-5.mb-4.d-none.d-lg-block
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img83.svg', alt='')    
    figcaption.mb-5 <b>Nota.</b> Tomada de <b>Virtualization essentials</b> (Vol. 19), por M. Portnoy, 2012, John Wiley & Sons.

    .row.justify-content-center.mb-4
      .col-12
        figure(data-aos="fade-down-right")
          img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema1/img84.svg', alt='')

    .bg_30
      .row.mb-4
        .col-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto 
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema1/img85.svg', alt='')
        .col-lg-10(data-aos="fade-right")
          p En los centros de datos más grandes, donde se alojaban cientos o incluso miles de servidores, la virtualización proporciona una forma de retirar gran parte de los servidores lo que redujo el espacio total de un centro de datos y los requisitos de energía y refrigeración, además de eliminar la necesidad de construir centros de datos adicionales. Por extensión, con menos servidores, menos costos de mantenimiento del <em>hardware</em> menos tiempo de los administradores de sistemas dedicado a la realización de muchas otras tareas rutinarias.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Además de la consolidación, se produjo un segundo avance. A medida que las empresas empezaron a ver las ventajas de la virtualización, dejaron de comprar nuevos equipos cuando terminaban sus contratos de alquiler o, si eran propietarios de estos, cuando caducaron sus licencias de mantenimiento de <em>hardware</em>. En su lugar, virtualización esas cargas de trabajo del servidor, lo que se conoce como contención. La contención benefició a las empresas de múltiples maneras: ya no tenían que renovar grandes cantidades de <em>hardware</em> año tras año y todos los costos de gestión y mantenimiento de esos servidores (energía, refrigeración, etc.) se eliminaban.  
        p Hasta el momento en que la virtualización se hizo comercialmente viable, la Ley de Moore iba en contra del modelo existente de aplicación/servidor/centro de datos; después de que se hizo factible, en realidad ayudó. Los ratios de consolidación de la primera generación de hipervisores x86 eran del orden de 5:1. Con el paso del tiempo, los chips más potentes y la memoria más grande permitieron ratios de consolidación mucho más altos, en los que un solo servidor físico podía albergar docenas o cientos de máquinas virtuales. En lugar de eliminar tres de cada cuatro servidores, la virtualización actual puede eliminar cómodamente nueve de cada diez; o con servidores suficientemente configurados, noventa y nueve de cada cien. Como resultado, la mayoría de los centros de datos corporativos han recuperado gran parte del espacio que habían perdido antes de la virtualización.
      .col-lg-4
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img86.png', alt='')

    p.text-bold Observe a continuación los usos y posibilidades que ofrece el modelo de virtualización:

    .bg_36.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center
          .col-11.col-lg-6.mb-4.mb-lg-0.align-self-center
            div 
              h4 Virtualización de servidores
              p El hipervisor abstrae la capa física para uso de servidores virtualizados o máquinas virtuales. Los hipervisores son la base de los entornos virtuales y las máquinas virtuales, los motores que impulsan las aplicaciones, conteniendo todo lo que sus homólogas físicas (sistemas operativos, aplicaciones, conexiones de red, acceso al almacenamiento), pero empaquetado en un conjunto de archivos de datos. Este empaquetamiento hace que las máquinas virtuales sean mucho más flexibles y manejables (pueden clonarse, actualizarse, incluso trasladarse) sin interrumpir las aplicaciones de los usuarios.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img88.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-11.col-lg-6.mb-4.mb-lg-0.align-self-center
            div
              h4 Virtualización de escritorios
              p Alternativa para la computación de escritorios que para las empresas resulta costosa e ineficiente (requiere personal para actualizaciones de <em>software</em>, soporte de <em>hardware</em>, asistencia técnica).   
              p Los escritorios virtuales se ejecutan en servidores del centro de datos al igual que las aplicaciones a las que se conectan los usuarios, lo que reduce enormemente el tráfico de red y amplía los recursos.  En cuanto a la seguridad, máquinas virtuales específicamente diseñadas que residen en cada host, protegen todos los escritorios virtuales que allí se ejecutan.   
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img89.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-11.col-lg-6.mb-4.mb-lg-0.align-self-center
            div
              h4 Virtualización de aplicaciones
              p Ofrece facilidad de despliegue con herramientas que gestionan y automatizan miles de aplicaciones diferentes y sus actualizaciones de forma repetida y fiable.  
              p También proporciona apoyo en cuanto a la interacción de las aplicaciones.  Es difícil saber cómo una actualización puede afectar a otras, incluso las actualizaciones más sencillas pueden resultar problemáticas. Algunos tipos de virtualización de aplicaciones pueden mitigar o incluso evitar este problema al encapsular todo el programa y el proceso. 
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img90.png', alt='Texto que describa la imagen')

    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
