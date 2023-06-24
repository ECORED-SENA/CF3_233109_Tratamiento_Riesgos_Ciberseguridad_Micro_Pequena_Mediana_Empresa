<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Diseño de controles

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img01.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p El debido cuidado profesional en materia de ciberseguridad implica la realización de todas las prácticas razonables necesarias para cumplir un estándar mínimo de diligencia que garantice un rendimiento fiable de la seguridad a largo plazo. Si estas prácticas se llevan a cabo de forma adecuada, se puede decir que la organización ha cumplido con sus obligaciones legales y éticas de protección de la información (Kohnke, Shoemaker & Sigler, 2016).
        p En la práctica, la norma de atención adoptada debe incorporar todos los elementos conocidos necesarios para hacer frente a las amenazas e incidentes probables.  Y dado que las consecuencias prácticas del fracaso son reales y pueden ser drásticas, la ignorancia de lo que hay que hacer no es una defensa contra la responsabilidad.  De todos modos, es mucho esperar que los profesionales de la ciberseguridad conozcan y sean capaces de satisfacer los requisitos de la debida atención profesional.  Por lo tanto, sería útil disponer de un modelo general de buenas prácticas de ciberseguridad para ayudar a esa comprensión.  Idealmente, este modelo debería ser universal en su aplicación y comúnmente aceptado como correcto dentro de la comunidad de profesionales.

    p Las recomendaciones del modelo deben incorporar todas las mejores prácticas actualmente conocidas para garantizar la confidencialidad, la integridad y la disponibilidad de la información. Además, estas recomendaciones deben expresarse de forma que permitan a un profesional competente desarrollar un conjunto concreto de contramedidas para proteger la información que tiene a su cargo.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.1 Tipos

    p.mb-4 Para simplificar la terminología, las áreas de amenaza común que podrían requerir algún tipo de control o contramedida radican según Kohnke, Shoemaker & Sigler (2016), en lo siguiente:

    .bg_37.p-4.mb-5
      .row.justify-content-around
        .col-lg-4.mb-4.mb-lg-0.align-self-center(data-aos="fade-right")
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema2/img03.svg', alt='')
        .col-lg-7.align-self-center(data-aos="fade-left")
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              span Política.
            li
              i.fas.fa-check-circle
              span Control de la gobernanza.
            li
              i.fas.fa-check-circle
              span Seguridad del personal.
            li
              i.fas.fa-check-circle
              span Seguridad física y del entorno.
            li
              i.fas.fa-check-circle
              span Gestión de activos.
            li
              i.fas.fa-check-circle
              span Control de acceso.
            li
              i.fas.fa-check-circle
              span Seguridad de las operaciones.
            li
              i.fas.fa-check-circle
              span Seguridad de la red.
            li
              i.fas.fa-check-circle
              span Seguridad informática.
            li
              i.fas.fa-check-circle
              span Seguridad en el desarrollo y mantenimiento del <em>software</em>.
            li
              i.fas.fa-check-circle
              span Adquisición.
            li
              i.fas.fa-check-circle
              span Gestión de incidentes.
            li
              i.fas.fa-check-circle
              span Cumplimiento de la normativa.
            li
              i.fas.fa-check-circle
              span Continuidad.
            li
              i.fas.fa-check-circle
              span Elementos de los factores humanos, como la formación y la educación.

    .bg_38
      .row.mb-5.mb-lg-4
        .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
          p Los controles sugeridos por cada una de estas normas pueden servir como punto de referencia para desarrollar una respuesta de ciberseguridad a medida. Sin embargo, ninguno de ellos será eficaz a menos que la organización lleve a cabo un análisis exhaustivo del entorno de amenazas utilizando algún tipo de lista de comprobación u otra orientación estándar que normalmente se desarrolla a partir del conjunto de controles recomendados.
        .col-lg-2.order-1.order-lg-2.mb-4.mb-lg-0
          .row.justify-content-center
            .col-auto
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema2/img04.svg', alt='')

    p El término que se utiliza normalmente para describir marcos como este es "modelo paraguas", en el sentido de que su propósito es definir el conjunto completo de competencias asociadas al trabajo de ciberseguridad. El uso de cualquiera de estos modelos consiste en estandarizar conceptos y términos en un conjunto de prácticas profesionales recomendadas. Dicha estandarización centra entonces la formulación de prácticas de control en objetivos de control específicos que existen dentro de cada una de las categorías estándar.

    .btn-h3.mb-4
      span.h3  Implementación del proceso

    p La aplicación de cualquiera de estos modelos en un entorno práctico se posibilita y se sostiene a través de un plan estratégico de gestión de la ciberseguridad que enumera las áreas generales y actividades de control que constituirán el proceso global de gobierno de la ciberseguridad. Esto incluye el desglose de los procedimientos específicos que se seguirán para realizar el trabajo, además de todas las funciones, responsabilidades e interrelaciones de la organización que deben estar explícitamente definidas y asignadas por este plan. El producto final de este proceso es un enfoque estratégico completo y totalmente documentado de la seguridad de la información.

    p.text-bold.mb-5 La siguiente secuencia presenta algunos elementos de consideración para la implementación del proceso:

    .bg_color1.p-4
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                h4 Establecer el esquema formal de identificación de activos.
                p Integra todos los activos de información de la organización en una representación de base coherente para la asignación del control.  En tanto el esquema de identificación es la documentación del objetivo de control en sí mismo, define la forma del sistema de gobierno operativo para la gestión de la ciberseguridad.
              .col-lg-5(data-aos="fade-left")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img05.png', alt='Texto que describa la imagen')

            .row.justify-content-end.align-items-center
              .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img06.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
                h4 Acordar y explicitar los criterios para la identificación de los elementos del activo.
                p Incluye un desglose de todos los criterios de decisión que se emplearán para definir las distintas cualidades del activo. Afirmaciones como <em>"El elemento de información debe ser directamente rastreable y apoyar un proceso de negocio"</em>, podrían utilizarse como base para decidir si un elemento de información tiene valor para la organización.

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                h4 Garantizar que las personas responsables del etiquetado sigan los criterios establecidos.
                p Importante contar con un procedimiento que posibilite el seguimiento.
              .col-lg-5(data-aos="fade-left")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img07.png', alt='Texto que describa la imagen')

            .row.justify-content-end.align-items-center
              .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
                h4 Identificación y etiquetado de activos.
                p Cada activo de información se identifica y se etiqueta adecuadamente. Es esencialmente un proceso de documentación asociado al caso de negocio.

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                h4 Descripción de una línea de base de alto nivel de elementos.
                p Esta línea de base desglosa los elementos que componen una determinada función del mundo real, como las facturas y las cuentas que forman parte del libro mayor. Estas líneas de base de alto nivel son más descriptivas que detalladas y se centran en el nivel de los gestores y usuarios.
              .col-lg-5(data-aos="fade-left")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img09.png', alt='Texto que describa la imagen')

            .row.justify-content-end.align-items-center
              .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
                h4 Detalle de elementos individuales.
                p Se detallan todos los elementos individuales que componen los grandes elementos de la línea de base de alto nivel. Cada uno de estos elementos de datos componentes también se identifica individualmente y se etiqueta de forma única. El resultado es una descripción de elementos del mundo real que requieren control.

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                h4 A cada objetivo de control un conjunto de controles de comportamiento.
                p Dado que los comportamientos de control varían en su propósito y efecto, es importante que a cada objetivo de control se le asigne un conjunto de controles de comportamiento cuidadosamente elaborados.
              .col-lg-5(data-aos="fade-left")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')

            .row.justify-content-end.align-items-center
              .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
                h4 Gestión de la configuración.
                p Función de análisis y autorización aplicable al conjunto de objetivos de control y controles asociados. Es necesario un proceso exhaustivo considerando la constante evolución de los objetivos de control y la estructura de control que cambia en función de las alteraciones de la política y de la forma del propio activo.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.2 Características

    .bg_14-1.mb-5
      .row.justify-content-center.mb-5.mb-lg-4
        .col-lg-8(data-aos="fade-right")
          p Con el objetivo de establecer y mantener una imagen correcta y en continua evolución de la forma de los objetivos de control y sus controles asociados, se hace necesario adelantar acciones de documentación y mantenimiento mediante una función de seguimiento y contabilidad de la línea de base. Este registro se mantiene normalmente en algún tipo de repositorio electrónico, o "libro de contabilidad" que es utilizado por la función de seguimiento y contabilidad de la línea de base de control para realizar el análisis de impacto antes de la autorización del cambio y se actualiza oportunamente una vez que el cambio ha sido aprobado e implementado.
          p El proceso de mantenimiento del conjunto de controles se extiende a todo el proceso de ciberseguridad y exige un análisis de los requisitos precisos de seguridad. Para ello, la organización debe adelantar las siguientes acciones:
        .col-lg-4
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema2/img14.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Definir comportamientos de control apropiados")
            .col-lg-11
              p Avanzar elemento por elemento a través de la línea base y decidir qué comportamientos de control son apropiados y factibles para proteger la integridad y disponibilidad de los componentes de la información. Esta actividad se basa en el grado de riesgo estimado, cuya evaluación formal o informal, debe identificar todas las debilidades lógicas.
          .row(titulo="Evaluar los tipos de amenaza")
            .col-lg-11
              p Los tipos de amenaza se evalúan y clasifican en forma de tabla bidimensional dependiendo de si son físicos o lógicos y la fuente interna o externa, de donde provengan.
          .row(titulo="Evaluar la viabilidad de los controles")
            .col-lg-11
              p Evaluar la viabilidad de cada uno de los controles que se desplegarán para responder a cada amenaza identificada. El resultado práctico del proceso de identificación de activos y formulación de la línea de base de control es un sistema de gobernanza de ciberseguridad que funciona.
          .row(titulo="Formular normas, procedimientos o comportamientos de control")
            .col-lg-11
              p Estos comportamientos dictarán con precisión cómo los controles específicos de ciberseguridad interactúan entre sí dentro del esquema de gobierno. La ejecución de los comportamientos de control requeridos para cada elemento de información debe explicarse en forma de prácticas de trabajo detalladas, a las que se hace referencia en los documentos de política y procedimiento pertinentes.
          .row(titulo="Especificar comportamientos concretos")
            .col-lg-11
              p Asegurarse de incluir la especificación de comportamientos concretos para dictar:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  | Secuencia y calendario de utilización del control.
                li
                  i.fas.fa-check-circle
                  | Prácticas específicas de control.
                li
                  i.fas.fa-check-circle
                  | Responsabilidades.
                li
                  i.fas.fa-check-circle
                  | Documentación e informes.
                li
                  i.fas.fa-check-circle
                  | Responsabilidad en la resolución de problemas.

    p El campo de la ciberseguridad abarca las medidas adecuadas para garantizar que los datos electrónicos se mantengan a salvo de accesos no autorizados o de daños. Los procesos, las tecnologías y las prácticas en el campo de la ciberseguridad se desarrollan al servicio de este propósito. Un conjunto eficaz de controles de ciberseguridad debe:

    .row.justify-content-center.mb-2.mb-lg-5
      .col-xxl-12.col-lg-10.col-md-12(data-aos="fade-down")
        SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-4").color_i-1
          .tarjeta-avatar.hg-100
            img.img85(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop').m-auto
            .tarjeta.color-acento-contenido
              .p-4
                p.text-center Identificar y autenticar con precisión a todas las entidades que desean acceder a un sistema.
          .tarjeta-avatar.hg-100
            img.img85.mx-auto(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                p.text-center Autorizar el acceso sólo a los objetos que el nivel de confianza de la entidad permite.
          .tarjeta-avatar.hg-100
            img.img85.mx-auto(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                p.text-center Supervisar y controlar las actividades durante el tiempo en que se concede el acceso a la entidad.
          .tarjeta-avatar.hg-100
            img.img85.mx-auto(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                p.text-center Asegurar el acceso no autorizado o la manipulación de los datos.
          .tarjeta-avatar.hg-100
            img.img85.mx-auto(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                p.text-center Asegurar la manipulación no autorizada de los objetos del sistema.

    p.mb-4 La aplicación estratégica de los principios de ciberseguridad se centra en la cuestión de decidir qué se necesita para determinar el valor de la seguridad para una organización y a partir de allí, considerar aspectos de relevancia como los que se destacan en la siguiente infografía:

    .bg_40.p-4
      .row.justify-content-center
        .col-lg-12
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema2/img22.svg', alt='La imagen nos presenta cómo lograr un enfoque estratégico de la seguridad de la información, para lo cual se requiere la suma de:Una estructura tangible y coherente de controles técnicos y de gestión (gobernanza administrativa).Una políticas, estructuras organizativas, prácticas y procedimientos.Unas responsabilidades para funciones empresariales específicas.Unas acciones de protección completas, correctas y coordinadas.Y finalmente, un proceso de planificación integral y sostenible en el tiempo.Lo anterior lleva a un plan de gestión estratégica, que involucra las áreas generales y las actividades de control.')


</template>

<script>
export default {
  name: 'Tema2',
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
