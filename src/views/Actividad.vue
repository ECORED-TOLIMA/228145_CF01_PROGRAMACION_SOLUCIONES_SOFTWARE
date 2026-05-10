<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      #Actividad
        <Actividad :cuestionario="cuestionario"/>

  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Metodologías de desarrollo y levantamiento de requisitos de software',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la capacidad del aprendiz para aplicar las técnicas de elicitación y recolección de información aprendidas en el componente formativo CF01, identificando correctamente los tipos de requisitos, los roles involucrados y la metodología de desarrollo más apropiada para un caso de negocio real asignado por el instructor.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué año se publicó el Manifiesto Ágil y dónde fue firmado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '1999, en Silicon Valley.', esCorrecta: false },
            { id: 'b', texto: '2001, en Snowbird, Utah.', esCorrecta: true },
            {
              id: 'c',
              texto: '2001, en Seattle, Washington.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1995, en Boston, Massachusetts.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Snowbird, Utah fue el lugar histórico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Según Barry Boehm, ¿cuánto puede costar corregir un error de requisitos detectado en producción en comparación con uno detectado en la fase de análisis?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entre 10 y 20 veces más.', esCorrecta: false },
            { id: 'b', texto: 'Entre 50 y 70 veces más.', esCorrecta: false },
            { id: 'c', texto: 'Entre 100 y 200 veces más.', esCorrecta: true },
            { id: 'd', texto: 'Entre 300 y 500 veces más.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los errores tardíos cuestan exponencialmente más.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes no es una fase del modelo en cascada (waterfall)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Análisis de requisitos.', esCorrecta: false },
            { id: 'b', texto: 'Gestión de riesgos.', esCorrecta: true },
            { id: 'c', texto: 'Implementación.', esCorrecta: false },
            { id: 'd', texto: 'Mantenimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Gestión de riesgos es del modelo espiral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'En SCRUM, ¿quién es el único responsable de gestionar y priorizar el product backlog?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El Scrum Master.', esCorrecta: false },
            { id: 'b', texto: 'El Development Team.', esCorrecta: false },
            { id: 'c', texto: 'El cliente líder.', esCorrecta: false },
            { id: 'd', texto: 'El Product Owner.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Product Owner prioriza el backlog siempre.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué porcentaje de los fallos en proyectos de software están relacionados con problemas en la definición y gestión de requisitos, según el Standish Group?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Más del 30 %.', esCorrecta: false },
            { id: 'b', texto: 'Más del 45 %.', esCorrecta: false },
            { id: 'c', texto: 'Más del 60 %.', esCorrecta: false },
            { id: 'd', texto: 'Más del 80 %.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Más del 60 % fallan por requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes propiedades establece que un requisito debe tener una única interpretación posible para todos los involucrados en el proyecto?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Correcto.', esCorrecta: false },
            { id: 'b', texto: 'Verificable.', esCorrecta: false },
            { id: 'c', texto: 'No ambiguo.', esCorrecta: true },
            { id: 'd', texto: 'Consistente.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! No ambiguo evita múltiples interpretaciones posibles.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué técnica de recolección de información combina la observación y la entrevista en el entorno real de trabajo del usuario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Focus group.', esCorrecta: false },
            { id: 'b', texto: 'Análisis de documentos.', esCorrecta: false },
            { id: 'c', texto: 'Taller JAD.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Estudio contextual (contextual inquiry).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Contextual inquiry observa en contexto real.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuántos participantes se recomiendan para un focus group en el contexto del levantamiento de requisitos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entre 2 y 5 personas.', esCorrecta: false },
            { id: 'b', texto: 'Entre 6 y 12 personas.', esCorrecta: true },
            { id: 'c', texto: 'Entre 15 y 20 personas.', esCorrecta: false },
            { id: 'd', texto: 'Entre 20 y 30 personas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Entre 6 y 12 personas es ideal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes es un ejemplo de requisito no funcional?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sistema debe permitir registrar una solicitud de servicio con número de ticket único.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema debe responder en menos de 2 segundos con 500 usuarios concurrentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El sistema debe generar reportes de solicitudes pendientes filtradas por prioridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sistema debe permitir al administrador crear y desactivar usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Tiempo de respuesta es atributo calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la diferencia principal entre un cuestionario y una encuesta en el contexto del levantamiento de requisitos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cuestionario es digital y la encuesta es física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La encuesta es el proceso completo de recolección que puede incluir uno o más cuestionarios aplicados a una muestra representativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El cuestionario se aplica a grupos y la encuesta a individuos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No hay diferencia, son términos intercambiables con el mismo significado técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Encuesta es proceso completo con muestra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Según el modelo en espiral de Barry Boehm, ¿cuál de los siguientes no es uno de sus cuatro cuadrantes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinación de objetivos y alternativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análisis y resolución de riesgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integración continua y despliegue automatizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Planificación del siguiente ciclo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Integración continua no es del espiral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes herramientas digitales se menciona en el componente formativo como recomendada para la gestión y trazabilidad de requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Slack y Trello.', esCorrecta: false },
            { id: 'b', texto: 'GitHub y Bitbucket.', esCorrecta: false },
            { id: 'c', texto: 'JIRA y Azure DevOps.', esCorrecta: true },
            { id: 'd', texto: 'Notion y Confluence.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! JIRA y Azure para trazabilidad completa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En el contexto de UML, ¿qué representa un actor en un diagrama de casos de uso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una persona específica que usa el sistema con nombre y apellido identificado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un rol que desempeña una persona, sistema externo u organización al interactuar con el sistema en desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un administrador del sistema con permisos especiales de configuración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un stakeholder externo que financia el proyecto, pero no interactúa con el sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Actor es rol, no persona específica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué riesgo principal se asocia al focus group como técnica de recolección de información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El alto costo de implementación por participante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La dificultad para grabar y transcribir las sesiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El pensamiento de grupo (groupthink), donde la presión social inhibe opiniones contrarias a la mayoría.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La imposibilidad de realizarlo de forma virtual con herramientas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Groupthink inhibe opiniones diferentes del grupo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes afirmaciones describe correctamente la trazabilidad de requisitos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es la capacidad de traducir los requisitos del cliente al lenguaje de programación utilizado por el equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es el proceso de ordenar los requisitos por nivel de prioridad para el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es la capacidad de vincular cada requisito con su origen y con los artefactos de diseño, código y pruebas que lo implementan.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es la técnica de verificar que cada requisito fue aprobado por el Product Owner antes de su implementación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Trazabilidad vincula origen con implementación final.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes afirmaciones describe correctamente la autoridad del cliente líder y del Product Owner en SCRUM?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ambos tienen plena autoridad para tomar decisiones sobre el producto sin consultar a la dirección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cliente líder y el Product Owner comparten la misma autoridad para definir y priorizar el producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Product Owner tiene autoridad plena sobre el producto, mientras que el cliente líder representa a los usuarios, pero no decide de forma autónoma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El cliente líder tiene mayor autoridad que el Product Owner en la toma de decisiones del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El Product Owner cuenta con autoridad plena sobre el producto, mientras que el cliente líder actúa como representante de los usuarios sin poder de decisión autónomo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué papel cumplen los requisitos no funcionales dentro del diseño de un sistema de software?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describen únicamente las funcionalidades específicas que debe ofrecer el sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Influyen directamente en la arquitectura del sistema y afectan de manera transversal todas las funcionalidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se definen solo en etapas finales y no influyen en la estructura del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se enfocan exclusivamente en los procesos administrativos del negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los requisitos no funcionales impactan la arquitectura del sistema y condicionan el comportamiento global de todas las funcionalidades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'En el contexto de las metodologías ágiles, ¿cuál es el enfoque correcto respecto a la documentación?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se prioriza el software funcionando sobre la documentación exhaustiva, manteniendo solo la necesaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La documentación extensa y formal es un pilar fundamental que garantiza la trazabilidad del proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La documentación no se realiza en ningún momento del desarrollo del software.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La documentación reemplaza la interacción constante con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las metodologías ágiles valoran el software funcionando por encima de la documentación exhaustiva, sin eliminar la documentación necesaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Por qué el análisis de documentos es especialmente útil al inicio de un proyecto de software?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque reemplaza completamente las entrevistas con los stakeholders.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite al analista llegar a las primeras reuniones con un conocimiento previo del dominio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque garantiza que no será necesario realizar otras técnicas de elicitación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque se utiliza únicamente en las fases finales del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El análisis de documentos aporta conocimiento previo del dominio y fortalece las primeras interacciones con los stakeholders.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes opciones describe correctamente el enfoque de Kanban en la gestión del trabajo?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organiza el trabajo en sprints de duración fija con roles formales definidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Define los roles de Product Owner, Scrum Master y Development Team como obligatorios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utiliza tableros visuales para gestionar el flujo de trabajo sin sprints fijos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Requiere iteraciones cerradas de una a cuatro semanas para la planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Kanban se centra en la visualización y gestión continua del flujo de trabajo, sin sprints ni roles formales predefinidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
