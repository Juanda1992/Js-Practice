'use strict'

// Browser object model
//https://www.arkaitzgarro.com/javascript/capitulo-14.html

function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(screen.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=450,height=350");

}

getBom();