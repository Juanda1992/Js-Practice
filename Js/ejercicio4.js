'use strict'

//Mostrar todos los numeros impares que esten dentro de los dos numeros introducidos por teclado
var numero1 =parseInt(prompt("Introduce el numero 1",0));
var numero2 =parseInt(prompt("Introduce el numero 2",0));

document.write("");
while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0){
        console.log("El"+numero1+"es impar")
    }
}