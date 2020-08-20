//Ejercicio 1.8 Realiza una funcion que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
 
function caracteres(arrayCaracteres:string[]){
    let suma:number;
    suma=0;
 for(let i=0; i<arrayCaracteres.length; i++){
     let conteoCaracteres =arrayCaracteres[i].length;
     console.log(conteoCaracteres);
     suma= suma + conteoCaracteres;
     
 }
 console.log("La suma de los caracteres es:"+ suma);    
}

caracteres(["hola que tal", "saludos mundo"]);