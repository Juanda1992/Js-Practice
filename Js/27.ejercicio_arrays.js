'use strict'

/*
1.Programa que pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos ) en el cuerpo de la pagina y la consola 
3.Ordenar el array y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario y que nos diga si esta en el array
// y su posicion



*/ 



function mostrarArray(elementos, texto =""){
    document.write("<h1>Contenido del array "+ texto + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,indice)=>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>")
}

var numeros = new Array (6);
//2da manera de hacerlo
//var = numero =[]

for(var i = 0; i <= 5; i ++){
   numeros[i] = parseInt(prompt("Introduce un numero",0));
   //numeros.push(parseInt(prompt("Introduce un numero",0)));
}

mostrarArray(numeros);
//Mostrar en el cuerpo de la pantalla
// document.write("<ul>");

// numeros.forEach((elemento, indice)=>{
//     document.write("<li>"+ indice +"_" + elemento+"</li>");
// });

// document.write("</ul>")


//Mostrar por consola
//console.log(numeros);

numeros.sort();
mostrarArray(numeros, ' ordenado');

numeros.reverse();
mostrarArray(numeros, ' revertido');

//Contar elementos 
document.write(numeros.length);

//Buscar elementos

var busqueda = parseInt(prompt("Introduce un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda:"+posicion+ " </h1>");
}else{
    document.write("<h1>No Encontrado</h1>");
}
