"use strict";
let ul = document.createElement('ul'); //Creamos lista ul
document.body.append(ul);

while (true) {
  let datos = prompt("Introduce el texto", "");
  if (!datos) {//Si no hay datos o cancela, rompe el bucle
    break;
  }
  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}