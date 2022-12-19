"use strict"
let ul = document.getElementById("ul"); 
let li1 = document.getElementById("one"); 
let li4 = document.getElementById("four");

let li2 = document.createElement("li"); 
  li2.setAttribute("id","two");
  li2.innerHTML = "2";
let li2Id = document.getElementById("two");

let li3 = document.createElement("li");
  li3.setAttribute("id","three");  
  li3.innerHTML = "3";
  li1.insertAdjacentElement("beforeend",li2);
  li1.insertAdjacentElement("beforeend",li3);