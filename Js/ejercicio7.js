'use strict'

/*Tabla de multiplicar por un numero introducido por pantalla
*/

var number = parseInt(prompt("Introduce el numero que deseas multiplicar",0));

console.log("Esta es la tabla del: "+ number);

for(var i= 0;i <=10;i++){
    console.log(i*number);
}

//Toda las tablas de multplicar
for(var t; t <= 10;t++){

    document.write("Esta es la tabla del: "+ c);

    for(var i= 0;i <=10;i++){
        document.write(i*c);
    }
}