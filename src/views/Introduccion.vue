<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p El desarrollo de software es una de las actividades más complejas y estratégicas del mundo contemporáneo. A medida que las organizaciones dependen cada vez más de los sistemas de información para operar, competir y crecer, la capacidad de construir software de calidad, en el tiempo y presupuesto acordados, se convierte en una ventaja competitiva determinante. Sin embargo, la historia de la ingeniería de software está plagada de proyectos fallidos, retrasados o que no satisfacen las necesidades reales de sus usuarios.
    p.mb-4 Ante este panorama, dos disciplinas se erigen como pilares fundamentales del éxito en los proyectos de software:
    .row.mb-4
      .col-lg-6
        .tarjeta-avatar-b.mb-4.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h5 Las metodologías
              p Proporcionan el marco de trabajo que organiza, guía y controla el proceso de construcción del software.
      .col-lg-6
        .tarjeta-avatar-b.mb-4.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h5 El levantamiento de requisitos
              p Asegura que el sistema que se construye responde efectivamente a las necesidades del cliente y los usuarios finales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Por lo anterior, este componente formativo está diseñado para que se adquieran las competencias necesarias para comprender, seleccionar y aplicar metodologías de desarrollo de software, así como para dominar las técnicas de levantamiento y gestión de requisitos. El componente aborda desde los conceptos fundamentales hasta las técnicas prácticas de recolección de información, pasando por los roles que intervienen en estos procesos.
        .cajon.color-primario.p-4.mb-4
          p El dominio de estos conocimientos y habilidades es esencial para el desempeño profesional en contextos de desarrollo de software, ya que permite actuar como puente entre las necesidades del negocio y las soluciones tecnológicas, traduciendo los requerimientos de los usuarios en especificaciones técnicas claras que orienten al equipo de trabajo hacia la construcción de productos de software de calidad.
      .col-lg-3
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de forma progresiva los elementos clave del desarrollo de software centrado en los requisitos. Inicia con las metodologías de desarrollo, distinguiendo entre enfoques ágiles y tradicionales, y continúa con los fundamentos de los requisitos de software, abordando su concepto, tipos y características. Posteriormente, se incorpora la elicitación de requisitos y las técnicas de recolección de información, como la interacción con usuarios, el análisis de documentos, los focus group y los talleres de requisitos. Finalmente, el mapa integra los roles involucrados en el levantamiento y desarrollo de requisitos, destacando la participación coordinada de usuarios, cliente líder, Product Owner (PO), equipo de desarrollo y analista en la construcción de soluciones alineadas con las necesidades del negocio.")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
  
</template>

<script>
export default {
  name: 'Introduccion',
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
