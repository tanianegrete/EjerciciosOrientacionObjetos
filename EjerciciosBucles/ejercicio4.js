//Ejercicio 1.4 Realiza una funcion que como parametro de entrada reciba un array y como salida devuelva el array revertido.
function reversaNumero(arrayNumero) {
    var resultado = [];
    for (var i = arrayNumero.length; i >= 0; i--) {
        var resultado_1 = arrayNumero[i];
        console.log(resultado_1);
    }
    return;
}
reversaNumero([4, 5, 6, 7]);
