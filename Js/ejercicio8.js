'use strict'

/*
Calculadora
1. Pida dos numeros por pantalla
2. validacion de numeros 
3. En el cuerpo de la pagina en un alert  y por consola
el resultado sumar, restar, multiplicar y dividir estas cifras
*/ 

var numero1= parseInt(prompt("Introduzca el primer numero"),0);
var numero2= parseInt(prompt("Introduzca el segundo numero"),0);

while(numero1 <=0 ||numero2 <=0 ||isNaN(numero1) ||isNaN(numero2)){

    numero1= parseInt(prompt("Introduzca el primer numero"),0);
    numero2= parseInt(prompt("Introduzca el segundo numero"),0);
}

var resultado = "La suma es"+ (numero1+numero2)+ "<br/>"+
                "La resta es"+(numero1-numero2)+ "<br/>"+
                "La multiplicacion es"+(numero1*numero2)+ "<br/>"+
                "La division es"+(numero1/numero2)+ "<br/>";

                var resultadoAlCon = "La suma es"+ (numero1+numero2)+ "\n"+
                "La resta es"+(numero1-numero2)+ "\n"+
                "La multiplicacion es"+(numero1*numero2)+ "\n"+
                "La division es"+(numero1/numero2)+ "\n";                   

document.write(resultado);  
alert("El resultado es:"+ resultadoAlCon);
console.log("El resultado es:"+ resultadoAlCon);               