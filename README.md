---
title: "Informe practica introducción a NextJs"
excerpt_separator: "<!--more-->"
---

<br />
<p align="center">

  <h1 align="center">Informe práctica implementación search </h1>

</p>

## 1. Código para la implementación del generador de nombres OpenAi

Para poder implementar esta funcionalidad, se ha utilizado la librería de OpenAi, la cual se puede instalar con el siguiente comando:

```bash
npm install openai-api
```
Tras eso necesitamos configurar la API key, para ello, se debe crear un archivo .env en la raíz del proyecto, y añadir la key que se ha obtenido en la página de OpenAi. <br>
Ahora creamos el archivo contenente la api con la que se comunicará nuestra página con el servicio web de OpenAi
Para ello creamos el archivo api/openai.js, ya que todos los archivos en la carpeta api se mapean como **api/*** , y serán considerados puntos finales de un API. <br>
Para que la ruta sea accesible como API, se debe exportar como una función de Node.js. <br>
Dentro de la función es donde llamamos a la función **createCompletion** de OpenAi, pasando los parametros necesarios para que nos devuelva el JSON contenente el texto generado. <br>
Los objetos **req** y **res** son los objetos de Node.js que representan la solicitud y la respuesta. <br>
Contienen una serie de parametros y metodos que nos permite facilitar las solicitudes y las respuestas. <br>
<br>

![generatejs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/generatejs.png)

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

## 2. Código para la implementación del generador de imágenes

Como hemos hecho con el generador de nombres, primero creamos en la carpeta **api** el archivo **generateImage.js**, donde se encuentra el punto final de la api que se encarga de comunicarse con el servicio web de OpenAi de generación de imagenes. <br>
Hacemos lo mismo que en el caso anterior, pero esta vez usaremos la función **createImage()** de OpenAi, pasando los parametros necesarios para que nos devuelva el JSON conteniente la imagen generada, que en este caso son el prompt en el que se basará para generar la/las imagen/es, el número de imagenes a generar y el tamaño de la/las imagen/es. <br>

![generateImagejs](https://github.com/ULL-ESIT-DMSI-2223/nextjs-gianmarco-corbo-alu0101134741/blob/main/docs/images/generateImagejs.png)

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



