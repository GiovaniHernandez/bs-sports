# 🏃 Agenda de clases deportivas

## Ejercicio — Bootstrap

### Objetivos

- Comprender qué es Bootstrap y cómo incorporarlo a un proyecto web.
- Reconocer cómo Bootstrap modifica la apariencia y el comportamiento de una interfaz.
- Utilizar clases de Bootstrap para aplicar estilos a distintos elementos HTML.
- Explorar la documentación de Bootstrap para identificar y utilizar sus componentes.

---

### 1. Iniciar el proyecto

Antes de comenzar con Bootstrap, es necesario preparar el proyecto y observar cómo se ve y funciona actualmente.

1. Clonar el repositorio en la computadora.

2. Abrir la carpeta del proyecto en **Visual Studio Code**.

3. Abrir una terminal dentro de Visual Studio Code y ejecutar:

   ```bash
   npm install
   ```

4. Una vez finalizada la instalación, ejecutar:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que aparece en la terminal.

6. Recorrer la página y probar la interfaz actual:

   - Agregar una clase deportiva.
   - Verificar que aparezca en la lista.
   - Eliminar la clase agregada.

> 💡 **Antes de continuar:** observar cómo se ve actualmente la página. A medida que se avance en el ejercicio, será posible comparar los cambios que se producen al incorporar Bootstrap.

---

### 2. Conectar Bootstrap 🔌

En este ejercicio, Bootstrap se cargará utilizando una **CDN**.

#### Agregar los estilos de Bootstrap

1. Abrir el archivo `index.html`.
2. Localizar la etiqueta `<head>`.
3. Dentro de `<head>`, agregar el siguiente enlace:

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   ```

Este enlace carga los estilos de Bootstrap, que permiten dar formato a los elementos de la página utilizando sus clases.

#### Agregar el JavaScript de Bootstrap

1. En el mismo archivo `index.html`, localizar el cierre de la etiqueta `<body>`.
2. Antes de `</body>` y **encima del script de `main.ts`**, agregar:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
   ```

Este script incorpora el JavaScript necesario para que funcionen los componentes interactivos de Bootstrap.

👀 **Resultado esperado:** al recargar la página, se observan cambios en el aspecto del navbar, la portada y los campos que ya utilizan clases de Bootstrap. Además, la imagen del carrusel aparece dentro de su componente.

📚 Referencia: [guía de inicio de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/).

---

### 3. Dar estilo al botón Agregar clase

El botón **Agregar clase** ya funciona, pero todavía no tiene el aspecto de un botón principal de Bootstrap.

1. Abrir `index.html`.
2. Localizar el botón **Agregar clase**.
3. Agregar la siguiente clase:

   ```html
   class="btn btn-primary"
   ```

👀 **Resultado esperado:** el botón **Agregar clase** adquiere el estilo principal de Bootstrap. El formulario debe continuar agregando clases correctamente.

📚 Referencia: [botones](https://getbootstrap.com/docs/5.3/components/buttons/).

---

### 4. Completar los campos del formulario

Algunos campos del formulario todavía no tienen aplicados los estilos de Bootstrap. A continuación, se incorporarán las clases correspondientes.

#### **Campo Profesor/a**

1. En `index.html`, localizar el `<label>` correspondiente al campo **Profesor/a** y el `<select id="professor">`.

2. Al `<label>`, agregar:

   ```html
   class="form-label"
   ```

3. Al `<select>`, agregar:

   ```html
   class="form-select"
   ```

📚 Referencia: [selectores](https://getbootstrap.com/docs/5.3/forms/select/).

#### **Campo Horario**

1. Localizar el `<label>` correspondiente al campo **Horario** y el `<input id="time">`.

2. Al `<label>`, agregar:

   ```html
   class="form-label"
   ```

3. Al `<input>`, agregar:

   ```html
   class="form-control"
   ```

📚 Referencia: [campos de formulario](https://getbootstrap.com/docs/5.3/forms/form-control/).

👀 **Resultado esperado:** los tres campos del formulario quedan alineados visualmente y mantienen un estilo consistente. Al agregar una nueva clase, esta debe continuar apareciendo correctamente en la lista.

---

### 5. Dar estilo al botón Eliminar

Las clases deportivas que se agregan desde el formulario se muestran en cards. En este paso se aplicará un estilo de Bootstrap al botón **Eliminar** de esas cards.

1. Agregar una clase deportiva desde el formulario para que aparezca una card en la página.
2. Abrir el archivo `src/interface/main.ts`.
3. Dentro de la función `createActivityCard`, localizar `removeButton`.
4. Agregar la siguiente línea:

   ```ts
   removeButton.className = "btn btn-danger";
   ```

👀 **Resultado esperado:** el botón **Eliminar** se muestra en color rojo. Al presionarlo, la card correspondiente debe continuar desapareciendo correctamente.

📚 Referencia: [botones](https://getbootstrap.com/docs/5.3/components/buttons/).

---

### 6. Agregar las imágenes de fuerza y ciclismo al carrusel 🖼️

El carrusel actualmente muestra únicamente la imagen de yoga. El objetivo de esta sección es **incorporar las imágenes de fuerza y ciclismo**, de forma que el carrusel quede compuesto por tres imágenes.

La diapositiva de yoga ya está creada y servirá como modelo para agregar las dos nuevas.

1. En `index.html`, localizar el elemento con `id="sports-activities-carousel"`.

2. Dentro de `carousel-inner`, identificar el primer `carousel-item`, que contiene la imagen de yoga.

3. Tomando ese elemento como ejemplo, agregar **dos `carousel-item` más**: uno para la imagen de fuerza y otro para la imagen de ciclismo.

4. Para la imagen de **fuerza**, utilizar:

   ```text
   ./src/interface/img/fuerza.png
   ```

5. Para la imagen de **ciclismo**, utilizar:

   ```text
   ./src/interface/img/ciclismo.png
   ```

6. En ambas imágenes, mantener las siguientes clases:

   ```html
   class="d-block w-100 carousel-photo"
   ```

7. Agregar a cada imagen un atributo `alt` que describa la escena correspondiente.

> 💡 **Importante:** la clase `active` indica qué diapositiva se muestra al iniciar el carrusel. Por este motivo, debe estar **únicamente en el primer `carousel-item`**.

👀 **Resultado esperado:** los controles **Anterior** y **Siguiente** permiten recorrer las imágenes de yoga, fuerza y ciclismo. El carrusel muestra una imagen por vez y comienza mostrando la imagen de yoga.

📚 Referencia: [carrusel](https://getbootstrap.com/docs/5.3/components/carousel/).
