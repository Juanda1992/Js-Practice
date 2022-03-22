'use strict'

// Programa que nos pide ingresar dos numeros y que nos indique cual es el mayor
// y cual es el menor y o si los dos son iguales

// Hay que convertir el prompt a un numero ya que este siempre recoge un String
// para esto usamos el parseInt
var numero1= parseInt(prompt("Ingrese el primer numero",0));
var numero2= parseInt(prompt("Ingrese el segundo numero ",0));
 
//validacion donde los numeros no pueden ser menores o igual a cero
// o no puede ser cadenas de texto
while(numero1 <= 0 || numero2  <= 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1= parseInt(prompt("Ingrese el primer numero",0));
    numero2= parseInt(prompt("Ingrese el segundo numero ",0));

    console.log("Por favor ingrese valores validos")
}
if(numero1 == numero2){
    console.log("Los numeros son iguales");
}
else if (numero1 > numero2){
    console.log("El "+ numero1 +" es mayor que el "+numero2);
}else{
    console.log("El "+ numero2 +" es mayor que el "+numero1)
}