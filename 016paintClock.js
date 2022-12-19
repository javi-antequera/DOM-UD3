"use strict"
let intervalId;

let reloj = document.getElementById('reloj');
const red = reloj.firstElementChild.setAttribute("class","hour");
const green = reloj.children[1].setAttribute("class","min");
const blue = reloj.lastElementChild.setAttribute("class","sec");

function Start() {
     // inicia el setInterval
  if (intervalId === undefined) intervalId = setInterval(timeControl, 1000); 
    // Si intervalId no es undefined, llamará al controlador
  timeControl();
}

function Stop() {
  clearInterval(intervalId); // parael setInterval()
  intervalId = null; // Si vuelve a clickear start vuelve al proceso incial
}

    function timeControl() {
      let date = new Date(); // Obtenemos la fecha con hora minuto y segundo exacto
      let hora = date.getHours(); //horas
      let minutos = date.getMinutes(); //minutos
      let sec = date.getSeconds(); //segundos

// Si es de una cifra añado un 0 delante
      if (hora < 10) 
      hora = "0"+hora;

      reloj.children[0].innerHTML = hora;

      if (minutos < 10)
      minutos = "0"+minutos;

      reloj.children[1].innerHTML = minutos;

      if (sec < 10)
      sec = "0"+sec;

      reloj.children[2].innerHTML = sec;
    }