"use strict";       
//Imagen principal(grande)
let principal = document.getElementById("imgPrincipal");
//Array de las imagenes pequeñas
let gallery = document.querySelectorAll(".secundarias img");
for (let i = 0; i < gallery.length; i++) {
    //Añadimos un listener de click a cada imagen en miniatura
    gallery[i].addEventListener("click", function () {
    //Cambio el src al de la foto seleccionada
    principal.setAttribute("src", gallery[i].getAttribute("src"));
  });
}
