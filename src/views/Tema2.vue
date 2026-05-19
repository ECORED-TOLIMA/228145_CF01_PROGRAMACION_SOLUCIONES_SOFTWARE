<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de los requisitos de #[i software]
    p.mb-4 Los requisitos de #[i software] constituyen la base sobre la cual se construye cualquier sistema de información. Son la expresión formal de las necesidades, expectativas y restricciones que el sistema debe satisfacer. El IEEE los define como: una condición o capacidad que debe satisfacer o poseer un sistema para cumplir con un contrato, estándar, especificación u otro documento impuesto formalmente.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una gestión deficiente de los requisitos es la causa más frecuente de fracaso en proyectos de #[i software]. Según el Standish Group (2015), más del 60 % de los fallos están relacionados con problemas en la definición y gestión de requisitos. Barry Boehm demostró que el costo de corregir un error en los requisitos crece exponencialmente: un error detectado en análisis puede costar 1 unidad; el mismo error en producción puede costar entre 100 y 200 veces más. Esta evidencia subraya por qué invertir tiempo y recursos en una ingeniería de requisitos sólida es siempre rentable.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p Detrás de estas cifras hay una realidad que cualquier profesional del #[i software] reconoce con facilidad: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .bloque-texto-gg.color-secundario.bgf1.p-3.p-sm-4.p-md-5
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 Los proyectos no fracasan porque los programadores escriban mal código, sino porque el equipo construye el sistema incorrecto. 
        
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10    
        p.mb-4 Se implementan funcionalidades que nadie usa, se omiten capacidades que el negocio considera indispensables, se asumen comportamientos del sistema que el cliente jamás aprobó, y se descubren inconsistencias críticas cuando el producto ya está en producción y el costo de corregirlas es devastador. Todos estos problemas tienen un origen común: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .bloque-texto-gg.color-secundario.bgf1.p-3.p-sm-4.p-md-5
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.svg')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 Una ingeniería de requisitos deficiente que no identificó, documentó y validó correctamente lo que el sistema debía hacer antes de comenzar a construirlo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10  
        p Los requisitos son, en esencia, el lenguaje mediante el cual el mundo del negocio y el mundo de la tecnología se comunican. Son el contrato implícito —y en muchos casos explícito— entre quien encarga el sistema y quien lo construye. Por ejemplo:
    .tarjeta--container.row.mb-5
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Bien redactado 
        p Cuando el contrato está bien redactado, es claro, completo, consistente y verificable, el proceso de desarrollo avanza con mayor seguridad y confianza. Las decisiones de diseño e implementación se toman con base en criterios definidos, se reducen los malentendidos y se facilita la validación del producto frente a las expectativas del cliente.
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Mal redactado
        p Cuando está mal redactado, es ambiguo o incompleto, cada decisión de diseño e implementación se convierte en una apuesta: el desarrollador asume lo que el cliente quería, el cliente asume que el desarrollador entendió su intención, y el resultado final satisface a ninguno de los dos.
    .BG02.px-4.mb-3
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-4 La ingeniería de requisitos como disciplina formal surge precisamente para estructurar y sistematizar ese proceso de comunicación entre el negocio y la tecnología. No se trata de llenar formularios ni de generar documentación por obligación contractual: se trata de construir un entendimiento compartido, profundo y verificable de lo que el sistema debe lograr, bajo qué condiciones debe operar y con qué nivel de calidad debe hacerlo. Este entendimiento compartido es la materia prima sin la cual ninguna metodología de desarrollo —ágil o tradicional— puede producir resultados satisfactorios de manera consistente.
          .row.justify-content-center.align-items-center
            .col-lg-9.order-2.order-lg-1
              p Es importante también comprender que los requisitos no son estáticos. En proyectos de mediana y larga duración, los requisitos evolucionan a medida que el negocio cambia, los usuarios descubren nuevas necesidades al interactuar con prototipos, y el entorno regulatorio se transforma. Por ello, la gestión de requisitos no termina con la elaboración del documento de especificación inicial: es un proceso continuo de mantenimiento, control de cambios y trazabilidad que acompaña al proyecto durante todo su ciclo de vida.
              .bgf4.p-4
                p.mb-0 Dominar tanto la identificación inicial de requisitos como su gestión evolutiva es una competencia que diferencia al analista de requisitos verdaderamente experto del que apenas conoce las técnicas básicas de elicitación.
            .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Concepto de requisitos de #[i software]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
      .col-lg-8
        p Desde una perspectiva práctica, un requisito es cualquier característica observable o medible que el sistema debe poseer para ser aceptado por el cliente. Los requisitos representan un contrato entre el cliente y el equipo de desarrollo: definen qué se construirá, bajo qué condiciones operará y qué calidad tendrá el producto final. Su correcta definición es una precondición para que el resto del proceso de desarrollo tenga éxito.
        .p-4.bgf5
          p.mb-0 Los requisitos pueden expresarse en lenguaje natural, mediante diagramas UML, modelos formales o una combinación de estos. La clave es que sean comprensibles tanto para los #[i stakeholders] del negocio como para el equipo técnico. Un requisito bien expresado guía al diseñador, al programador y al #[i tester], creando un hilo de trazabilidad que conecta la necesidad del negocio con el código del sistema y con las pruebas que verifican su correcto funcionamiento.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Propiedades de un buen requisito
    p.mb-4 Un requisito de calidad debe cumplir un conjunto de propiedades bien establecidas en la literatura de la ingeniería de #[i software]. El estándar IEEE 830 (práctica recomendada para especificaciones de requisitos de #[i software]) y su sucesor ISO/IEC/IEEE 29148 definen estas propiedades de manera formal. Su importancia radica en que cada propiedad que falta en un requisito se convierte en una fuente potencial de malentendidos, retrabajo o conflictos entre el cliente y el equipo de desarrollo. A continuación, se describen las ocho propiedades fundamentales:
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', alt='Infografía de matriz RACI')
            .tarjeta.tarjeta.bt01.p-3(x="19.7%" y="54%" numero="+")
              p El requisito refleja con precisión la necesidad real del stakeholder, sin distorsiones, suposiciones ni interpretaciones personales del analista. Un requisito incorrecto lleva a implementar funcionalidades que el usuario no necesita.

            .tarjeta.tarjeta.bt01.p-3(x="27.3%" y="47%" numero="+")
              p Incluye toda la información necesaria para su comprensión e implementación sin requerir conocimiento implícito o tácito. Un requisito incompleto obliga al desarrollador a tomar decisiones de negocio que no le corresponden.
            
            .tarjeta.tarjeta.bt01.p-3(x="36.6%" y="54%" numero="+")
              p No contradice ni entra en conflicto con otros requisitos del sistema. Los conflictos entre requisitos son frecuentes cuando provienen de diferentes grupos de #[i stakeholders] y deben resolverse con el cliente antes de la implementación.

            .tarjeta.tarjeta.bt01.p-3(x="44.5%" y="47%" numero="+")
              p Tiene una única interpretación posible para todos los involucrados en el proyecto, independientemente de su perfil técnico o de negocio. Las palabras como 'rápido', 'fácil', 'robusto' o 'amigable' son inherentemente ambiguas y deben cuantificarse.
            
            .tarjeta.tarjeta.bt01.p-3(x="54%" y="54%" numero="+")
              p Puede ser probado mediante criterios de aceptación concretos y medibles para confirmar que el sistema lo cumple. Un requisito que no puede probarse no puede garantizarse.
            
            .tarjeta.tarjeta.bt01.p-3(x="61.7%" y="47%" numero="+")
              p Puede vincularse claramente a su origen (stakeholder específico, documento de negocio o regulación) y a los artefactos de diseño, código y pruebas que lo implementan. La trazabilidad es fundamental para gestionar el impacto de los cambios.
            
            .tarjeta.tarjeta.bt01.p-3(x="71.7%" y="54%" numero="+")
              p Puede ser implementado dentro de las restricciones técnicas, económicas y temporales del proyecto. Requisitos técnicamente imposibles o económicamente inviables deben identificarse tempranamente y renegociarse con el cliente.
            
            .tarjeta.tarjeta.bt01.p-3(x="79.3%" y="47%" numero="+")
              p Puede ser ordenado según su importancia relativa para el negocio, permitiendo decisiones informadas de alcance cuando el presupuesto o el tiempo no alcanza para implementar todo lo deseado.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img8_1.svg', alt='Matriz RACI para dispositivos móviles')
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En la práctica, el analista debe revisar cada requisito documentado contra estas ocho propiedades antes de presentarlo al cliente para su aprobación. Una técnica útil es la revisión por pares (peer review) de los requisitos, donde un colega analista lee cada requisito y señala las propiedades que no se cumplen. Esta práctica, aunque sencilla, detecta la mayoría de los defectos de calidad en los requisitos antes de que se conviertan en problemas costosos durante el desarrollo o las pruebas.
        p.mb-4 Para ejemplificar el proceso de ingeniería de requisitos, se relaciona un esquema que ilustra las cinco fases del proceso de ingeniería de requisitos y sus interrelaciones. Es importante destacar que este proceso no es lineal sino iterativo: los resultados de cada fase pueden llevar a revisar y enriquecer las fases anteriores. En proyectos ágiles este ciclo se ejecuta en miniatura dentro de cada sprint, mientras que en proyectos tradicionales se ejecuta de manera más extendida al inicio del proyecto:
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Proceso de ingeniería de requisitos — fases, actividades e interrelaciones
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img9.svg', alt='Figura 2 que representa el proceso de ingeniería de requisitos como un ciclo iterativo e interrelacionado, compuesto por las fases de elicitación, análisis, especificación, validación y gestión, mostrando las principales actividades de cada una y los flujos de retroalimentación que permiten revisar y ajustar continuamente los requisitos a lo largo del proyecto.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img9_1.svg', alt='Figura 2 que representa el proceso de ingeniería de requisitos como un ciclo iterativo e interrelacionado, compuesto por las fases de elicitación, análisis, especificación, validación y gestión, mostrando las principales actividades de cada una y los flujos de retroalimentación que permiten revisar y ajustar continuamente los requisitos a lo largo del proyecto.')
        
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Tipos y características de los requisitos
    p.mb-4 La clasificación más ampliamente aceptada en la ingeniería de #[i software] distingue entre requisitos funcionales, no funcionales y de dominio. Esta taxonomía es fundamental para el analista, pues cada tipo requiere técnicas de elicitación y formas de especificación distintas, y tiene implicaciones diferentes para el diseño, la arquitectura y las pruebas del sistema. Ignorar cualquiera de estas categorías durante el levantamiento puede resultar en un sistema que funciona correctamente pero que no satisface las expectativas del cliente en aspectos críticos como el rendimiento, la seguridad o el cumplimiento regulatorio.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bloque-texto-gg--inverso.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p.mb-0 Un error muy común en equipos de desarrollo sin experiencia en ingeniería de requisitos es enfocarse exclusivamente en los requisitos funcionales (qué hace el sistema) y descuidar los no funcionales (cómo lo hace). Los atributos de calidad como el rendimiento, la disponibilidad y la seguridad son frecuentemente asumidos implícitamente por el cliente sin verbalizarlos y el analista debe explorarlos activamente mediante preguntas específicas durante el proceso de elicitación. Descubrirlos tardíamente puede implicar rediseñar la arquitectura completa del sistema, con un costo y un impacto en el cronograma que pueden ser determinantes para el proyecto.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img10.svg')})`}"
          )
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Requisitos funcionales
    p.mb-4 Los requisitos funcionales (RF) describen las funcionalidades específicas que el sistema debe proporcionar: qué debe hacer en respuesta a entradas específicas y cómo debe comportarse en situaciones particulares. En esencia, definen el comportamiento observable del sistema desde la perspectiva del usuario. Se especifican típicamente mediante casos de uso, historias de usuario o escenarios de uso.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
            .col-lg-9
              p.text-white Ejemplo de requisito funcional bien redactado: 
              p.mb-0.text-white El sistema debe permitir al usuario registrar una nueva solicitud de servicio ingresando: nombre del cliente (máx. 100 caracteres), descripción del problema (máx. 500 caracteres), nivel de prioridad (alto, medio, bajo) y fecha de creación (automática). Al guardar exitosamente, el sistema debe asignar automáticamente un número de ticket único con formato TK-YYYYMMDD-NNN y mostrar un mensaje de confirmación.
        p.mb-0 La siguiente tabla presenta ejemplos de cómo se redactan los requisitos funcionales en formato de Historia de Usuario (HU), que es la técnica de especificación más utilizada en metodologías ágiles. Este formato estandarizado facilita la comunicación entre el cliente, el analista y el equipo de desarrollo:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ejemplos de historias de usuario para requisitos funcionales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a 
            table
              thead
                tr
                  th ID
                  th Historia de usuario
                  th Criterio de aceptación
                  th Prioridad
              tbody
                tr
                  td HU-01
                  td Como usuario registrado, quiero iniciar sesión con email y contraseña para acceder al sistema de forma segura.
                  td El sistema valida credenciales en menos de 2s. Bloquea la cuenta tras 5 intentos fallidos. Muestra mensaje de error específico.
                  td Alta
                tr
                  td HU-02
                  td Como analista, quiero registrar una solicitud de servicio con todos sus campos para hacer seguimiento al caso del cliente.
                  td El formulario valida campos obligatorios. Asigna número de ticket automático formato TK-YYYYMMDD-NNN. Confirma guardado con notificación.
                  td Alta
                tr
                  td HU-03
                  td Como supervisor, quiero ver un reporte de solicitudes pendientes filtradas por prioridad para gestionar la carga de trabajo del equipo.
                  td El reporte se genera en menos de 5s. Permite filtrar por fecha, prioridad y asignado. Exportable en PDF y Excel.
                  td Media
                tr
                  td HU-04
                  td Como administrador, quiero gestionar los usuarios del sistema (crear, editar, desactivar) para controlar el acceso a la información.
                  td Solo administradores acceden al módulo. Los cambios quedan registrados en log de auditoría con fecha, hora y usuario que realizó la acción.
                  td Alta
                tr
                  td HU-05
                  td Como cliente, quiero recibir una notificación por email cuando mi solicitud cambia de estado para conocer el avance de mi caso.
                  td El email se envía en menos de 1 minuto del cambio de estado. Incluye número de ticket, nuevo estado y enlace de consulta.
                  td Media
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Requisitos no funcionales
    p.mb-4 Los requisitos no funcionales (RNF), también llamados atributos de calidad, establecen las restricciones sobre cómo el sistema debe funcionar, no qué debe hacer. Son transversales a todas las funcionalidades e impactan directamente la arquitectura del sistema. Incluyen: rendimiento, seguridad, usabilidad, disponibilidad, escalabilidad, mantenibilidad y portabilidad.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')
            .col-lg-9
              p.text-white Ejemplo de RNF bien especificado:
              p.mb-0.text-white El sistema debe responder a cualquier consulta en tiempo máximo de 2 segundos bajo carga normal (hasta 500 usuarios concurrentes). En picos de carga (hasta 1.000 usuarios concurrentes), el tiempo de respuesta no debe superar los 5 segundos. El sistema debe estar disponible el 99,5 % del tiempo (máximo 43,8 horas de inactividad al año). 
        p.mb-0 La especificidad numérica hace que este requisito sea verificable, ya que permite definir criterios de aceptación claros y medibles, facilitando su validación objetiva mediante pruebas y evitando interpretaciones subjetivas.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Requisitos de dominio
    p.mb-4 Los requisitos de dominio son restricciones o condiciones impuestas por el ámbito de aplicación del sistema. Provienen de regulaciones legales, normas industriales o prácticas específicas del negocio. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p.text-white Ejemplo:
              p.mb-0.text-white El sistema debe cumplir con la Ley 1581 de 2012 (Protección de Datos Personales de Colombia), implementando mecanismos de consentimiento explícito, derecho al olvido y cifrado de datos sensibles. 
        p.mb-4 Su incumplimiento puede tener consecuencias legales graves, como sanciones regulatorias, responsabilidades contractuales o la imposibilidad de operar dentro del marco normativo establecido.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La siguiente tabla clasifica los diferentes tipos de requisitos con ejemplos concretos del contexto del #[i software] empresarial colombiano. Esta clasificación ayuda al analista a asegurarse de que ninguna categoría de requisito quede sin explorar durante el proceso de elicitación:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Clasificación y ejemplos de tipos de requisitos de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a 
            table
              thead
                tr
                  th Tipo
                  th ¿Qué describe?
                  th Ejemplo concreto
                  th Fuente típica
              tbody
                tr
                  td Funcional
                  td Qué hace el sistema.
                  td Registrar usuarios con validación de email único.
                  td Usuarios / cliente.
                tr
                  td No funcional – rendimiento
                  td Qué tan rápido responde.
                  td Tiempo respuesta < 2 seg. / 500 usuarios.
                  td Arquitecto / usuario.
                tr
                  td No funcional – seguridad
                  td Cómo protege los datos.
                  td Cifrado AES-256 para datos en reposo.
                  td Normativas / CISO.
                tr
                  td No funcional – usabilidad
                  td Qué tan fácil de usar.
                  td Aprendizaje < 2 horas sin capacitación.
                  td UX / usuarios.
                tr
                  td No funcional – disponibilidad
                  td Cuándo está disponible.
                  td 99.5 % uptime anual / SLA definido.
                  td Negocio / SLA.
                tr
                  td De dominio
                  td Restricciones del sector.
                  td Cumplimiento Ley 1581 / GDPR.
                  td Reguladores / legal.
                tr
                  td De negocio
                  td Objetivos organizacionales.
                  td Reducir tiempo de atención en 30 %.
                  td Alta dirección.    
    .BG03.px-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')  
          p.mb-4 Igualmente, y complementando lo anterior, la siguiente tabla profundiza en las diferencias entre los dos tipos más frecuentes de requisitos. Comprender estas diferencias es fundamental para el analista, ya que determinan cómo se elicitan, documentan, verifican y priorizan dentro del proyecto:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Diferencias entre requisitos funcionales y no funcionales
    .row.justify-content-center.align-items-center
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a 
            table
              thead
                tr
                  th Criterio
                  th Requisito funcional
                  th Requisito no funcional
              tbody
                tr
                  th Pregunta que responde
                  td ¿Qué hace el sistema?
                  td ¿Cómo lo hace?
                tr
                  th Perspectiva
                  td Usuario final.
                  td Arquitecto / QA / operaciones.
                tr
                  th Verificación
                  td Pruebas funcionales / UAT.
                  td Pruebas de rendimiento, seguridad.
                tr
                  th Impacto si falla
                  td Función específica no disponible.
                  td Sistema completo degradado.
                tr
                  th Documentación
                  td Casos de uso / historias de usuario.
                  td Atributos de calidad / SLA.
                tr
                  th Visibilidad
                  td Alta (usuario lo percibe).
                  td Baja (se percibe tardíamente).
                tr
                  th Efecto en arquitectura
                  td Parcial.
                  td Alto y transversal. 
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
