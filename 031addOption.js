"use strict";
let genres = document.getElementById("genres");
//Obtengo el index de la option seleccionada
let seleccionado = genres.options[genres.selectedIndex];
alert("Value: " + seleccionado.value + " Text: " + seleccionado.text);

//Creo classic
let nueva = document.createElement("option");
nueva.value = "Classic";
nueva.text = "Classic";
//Lo añado al select
genres.appendChild(classic);
