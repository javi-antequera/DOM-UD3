"use strict"
/*
1.¿Es cierto que elem.lastChild.nextSibling siempre es null?
    Sí, verdadero. El elemento elem.lastChild siempre es el último, no tiene nextSibling.
*/
let elemento=document.getElementById("elemento");
alert("Siguiente elemento del ultimo: \n"+elemento.lastChild.nextSibling);
/*
2.¿Es cierto que elem.children[0].previousSibling siempre es null ?
    No, falso. elem.children[0] es el primer hijo entre elementos, pero pueden existir nodos que no son elementos antes que él. 
    previousSibling puede ser un nodo texto.
*/
alert("Anterior elemento al primero: \n"+elemento.children[0].previousSibling);