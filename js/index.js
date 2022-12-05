// Creación de la fecha
const fecha = document.querySelector('#fecha');
const date = new Date();
fecha.innerHTML = date.toLocaleDateString('es-AR', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});




