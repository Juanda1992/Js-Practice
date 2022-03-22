'use strict'

//DOM Document object model
//El DOM es el arbol de todos los elementos que hay en una pagina a nivel de
// de HTML todas las etiquetas son elementos del DOM

function cambiarColor (color){
    caja.style.background = color;

}

// Conseguir elementos con un id concreto

var caja = document.getElementById("micaja");
// var caja = document.querySelector(#micaja);

caja.innerHTML = "Cambiando el texto de la caja !";
caja.style.background = "blue";
caja.style.padding = "15px";
caja.style.color = "grey";
caja.className = "Hola estoy agregando un classname";

// console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDiv  = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");

var hr  = document.createElement("hr");

var valor;
for ( valor in todosLosDiv){
    if(typeof todosLosDiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

//Utilizamos el for in para poder recorrer la coleccion de HTML
//No podemos utilizar ForEach por que este es para recorrer arregloss, con objetos o strings
//textContent sirve pora sacar el contenido

//append significa añade despues
//prepend significa añade antes 

//Conseguir elementos por su clase css

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');

divAmarillos[0].style.background = "yellow";

var div;
for (div in divRojos){
    if(divRojos[div].className =="rojo"){
        divRojos[div].style.background ="red";
    }
}

// Para seleccionar muchos elementos existe el método querySelectorAll, te dejo una referencia por aquí:

// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll