"use strict"

let button = document.createElement("button") // creo un boton
button.innerHTML = "boton" // Le añado texto
document.body.append(button); //Se lo añadimos al body  
button.addEventListener("click", () => alert("1")); //Crea el addEventListener
button.removeEventListener("click", () => alert("1")); // Elimina eL addEventListener
button.onclick = () => alert(2); // funcion callback

//Quitando el addEventListener no existe el evento de click, por lo que no se mostraría el alert