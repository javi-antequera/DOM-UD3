let ul = document.getElementById("ul");
//Evita la selección nativa del navegador del texto en los clics
ul.onmousedown = function () {
  return false;
};
ul.addEventListener("click", function (event) {
  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle("selected");
  } else {
    select(event.target);
  }
});
function select(li) {
  let seleccionado = ul.querySelectorAll(".selected");
  for (let item of seleccionado) {
    item.classList.remove("selected");
  }
  li.classList.add("selected");
}