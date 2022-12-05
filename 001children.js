"use strict"
//¿El nodo <div> del DOM? Accedemos al div mediante querySelector, y mostramos el valor del primer hijo
let div=document.querySelector("div").firstChild.nodeValue;
alert (div);
//¿El nodo <ul> del DOM? Accedemos a ul mediante querySelector y extraemos el trozo de html que lo compone
let ul=document.querySelector("ul").outerHTML;
alert (ul);
//El segundo <li> (con Peter Parker)? Accedemos al array de li del DOM y mostramos la segunda posicion
let li2=document.getElementsByTagName("li")[1].outerHTML;
alert(li2);