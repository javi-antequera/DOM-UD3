"use strict"
function showNotification() {
  const div = document.createElement("div")
  div.setAttribute("class","notification welcome")
  const divText = document.createTextNode("Hello!")
  div.append(divText)
  document.body.append(div)
}
function removeNotification (){
    const div = document.querySelector("div")
    div.remove();
}
showNotification();

let controlador = 0;
const intervalID = setInterval(()=>{
    controlador++
    console.log(controlador)//controlador de los segundos por pantalla
    if(controlador == 15){
     removeNotification()
     clearInterval(intervalID)
    }
}, 1000)