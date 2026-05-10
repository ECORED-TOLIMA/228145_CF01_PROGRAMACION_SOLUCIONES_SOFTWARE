<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El dominio de las metodologías de desarrollo de software y del levantamiento de requisitos constituye un pilar fundamental en la formación de profesionales de áreas tecnológicas. A lo largo de este proceso formativo se han abordado conceptos, técnicas y herramientas que permiten comprender y aplicar estos conocimientos en contextos reales de trabajo, avanzando desde los fundamentos teóricos hasta su aplicación práctica. Este recorrido no ha sido lineal ni meramente acumulativo; por el contrario, cada tema ha enriquecido y resignificado a los anteriores, construyendo una visión integrada y sistémica del desarrollo de software que trasciende la simple suma de sus componentes.
    p Las metodologías de desarrollo, ya sean tradicionales o ágiles, no son fines en sí mismas sino medios para lograr el objetivo último: construir software que satisfaga las necesidades del cliente, dentro del tiempo y presupuesto acordados, con la calidad requerida. La selección de la metodología adecuada es una decisión estratégica que el analista debe tomar considerando el contexto específico de cada proyecto, y que no admite respuestas universales ni dogmatismos metodológicos. En el panorama actual, el conocimiento de ambos enfoques y la capacidad de combinarlos inteligentemente constituyen una ventaja competitiva significativa para el profesional del software. El analista que comprende cuándo la disciplina del modelo en cascada protege al proyecto y cuándo la flexibilidad de SCRUM lo impulsa, es un profesional que agrega valor real desde el primer día de cualquier proyecto, independientemente del sector, el tamaño de la organización o la naturaleza del sistema que se va a construir.
    p El levantamiento de requisitos es la actividad que determina el éxito o el fracaso de un proyecto de software en mayor medida que cualquier otra. Los errores en los requisitos son los más costosos de corregir, los que más impactan la satisfacción del cliente y los más difíciles de detectar tardíamente, porque se ocultan bajo capas de código aparentemente correcto que implementa funcionalidades incorrectas. Por ello, el analista debe dominar un amplio repertorio de técnicas de elicitación —entrevistas, encuestas, observación, focus group, análisis de documentos, prototipado— y saber cuándo y cómo aplicar cada una para obtener información de calidad que guíe el desarrollo hacia el producto correcto. Pero más allá del dominio técnico de estas herramientas, el analista debe cultivar algo que ningún manual puede enseñar completamente: la capacidad de escuchar con atención genuina, de hacer la pregunta que nadie más pensó en hacer, y de traducir la complejidad del negocio en especificaciones que el equipo técnico pueda implementar con precisión y confianza.
    p Los roles en el proceso de levantamiento de requisitos son interdependientes y complementarios, y su correcta comprensión es tan importante como el dominio de las técnicas de elicitación. La distinción clara entre usuario, actor y stakeholder, y el entendimiento profundo de los roles operativos —cliente líder, Product Owner, equipo de desarrollo y analista de requisitos— son condiciones necesarias para gestionar eficazmente la complejidad social de los proyectos de software. El analista, como coordinador central de este ecosistema de roles, debe desarrollar tanto competencias técnicas como habilidades interpersonales de alto nivel, siendo consciente de que los proyectos de software no fracasan únicamente por razones técnicas sino, con mucha mayor frecuencia, por razones humanas: comunicación deficiente, expectativas no alineadas, conflictos de interés no resueltos y decisiones tomadas sin el consenso de las partes relevantes.
    p Finalmente, es fundamental comprender que los conocimientos adquiridos en este componente formativo no son un punto de llegada sino un punto de partida. La ingeniería de software es una disciplina viva que evoluciona continuamente: nuevos frameworks, nuevas herramientas, nuevos estándares y nuevos paradigmas emergen con una velocidad que exige del profesional un compromiso permanente con el aprendizaje continuo. Lo que no cambia y lo que este componente ha buscado construir, es la capacidad de pensar con rigor ante un problema complejo, de comunicarse con claridad entre mundos distintos y de poner siempre las necesidades reales del usuario en el centro de cada decisión técnica. Esa capacidad, más que cualquier herramienta o metodología específica, es lo que define al verdadero profesional del análisis y desarrollo de software.
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
