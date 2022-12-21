"use strict"
// function handler() {
//     alert( "..." );
//     return false;
//   }

//No funciona y para solucionarlo debemos usar e.preventeDefault cuya función es cancelar cualquier tipo de evento 
//Quedaría así:
function handler(e) {
        alert( "..." )
        e.preventDefault()
}