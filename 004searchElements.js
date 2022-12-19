"use strict"
//Tabla con id="age-table
let tabla = document.getElementById('age-table');

//Todos los elementos label dentro de esa tabla
tabla.getElementsByTagName('label');

//El primer td en la tabla con la palabra Age
tabla.rows[0].cells[0];

// Formulario con name="search" utilizando el formulario especifico
document.querySelector('form[name="search"]');

//Primer input en el formulario.
form.getElementsByTagName('input')[0];

//Último input en el formulario.
// Primero obtengo todos los input
let inputs = form.querySelectorAll('input');
// Y aqui obtengo el último
inputs[inputs.length-1];