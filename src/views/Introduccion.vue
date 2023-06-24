<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4 Bienvenido al componente formativo “Estrategias para el endurecimiento de la ciberseguridad”. Revise el siguiente video a manera de contextualización de las temáticas que se desarrollarán en este escenario de formación.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oo0pVmRGMj4" title="Estrategias para el endurecimiento de la ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Estrategias para el endurecimiento de la ciberseguridad

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
