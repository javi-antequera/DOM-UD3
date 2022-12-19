"use strict"
function createCalendar(elem, year, month) {
    let mes = month - 1; //Los meses van de 0 a 11 
    let fecha = new Date(year, mes);
    //Cabecera de la tabla
    let tabla = "<table></table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>" ;
    // Desde lunes hasta primero de mes
    for (let i = 0; i < obtenerDia(fecha); i++) {
      tabla += '<td></td>';
    }
    //si es domingo nueva linea
    while (fecha.obtenerMes() == mes) {
      tabla += '<td>' + fecha.obtenerFecha() + '</td>';
      if (obtenerDia(fecha) % 7 == 6) { 
        tabla += '</tr><tr>';
      }
      fecha.establecerFecha(fecha.obtenerFecha() + 1);
    }
    // espacios para completar la linea
    if (obtenerDia(fecha) != 0) {
      for (let i = obtenerDia(fecha); i < 7; i++) {
        tabla += '<td></td>';
      }
    }
    tabla += '</tr></table>';//Cierro la tabla
    elem.innerHTML = tabla;
  }

  function obtenerDia(mes) { // Obtengo el día (de 0 a 6)
    let day = mes.obtenerDia();
    if (day == 0) day = 7; // Domingo es 0
    return day - 1;
  }
  // calendar=document.getElementById(calendar);
  createCalendar(calendar, 2012, 9); // Creo el calendario