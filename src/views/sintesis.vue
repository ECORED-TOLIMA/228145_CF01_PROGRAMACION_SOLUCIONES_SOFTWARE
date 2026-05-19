<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La formación en metodologías de desarrollo de #[i software] y levantamiento de requisitos permite construir una comprensión integral del proceso de creación de sistemas informáticos, articulando fundamentos teóricos y aplicación práctica. A lo largo del componente se analizan metodologías tradicionales y ágiles, sus características, ventajas y limitaciones, entendidas como medios estratégicos para responder a distintos contextos de proyecto. Asimismo, se profundiza en los fundamentos de los requisitos de #[i software], sus tipos y su importancia crítica en el éxito del desarrollo, junto con el dominio de técnicas de elicitación y recolección de información como entrevistas, observación, #[i focus group] y talleres de requisitos. Finalmente, se abordan los roles involucrados —usuarios, actores, #[i stakeholders], cliente líder, #[i Product Owner], equipo de desarrollo y analista— destacando la relevancia de la comunicación, la coordinación y las habilidades humanas, así como la necesidad de un aprendizaje continuo para enfrentar la evolución constante de la ingeniería de #[i software] y mantener al usuario como eje central de las decisiones técnicas. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de forma progresiva los elementos clave del desarrollo de software centrado en los requisitos. Inicia con las metodologías de desarrollo, distinguiendo entre enfoques ágiles y tradicionales, y continúa con los fundamentos de los requisitos de software, abordando su concepto, tipos y características. Posteriormente, se incorpora la elicitación de requisitos y las técnicas de recolección de información, como la interacción con usuarios, el análisis de documentos, los focus group y los talleres de requisitos. Finalmente, el mapa integra los roles involucrados en el levantamiento y desarrollo de requisitos, destacando la participación coordinada de usuarios, cliente líder, Product Owner (PO), equipo de desarrollo y analista en la construcción de soluciones alineadas con las necesidades del negocio.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
