
<br />
<p align="center">

  <h1 align="center">Informe práctica implementación search </h1>

</p>

<!-- TABLE OF CONTENTS -->
<details open="open">

  **1.** [Código para la implementación del punto final de la API del generador de nombres para mascotas](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741#1-c%C3%B3digo-para-la-implementaci%C3%B3n-del-punto-final-de-la-api-del-generador-de-nombres-para-mascotas)

  **2.** [Código para la página del generador de nombres para mascotas](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741#2-c%C3%B3digo-para-la-p%C3%A1gina-del-generador-de-nombres-para-mascotas)
  
  **3.** [Código para la implementación del punto final de la API del generador de imágenes](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741#3-c%C3%B3digo-para-la-implementaci%C3%B3n-del-punto-final-de-la-api-del-generador-de-im%C3%A1genes)
  
  **4.** [Código para la página del generador de imágenes](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741#4-c%C3%B3digo-para-la-p%C3%A1gina-del-generador-de-im%C3%A1genes)
  
  **5.** [Ejercicios de REST](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741#5-ejercicios-de-rest)
</details>

## 1. Código para la implementación del punto final de la API del generador de nombres para mascotas

Para poder implementar esta funcionalidad, se ha utilizado la librería de OpenAi, la cual se puede instalar con el siguiente comando:

```bash
npm install openai-api
```
Tras eso necesitamos configurar la API key, para ello, se debe crear un archivo .env en la raíz del proyecto, y añadir la key que se ha obtenido en la página de OpenAi. <br>
Ahora creamos el archivo conteniente el punto final de la api con la que se comunicará nuestra página con el servicio web de OpenAi
Para ello creamos el archivo api/openai.js, ya que todos los archivos en la carpeta api se mapean como **api/*** , y serán considerados puntos finales de un API. <br>
Para que la ruta sea accesible como API, se debe exportar como una función de Node.js. <br>
Dentro de la función es donde llamamos a la función **createCompletion** de OpenAi, pasando los parametros necesarios para que nos devuelva el JSON contenente el texto generado. <br>
Los objetos **req** y **res** son los objetos de Node.js que representan la solicitud y la respuesta. <br>
Contienen una serie de parametros y metodos que nos permite facilitar las solicitudes y las respuestas. <br>
<br>

![generatejs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/generatejs.png)

## 2. Código para la página del generador de nombres para mascotas

Posteriormente, creamos un archivo llamado **pet.js**, el cual se encargará de hacer la petición a la api de OpenAi, y devolver el texto generado. <br>
Al crear un archivo en /pages se crea una ruta dinámica, en este caso, la ruta es **/pet**. <br>
En el archivo **index.js**, donde está la página principal, usaremos Link para enlazar a la ruta **/pet**. <br>
Aquí se define la funcion que se va a exportar como componente de la pagina web, donde realizamos la petición a la api. <br>
Para ello, usamos la función **onSubmit** que se encarga de hacer la petición con la api que hemos especificado en el fichero anterior, especificando el metodo (en este caso **POST**, ya que queremos enviar datos para la creación de un recurso), los encabezados y el body de la petición, que contiene el animal que se especificará por texto por el usuario. <br>
Esperamos la respuesta de la api y la guardamos en la variable **data**.
Tras eso llamamos la función **setResult** para guardar el texto generado en la variable **result** para que posteriormente se muestre por pantalla. <br>

![petjs1](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/petjs1.png)

![petjs2](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/petjs2.png)

![paginaPetjs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/paginaPetjs.png)

## 3. Código para la implementación del punto final de la API del generador de imágenes

Como hemos hecho con el generador de nombres, primero creamos en la carpeta **api** el archivo **generateImage.js**, donde se encuentra el punto final de la api que se encarga de comunicarse con el servicio web de OpenAi de generación de imagenes. <br>
Hacemos lo mismo que en el caso anterior, pero esta vez usaremos la función **createImage()** de OpenAi, pasando los parametros necesarios para que nos devuelva el JSON conteniente la imagen generada, que en este caso son el prompt en el que se basará para generar la/las imagen/es, el número de imagenes a generar y el tamaño de la/las imagen/es. <br>

![generateImagejs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/generateImagejs.png)

## 4. Código para la página del generador de imágenes

Posteriormente, creamos un archivo llamado **image.js**, el cual se encargará de hacer la petición al servicio web de OpenAi, y devolver la imagen generada. <br>
Volvemos a usar **fetch** para hacer la petición, los parametros del body son los anteriormente mencionados. <br>
Obviamente el metodo es **POST**, ya que en este caso también queremos enviar datos para la creación de un recurso. <br>
Como en el otor archivo, esperamos la respuesta, la guardamos en la variable **data** y llamamos la función **setResult** para guardar la imagen generada en la variable **result** para que posteriormente se muestre por pantalla. <br>
Esta función que se encarga de todo esto, llamada **generateImageRequest()** se llama en el evento **onClick** del boton **Generate an image**. <br>

![imagejs1](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/imagejs1.png)

![imagejs2](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/imagejs2.png)

![paginaImagejs1](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/paginaImagejs1.png)

![paginaImagejs2](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/paginaImagejs2.png)

Añadimos en el archivo **index.js** el enlace a la ruta **/image**. <br>

![indexjs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/indexjs.png)


## 5. Ejercicios de REST

Se realizarán una serie de peticiones a la api de OpenAi, usando el cliente Thunder Client. <br>

### 5.1. Petición para obtener los modelos disponibles

En este caso, usaremos el método **GET** para obtener los modelos disponibles, mientras que el enlace a la api es https://api.openai.com/v1/models <br>
No hará falta añadir ningún parámetro en el body, pero sí hay que añadir en el apartado de **Auth** la API key de OpenAi que obtuvimos. <br>
![restexercise1](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/restexercise1.png)

### 5.2. Petición para obtener el detalle de un modelo

Aquí también usaremos el método **GET**, pero en este caso el enlace a la api será https://api.openai.com/v1/models/text-davinci-003 , ya que estamos solicitando la información de un modelo en concreto. <br>
Tampoco en este caso hay que añadir ningún parámetro en el body, y el apartado de **Auth** de la API key de OpenAi se guarda de la petición anterior. <br>
![restexercise2](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/restexercise2.png)

### 5.3. Petición para generar una imagen adorable

En este caso, usaremos el método **POST**, ya que queremos enviar datos para la creación de un recurso. <br>
El enlace a la api será https://api.openai.com/v1/images/generations , y, esta vez, hará falta en el body especificar los siguientes parámetros: <br>
```JSON
{
  "prompt": {Aquí va la descripcion de la imagen},
  "n": {Aquí va el número de imágenes que queremos generar},
  "size": {Aquí va el tamaño de la imagen que queremos generar},
}
```
![restexercise3](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/restexercise2.png)

### 5.4. Petición para generar una completion

Aquí también usaremos el método **POST** con el enlace https://api.openai.com/v1/completions . <br>
En este caso, el body será el siguiente: <br>
```JSON
{
  "model": "text-davinci-003",
  "prompt": "Say goodbye!",
  "max_tokens": 5,
  "temperature": 0.6,
  "top_p": 1,
  "n": 2,
  "stream": false,
  "logprobs": null,
  "stop": "\n"
}
```
![restexercise4](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/restexercise4.png)

### 5.5. Petición para comprobar si una frase contiene palabras problemáticas

En este caso también usaremos el método **POST** con el enlace https://api.openai.com/v1/moderations , para comprobar si una frase contiene palabras problemáticas. <br>
El body será el siguiente: <br>
```JSON
{
  "input": {Aquí va la frase que queremos comprobar}
}
```
![restexercise5](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/restexercise5.png)


