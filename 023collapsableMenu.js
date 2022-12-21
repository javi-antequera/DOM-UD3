"use strict"
let div = document.getElementById("div");
let desplegados = document.getElementById("desplegados");
let icono = document.getElementById("icono");
let button = document.getElementById("button");
desplegados.hidden = true;

function collapsable() { 
    if(desplegados.hidden === false){
        icono.innerHTML = "▶";
        desplegados.hidden = true;
    }
    else{
        icono.innerHTML = "▼";
        desplegados.hidden = false;
    }
 }
