'use strict'
/*Una funcion es un grupo de instrucciones reutilizables */

function calculadora(numero1,numero2, mostrar= false){
    //conjunto de instrucciones a ejecutar
    if(mostrar == false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log("Multiplicacion: " +(numero1*numero2));
        console.log("Division: " +(numero1/numero2));
    }else{
        document.write("Suma: "+ (numero1+numero2)+"<br/>");
        document.write("Resta: "+(numero1-numero2)+"<br/>");
        document.write("Multiplicacion: " +(numero1*numero2)+"<br/>");
        document.write("Division: " +(numero1/numero2)+"<br/>");
    }
}

//Llamar una funcion
calculadora(2,4);
calculadora(2,5,true);
