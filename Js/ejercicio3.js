'use strict'
//Hacer un programa que muestre todos los numeros entre los 2 numeros introducidos por el usuario

var numero1 =parseInt(prompt("Introduce el numero 1",0));
var numero2 =parseInt(prompt("Introduce el numero 2",0));

document.write("Del "+numero1+" al "+numero2+" estan estos numeros")
for(var i= numero1; i<= numero2; i++){
    document.write(i+"<br>")
}