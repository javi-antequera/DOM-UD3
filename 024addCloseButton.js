"use strict"
let div = document.getElementById("div")
let horse = document.getElementById("horse");
let donkey = document.getElementById("donkey");
let cat = document.getElementById("cat");
let btnHorse = document.getElementById("btnHorse");
let btnDonkey = document.getElementById("btnDonkey");
let btnCat = document.getElementById("btnCat");

btnHorse.onclick = () => {
    horse.remove()
}
btnDonkey.onclick = () => {
    donkey.remove()
}
btnCat.onclick =  () => {
    cat.remove()
}
// function close(seccion) { 
//     if(seccion=="horse"){
//         horse.remove();
//     }else if(seccion=="donkey"){
//         donkey.remove();
//     }else if(seccion=="cat"){
//         horse.remove();
//     }
//  }