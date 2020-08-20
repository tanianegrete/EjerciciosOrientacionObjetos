//Ejercicio 1.9 Realiza una funcion que te imprima por consola el sig mensaje el numero es par" si el numero introducido es par "el numero es impar" si el numero introducido como parametro es impar 
//Ejercicio 1.10 Realiza la suma de los caracteres de los arrays
function caracteres(arrayCaracteres) {
    var suma;
    suma = 0;
    for (var i = 0; i < arrayCaracteres.length; i++) {
        var conteoCaracteres = arrayCaracteres[i].length;
        console.log(conteoCaracteres);
        suma = suma + conteoCaracteres;
        var operacion = suma % 2;
        if (operacion == 0) {
            console.log("El numero es par");
        }
        else {
            console.log("El numero es impar");
        }
    }
    // console.log("La suma de los caracteres es:"+ suma);    
}
caracteres(["casa", "coche", "ciudad", "cesta"]);
