//Ejercicio 7 Realiza un procedimiento  que reciba un array de nombres  y te devuelva verdadero si y solo si todos los nombres tengan empiecen por m
function nombres(arrayNombres) {
    var tieneM = true;
    var i = 0;
    while (i < arrayNombres.length && tieneM == true) {
        if (arrayNombres[i][0] == "M") {
            tieneM = true;
        }
        else {
            tieneM = false;
        }
        console.log(i);
        i++;
    }
    console.log(tieneM);
}
nombres(["Maria", "Pepe", "Mala", "MArta", "Mepe"]);
//procedimiento  que reciba un array de nombres  y te devuelva los nombres tengan empiecen por m
/*
function nombres1(arrayNombres:string[]){
    for(let i =0; i<arrayNombres.length;i++){
        let nom=arrayNombres[i][0];
        if(nom=="M"){
            console.log("Tiene m "+arrayNombres[i]);
        }
    }

}

nombres1(["Maria","Ana","Mario","Jose","Pepe","Mama"]);*/ 
