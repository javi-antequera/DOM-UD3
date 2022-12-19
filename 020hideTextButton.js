"use strict"

const div = document.createElement("div")
div.setAttribute("id","text");

const texto = document.createElement("p")
texto.innerHTML = "Texto"

const button = document.createElement("button")
button.innerHTML = "Haz click para desaparecer el texto"



div.append(texto);
document.body.append(div);
document.body.append(button);
button.onclick = () => {
    div.remove();
}