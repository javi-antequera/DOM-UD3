"use strict";

let columns = document.getElementsByTagName("th");
let datos = document.querySelector("tbody");

for (let th of columns) {
  if (th.getAttribute("data-type") == "number") {
    //Si se escoge número, primera columna
    let tdAge = Array.from(document.querySelectorAll("tr td:first-child"));
    //se ordenan por los números de menor a mayor
    th.addEventListener("click", function () {
      tdAge.sort(function (a, b) {
        return a.textContent - b.textContent;
      });
      
      for (let td of tdAge) {
        datos.append(td.parentNode);
      };
    });
  } else if (th.getAttribute("data-type") == "string") {
    //Si se escoge nombtr, segunda columna
    let tdName = Array.from(document.querySelectorAll("tr td:nth-child(2)"));
    //se ordena alfabeticamente
    th.addEventListener("click", function () {
      tdName.sort((a, b) => a.textContent.localeCompare(b.textContent));

      for (let td of tdName) {
        datos.append(td.parentNode);
      }
    });
  }
}