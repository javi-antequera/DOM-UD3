"use strict"
let tr=document.querySelectorAll("tr");
let td=document.querySelectorAll("td");
let contador=5;
for(let i=0;i<td.length;i++){
    contador++;
    if(contador==6){
        td[i].style.background="red";
        contador=0;
    }
}
