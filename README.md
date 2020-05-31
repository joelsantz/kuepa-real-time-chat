# kuepa-real-time-chat

### A continuación inidico todo lo relacionado con la prueba tecnica realizada. 🖐

## Stack:
* React: uso de buenas practicas de esta librerias para realizar el desarrollo frontend, con hooks.
* NodeJs: el backend se realizo con este entorno de javascript.
* Express: se utilizo este framework para todo relacionado con el servidor.
* Socket.io: se utilizo esta libreria para la comunicacion en tiempo real, en este caso el funcionamiento del chat.
* Heroku: el deploy del backend se realizo en heroku, ya que cuenta con una serie de herramientas utiles para esto.
* Netlify: el deploy del frontend se realizo en este aplicativo, ya que podemos garantizar el CD / CI conectando nuestro app con el respositorio en este caso github.
* Manejo de git para el versionamiento utilizando gitflow.

## ¿Como se desarrollo? 🤔
Debido al tiempo que resulta un limitante en este tipo de pruebas, quise enfocar el desarrollo en la correcta funcionalidad del chat, es por ello que deje afuera la autenticacion y persistencia de datos (aunque realizar esto puede ser algo no tan complejo, requiere de tiempo y los contratiempos pueden jugar una mala pasada) por esto decidi enfocarme en el chat, utilizando el stack de tecnologias mencionadas anteriormente se logro el resultado esperado al alcance y acotacion que me propuse para la prueba.

## ¿Que se puede hacer? 😁
* Multiples usuarios en una clase con el mismo id, se anuncia a la persona que entra y que sale del chat.
* Multiples salas con multiples usuarios en las mismas.
* Cada alumno registra un nombre de usuario unico.
* Cada mensaje enviado en el chat, se especifica su emisor.
* Debido al uso de socket.io y react el chat es en tiempo real y no requiere refrescar la aplicacion para ver mensajes nuevos.
* Se utilizo una libreria de react: react-emoji que nos permite utilizar emojis en el chat cuando escribimos el emoji con caracteres (ejemplo: :) , :( )

## ¿Que se puede mejorar?
* Por supuesto con un poco más de tiempo se puede integrar mas funcionalidades al chat y la persistencia de datos para lo mensajes, estos deben estar sugetos a un tiempo de sesion, emisor y canal
* Con el manejo de media querys podemos mejorar la experiencia de usuario en diferentes dispositivos moviles, utilizando los tamaños estandar al momento de desarrollar un aplicativo responsive  (1600px, 1200px, 1024px, 900px, 768px... etc)

## Momento de ver nuestro chat 💻 
* desplegado en: https://5ed345b0987c7a120b356940--kuepa-chat-joel-santana.netlify.app/  ✔✔✔

* Si se desea correr localmente:
  * Tener instalado nodejs en la maquina.
  * Descargar o clonar el repositorio.
  * Dentro de cada folder Cliente y Server, correr el comando: npm install
  * Dentro de cada folder Cliente y Server, correr el comando: npm start

## ¡Muchas gracias por su tiempo, espero una pronto feedback!

