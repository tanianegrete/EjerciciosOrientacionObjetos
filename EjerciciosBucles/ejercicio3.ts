//Ejercicio 1.3 Realiza una funcion que imprima numeros impares existentes hasta  el numero indicado como parametro de entrada

function impares(valorNumerico:number){
 for( let i=0; i<valorNumerico ; i++){
     let op= i%2;
     if(op!=0){ 

         console.log(i);
     }
 }

   
}
 
impares(8);  //llamar  o invocar a la funcion impares 

