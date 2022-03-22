'use strict'

//Arreglos multidimensionales 
//Basicamente es anidar arrays dentro de un array 

var categorias =['Accion', 'Terror' , 'Comedia'];
var peliculas =[ 'Say yes' , 'La verdad', 'True man'];

var cine = [categorias, peliculas];

console.log(cine[0],[1]);
console.log(cine[1],[2]);

//Operaciones con arrays
//Como añadir algo a un arreglo ya existente

peliculas.push("Batman");
console.log(peliculas);

// de esta manera el array peliculas añadira una tercera con posicion con el nombre de batman

var elemento = "";
 do {

    elemento = prompt("Introduce la nueva pelicula ");
    peliculas.push(elemento);

 }while(elemento =! "ACABAR");

 peliculas.pop();

 // El método pop elimina el último elemento de un array y devuelve su valor al
 // método que lo llamó. pop es intencionadamente genérico; 
 //este método puede ser called o applied en objectos similares a un array.

 console.log(peliculas);

 // .join Une todos los elementos de un array conviertiendolo en cadena de texto

 var peliculas_string = peliculas.join();

 console.log(peliculas_string);
 
//58. Convertir un String en un array

 // .split nos ayuda a convertir una cadena de texto en un array

 var cadena  = "texto1, texto2, texto3";
 var cadena_array = cadena.split(",");

 console.log(cadena_array);

 //59. ordenar un array

 // .sort nos ayuda a organizar un array en orden alfabetico
 // .reverse nos ayuda a mostrar el array de atras pora adelante

 peliculas.sort();
 peliculas.reverse();