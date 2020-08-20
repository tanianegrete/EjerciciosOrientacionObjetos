//EJERCICIO 1.5 Realiza una funcion que reciba como parametros un array de string que contenga colores  y te imprima cada caso si el color esta en el arcoiris o no .

function arcoirisColor(arrayColores:string[]){ 

for(let i =0; i<arrayColores.length;i++){
    if(arrayColores[i]=="amarillo" ||arrayColores[i] =="naranja" || arrayColores[i]=="rojo" ||arrayColores[i] =="verde" || arrayColores[i]=="azul" ||arrayColores[i] =="purpura" ){
        console.log(arrayColores[i]+" Pertenece al arcoiris");
    }else{
        console.log(arrayColores[i]+" No pertenece al arcoiris");
    }

}

}

arcoirisColor(["amarillo","negro","verde","azul","rosa","rojo","purpura"]);