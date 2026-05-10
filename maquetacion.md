# Guia de maquetacion

Esta guia documenta el proceso para maquetar un recurso educativo a partir del documento Word fuente.

El documento Word mantiene siempre la misma estructura, por lo tanto cada dato debe tomarse de una seccion especifica y ubicarse en un archivo concreto del proyecto.

## Documento fuente

Ruta esperada:

```txt
fuentes/CF_01_228145.docx
```

Si el nombre del archivo cambia, debe usarse el documento `.docx` ubicado dentro de la carpeta `fuentes/`.

## Paso 1. Configurar el titulo del componente

En el documento Word, ubicar la tabla inicial y leer el campo:

```txt
NOMBRE DEL COMPONENTE FORMATIVO
```

Ese valor se debe asignar en:

```txt
src/config/titulo.js
```

Formato esperado:

```js
module.exports = 'Nombre del componente formativo'
```

Ejemplo aplicado en este proyecto:

```js
module.exports = 'Metodologias de desarrollo y levantamiento de requisitos de software'
```

## Paso 2. Configurar el nombre del programa

En el documento Word, ubicar la tabla inicial y leer el campo:

```txt
PROGRAMA DE FORMACION
```

Ese valor se debe asignar en:

```txt
src/config/global.js
```

Dentro del objeto:

```js
global: {
  Name: 'Nombre del programa de formacion',
}
```

Ejemplo aplicado en este proyecto:

```js
Name: 'Programacion de soluciones de software',
```

## Paso 3. Configurar la descripcion del recurso

En el documento Word, ubicar la tabla inicial y leer el campo:

```txt
BREVE DESCRIPCION
```

Ese valor se debe asignar en:

```txt
src/config/global.js
```

Dentro del objeto:

```js
global: {
  Description: 'Breve descripcion del recurso',
}
```

Ejemplo aplicado en este proyecto:

```js
Description:
  'Este componente formativo brinda las bases conceptuales y practicas para comprender la gestion del desarrollo de software y el levantamiento de requisitos. Aborda metodologias tradicionales y agiles, tipos de requisitos, tecnicas de elicitacion y roles del proceso, fortaleciendo el criterio tecnico y comunicativo en equipos de desarrollo.',
```

## Paso 4. Configurar el menu principal desde la tabla de contenidos

En el documento Word, ubicar la seccion:

```txt
A. TABLA DE CONTENIDOS
```

Para el menu principal se toma desde el punto `1` en adelante. La entrada `Introduccion` no se incluye en este proceso porque ya existe como ruta independiente:

```js
{
  nombreRuta: 'introduccion',
  icono: 'fas fa-info-circle',
  titulo: 'Introduccion',
  desarrolloContenidos: true,
}
```

Cada punto principal de la tabla de contenidos se asigna en:

```txt
src/config/global.js
```

Dentro de:

```js
menuPrincipal: {
  menu: []
}
```

Reglas de conversion:

- Los puntos principales `1`, `2`, `3`, etc. corresponden a las rutas `tema1`, `tema2`, `tema3`, etc.
- No se modifica `nombreRuta`.
- No se modifica `numero`.
- No se modifica `desarrolloContenidos`.
- El campo `titulo` del tema se reemplaza con el texto del punto principal, sin el numero.
- Los subpuntos `1.1`, `1.2`, etc. se agregan dentro de `subMenu`.
- En cada subpunto no se modifica `numero`.
- En cada subpunto el campo `titulo` se reemplaza con el texto del subtema, sin el numero.
- En cada subpunto no se modifica `hash` si ya existe.
- Si se agregan nuevos subpuntos, el `hash` debe seguir el patron `t_numero_subnumero`, por ejemplo `t_4_3`.
- Si se agregan nuevos temas, se debe seguir el patron existente: `nombreRuta: 'tema4'`, `numero: '4'`, etc.

Ejemplo:

Tabla de contenidos del Word:

```txt
1. Metodologias de desarrollo de software
1.1 Metodologias agiles y tradicionales
1.2 Caracteristicas, ventajas y desventajas de las metodologias
```

Resultado en `global.js`:

```js
{
  nombreRuta: 'tema1',
  numero: '1',
  titulo: 'Metodologias de desarrollo de software',
  desarrolloContenidos: true,
  subMenu: [
    {
      numero: '1.1',
      titulo: 'Metodologias agiles y tradicionales',
      hash: 't_1_1',
    },
    {
      numero: '1.2',
      titulo: 'Caracteristicas, ventajas y desventajas de las metodologias',
      hash: 't_1_2',
    },
  ],
}
```

## Paso 5. Configurar las rutas de los temas

Despues de actualizar `menuPrincipal.menu`, se debe revisar:

```txt
src/router/index.js
```

Dentro de la ruta padre:

```js
{
  path: '/curso',
  name: 'curso',
  component: Curso,
  children: []
}
```

Cada tema existente en `menuPrincipal.menu` debe tener una ruta hija. Si en el menu existen `tema1`, `tema2`, `tema3`, `tema4` y `tema5`, el router debe tener esas mismas rutas.

Reglas de conversion:

- No se modifica la ruta padre `/curso`.
- No se modifica el `redirect` si ya apunta a `tema1`.
- Cada tema debe tener `path`, `name` y `component`.
- El `path` y el `name` deben coincidir con `nombreRuta` del menu.
- El componente debe apuntar al archivo correspondiente en `src/views`.
- El nombre del chunk debe seguir el mismo numero del tema.

Ejemplo:

```js
{
  path: 'tema4',
  name: 'tema4',
  component: () =>
    import(/* webpackChunkName: "tema4" */ '../views/Tema4.vue'),
}
```

Si se agrega una ruta nueva, tambien debe existir el archivo de vista:

```txt
src/views/Tema4.vue
```

La estructura inicial del archivo puede copiarse desde un tema existente, ajustando:

- El numero visible del tema.
- El nombre del componente Vue, por ejemplo `Tema4`.

## Paso 6. Retirar material complementario del submenu

En:

```txt
src/config/global.js
```

Dentro de:

```js
menuPrincipal: {
  subMenu: []
}
```

Se debe eliminar la entrada de `Material complementario`:

```js
{
  nombreRuta: 'complementario',
  icono: 'far fa-folder-open',
  titulo: 'Material complementario',
}
```

La ruta puede permanecer en `src/router/index.js`; este paso solo retira el enlace visible del submenu.

## Paso 7. Configurar el glosario

En el documento Word, ubicar la seccion:

```txt
F. GLOSARIO
```

La tabla del glosario tiene dos columnas:

```txt
TERMINO
SIGNIFICADO
```

Cada fila se debe convertir en un objeto dentro de:

```txt
src/config/global.js
```

En la propiedad:

```js
glosario: []
```

Formato esperado:

```js
glosario: [
  {
    termino: 'Termino',
    significado: 'Definicion',
  },
]
```

Reglas de conversion:

- El valor de la columna `TERMINO` se asigna a `termino`.
- El valor de la columna `SIGNIFICADO` se asigna a `significado`.
- Si el termino viene con dos puntos al final, se retiran los dos puntos.
- Se reemplaza el ejemplo generico `Termino / Definicion`.
- Se mantiene el orden del Word.

## Paso 8. Configurar las referencias bibliograficas

En el documento Word, ubicar la seccion:

```txt
G. REFERENCIAS BIBLIOGRAFICAS
```

Cada referencia listada se debe convertir en un objeto dentro de:

```txt
src/config/global.js
```

En la propiedad:

```js
referencias: []
```

Formato esperado:

```js
referencias: [
  {
    referencia: 'Referencia bibliografica',
    link: '',
  },
]
```

Reglas de conversion:

- Cada linea de referencia del Word se asigna a `referencia`.
- Si el Word no incluye enlace, `link` debe quedar como cadena vacia.
- Si el Word incluye enlace, se asigna a `link`.
- Se reemplaza el ejemplo generico con campos vacios.
- Se mantiene el orden del Word.

## Paso 9. Crear los anclajes de subtemas en las vistas

Despues de configurar `menuPrincipal.menu`, cada subtema debe reflejarse dentro del archivo `.vue` del tema correspondiente.

El titulo principal del tema tambien debe coincidir con el titulo del punto principal del menu.

Ejemplo: si en `src/config/global.js` existe:

```js
{
  numero: '1.1',
  titulo: 'Metodologias agiles y tradicionales',
  hash: 't_1_1',
}
```

Entonces en:

```txt
src/views/Tema1.vue
```

Se agrega el bloque:

```pug
Separador
#t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
  h2 1.1 Metodologias agiles y tradicionales
```

Reglas de conversion:

- El `titulo` del punto principal del menu se coloca en el `h1` del archivo `Tema#.vue`.
- El `hash` del menu se convierte en el id del bloque Pug usando `#`.
- El `titulo` del menu se coloca dentro de `h2`.
- El numero del subtema se conserva al inicio del `h2`.
- Antes de cada titulo de segundo nivel se agrega `Separador`.
- El bloque se ubica dentro del contenedor principal del tema, despues del titulo principal.
- Despues de editar archivos `.vue`, ejecutar el formateador del proyecto si Prettier reporta cambios de fin de linea.

## Paso 10. Configurar la sintesis

En el documento Word, ubicar la seccion:

```txt
D. SINTESIS
```

Cada parrafo de esta seccion se debe pasar a:

```txt
src/views/sintesis.vue
```

Dentro del contenedor principal, despues de:

```pug
.container.tarjeta.tarjeta--blanca.p-4.p-md-5
```

Formato esperado:

```pug
p Primer parrafo de la sintesis.
p Segundo parrafo de la sintesis.
```

Reglas de conversion:

- Se reemplaza el parrafo generico `Lorem ipsum`.
- Cada parrafo del Word se convierte en una etiqueta `p`.
- Se toman solo los parrafos narrativos de la seccion `D. SINTESIS`.
- No se deben incluir textos sueltos pertenecientes al grafico o mapa de sintesis.
- La imagen y el anexo de sintesis existentes en `sintesis.vue` se conservan.
- Despues de editar `sintesis.vue`, ejecutar el formateador del proyecto si Prettier reporta cambios.

## Paso 11. Configurar el texto alternativo de la imagen de sintesis

En el documento Word, revisar los comentarios asociados a la seccion:

```txt
D. SINTESIS
```

Cuando exista un comentario con:

```txt
Texto alternativo:
```

Ese texto se debe asignar al atributo `alt` de la imagen de sintesis en:

```txt
src/views/sintesis.vue
```

La imagen suele estar dentro de:

```pug
figure
  img(src="@/assets/curso/sintesis.svg", alt="")
```

Reglas de conversion:

- No depender de una linea fija del archivo, porque cambia segun la cantidad de parrafos.
- Ubicar la imagen de sintesis por el `src="@/assets/curso/sintesis.svg"`.
- Reemplazar el texto generico del atributo `alt`.
- Usar completo el texto que aparece despues de `Texto alternativo:` en el comentario del Word.
- Despues de editar `sintesis.vue`, ejecutar el formateador del proyecto si Prettier reporta cambios.

## Paso 12. Configurar la introduccion

En el documento Word, ubicar la seccion:

```txt
B. INTRODUCCION
```

Cada parrafo de esta seccion se debe pasar a:

```txt
src/views/Introduccion.vue
```

Dentro del contenedor principal, despues del bloque del titulo principal:

```pug
.titulo-principal.color-acento-contenido(data-aos="flip-up")
```

Formato esperado:

```pug
p Primer parrafo de la introduccion.
p Segundo parrafo de la introduccion.
```

Reglas de conversion:

- Se toman los parrafos desde `B. INTRODUCCION` hasta antes de `C. DESARROLLO DE CONTENIDOS`.
- Cada parrafo narrativo del Word se convierte en una etiqueta `p`.
- Si el Word presenta terminos destacados con su descripcion, se pueden integrar en un `p` usando `strong` para el termino.
- No se modifica el bloque de titulo principal de la introduccion.
- Despues de editar `Introduccion.vue`, ejecutar el formateador del proyecto si Prettier reporta cambios.

## Paso 13. Configurar la actividad didactica

En la carpeta `fuentes/`, ubicar el documento de actividad:

```txt
fuentes/Actividad_didactica_CF01.docx
```

La informacion de este documento se debe pasar a:

```txt
src/views/Actividad.vue
```

Dentro del objeto:

```js
cuestionario: {
  preguntas: []
}
```

Campos generales:

- `Nombre de la Actividad` se usa como referencia del nombre de la actividad.
- `Objetivo de la actividad` se asigna dentro de `introduccion`, precedido por `<b>Objetivo:</b>`.
- `Mensaje cuando supera el 70 % de respuestas correctas` se asigna a `mensaje_final_aprobado`.
- `Mensaje cuando el porcentaje de respuestas correctas es inferior al 70 %` se asigna a `mensaje_final_reprobado`.

Reglas para preguntas:

- Cada bloque `Pregunta N` del Word se convierte en un objeto dentro de `preguntas`.
- El numero de la pregunta se asigna a `id`.
- El enunciado se asigna a `texto`.
- Cada `Opcion a)`, `Opcion b)`, etc. se convierte en un objeto dentro de `opciones`.
- La letra de la opcion se asigna a `id`.
- El texto de la opcion se asigna a `texto`.
- La opcion marcada con `X` en el Word debe quedar con `esCorrecta: true`.
- Las demas opciones deben quedar con `esCorrecta: false`.
- `Comentario respuesta correcta` se asigna a `mensaje_correcto`.
- `Comentario respuesta incorrecta` se asigna a `mensaje_incorrecto`.
- Mantener `barajarRespuestas: true` en cada pregunta.

Reglas para imagenes:

- Las preguntas usan imagenes desde `src/assets/actividad/`.
- Las imagenes van desde `imagen1.png` hasta `imagen10.png`.
- Para las preguntas 1 a 10 se asignan `imagen1.png` a `imagen10.png` en orden.
- A partir de la pregunta 11 se reinicia la secuencia desde `imagen1.png`.
- Ejemplo: pregunta 11 usa `imagen1.png`, pregunta 12 usa `imagen2.png`, y asi sucesivamente.

Formato esperado:

```js
{
  id: 1,
  texto: 'Texto de la pregunta',
  imagen: require('@/assets/actividad/imagen1.png'),
  barajarRespuestas: true,
  opciones: [
    {
      id: 'a',
      texto: 'Texto de la opcion',
      esCorrecta: false,
    },
  ],
  mensaje_correcto: 'Comentario respuesta correcta',
  mensaje_incorrecto: 'Comentario respuesta incorrecta',
}
```

Despues de editar `Actividad.vue`, ejecutar el formateador del proyecto y validar que exista una respuesta correcta por pregunta.

## Estado actual

- `src/config/titulo.js` ya fue actualizado con el nombre del componente formativo.
- `src/config/global.js` ya fue actualizado en la propiedad `global.Name` con el nombre del programa de formacion.
- `src/config/global.js` ya fue actualizado en la propiedad `global.Description` con la breve descripcion del componente.
- `src/config/global.js` ya fue actualizado en `menuPrincipal.menu` con los temas y subtemas de la tabla de contenidos.
- `src/router/index.js` ya fue actualizado con las rutas `tema4` y `tema5`.
- Se crearon las vistas `src/views/Tema4.vue` y `src/views/Tema5.vue`.
- `src/config/global.js` ya no muestra `Material complementario` en `menuPrincipal.subMenu`.
- `src/config/global.js` ya fue actualizado en la propiedad `glosario` con los terminos y significados del Word.
- `src/config/global.js` ya fue actualizado en la propiedad `referencias` con las referencias bibliograficas del Word.
- `src/views/Tema1.vue` a `src/views/Tema5.vue` ya tienen el `h1` del tema y los anclajes de todos sus subtemas.
- `src/views/sintesis.vue` ya fue actualizado con los parrafos narrativos de la seccion `D. SINTESIS`.
- `src/views/sintesis.vue` ya tiene el texto alternativo de la imagen de sintesis tomado del comentario del Word.
- `src/views/Introduccion.vue` ya fue actualizado con los parrafos de la seccion `B. INTRODUCCION`.
- `src/views/Actividad.vue` ya fue actualizado con las 20 preguntas del documento `Actividad_didactica_CF01.docx`.
