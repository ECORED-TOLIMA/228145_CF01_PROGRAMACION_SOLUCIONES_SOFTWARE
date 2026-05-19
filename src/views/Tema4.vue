<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnicas para la recolección de información
    p.mb-4 La recolección de información constituye el núcleo del proceso de levantamiento de requisitos, ya que de ella depende la calidad, completitud y validez del sistema de #[i software] que se construirá. Si los requisitos son el cimiento sobre el cual se edifica la solución, las técnicas de recolección son las herramientas que permiten excavar, comprender y consolidar dicho cimiento. Un sistema técnicamente impecable, pero basado en requisitos incompletos, ambiguos o mal validados, está destinado a generar insatisfacción en el cliente y a fracasar en su propósito de negocio.
    .bloque-texto-gg.tarjeta.bgf1.mb-4
      .bloque-texto-gg__texto.p-4
        p Las técnicas de recolección de información son los métodos mediante los cuales el analista obtiene datos, conocimientos y perspectivas de los #[i stakeholders]. Ninguna técnica, por sí sola, es capaz de capturar la complejidad total de las necesidades de un sistema de #[i software]; cada una actúa como una lente que ilumina ciertos aspectos del dominio mientras deja otros fuera de foco. Por esta razón, la práctica profesional recomienda combinar técnicas complementarias de forma estratégica, en lugar de depender de un único método.
        p.mb-0 El desafío central del analista de requisitos radica en cerrar la brecha entre lo que el cliente expresa y lo que realmente necesita. En muchos casos, los #[i stakeholders] no tienen una visión clara de sus requerimientos hasta que interactúan con prototipos o versiones tempranas del sistema; suelen expresar sus necesidades en términos de soluciones conocidas, omitir información que consideran obvia o confundir deseos con necesidades reales del negocio. La maestría en el uso de las técnicas de recolección es lo que distingue al analista competente de quien se limita a documentar solicitudes sin analizarlas críticamente.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
      )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0 La selección de las técnicas no es arbitraria, sino que debe basarse en el contexto del proyecto. Factores como el perfil de los #[i stakeholders], el tipo de información requerida, las restricciones de tiempo y presupuesto, y el nivel de criticidad del sistema influyen directamente en la estrategia de elicitación. Por ejemplo, en proyectos con cronogramas ajustados, los talleres colaborativos como JAD permiten consensuar requisitos en sesiones intensivas, mientras que en sistemas altamente regulados puede ser necesario aplicar técnicas más exhaustivas y profundas.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un plan de elicitación bien diseñado integra estas técnicas de manera secuencial y coherente: suele iniciar con el análisis documental y entrevistas exploratorias, continuar con observación directa para validar la comprensión del dominio, avanzar hacia sesiones colaborativas para resolver conflictos y consensuar requisitos, y finalizar con encuestas para validar y priorizar los resultados obtenidos. Este enfoque integral garantiza que ninguna perspectiva relevante quede sin explorar y que los requisitos reflejen fielmente la complejidad real de las necesidades del negocio.
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 Finalmente, es fundamental que el analista documente no solo los requisitos obtenidos, sino también las técnicas empleadas, los #[i stakeholders] involucrados y las decisiones tomadas durante el proceso. Esta trazabilidad metodológica fortalece la credibilidad del proceso de ingeniería de requisitos y permite explicar, justificar y gestionar cambios futuros de manera informada y transparente.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Técnicas de recolección de información basadas en interacción y observación
    .BGDEGRA4.px-5.p-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema4/img3.svg', alt='Infografía de matriz RACI')
        .col-lg-10
          p.mb-0 Dentro del conjunto de técnicas disponibles, las entrevistas, la observación directa, los cuestionarios y las encuestas ocupan un lugar central por su versatilidad y complementariedad. Mientras las técnicas conversacionales permiten acceder a percepciones, expectativas y motivaciones, las técnicas observacionales capturan el trabajo real tal como ocurre, y las técnicas estructuradas permiten validar y generalizar la información obtenida a una población más amplia.
      p.mb-4 La combinación estratégica de estas técnicas proporciona al analista una visión tanto profunda como amplia del dominio del problema: la observación aporta contexto y detalle comportamental; las entrevistas profundizan en las necesidades y razonamientos de los #[i stakeholders]; los cuestionarios estructuran y cuantifican la información; y las encuestas permiten validar y priorizar los hallazgos a escala organizacional.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Entrevistas
    p.mb-4 La entrevista es la técnica más utilizada y versátil en el levantamiento de requisitos. Consiste en una conversación estructurada o semi-estructurada entre el analista y uno o más #[i stakeholders], orientada a comprender procesos, necesidades, problemas y expectativas relacionadas con el sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bloque-texto-gg--inverso.bgf2
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img4.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 Las entrevistas semi-estructuradas son especialmente recomendadas en proyectos de #[i software], ya que permiten cubrir los temas planificados mientras se exploran aspectos relevantes no anticipados. Pueden realizarse de manera presencial o virtual mediante herramientas como Zoom o Microsoft Teams.
            br
            | Para una entrevista efectiva se recomienda preparar una guía de preguntas con anticipación, iniciar con preguntas abiertas, aplicar técnicas de escucha activa, grabar la sesión con consentimiento explícito y elaborar un acta de entrevista dentro de las 24 horas siguientes para validarla con el entrevistado.        

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Observación directa
    p La observación directa consiste en que el analista presencie y registre el trabajo real de los usuarios en su entorno habitual, sin interferir en sus actividades. Esta técnica es especialmente valiosa para capturar el conocimiento tácito: acciones, atajos y prácticas que los usuarios realizan de forma automática y que no suelen mencionar en entrevistas.
    p.mb-4 Una variante relevante es el protocolo de pensamiento en voz alta (think-aloud), en el cual se le pide al usuario que verbalice sus pensamientos mientras ejecuta sus tareas. Esta combinación permite comprender no solo qué hacen los usuarios, sino también por qué lo hacen de determinada manera.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .p-4.bgf2-1.text-center.mb-4  
          p.mb-0 Dentro de la observación directa se incluye lo siguiente:
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Observación estructurada
        p Utiliza una guía predefinida con categorías, actividades y comportamientos específicos que el analista debe registrar de manera sistemática durante la sesión de observación. Esto garantiza consistencia en la recolección de datos y facilita la comparación entre diferentes sesiones realizadas con distintos usuarios o en distintos contextos.
      .col-md.tarjeta.bgf6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='Texto que describa la imagen')
          
        h5.text-center Análisis de tareas
        p Complementa la observación al descomponer las actividades del usuario en pasos elementales, permitiendo identificar qué hace el usuario, en qué orden, qué decisiones toma y qué información necesita en cada etapa del proceso. Esta técnica es fundamental para el diseño de interfaces, la definición de flujos de trabajo y la identificación de puntos críticos del sistema.
      .col-md.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='Texto que describa la imagen')
          
        h5.text-center Estudios contextuales
        p Combinan la observación directa con la entrevista en el entorno real de trabajo del usuario. El analista acompaña al usuario durante la ejecución de sus tareas, observando su comportamiento y formulando preguntas en el momento preciso en que se realizan las actividades. Esta técnica proporciona un entendimiento profundo y auténtico del dominio, al eliminar la brecha entre lo que el usuario recuerda y lo que realmente ocurre en la práctica cotidiana.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Cuestionarios
    p.mb-4 Un cuestionario es un instrumento de recolección de datos compuesto por preguntas diseñadas para obtener información específica de los respondientes. En ingeniería de requisitos se utilizan para recopilar información sobre procesos actuales, frecuencia de actividades, niveles de satisfacción y expectativas frente al nuevo sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Su principal ventaja es la capacidad de llegar a un gran número de personas en poco tiempo y con bajo costo. El diseño de un cuestionario efectivo requiere definir claramente los objetivos, formular preguntas claras y no ambiguas, seleccionar adecuadamente el tipo de preguntas, ordenar los ítems de forma lógica y realizar una prueba piloto antes de su aplicación masiva.
          p.mb-0 Los tipos de preguntas más utilizados incluyen preguntas cerradas, abiertas, escalas Likert, preguntas de #[i ranking] y selección múltiple.
        p.mb-4 La siguiente imagen esquemática, ilustra el ciclo completo de diseño y aplicación de un cuestionario para el levantamiento de requisitos. Cada etapa del ciclo es indispensable: omitir la prueba piloto, por ejemplo, puede resultar en datos de baja calidad que no sirven para tomar decisiones sobre los requisitos del sistema:
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ciclo de diseño y aplicación de un cuestionario para levantamiento de requisitos
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='Figura 4 que representa el ciclo completo de diseño y aplicación de un cuestionario para el levantamiento de requisitos, relacionando de manera secuencial las etapas de definición de objetivos de información, formulación y organización de las preguntas, realización de una prueba piloto para depurar ambigüedades, aplicación masiva del instrumento y análisis de los resultados, con el fin de incorporar información confiable y validada en la especificación de requisitos del sistema.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema4/img8_1.svg', alt='Figura 4 que representa el ciclo completo de diseño y aplicación de un cuestionario para el levantamiento de requisitos, relacionando de manera secuencial las etapas de definición de objetivos de información, formulación y organización de las preguntas, realización de una prueba piloto para depurar ambigüedades, aplicación masiva del instrumento y análisis de los resultados, con el fin de incorporar información confiable y validada en la especificación de requisitos del sistema.')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Encuestas
    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p La encuesta es el proceso completo de recolección de datos que puede incluir uno o más cuestionarios aplicados a una muestra representativa de la población objetivo. En el levantamiento de requisitos, las encuestas se utilizan para validar requisitos preliminares, priorizar funcionalidades, medir niveles de satisfacción e identificar necesidades no detectadas mediante otras técnicas.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El uso de herramientas digitales facilita la distribución, el análisis automático de respuestas y la generación de reportes estadísticos. En muchos casos, las encuestas anónimas permiten obtener respuestas más honestas, especialmente cuando se indaga sobre deficiencias del sistema actual.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img9.svg', alt='Infografía de matriz RACI')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 #[i Focus group] como técnica de recopilación de información
    p.mb-4 El #[i focus group], también conocido como grupo focal, es una técnica de investigación cualitativa que reúne a un grupo pequeño de participantes (generalmente 6 a 12 personas con perfil homogéneo) para discutir un tema específico bajo la guía de un moderador especializado. En el levantamiento de requisitos, el #[i focus group] permite explorar las opiniones, percepciones, necesidades y expectativas de un grupo representativo de usuarios potenciales del sistema de manera eficiente y económica.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A diferencia de la entrevista individual, el #[i focus group] aprovecha la dinámica de grupo: las ideas de un participante estimulan nuevas perspectivas en los demás, generando una comprensión más rica y compleja del problema que la que se obtendría con entrevistas individuales por separado. Sin embargo, también implica riesgos como el pensamiento de grupo (groupthink), donde la presión social puede inhibir que algunos participantes expresen opiniones contrarias a la mayoría, especialmente si hay diferencias jerárquicas entre los participantes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.text-center.mb-0 Conociendo el contexto del #[i focus group], es importante que acceda al siguiente video, donde se explican las etapas que se debe llevar a cabo para una adecuada implementación:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="1061" height="597" src="https://www.youtube.com/embed/K1exKJ0LT-s" title="Proceso de implementación focus group" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p La siguiente tabla compara el #[i focus group] con la entrevista individual, las dos técnicas cualitativas más utilizadas en el levantamiento de requisitos. Esta comparación ayuda al analista a decidir cuál técnica es más apropiada según los objetivos específicos de cada fase del proceso de elicitación:
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 6.
              span #[i Focus group] vs. entrevistas: criterios para la selección de la técnica
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .tabla-a.color-acento-contenido 
              .tabla-a  
                table
                  thead
                    tr
                      th Criterio
                      th #[i Focus group]
                      th Entrevista individual
                  tbody
                    tr
                      th Participantes por sesión
                      td 6-12 simultáneos.
                      td 1-3 por sesión.
                    tr
                      th Duración típica
                      td 90-120 minutos.
                      td 45-90 minutos.
                    tr
                      th Tipo de información
                      td Opiniones compartidas, consensos.
                      td Perspectivas individuales profundas.
                    tr
                      th Dinámica
                      td Interacción grupal estimula ideas.
                      td Conversación uno a uno.
                    tr
                      th Riesgo principal
                      td Pensamiento de grupo (groupthink).
                      td Sesgo del entrevistador.
                    tr
                      th Moderación requerida
                      td Facilitador experto.
                      td Analista capacitado suficiente.
                    tr
                      th Costo por participante
                      td Bajo (economía de escala).
                      td Alto (más sesiones necesarias).
                    tr
                      th Recomendado para
                      td Validar requisitos, priorizar funciones.
                      td Explorar necesidades específicas profundas.  
    .BG03.px-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          figure.mb-4
            img(src='@/assets/curso/temas/tema4/img11.png', alt='Infografía de matriz RACI')
          p Por su parte, la siguiente tabla presenta las principales herramientas digitales disponibles para cada técnica de recolección de información. Conocer estas herramientas permite al analista planificar el proceso de elicitación con mayor eficiencia, aprovechando las capacidades tecnológicas disponibles en el mercado actual:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Herramientas digitales para técnicas de recolección de información
    .row.justify-content-center.align-items-center
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table
              thead
                tr
                  th Técnica
                  th Herramienta recomendada
                  th Uso principal
                  th Ventaja clave
              tbody
                tr
                  td Encuestas / cuestionarios
                  td Google Forms, SurveyMonkey
                  td Distribución masiva y análisis
                  td Gratuito, fácil de usar
                tr
                  td Entrevistas virtuales
                  td Zoom, Microsoft Teams
                  td Sesiones remotas con grabación
                  td Transcripción automática
                tr
                  td #[i Focus group] virtual
                  td Miro, FigJam, Teams
                  td Colaboración en tiempo real
                  td Pizarras colaborativas
                tr
                  td Observación remota
                  td Hotjar, FullStory
                  td Análisis de comportamiento web
                  td Mapas de calor automáticos
                tr
                  td Gestión de requisitos
                  td JIRA, Azure DevOps
                  td Documentar y priorizar requisitos
                  td Trazabilidad integrada
                tr
                  td Prototipado rápido
                  td Figma, Balsamiq
                  td Validar interfaces con usuarios
                  td Colaboración en tiempo real 
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Talleres de Requisitos (JAD - Joint Application Development)
    p.mb-4 Los talleres JAD (Joint Application Development) son sesiones colaborativas estructuradas donde #[i stakeholders], usuarios, desarrolladores y otros participantes clave trabajan juntos de manera intensiva para definir, analizar y validar requisitos de #[i software]. Esta técnica fue desarrollada por IBM en la década de 1970 como una alternativa más eficiente a las entrevistas individuales tradicionales.
    p.mb-4 A diferencia de las entrevistas uno-a-uno que pueden tomar semanas y la observación directa que es principalmente pasiva, los talleres JAD permiten obtener consenso rápido, resolver conflictos de requisitos en tiempo real y fomentar la colaboración entre diferentes áreas de la organización.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta.bgf1.p-4
            .row.justify-content-center.align-items-center
              .col-lg-8.order-2.order-lg-1
                p Sus características principales son:
                ol.lista-ol--cuadro
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Sesiones intensivas de 2-5 días consecutivos.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Participación simultánea de todos los #[i stakeholders] clave.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Facilitador neutral que guía las discusiones.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Escriba dedicado que documenta decisiones en tiempo real.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Uso de técnicas visuales y colaborativas (pizarras, post-its, diagramas).
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Toma de decisiones inmediata con autoridad presente.       
              .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema4/img12.png', alt='Texto que describa la imagen')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Roles en un taller JAD
    p.mb-4 El éxito del taller depende de la correcta asignación de roles, por ello se deben tener en cuenta los siguientes, los cuales tiene unas responsabilidades y poseen un perfil ideal:
    .row.justify-content-center.BG04.p-5
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img13.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema4/img14.svg", alt="alt").img100.m-auto
            h5.text-center #[b Facilitador]
            p.text-center.mb-4 Responsabilidades: guiar discusiones, mantener enfoque, resolver conflictos, asegurar participación equitativa.
            p.text-center.mb-0 Perfil ideal: neutral, experimentado, habilidades interpersonales.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema4/img15.svg", alt="alt").img100.m-auto
            h5.text-center #[b Escriba]
            p.text-center.mb-4 Responsabilidades: documentar decisiones, capturar requisitos en tiempo real.
            p.text-center.mb-0 Perfil ideal: rápido escribiendo, atención al detalle.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema4/img16.svg", alt="alt").img100.m-auto
            h5.text-center #[b Sponsor]
            p.text-center.mb-4 Responsabilidades: aprobar decisiones, resolver escalamientos, proveer autoridad.
            p.text-center.mb-0 Perfil ideal: gerente senior con poder de decisión.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema4/img17.svg", alt="alt").img100.m-auto
            h5.text-center #[b Usuarios]
            p.text-center.mb-4 Responsabilidades: expresar necesidades, validar requisitos, proveer casos de uso.
            p.text-center.mb-0 Perfil ideal: representativos de cada perfil de usuario.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema4/img18.svg", alt="alt").img100.m-auto
            h5.text-center #[b Desarrolladores]
            p.text-center.mb-4 Responsabilidades: evaluar factibilidad técnica, estimar esfuerzo, proponer soluciones. 
            p.text-center.mb-0 Perfil ideal: arquitectos y desarrolladores senior.
    p.mb-4 Con el fin de ilustrar de manera práctica cómo se desarrollan los talleres JAD y cómo se aplican distintas técnicas colaborativas para la elicitación, análisis y priorización de requisitos, a continuación, se presentan algunos ejemplos representativos que muestran la dinámica de trabajo, la interacción entre los participantes y las herramientas comúnmente utilizadas en este tipo de sesiones:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Ejemplo 1. Configuración típica de un taller JAD")
        .col-lg
          p La disposición física del espacio es fundamental para facilitar la colaboración:
          .row.justify-content-center.align-items-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 5.
                span Configuración típica de un taller JAD
              .d-none.d-lg-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img19.svg', alt='Figura 5 que representa la configuración típica de un taller JAD, en la que la disposición en mesa en U y la ubicación del facilitador, usuarios y equipo técnico alrededor del área de trabajo central favorecen la colaboración y la interacción entre los participantes.')
              .d-lg-none.d-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img19_1.svg', alt='Figura 5 que representa la configuración típica de un taller JAD, en la que la disposición en mesa en U y la ubicación del facilitador, usuarios y equipo técnico alrededor del área de trabajo central favorecen la colaboración y la interacción entre los participantes.')
      .row(titulo="Ejemplo 2. User Story Mapping")
        .col-lg
          p Técnica visual para organizar historias de usuario mostrando el flujo de trabajo y prioridades. Este ejemplo muestra un sistema de e-commerce:
          .row.justify-content-center.align-items-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 6.
                i User Story Mapping
              .d-none.d-lg-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img20.svg', alt='Figura 6 que representa un User Story Mapping para un sistema de e-commerce, donde las historias de usuario se organizan por etapas del flujo (registrarse, buscar, comprar y recibir) y se priorizan en releases sucesivos, desde un MVP inicial hasta funcionalidades de mayor complejidad.')
              .d-lg-none.d-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img20_1.svg', alt='Figura 6 que representa un User Story Mapping para un sistema de e-commerce, donde las historias de usuario se organizan por etapas del flujo (registrarse, buscar, comprar y recibir) y se priorizan en releases sucesivos, desde un MVP inicial hasta funcionalidades de mayor complejidad.')
      .row(titulo="Ejemplo 3. Diagrama de afinidad")
        .col-lg
          p Método para organizar grandes cantidades de requisitos en grupos relacionados. Los participantes escriben ideas en post-its y colaborativamente las agrupan:
          .row.justify-content-center.align-items-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 7.
                span Diagrama de afinidad
              .d-none.d-lg-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img21.svg', alt='Figura 7 que representa un diagrama de afinidad en el que los requisitos se organizan colaborativamente en grupos temáticos —gestión de usuarios, reportes y analytics, y seguridad— a partir de ideas registradas en post-its, facilitando el análisis y la estructuración de la información.')
              .d-lg-none.d-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img21_1.svg', alt='Figura 7 que representa un diagrama de afinidad en el que los requisitos se organizan colaborativamente en grupos temáticos —gestión de usuarios, reportes y analytics, y seguridad— a partir de ideas registradas en post-its, facilitando el análisis y la estructuración de la información.')
      .row(titulo="Ejemplo 4. Matriz de priorización")
        .col-lg
          p Herramienta para evaluar requisitos según criterios de Importancia vs. urgencia (matriz de Eisenhower):
          .row.justify-content-center.align-items-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 8.
                span Matriz de priorización
              .d-none.d-lg-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img22.svg', alt='Figura 8 que representa una matriz de priorización tipo Eisenhower, en la que los requisitos se clasifican según su nivel de importancia y urgencia, permitiendo identificar tareas críticas, urgentes, planificables o prescindibles para apoyar la toma de decisiones.')
              .d-lg-none.d-block.mb-4
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema4/img22_1.svg', alt='Figura 8 que representa una matriz de priorización tipo Eisenhower, en la que los requisitos se clasifican según su nivel de importancia y urgencia, permitiendo identificar tareas críticas, urgentes, planificables o prescindibles para apoyar la toma de decisiones.')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .p-4.bgf2-1.text-center
          p.mb-0 Los talleres JAD se complementan con las otras técnicas de elicitación de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Comparativa talleres JAD con otras técnicas de elicitación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table
              thead
                tr
                  th Criterio
                  th Entrevistas
                  th Observación
                  th Talleres JAD
              tbody
                tr
                  th Participantes
                  td 1-2 personas.
                  td 1-2 observadores.
                  td 5-15 #[i stakeholders].
                tr
                  th Duración
                  td 30-90 minutos.
                  td 2-8 horas.
                  td 2-5 días.
                tr
                  th Ventaja
                  td Profundidad individual.
                  td Descubre workflows reales.
                  td Consenso rápido.
                tr
                  th Desventaja
                  td Consume mucho tiempo.
                  td Altera comportamiento.
                  td Difícil coordinar.
                tr
                  th Cuándo usar
                  td Perspectiva de expertos.
                  td Entender procesos actuales.
                  td Validar y resolver conflictos. 
    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.text-center.mb-0 Los talleres JAD, igualmente poseen unos aspectos positivos y negativos como son:
    
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema4/img23.svg', alt='Texto que describa la imagen')
        h5.text-center Ventajas
        p ° Educción dramática del tiempo de elicitación (semanas → días).
        p ° Consenso y resolución de conflictos inmediata.
        p ° Mayor compromiso de los #[i stakeholders] con las decisiones tomadas.
        p.mb-0 ° Creatividad potenciada por la interacción grupal.
      .col-md.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema4/img24.svg', alt='Texto que describa la imagen')
        h5.text-center Desventajas
        p ° Alto costo de coordinación (difícil reunir a múltiples personas clave).
        p ° Requiere facilitador experto en manejo de grupos.
        p ° Riesgo de dinámicas problemáticas (personalidades dominantes).
        p.mb-0 ° Fatiga de participantes en sesiones muy extensas.
      

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.text-center 
          p.mb-0 ¿Cuándo utilizar talleres JAD?
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bgf1.p-4
            .row.justify-content-center.align-items-center
              .col-lg-8.order-2.order-lg-1
                p Los talleres JAD son más efectivos cuando:
                ol.lista-ol--cuadro
                  li
                  i.fas.fa-computer(style="color: ##FFB758;")
                  | Hay múltiples #[i stakeholders] con perspectivas diferentes que deben alinearse.
                  li
                  i.fas.fa-computer(style="color: ##FFB758;")
                  | Se requiere consenso rápido para avanzar el proyecto.
                  li
                  i.fas.fa-computer(style="color: ##FFB758;")
                  | Existen conflictos conocidos entre áreas que necesitan resolverse.
                  li
                  i.fas.fa-computer(style="color: ##FFB758;")
                  | El proyecto es complejo y requiere validación cruzada entre técnicos y usuarios.
                  li
                  i.fas.fa-computer(style="color: ##FFB758;")
                  | Se busca innovación y creatividad en la definición de requisitos.       
              .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema4/img25.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-0 Para finalizar, la siguiente tabla sintetiza las principales características de las técnicas de recolección de información más utilizadas en ingeniería de requisitos. Esta comparativa facilita al analista la selección fundamentada de las técnicas más apropiadas según las características específicas del proyecto y el perfil de los #[i stakeholders] disponibles:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Técnicas de recolección de información: comparativa de características
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table
              thead
                tr
                  th Técnica
                  th Tipo de información
                  th Costo
                  th Tiempo
                  th Participantes
                  th Recomendada cuando...
              tbody
                tr
                  td Entrevistas
                  td Cualitativa profunda
                  td Medio
                  td Alto
                  td 1-3
                  td Se necesita perspectiva individual detallada.
                tr
                  td Observación
                  td Comportamiento real
                  td Medio
                  td Alto
                  td 1-2
                  td Existe brecha entre lo dicho y lo hecho.
                tr
                  td Cuestionarios
                  td Cuantitativa masiva
                  td Bajo
                  td Medio
                  td Muchos
                  td Hay muchos usuarios dispersos geográficamente.
                tr
                  td Encuestas
                  td Validación y priorización cuantitativa
                  td Bajo-medio
                  td Medio
                  td Muchos (muestra representativa)
                  td Se requiere validar, priorizar o generalizar requisitos preliminares.
                tr
                  td #[i Focus group]
                  td Opiniones grupales
                  td Medio
                  td Medio
                  td 6-12
                  td Se necesita consenso entre grupos de usuarios.
                tr
                  td Talleres JAD
                  td Colaborativa
                  td Alto
                  td Bajo-medio
                  td 10-20
                  td Se necesitan decisiones rápidas y consenso.          
</template>

<script>
export default {
  name: 'Tema4',
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
