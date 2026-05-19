<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de #[i software]
    figure
      img(src='@/assets/curso/temas/tema1/img1.png' alt='AvatarTop')
    .p-4.bgf5.mb-4
      p.mb-0 Una metodología de desarrollo de #[i software] es un conjunto estructurado de prácticas, principios, técnicas y herramientas que orientan al equipo de desarrollo en la producción de #[i software] de calidad, dentro de los plazos y presupuestos establecidos. Las metodologías no son fórmulas rígidas, sino marcos de referencia que deben adaptarse al contexto específico de cada proyecto y organización.
    p La importancia de contar con una metodología radica en que proporciona un lenguaje común al equipo, define responsabilidades claras, establece puntos de control para medir el avance y permite gestionar los riesgos de manera proactiva. Sin una metodología, los proyectos de #[i software] tienden a caer en el desarrollo ad hoc, donde la falta de estructura genera inconsistencias, retrabajo y productos de baja calidad que no satisfacen al cliente.
    p.mb-4 Históricamente, el desarrollo de #[i software] ha transitado por varias etapas:
    .BGDEGRA.px-4
      .row.justify-content-center.mb-4
        .col-lg-10
          LineaTiempoE.color-acento-contenido.mb-4
            .row(titulo="")
              .col-lg-2.col-8.mb-3.mb-lg-0
                figure
                  img.img200(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
              .col-lg-10.mb-4.mb-lg-0
                h5 Años 60–70. Desarrollo artesanal
                p.mb-0 El desarrollo de #[i software] se realizaba de forma empírica, sin metodologías definidas ni procesos estandarizados. El código se construía de manera manual, dependiente de la experiencia individual del programador.
            .row(titulo="")
              .col-lg-2.col-8.mb-3.mb-lg-0
                figure
                  img.img200(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')
              .col-lg-10.mb-4.mb-lg-0
                h5 Años 70–80. Modelos secuenciales
                p.mb-0 Surgen metodologías formales como el modelo en cascada y el modelo espiral, orientadas a aplicar principios de ingeniería, control y documentación al proceso de desarrollo de #[i software].
            .row(titulo="")
              .col-lg-2.col-8.mb-3.mb-lg-0
                figure
                  img.img200(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
              .col-lg-10.mb-4.mb-lg-0
                h5 Años 90. Enfoques flexibles
                p.mb-0 Aparecen modelos que buscan mayor adaptabilidad frente al cambio, cuestionando la rigidez de los enfoques tradicionales y priorizando la iteración y la retroalimentación continua.
            .row(titulo="")
              .col-lg-2.col-8.mb-3.mb-lg-0
                figure
                  img.img200(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
              .col-lg-10.mb-4.mb-lg-0
                h5 2001. Manifiesto Ágil
                p.mb-0 La publicación del Manifiesto Ágil marca un punto de inflexión, consolidando principios centrados en la colaboración, la entrega incremental y la respuesta al cambio.
            .row(titulo="")
              .col-lg-2.col-8.mb-3.mb-lg-0
                figure
                  img.img200(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
              .col-lg-10.mb-4.mb-lg-0
                h5 Actualidad. Enfoques híbridos y escalado ágil
                p.mb-0 Predominan enfoques que combinan metodologías tradicionales y ágiles, junto con #[i frameworks] de escalado ágil utilizados en proyectos empresariales de gran tamaño.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bgf2-1.text-center.p-3
          p.mb-0 Para complementar lo anterior, se presenta la siguiente imagen que de manera exacta indica la evolución metodológica por años:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1
          span Línea de tiempo de la evolución de las metodologías de desarrollo de #[i software]
    .row.justify-content-center.align-items-center
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img7.svg', alt='Figura 1 que muestra la línea de tiempo de la evolución de las principales metodologías de desarrollo de software, desde el modelo en cascada de 1970 hasta los enfoques híbridos actuales, ilustrando cómo cada era respondió a las limitaciones del enfoque anterior.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img7_1.svg', alt='Figura 1 que muestra la línea de tiempo de la evolución de las principales metodologías de desarrollo de software, desde el modelo en cascada de 1970 hasta los enfoques híbridos actuales, ilustrando cómo cada era respondió a las limitaciones del enfoque anterior.')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Metodologías ágiles y tradicionales
    p.mb-4 Las metodologías de desarrollo se clasifican en dos grandes familias: las tradicionales (predictivas o pesadas) y las ágiles (adaptativas o livianas). Esta clasificación no es dicotómica ni absoluta; existen metodologías híbridas que combinan elementos de ambos enfoques para adaptarse a contextos específicos de las organizaciones y los proyectos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Entender las diferencias fundamentales entre estos dos enfoques no es un ejercicio meramente académico: es una competencia práctica que el analista y el equipo de desarrollo deben dominar para tomar decisiones informadas al inicio de cada proyecto. La elección de una metodología inadecuada puede comprometer el éxito del proyecto desde sus primeras semanas, generando fricciones con el cliente, desmotivación en el equipo y productos que no responden a las necesidades reales del negocio.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4 En la práctica profesional actual, la dicotomía entre ágil y tradicional ha dado paso a un espectro más amplio y matizado. Organizaciones como el Ejército de los Estados Unidos, que históricamente era el bastión del desarrollo tradicional, han adoptado principios ágiles en sus proyectos de #[i software]. A su vez, equipos que trabajan con SCRUM incorporan elementos de disciplina documental propios de los enfoques tradicionales cuando el contexto regulatorio o contractual lo exige.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Conocer en profundidad ambas familias metodológicas le permite al profesional navegar este espectro con criterio, seleccionando y combinando los elementos que mejor respondan a las características únicas de cada proyecto y organización.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Metodologías tradicionales
    p Nacieron en una época en la que el #[i software] se concebía y construía de manera similar a la infraestructura física: a partir de planos detallados, fases secuenciales bien definidas y contratos de alcance fijo. Este enfoque resultó eficaz mientras los requisitos eran estables, los entornos poco cambiantes y los sistemas relativamente simples. Sin embargo, a medida que el #[i software] se convirtió en un factor clave de la innovación empresarial y los mercados comenzaron a transformarse con mayor rapidez, la rigidez de estos modelos empezó a evidenciar limitaciones significativas, las cuales serían cuestionadas de forma directa por el Manifiesto Ágil en 2001.
    p.mb-4 Las metodologías tradicionales surgieron antes de la década de 1990 y se caracterizan por una planificación exhaustiva al inicio del proyecto, fases secuenciales bien delimitadas y documentación extensa. Estas metodologías destacan los siguientes modelos o enfoques:
    .BG01.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Modelo en cascada (#[i waterfall])
              p Propuesto por Winston Royce en 1970, es el representante paradigmático de este enfoque. Sus fases son secuenciales y dependientes: análisis de requisitos, diseño del sistema, implementación, pruebas, despliegue y mantenimiento. La premisa central es que los requisitos son conocidos, estables y completamente definibles desde el inicio, lo que permite planificar con precisión el alcance, el costo y el tiempo total del proyecto.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Modelo en espiral
              p Creado por Barry Boehm en 1986, introdujo un avance significativo al incorporar la gestión explícita de riesgos en ciclos iterativos. Cada espiral se compone de cuatro cuadrantes: determinación de objetivos y alternativas, análisis y resolución de riesgos, desarrollo y prueba, y planificación del siguiente ciclo. Este modelo es especialmente valioso en proyectos de gran escala con alta incertidumbre técnica, donde identificar y mitigar riesgos en cada iteración es tan crítico como cumplir con el plan de desarrollo.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Rational Unified Process (RUP) - Proceso Unificado de Rational
              p Desarrollado por Booch, Jacobson y Rumbaugh en 1999, organiza el desarrollo en cuatro fases (Inicio, Elaboración, Construcción, Transición) con múltiples iteraciones dentro de cada una. RUP hace uso extensivo de UML para el modelado y produce una documentación detallada en cada fase. Es considerado un enfoque híbrido que incorpora iteraciones, pero mantiene una carga documental significativa. Las metodologías tradicionales son especialmente apropiadas para proyectos con requisitos muy estables, como sistemas de control industrial o proyectos del sector aeroespacial, de defensa o de salud con regulaciones estrictas, donde la predictibilidad supera con creces las limitaciones de flexibilidad.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Gráfico ilustrativo de uso de programa')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Metodologías ágiles
    p.mb-4 No surgieron como una tendencia circunstancial, sino como una respuesta empírica y pragmática a los reiterados fracasos de proyectos de #[i software], ampliamente documentados durante décadas por los informes CHAOS del Standish Group. Su premisa central sostiene que, en contextos de alta incertidumbre y cambio constante, la capacidad de adaptación, la colaboración continua y la entrega incremental de valor resultan más efectivas que la adhesión estricta a planes definidos con información incompleta desde el inicio.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Las metodologías ágiles emergieron como respuesta directa a las limitaciones del enfoque tradicional en proyectos con requisitos volátiles o poco definidos. El Manifiesto Ágil (2001), firmado por diecisiete expertos reunidos en Snowbird, Utah, estableció cuatro valores: individuos e interacciones sobre procesos y herramientas; #[i software] funcionando sobre documentación exhaustiva; colaboración con el cliente sobre negociación contractual; y respuesta ante el cambio sobre seguir un plan. Estos valores se complementan con doce principios que orientan la práctica cotidiana del desarrollo ágil.
        p SCRUM es el #[i framework] ágil más adoptado globalmente. Organiza el trabajo en #[i sprints] de 1 a 4 semanas, con tres roles:
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Product Owner (PO)
                p.text-center Responsable de la visión del producto y la priorización del #[i backlog]. 
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Scrum master
                p.text-center Facilitador y guardián de los valores ágiles.
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Development Team
                p.text-center Equipo multifuncional y autoorganizado. 
    .bloque-texto-gg.bloque-texto-gg--inverso.bgf2.mb-4
      .bloque-texto-gg__texto.p-4
        p Además de lo anterior, este marco de trabajo incorpora cuatro ceremonias —Sprint planning, Daily scrum, Sprint review y Sprint retrospective— que garantizan la transparencia del proceso, la inspección continua y la adaptación permanente al cambio. De manera complementaria, Extreme Programming (XP) pone un énfasis particular en las buenas prácticas técnicas, tales como el desarrollo guiado por pruebas (TDD), la programación en pareja y la integración continua, con el fin de mejorar la calidad del #[i software]. Por su parte, Kanban, adaptado del sistema de producción Toyota, se enfoca en la gestión del flujo de trabajo mediante tableros visuales y límites al trabajo en progreso (WIP), lo que permite identificar y eliminar cuellos de botella. En conjunto, estas metodologías ágiles no son excluyentes, sino que pueden combinarse estratégicamente para aprovechar sus complementariedades según las necesidades del proyecto.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img15.png')})`}"
      )      
    p.mb-4 La siguiente tabla presenta una comparación sistemática de las dimensiones más relevantes entre los dos grandes enfoques metodológicos. Esta comparación permite al analista identificar rápidamente cuál enfoque se alinea mejor con las características de un proyecto determinado:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Comparación entre metodologías tradicionales y ágiles
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Dimensión
                  th Metodologías tradicionales
                  th Metodologías ágiles
              tbody
                tr
                  th Planificación.
                  td Exhaustiva al inicio.
                  td Iterativa y adaptativa.
                tr
                  th Documentación.
                  td Extensa y formal.
                  td Mínima e indispensable.
                tr
                  th Requisitos.
                  td Fijos desde el inicio.
                  td Variables y negociables.
                tr
                  th Entregas.
                  td Una entrega al final.
                  td Entregas frecuentes (#[i sprints]).
                tr
                  th Equipo.
                  td Roles muy especializados.
                  td Equipos multifuncionales.
                tr
                  th Cliente.
                  td Involucrado al inicio y al final.
                  td Involucrado continuamente.
                tr
                  th Cambios.
                  td Costosos y difíciles.
                  td Bienvenidos y esperados.
                tr
                  th Riesgo.
                  td Detectado tardíamente.
                  td Gestionado en cada iteración.
                tr
                  th Idóneo para.
                  td Requisitos estables, alta regulación.
                  td Requisitos cambiantes, innovación.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Características, ventajas y desventajas de las metodologías
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', style="width:100px", alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 La selección de una metodología adecuada es una de las decisiones más importantes al inicio de un proyecto de #[i software]. No existe una metodología universalmente superior; la elección óptima depende de múltiples factores contextuales que el analista debe evaluar cuidadosamente. Una decisión equivocada puede condicionar negativamente todo el proyecto desde sus fases iniciales.
    p.mb-4 Los factores más relevantes para la selección incluyen: el tamaño y complejidad del proyecto, la estabilidad y claridad de los requisitos, la distribución geográfica del equipo, la cultura organizacional, las regulaciones del sector, el nivel de experiencia del equipo con metodologías ágiles o tradicionales, el tipo de contrato (precio fijo o tiempo y materiales) y las expectativas del cliente en cuanto a visibilidad y participación en el proceso de desarrollo.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Ventajas y desventajas del enfoque tradicional
    p.mb-4 Las metodologías tradicionales ofrecen ventajas significativas en contextos específicos:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')
          
        h5.text-center Alta predictibilidad del proyecto
        p La predictibilidad constituye la mayor fortaleza de las metodologías tradicionales, ya que al definir completamente el alcance antes de iniciar el desarrollo es posible estimar con mayor precisión los costos y los tiempos. Esto facilita la gestión de contratos de precio fijo y la planificación presupuestal a largo plazo.
      .col-md.tarjeta.bgf6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')
          
        h5.text-center Documentación exhaustiva
        p La producción de documentación detallada facilita el mantenimiento del sistema a lo largo del tiempo, especialmente cuando el equipo de desarrollo original ya no se encuentra disponible.
      .col-md.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen')
          
        h5.text-center Claridad en roles y responsabilidades
        p La separación del proceso en fases bien definidas reduce la ambigüedad sobre las responsabilidades de cada actor, estableciendo con claridad quién hace qué en cada etapa.
      .col-md.tarjeta.bgf7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')
          
        h5.text-center Puntos formales de control y seguimiento
        p La aprobación formal entre fases proporciona hitos de control que permiten a los patrocinadores y responsables del proyecto tener mayor visibilidad sobre el avance y la toma de decisiones.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .p-4.bgf5.bgf5-1.text-center
          p.mb-0 Sus principales desventajas son igualmente significativas:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.bt06.p-4
          ul.lista-ul
            li
              i.fas.fa-computer(style="color: #FFB758;")
              p.mb-0 #[b Rigidez frente al cambio] 
                br
                | La incorporación de modificaciones en fases avanzadas del proyecto resulta especialmente costosa, pudiendo implicar un esfuerzo entre 10 y 100 veces mayor que si los cambios se hubieran identificado durante la fase de análisis.
            li
              i.fas.fa-computer(style="color: #FFB758;")
              p.mb-0 #[b Entrega tardía de #[i software] funcional] 
                br
                | El producto operativo se entrega únicamente al final del proyecto, lo que genera largos periodos sin retroalimentación real por parte del usuario y aumenta el riesgo de que el resultado final no satisfaga las necesidades reales.
            li
              i.fas.fa-computer(style="color: #FFB758;")
              p.mb-0 #[b Detección tardía de problemas de integración] 
                br
                | Los errores y conflictos entre componentes suelen identificarse en etapas finales, cuando su corrección implica mayores costos y complejidad técnica.
            li
              i.fas.fa-computer(style="color: #FFB758;")
              p.mb-0 #[b Alta carga documental y burocrática]
                br
                | La extensa documentación requerida puede ralentizar el proceso de desarrollo y afectar la motivación del equipo técnico, especialmente en proyectos de mediana escala donde dicha carga no aporta un valor proporcional.
        .bgf3.p-3
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
            .col-lg-9
              p.text-white Ejemplo práctico:
              p.mb-0.text-white Una empresa colombiana que contrata el desarrollo de un sistema de nómina para el gobierno departamental bajo contrato de precio fijo con entrega en 18 meses, es un escenario típico donde el enfoque tradicional es apropiado. Los requisitos legales de liquidación de nómina son estables y bien conocidos, el cliente no puede participar semanalmente en el proceso, y la obligación contractual de entregar documentación completa hace de #[i Waterfall] o RUP la elección natural.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Ventajas y desventajas del enfoque ágil
    p.mb-4 Las metodologías ágiles destacan por lo siguiente:
    .bgf8.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf5.bgf5-1.text-center.p-3
          p.mb-0 Sus limitaciones son igualmente reales y deben gestionarse conscientemente:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.bt06.p-4.mb-4
            ul.lista-ul
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | #[b Dificultad en la estimación del costo total] <br>
                | Al definirse el alcance de manera progresiva, la estimación precisa del costo total del proyecto resulta compleja, lo que puede generar tensiones en contratos de precio fijo y dificultar la planificación presupuestal a largo plazo.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | #[b Menor formalización documental] <br>
                | La reducción de documentación formal puede complicar el mantenimiento del sistema y la transferencia de conocimiento cuando se producen cambios en el equipo de trabajo.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | #[b Alta dependencia del compromiso del cliente] <br>
                | Los enfoques ágiles requieren una participación continua y activa del cliente, lo cual no siempre es viable en organizaciones con alta carga operativa o disponibilidad limitada.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | #[b Desafíos de escalabilidad] <br>
                | La aplicación de metodologías ágiles en proyectos de gran escala, con equipos numerosos y distribuidos geográficamente, demanda el uso de #[i frameworks] adicionales como SAFe o LeSS, los cuales implican una curva de aprendizaje y costos de implementación significativos.
        .bgf3.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Texto que describa la imagen')
            .col-lg-9
              p.text-white Ejemplo práctico:
              p.mb-0.text-white Una #[i startup fintech] colombiana que está construyendo una aplicación móvil de pagos digitales, con requisitos que evolucionan semanalmente según el #[i feedback] de sus primeros usuarios y un equipo de 8 personas co-ubicadas, es el escenario ideal para SCRUM. La capacidad de iterar rápidamente y ajustar la dirección del producto según el aprendizaje de cada #[i sprint] es el factor diferenciador que puede determinar el éxito en un mercado tan competitivo y cambiante.
        p Partiendo de lo previamente expuesto, la siguiente tabla amplía un análisis comparativo, incluyendo metodologías específicas con sus ventajas, limitaciones y contextos de aplicación óptimos. Esta referencia es de gran utilidad al momento de fundamentar la selección metodológica ante el equipo y los patrocinadores del proyecto:       
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Metodologías de desarrollo: análisis comparativo detallado
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Metodología
                  th Tipo
                  th Iteraciones
                  th Ventaja clave
                  th Limitación principal
                  th Mejor contexto
              tbody
                tr
                  td #[i Waterfall]
                  td Tradicional
                  td No
                  td Predictibilidad
                  td Rigidez al cambio
                  td Requisitos fijos, regulado
                tr
                  td Espiral
                  td Tradicional
                  td Sí (fases)
                  td Gestión de riesgos
                  td Alta complejidad
                  td Proyectos de alto riesgo
                tr
                  td RUP
                  td Híbrido
                  td Sí
                  td Flexibilidad iterativa
                  td Documentación extensa
                  td Empresas grandes
                tr
                  td SCRUM
                  td Ágil
                  td #[i Sprints] 1-4 semanas
                  td Adaptabilidad rápida
                  td Difícil escalar
                  td Productos innovadores
                tr
                  td XP
                  td Ágil
                  td Semanas
                  td Calidad técnica
                  td Requiere alta disciplina
                  td Énfasis en código
                tr
                  td Kanban
                  td Ágil
                  td Flujo continuo
                  td Visualización flujo
                  td Sin cadencia definida
                  td Soporte/mantenimiento
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    datosSlyder: [
      {
        titulo: 'Alta adaptabilidad al cambio',
        texto:
          'La capacidad de adaptarse rápidamente al cambio constituye la ventaja más diferenciadora de las metodologías ágiles, especialmente en entornos donde los negocios evolucionan con rapidez y los usuarios descubren sus necesidades reales al interactuar con prototipos y versiones tempranas del sistema.',
        imagen: require('@/assets/curso/temas/tema1/img22.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Entrega frecuente de valor',
        texto:
          'La entrega continua de incrementos funcionales en ciclos cortos permite obtener retroalimentación real del cliente en semanas en lugar de meses o años, reduciendo significativamente el riesgo de construir un producto que no responda a las necesidades del negocio.',
        imagen: require('@/assets/curso/temas/tema1/img23.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Colaboración constante con el cliente',
        texto:
          'La interacción permanente con el cliente fomenta un mayor compromiso y sentido de propiedad sobre el producto, facilitando la toma de decisiones oportunas y alineadas con los objetivos del proyecto.',
        imagen: require('@/assets/curso/temas/tema1/img24.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Motivación y productividad del equipo',
        texto:
          'Los equipos ágiles suelen presentar mayores niveles de motivación y satisfacción laboral, lo que se traduce en menor rotación de personal y una productividad más sostenible a lo largo del tiempo.',
        imagen: require('@/assets/curso/temas/tema1/img25.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
