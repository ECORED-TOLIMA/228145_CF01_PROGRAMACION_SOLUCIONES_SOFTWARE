<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Elicitación de requisitos de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 La elicitación de requisitos es la actividad más crítica y desafiante dentro del proceso de ingeniería de requisitos. El término “elicitación” (del latín elicere, extraer o sacar a la luz) hace referencia al proceso de descubrir, extraer y recopilar los requisitos del sistema a partir de diversas fuentes: #[i stakeholders] humanos, documentos existentes, sistemas actuales y el entorno organizacional. La dificultad fundamental radica en que los usuarios frecuentemente no pueden articular con claridad lo que necesitan, o simplemente no son conscientes de todas sus necesidades hasta que interactúan con prototipos o versiones tempranas del sistema. Este fenómeno, bien documentado en la literatura de ingeniería de #[i software], se conoce como el “problema de los requisitos implícitos”.
    p.mb-4 El analista experto sabe que los usuarios tienden a describir los síntomas de sus problemas, no las causas raíz. Cuando un usuario dice “el sistema es lento”, el analista debe indagar: ¿lento en qué operaciones específicas?, ¿cuánto tiempo es aceptable?, ¿bajo qué condiciones de carga? Esta capacidad de transformar descripciones vagas en requisitos precisos y verificables es la competencia más diferenciadora del analista de requisitos.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Otros desafíos frecuentes incluyen: diferentes #[i stakeholders] con visiones contradictorias sobre los objetivos del sistema (que el analista debe mediar y reconciliar), suposiciones implícitas que los usuarios dan por sentadas sin verbalizarlas (como que “por supuesto el sistema guardará automáticamente cada 5 minutos”), resistencia al cambio por parte de usuarios que temen que el nuevo sistema altere su posición o forma de trabajar y la brecha entre lo que los usuarios dicen que hacen y lo que realmente hacen en su práctica cotidiana. El analista debe anticipar y gestionar todos estos desafíos de manera proactiva, con una combinación de habilidades técnicas e interpersonales que lo posicionan como un profesional de alto valor en cualquier organización.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Concepto y análisis de documentos
    p.mb-4 El análisis de documentos es una técnica de elicitación que consiste en revisar sistemáticamente la documentación existente relacionada con el dominio del problema. Es especialmente valiosa al inicio del proyecto, cuando aún no se tiene acceso a los #[i stakeholders] o como complemento a otras técnicas para validar y enriquecer la información recopilada. Permite al analista llegar a las primeras reuniones con los #[i stakeholders] con un conocimiento previo del dominio que facilita la comunicación y la formulación de preguntas más pertinentes.
    p.mb-4 Los documentos que suelen analizarse incluyen: 
    .row.justify-content-center.fondo-slyder.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img3.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img4.svg", alt="alt").img100.m-auto
            h5.text-center #[b Manuales de procedimientos]
            p.text-center.mb-0 Describen paso a paso cómo se ejecutan actualmente los procesos operativos del negocio, permitiendo comprender flujos de trabajo, responsabilidades y reglas implícitas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img5.svg", alt="alt").img100.m-auto
            h5.text-center #[b Formularios en uso]
            p.text-center.mb-0 Incluyen formatos físicos o digitales que se emplean para la captura de información, los cuales ayudan a identificar datos requeridos, validaciones y estructuras de entrada.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img6.svg", alt="alt").img100.m-auto
            h5.text-center #[b Reportes e informes]
            p.text-center.mb-0 Presentan la información que el sistema genera para la toma de decisiones, evidenciando necesidades de control, seguimiento y análisis.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img7.svg", alt="alt").img100.m-auto
            h5.text-center #[b Actas y registros históricos]
            p.text-center.mb-0 Documentan decisiones, acuerdos, compromisos y cambios definidos en reuniones previas, aportando contexto clave sobre la evolución del proyecto.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img8.svg", alt="alt").img100.m-auto
            h5.text-center #[b Contratos y acuerdos]
            p.text-center.mb-0 Establecen obligaciones, alcances, niveles de servicio y restricciones legales que deben reflejarse en los requisitos del sistema.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img9.svg", alt="alt").img100.m-auto
            h5.text-center #[b Regulaciones del sector]
            p.text-center.mb-0 Definen normas y disposiciones legales obligatorias que condicionan el diseño, funcionamiento y operación del sistema.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt").img100.m-auto
            h5.text-center #[b Documentación de sistemas legados]
            p.text-center.mb-0 Permite identificar dependencias, integraciones existentes y limitaciones técnicas que deben considerarse en el nuevo desarrollo.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema3/img11.svg", alt="alt").img100.m-auto
            h5.text-center #[b Especificaciones de proyectos anteriores]
            p.text-center.mb-0 Aportan experiencias previas, lecciones aprendidas y requisitos reutilizables que pueden optimizar el levantamiento actual.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2.mb-4
          p.mb-0 El proceso de análisis de documentos implica: identificar y recopilar todos los documentos relevantes disponibles, revisar su contenido para extraer información sobre el dominio, identificar los procesos actuales y sus flujos de trabajo, detectar problemas o limitaciones del sistema actual que ya han sido documentados, y validar los hallazgos con los #[i stakeholders] para confirmar que la información sigue siendo actual y relevante para el nuevo sistema.
        p.mb-4 El siguiente esquema presenta un mapa visual de las principales fuentes de requisitos que el analista debe explorar sistemáticamente durante el proceso de elicitación. Cada fuente aporta un tipo diferente de información y requiere técnicas específicas de recolección, lo que explica por qué se recomienda combinar múltiples técnicas en todo proyecto:
        .titulo-sexto.color-acento-contenido
          h5 Figure 3.
          span Fuentes de requisitos en el proceso de elicitación
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img12_1.svg', alt='Matriz RACI para dispositivos móviles')
        
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
