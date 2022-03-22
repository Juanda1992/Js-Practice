'use strict'

/*Utilizar un bucle para mostrar la suma y la media de los numeros
ingresados hasta ingresar un numero negativo y alli imprimir el resultado */

var suma= 0;
var contador=0;

do{
    var numero= parseInt(prompt("Ingrese numeros ghasta que ingrese uno negativo",0));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        suma = suma + numero;

        contador ++;
    }
    console.log(suma);
    console.log(contador);
    
}while(numero >= 0)

console.log("La suma de todos los numeros es " +  suma);
console.log("El promedio de los numeros introducidos es "+ (suma/contador));