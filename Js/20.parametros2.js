'use strict'

//Parametros REST Y SPREAD

//Cuando utilizamos los 3 puntos en los parametros, podemos capturar cantidad
//infinita de valores o parametros los cuales se guardan en un Array, ESTE SERIA UN
// PARAMETRO DE TIPO REST!
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta1: "+ fruta1);
    console.log("Fruta2: "+ fruta2);
    console.log(resto_de_frutas);

}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Maracuya","Guanabana")

// le pasamos los parametros los cuales son un arreglo pero con el parametro 
// SPREAD antecedido de los 3 puntos nos dividira el array lo podra leer como se leyo con
// el parametro REST
var frutas =["Naranja", "Manzana"];
listadoFrutas (...frutas,"Sandia","Pera","Maracuya","Guanabana");