# Beatriz's tech test for SAMY

## a pretty images scrolling app

Este proyecto es una **SPA responsive** que simula la aplicación de una red social en la que se muestran imágenes en un **scroll infinito** sobre las que se puede hacer **'like'** y **'repost'**. Estas imágenes **se pueden filtrar por título y autor** a través del input que aparece en el header.

Además, al hacer click sobre el título de la publicación accedemos a la **página de imágen**, donde puede realizarse su compra. Al hacer click sobre el nombre del autor accedemos a la **página de autor**, donde vemos detalles de éste así como todas sus publicaciones.

## demo

Se puede visitar la demo de la SPA en la url:

    https://beatrizxsamy-tech-test.vercel.app/

## para utilizar la aplicación descargando el repositorio

1. Una vez descargado el repositorio tendremos que instalar las dependencias desde terminal con:

    `npm install`

2. Para arrancar la aplicación, que se mostrará en `http://localhost:3000/`:

    `npm run dev``

3. La aplicación se serviría de imágenes a través de una API que no está desarrollada aún, por lo que podemos optar por suplirla con el repositorio de este enlace:

    https://drive.google.com/file/d/1W0L_5uj9XRIJwo8ztTDzoRR4G7GeLJGp/view

arrancando su funcionamiento en `http://localhost:3100/images` desde terminal con:

    `npm run mocks``

* Ya que la API no devuelve resultados actualizados al darse cambios en las publicaciones, la app se apoya en LocalStorage para simularlos.
* A fin de poder desplegar la demo se ha incluido un archivo JSON que permite utilizar la app sin realizar este paso. Bastaría comentar el códico correspondiente en `services/getImages.js` para que la app no utilice este archivo como fuente.

