//Ejercicio 1.8 Realiza una funcion que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
function caracteres(arrayCaracteres) {
    var suma;
    suma = 0;
    for (var i = 0; i < arrayCaracteres.length; i++) {
        var conteoCaracteres = arrayCaracteres[i].length;
        console.log(conteoCaracteres);
        suma = suma + conteoCaracteres;
    }
    console.log("La suma de los caracteres es:" + suma);
}
caracteres(["hola que tal", "saludos mundo"]);
