"use strict"
const button = document.createElement("button")
button.innerHTML = "¡Ocúltame!"
document.body.append(button);
button.onclick = () => {
    button.setAttribute("hidden","true");
}