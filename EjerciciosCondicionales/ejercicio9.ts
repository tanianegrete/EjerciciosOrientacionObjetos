//Ejercicio 1.9 Realiza una funcion que te imprima por consola el sig mensaje
//"el numero es par" si el numero introducido es par 
//"el numero es impar" si el numero introducido como parametro es impar 

function parEimpar(numero:number){
    let operacion = numero%2
     if(operacion==0){
         console.log("El numero es par")
     }else{
         console.log("El numero es impar")
     }
    }
    
    parEimpar(5);