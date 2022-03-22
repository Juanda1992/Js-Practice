'use strict'
/*Una funcion es un grupo de instrucciones reutilizables */

function calculadora(numero1,numero2){
    //conjunto de instrucciones a ejecutar
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: " +(numero1*numero2));
    console.log("Division: " +(numero1/numero2));

}

//Llamar una funcion
calculadora();
for( var i=1; i<=10;i++){
    console.log(i);
    calculadora(i,8);
}