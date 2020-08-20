//Ejercicio 1.6 Realiza una funcion que te devuelva si existe un numero par en el array de numeros que introduces como parametro de entrada 
function pares(valorNumerico) {
    for (var i = 0; i < valorNumerico.length; i++) {
        var op = valorNumerico[i] % 2;
        var sonPares = void 0;
        if (op == 0) {
            //  console.log(valorNumerico[i]);  
            sonPares = valorNumerico[i];
        }
        return sonPares;
    }
}
pares([4, 2, 3, 8, 9, 10]);
