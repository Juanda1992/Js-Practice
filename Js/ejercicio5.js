/*Todos los numeros divisores del numero introducido
*/ 

var numero =parseInt(prompt("Introduce un numero",1));

for(var i =1; i<= numero;i++) {
    if(numero%i ==0){
        console.log("Divisor"+ i);
    }
  
}