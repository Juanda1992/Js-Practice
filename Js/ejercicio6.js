'use strict'
/*Programa que nos diga si el numero es par o impar.
1.Ventana Prompt
2. Si no es valido que lo pida de nuevo */

var numero = parseInt(prompt("Intrduzca un numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Intrduzca un numero",0));

    
}
if(numero%2 == 0){
    console.log("El numero es par");

}else if(numero%2 != 0){
    console.log("El numero es impar");
}