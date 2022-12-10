// Creación de la fecha
const fecha = document.querySelector('#fecha');
const date = new Date();
fecha.innerHTML = "🗓️ " + date.toLocaleDateString('es-AR', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});

// variables
const formulario = document.querySelector('#formulario');
const list = document.querySelector('#lista-tweets');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
let tareas = {};




