'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre 
//Un callback es una funcion que se ejecuta dentro de otra 

//Una funcion anonima es otra que se ejecuta dentro de otra funcion
    // var pelicula = function(nombre){
    //     return "La pelicula es" + nombre;
    // }

function sumame (numero1, numero2, sumaYmuestra, sumaPorDos,sumarDividiendo){
    var sumar = numero1+ numero2;
    
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    sumarDividiendo(sumar);
    return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es ", dato)
},
    //Utilizamos la funcion flecha, lo unico que hacemos es reemplazar la palabra funcion por una fleca
    // hecha asi : => en la cual suprimimos los parantesis siempre y cuando solo se reciba un solo
    // parametro
    dato=> {
        console.log("La suma por dos es ", (dato*2))
    },

    dato =>{
        console.log("La suma diviendo es" ,(dato/3))
    }

);