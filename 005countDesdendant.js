"use strict"

let arrayLi = document.querySelectorAll("li");
//Recorro el array de li y muestro el contenido
arrayLi.forEach(element => {
    alert(element.textContent);
});
//numero de li anidados
alert("Hay un total de "+arrayLi.length+" li");