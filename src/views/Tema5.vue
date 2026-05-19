<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Roles en el desarrollo y levantamiento de requisitos
    figure
      img(src='@/assets/curso/temas/tema5/img1.png' alt='AvatarTop')
    .p-4.bgf5.mb-4
      p.mb-0 El levantamiento de requisitos es un proceso colaborativo que involucra a múltiples actores con roles, responsabilidades y perspectivas distintas. Comprender quiénes son estos actores, qué papel desempeñan y cómo se relacionan entre sí es fundamental para gestionar eficazmente la comunicación y asegurar que todos los puntos de vista relevantes sean considerados en la definición del sistema.
    p.mb-0 Una identificación incompleta de los #[i stakeholders] puede resultar en requisitos que no reflejan las necesidades de todos los grupos afectados, generando resistencia durante la implementación o un sistema que, aunque técnicamente correcto, no satisface las necesidades reales del negocio. El analista debe ser sistemático y exhaustivo en la identificación de todos los actores desde el inicio del proyecto, utilizando técnicas como el análisis de #[i stakeholders] y los mapas de poder-interés.    
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Usuarios, actores y #[i stakeholders]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img2.png' alt='AvatarTop')
      .col-lg-9
        p En todo proyecto de desarrollo de #[i software] coexisten múltiples personas y organizaciones con intereses, expectativas y niveles de influencia distintos sobre el sistema que se va a construir. Comprender con precisión quiénes son, qué rol desempeñan y cómo se diferencian entre sí es una de las primeras responsabilidades del analista de requisitos, ya que de esta comprensión depende la calidad y la representatividad de la información que se recopile durante el proceso de elicitación. Los conceptos de usuario, actor y #[i stakeholder] son frecuentemente confundidos o utilizados como sinónimos en el lenguaje cotidiano de los equipos de desarrollo, pero en la ingeniería de #[i software] tienen significados precisos y complementarios que el profesional debe dominar. Ignorar a alguno de estos actores durante el levantamiento de requisitos es una de las causas más frecuentes de que el producto final no satisfaga a todos los grupos involucrados, generando resistencia en la implementación y costosas revisiones posteriores. Por ello, identificar, clasificar y gestionar adecuadamente a cada uno de estos actores desde el inicio del proyecto es una práctica que el analista debe ejecutar con rigor y sistematicidad.
        p.mb-0 Por lo anterior, se explica cada uno:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Usuario")
        .row.justify-content-center.align-items-center
          .col-lg-10
            p El usuario es la persona que interactúa directamente con el sistema de #[i software] para realizar sus tareas cotidianas. Es quien introduce datos, consulta información, genera reportes y toma decisiones apoyado en el sistema. Existen diferentes tipos de usuarios según su nivel de experiencia técnica (novatos, intermedios, expertos), su frecuencia de uso (ocasionales y habituales) y sus objetivos específicos dentro del sistema.
            p Los usuarios son la fuente más directa de información sobre los requisitos funcionales, pues son quienes mejor conocen los procesos que el sistema debe soportar. Sin embargo, frecuentemente tienen dificultades para articular sus necesidades en términos abstractos; prefieren describirlas mediante ejemplos concretos y casos de uso específicos, por lo que el analista debe facilitar su expresión mediante técnicas adecuadas como el prototipado, los escenarios de uso y el #[i role-playing].
            .p-4.bgf3
              p.text-white Ejemplo:
              p.mb-0.text-white El usuario percibe confianza en la marca al saber que sus datos son tratados de manera ética, utilizados únicamente para los fines informados y gestionados con transparencia, lo que le brinda seguridad y control sobre su información.
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg' alt='AvatarTop')
      .row(titulo="Actor (en el contexto UML)")
        .row.justify-content-center.align-items-center
          .col-lg-10
            p En el contexto de los casos de uso (técnica de especificación UML), un actor representa un rol que una persona, sistema externo u organización desempeña al interactuar con el sistema en desarrollo. A diferencia del usuario (persona específica), el actor es una abstracción: la misma persona puede desempeñar múltiples actores en el sistema, y el mismo actor puede ser desempeñado por múltiples personas con características similares.
            .p-4.bgf3.mb-4
              p.text-white Ejemplo:
              p.mb-0.text-white En un sistema de gestión hospitalaria, la persona “María García” puede ser tanto “Médico tratante” (cuando registra diagnósticos y ordena exámenes) como “Usuario del sistema de citas” (cuando agenda sus propias citas de formación). 
            p.mb-0 Los actores se representan en los diagramas de casos de uso como figuras humanas etiquetadas con el nombre del rol, lo que facilita la comprensión visual de las interacciones del sistema.
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg' alt='AvatarTop')
      .row(titulo="<em>Stakeholder</em>")
        .row.justify-content-center.align-items-center
          .col-lg-10
            p El término #[i stakeholder] (parte interesada) hace referencia a cualquier persona, grupo u organización que tiene un interés en el sistema, ya sea porque se beneficia de él, lo financia, lo desarrolla, lo regula o se ve afectado por su implementación. Los #[i stakeholders] no necesariamente interactúan directamente con el sistema; su interés puede ser de carácter económico, legal, operativo o estratégico.
            .p-4.bgf3.mb-4
              p.text-white Ejemplo:
              p.mb-0.text-white La dirección general (define objetivos estratégicos y aprueba el presupuesto), el departamento legal (impone restricciones de cumplimiento normativo), los usuarios finales (utilizarán el sistema diariamente), los administradores de sistemas (responsables del despliegue y mantenimiento), los reguladores externos (definen restricciones legales y normativas como la Ley 1581 de datos personales en Colombia) y los proveedores cuya integración puede ser necesaria.
            
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg' alt='AvatarTop')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Para complementar los anteriores conceptos, la siguiente tabla aclara las diferencias conceptuales entre los tres términos que con mayor frecuencia generan confusión en los equipos de proyecto: usuario, actor y #[i stakeholder]. Dominar esta distinción es esencial para comunicarse con precisión en el ámbito profesional del desarrollo de #[i software]:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Diferencias entre usuario, actor y #[i stakeholder]
    .row.justify-content-center.align-items-center
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table
              thead
                tr
                  th Concepto
                  th Definición
                  th Ejemplo concreto
                  th Relación con el sistema
                  th Fuente de requisitos
              tbody
                tr
                  td Usuario
                  td Persona que usa el sistema directamente.
                  td Cajero en un banco.
                  td Directa y frecuente.
                  td Requisitos funcionales.
                tr
                  td Actor (UML)
                  td Rol modelado en casos de uso.
                  td Rol: cajero, supervisor, auditor.
                  td Directa (en casos de uso).
                  td Flujos de interacción.
                tr
                  td #[i Stakeholder]
                  td Cualquier parte con interés en el sistema.
                  td Director financiero, regulador SFC.
                  td Directa o indirecta.
                  td Requisito de negocio / dominio. 
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Cliente líder, dueño del producto, equipo de desarrollo y analista
    p.mb-4 En los proyectos de desarrollo de #[i software], la correcta definición y articulación de los roles involucrados en la gestión y el levantamiento de requisitos es un factor crítico para el éxito del producto final. La diversidad de intereses, conocimientos y responsabilidades hace necesario establecer claramente quién representa al negocio, quién toma decisiones sobre el alcance, quién construye la solución y quién garantiza que las necesidades del cliente se traduzcan adecuadamente en especificaciones técnicas.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, roles como el cliente líder, e dueño del producto, el equipo de desarrollo y el analista de requisitos cumplen funciones complementarias que permiten asegurar una comunicación fluida entre los usuarios, el negocio y el equipo técnico. Cada uno aporta una perspectiva distinta al proceso de elicitación, validación y priorización de requisitos, contribuyendo a reducir ambigüedades, gestionar expectativas y alinear el producto con los objetivos estratégicos de la organización.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Comprender las responsabilidades, autoridad y competencias de cada uno de estos roles resulta fundamental para evitar solapamientos, conflictos de decisión o vacíos de información que puedan afectar la calidad del producto. A continuación, se describen de manera detallada las características y funciones de cada uno de estos actores dentro del proceso de desarrollo:
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Cliente líder
    p El cliente líder (también conocido como representante de usuarios o power user) es un usuario con alto conocimiento del dominio del negocio que actúa como enlace entre el grupo de usuarios y el equipo de desarrollo. Este rol es fundamental en proyectos donde el número de usuarios es grande y no es práctico involucrar a todos directamente en el proceso de elicitación. Su selección debe ser cuidadosa, ya que representa los intereses de sus colegas y sus decisiones vinculan al grupo de usuarios.
    p.mb-4 El cliente líder tiene autoridad para tomar decisiones sobre los requisitos en nombre de su grupo de usuarios. Sus responsabilidades incluyen:
    .row.justify-content-center.BG04.p-5
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img7.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-5
                img(src="@/assets/curso/temas/tema5/img8.svg", alt="alt").img100.m-auto
            h5.text-center #[b Autoridad en la toma de decisiones]
            p.text-center.mb-0 Tiene la facultad de decidir sobre los requisitos en representación de su grupo de usuarios, vinculando sus decisiones al conjunto del colectivo.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-5
                img(src="@/assets/curso/temas/tema5/img9.svg", alt="alt").img100.m-auto
            h5.text-center #[b Participación en el levantamiento y validación]
            p.text-center.mb-0 Interviene activamente en las sesiones de elicitación y validación para asegurar que los requisitos reflejen las necesidades reales del negocio.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-5
                img(src="@/assets/curso/temas/tema5/img11.svg", alt="alt").img100.m-auto
            h5.text-center #[b Revisión y aprobación de requisitos]
            p.text-center.mb-0 Revisa y aprueba la especificación de requisitos, garantizando su coherencia y alineación con los procesos del usuario.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-5
                img(src="@/assets/curso/temas/tema5/img12.svg", alt="alt").img100.m-auto
            h5.text-center #[b Priorización de funcionalidades]
            p.text-center.mb-0 Define el orden de las funcionalidades desde la perspectiva del valor y la utilidad para los usuarios finales.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-5
                img(src="@/assets/curso/temas/tema5/img13.svg", alt="alt").img100.m-auto
            h5.text-center #[b Facilitación del acceso a usuarios]
            p.text-center.mb-0 Actúa como puente entre el equipo de desarrollo y otros usuarios cuando se requiere información adicional o validaciones específicas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center
              .col-9
                img(src="@/assets/curso/temas/tema5/img14.svg", alt="alt").img100.m-auto
            h5.text-center #[b Punto de contacto del negocio]
            p.text-center.mb-0 Es la referencia principal para resolver dudas relacionadas con los procesos del negocio durante el desarrollo del proyecto.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Para desempeñar este rol efectivamente, el cliente líder debe reunir varias condiciones: conocimiento profundo y actualizado de los procesos del negocio, capacidad para comunicarse tanto con usuarios no técnicos como con el equipo de desarrollo, disponibilidad real de tiempo para participar en el proyecto (lo que implica un acuerdo formal con su jefatura), autoridad reconocida por sus colegas usuarios, y habilidades para gestionar conflictos y llegar a consensos cuando existen intereses divergentes entre grupos de usuarios.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 #[i Product Owner] (dueño del producto)
    p.mb-4 El #[i Product Owner] (PO) es un rol propio de los frameworks ágiles, especialmente de SCRUM. Es el responsable de maximizar el valor del producto y de gestionar el #[i product backlog] (lista priorizada de requisitos). Actúa como el representante del negocio dentro del equipo de desarrollo, tomando decisiones sobre qué funcionalidades se construirán, en qué orden y con qué criterios de aceptación. Es el único que puede agregar, modificar o re-priorizar ítems del #[i product backlog].
    p.mb-4 El PO tiene tres responsabilidades fundamentales que el Scrum Guide define con precisión: 
    
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema5/img15.svg", alt="alt")
          h5.text-center Definición de ítems del product backlog
          p.text-center.mb-0 Establece claramente los ítems del #[i product backlog] mediante user stories bien formuladas y criterios de aceptación medibles y verificables.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/img16.svg", alt="alt")
          h5.text-center Priorización basada en valor y riesgo
          p.text-center.mb-0 Ordena los ítems considerando el valor para el negocio, el riesgo técnico y las dependencias entre funcionalidades, asegurando un uso óptimo de los recursos.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/img17.svg", alt="alt")
          h5.text-center Aseguramiento de la comprensión del equipo
          p.text-center.mb-0 Verifica que el equipo de desarrollo comprenda los requisitos con el nivel de detalle necesario para su correcta implementación en cada sprint.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p A diferencia del cliente líder, el PO tiene plena autoridad para tomar decisiones sobre el producto sin consultar a la dirección en cada caso. Esta autoridad es indispensable para que el equipo ágil pueda planificar y ejecutar sprints con certeza, sin interrupciones causadas por la falta de una persona con poder de decisión sobre el alcance.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Equipo de desarrollo
    p.mb-4 El equipo de desarrollo está compuesto por los profesionales responsables de construir el sistema: programadores, diseñadores UX/UI, arquitectos de #[i software] e ingenieros de pruebas (QA). En los procesos ágiles, el equipo es multifuncional y autoorganizado: sus miembros poseen colectivamente todas las habilidades necesarias para construir el producto y deciden internamente cómo organizar su trabajo para alcanzar los objetivos de cada sprint sin supervisión directa de un gerente de proyecto.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-gg.bgf5.p-2.p-sm-4.p-md-3
          .bloque-texto-gg__img2(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img18.png')})`}"
          )
          .bloque-texto-gg__texto2.p-2
            p.mb-0 El rol del equipo de desarrollo en el levantamiento de requisitos es activo, no pasivo. Los desarrolladores participan en las sesiones de refinamiento del #[i backlog], hacen preguntas que clarifican los requisitos antes de comenzar la implementación, identifican dependencias técnicas y ambigüedades que el analista puede no haber detectado, estiman el esfuerzo de implementación de cada historia de usuario, y proponen soluciones técnicas alternativas cuando los requisitos originales presentan complejidad excesiva o riesgos técnicos significativos que el cliente no había anticipado.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Analista de requisitos
    p.mb-4 El analista de requisitos es el profesional especializado en el proceso de ingeniería de requisitos. Su función principal es actuar como puente entre el mundo del negocio y el mundo técnico, traduciendo las necesidades del cliente en especificaciones comprensibles para el equipo de desarrollo. Es el responsable de garantizar que los requisitos sean completos, consistentes y verificables, y de gestionar los cambios que inevitablemente surgen durante el desarrollo del proyecto.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          .row
            .col-lg-10
                p Las competencias clave del analista abarcan tanto habilidades técnicas (dominio de técnicas de elicitación, modelos de especificación UML, herramientas de gestión de requisitos como JIRA o Azure DevOps, estándares IEEE 830 y 29148) como interpersonales (comunicación efectiva con personas de diferentes perfiles, escucha activa, facilitación de reuniones, negociación de prioridades y gestión constructiva de conflictos entre #[i stakeholders] con intereses divergentes).
                p.mb-0 El analista también es responsable de la trazabilidad de requisitos: asegurar que cada requisito pueda vincularse a su origen (stakeholder o documento de negocio) y a los artefactos de diseño, código y pruebas que lo implementan. Esta trazabilidad es fundamental para evaluar el impacto de los cambios, gestionar el alcance del proyecto y demostrar el cumplimiento de regulaciones en sectores altamente controlados como el financiero, el de salud o el gubernamental.
            .col.lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema5/img19.svg", style="width:110px", alt="alt")
    p.mb-4 La siguiente tabla resume las responsabilidades, el nivel de autoridad y la habilidad más crítica de cada rol. Esta información es la base para construir la matriz RACI del proyecto —Responsable, Aprobador, Consultado, Informado— que define con precisión quién participa en cada actividad del levantamiento de requisitos y en qué capacidad:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Roles en el levantamiento de requisitos: responsabilidades y autoridad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table
              thead
                tr
                  th Rol
                  th Contexto
                  th Responsabilidad principal
                  th Autoridad sobre requisitos
                  th Habilidad clave
              tbody
                tr
                  td Cliente líder
                  td Proyectos tradicionales y ágiles.
                  td Representar usuarios, validar requisitos.
                  td Alta (en nombre de usuarios).
                  td Conocimiento del negocio.
                tr
                  td #[i Product Owner]
                  td Proyectos ágiles (SCRUM).
                  td Gestionar y priorizar #[i product backlog].
                  td Total sobre el producto.
                  td Visión de producto y negocio.
                tr
                  td Equipo desarrollo
                  td Todos los contextos.
                  td Implementar requisitos, estimar esfuerzo.
                  td Ninguna (receptor).
                  td Habilidades técnicas.
                tr
                  td Analista requisitos
                  td Todos los contextos.
                  td Elicitar, documentar y gestionar.
                  td Facilita y coordina.
                  td Comunicación y análisis.
                tr
                  td #[i Stakeholder] ejecutivo
                  td Proyectos estratégicos.
                  td Definir objetivos, aprobar presupuesto.
                  td Alta (objetivos estratégicos).
                  td Visión estratégica. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4 De igual manera, la siguiente imagen ilustra la matriz RACI aplicada a las cinco actividades principales del proceso de levantamiento de requisitos, mostrando cómo se distribuyen las responsabilidades entre los roles. Esta herramienta es indispensable para proyectos con múltiples #[i stakeholders] y evita ambigüedades sobre quién toma las decisiones en cada etapa:
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Matriz RACI para las actividades de levantamiento de requisitos
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img20.svg', alt='Figura 9 que presenta una matriz RACI aplicada a las actividades de levantamiento de requisitos, en la cual se identifican los roles de analista, cliente líder, Product Owner, equipo de desarrollo y directivo; además, se especifica su nivel de participación como responsables, aprobadores, consultados o informados en cada etapa del proceso, desde la planificación de la elicitación hasta la gestión de cambios y la priorización del backlog.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img20_1.svg', alt='Figura 9 que presenta una matriz RACI aplicada a las actividades de levantamiento de requisitos, en la cual se identifican los roles de analista, cliente líder, Product Owner, equipo de desarrollo y directivo; además, se especifica su nivel de participación como responsables, aprobadores, consultados o informados en cada etapa del proceso, desde la planificación de la elicitación hasta la gestión de cambios y la priorización del backlog.')
        
</template>

<script>
export default {
  name: 'Tema5',
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
