'use strict'

var numero =445;
var texto1 = "Hola soy yo de nuevo";
var texto2 = "Hola soy yo otra vez";

var busqueda =texto1.indexOf("soy");
                //indexOf encuentra la primera coincidencia de la palabra
                //search es un sinonimo de indexOf

                //texto1.lastIndexOf("soy")
                //Esta nos muestra la ultima coincidencia   

                //textto1.match(/soy/g);
                //Esta nos va devolver un array con la cantidad de palabras iguales encontradas

                //texto1.substr("5,10");
                //Este nos ayuda a substraer las letras a partir del espacio 5 al 10

                //texto1.charAt(5)
                //Este nos ayuda a traer un caracter en la posicion solicitada en su parametro 

                //texto1.startsWith("Hola");
                //Este metodo nos devuelve un booleano indicandonos si la palabra escrita es con la cual
                //comienza la cadena de texto o no, si es asi nos devolvera un true, de lo contrario sera
                // un false

                //texto1.endsWith("soy");
                //Este es lo mismo que el anterios pero en el sentido contrario
console.log(busqueda);