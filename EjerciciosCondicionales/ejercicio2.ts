//ejercicio 1.2 Realiza un procedimiento de dado un pais te imprima en que continente estas(5 paises por continente):

function continentes(pais:String):String{
    if (pais=="Mexico" || pais =="Peru" || pais=="EUA" || pais =="Panama"|| pais =="Argentina"){
        let continente = "America";
        return continente;
    }

    if (pais=="España" || pais =="Francia" || pais=="Italia" || pais =="Portugal"|| pais =="Alemania"){
        let continente = "Europa";
        return continente;
    } 

    if (pais=="Egipto" || pais =="Argelia" || pais=="Nigeria" || pais =="Marruecos"|| pais =="Sahara"){
        let continente = "Africa";
        return continente;
    } 
    if (pais=="China" || pais =="India" || pais=="Indonesia" || pais =="Pakistan"|| pais =="Turquia"){
        let continente = "Asia";
        return continente;
    } 

    if (pais=="Australia" || pais =="Nueva Zelanda" || pais=="Tonga" || pais =="Fiyi"|| pais =="Nauru"){
        let continente = "Oceania";
        return continente;
        
    } 

    if (pais=="Esperanza" || pais =="Mawson" || pais=="Casey" || pais =="Scott"|| pais =="Rothera"){
        let continente = "Antartida";
        return continente;
    } 

    
}

console.log(continentes("Mawson"));