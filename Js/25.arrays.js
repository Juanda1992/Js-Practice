'use strict'

//Arrays // Arreglos // Matrices

var nombre = "Juan Olarte";
var nombres = ['Juan', 'Pedro', 'Juanito', 52, true];

var lenguajes = new Array ("PHP", "Java", "JavaS");

// console.log(nombres);
// console.log(lenguajes);

//Para imprimir un array con su posicion exacta imprimimos la posicion en la cual se encuentra ubicada

// console.log(nombres[0]);
//Imprimimos en el arreglo nombres a Juan, ya que este se encuentra en la posicion 0

//Para ver la longitud de nuestro array podemos utilizar la propiedad LENGTH

// console.log(nombres.length);

// alert(nombres[elemento]); 

// Utilizamos un if para validar la longitud del array 

// var elemento  = parseInt(prompt("Que elemento del array deseas imprimir ?",0));

// if (elemento >= nombres.length) {
//     alert  ("Introduce el numero correcto menor que " + nombres.length);
// } else {
//     alert  ("El usuario seleccionado es: " + nombres[elemento]);
    
// }

//Imprimimos por pantalla y recorremos el array imprimiendo el array completo

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i ++){
    document.write("<li>"+ lenguajes[i]+"</li>");
}

document.write("</ul>")

//Podemos recorrer el anterior array tambien con un Foreach, en cual se puede hacer de una manera
// mas practica y limpia
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+ indice +"_" + elemento+"</li>");
});

document.write("</ul>")

//60.Otra manera de recorrer un array con un ForIn

for( let lenguaje in lenguajes){
    document.write("<li>"+ lenguajes[lenguaje]+"</li>");   
}

//61. Buscar dentro de un array con el metodo find

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda);

// findIndex nos muestra la posicion de lo que buscamos, en este caso nos muestra 
//la posicion 0 ya que alli se encuentra la cadena de texto PHP

var busqueda1 = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda1);

//El metodo some nos ayuda a buscar una condicion en especifico, en este caso
// que sea mayor o menor

var precios = [10 , 20 , 40, 75, 81];

var busqueda2 = precios.some(precio => precio < 10);

console.log(busqueda2);