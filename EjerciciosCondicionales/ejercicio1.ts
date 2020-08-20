//Ejercicio 1.1 REALIZA UNA FUNCION QUE DADA UNA FECHA DE NACIMIENTO TE DEVUELVA EL SIGNO ZORDIACAL.

function zodiaco(mes:number,dia:number):String{

    if(mes==1||mes==2 && dia<21 && dia>19  ){
        let signo="acuario";
        return signo;  
    }
    
    if (mes==2||mes==3 && dia<20 && dia>20){
        let signo = "Piscis";
        return signo;
    }
    if (mes==3||mes==4 && dia<21 && dia>20){
        let signo = "Aries";
        return signo;
    }
    if (mes==4||mes==5 && dia<21 && dia>20){
        let signo = "Tauro";
        return signo;
    }
    if (mes==5||mes==6 && dia<22 && dia>21){
        let signo = "Geminis";
        return signo;
    }
    if (mes==6||mes==7 && dia<22 && dia>23){
        let signo = "Cancer";
        return signo;
    }
    if (mes==7||mes==8 && dia<24 && dia>23){
        let signo = "Leo";
        return signo;
    }
    if (mes==8||mes==9 && dia<24 && dia>23){
        let signo = "Virgo";
        return signo;
    }
    if (mes==9||mes==10 && dia<24 && dia>23){
        let signo = "Libra";
        return signo;
    }
    if (mes==10||mes==11 && dia<24 && dia>22){
        let signo = "Escorpion";
        return signo;
    }
    if (mes==11||mes==12 && dia<23 && dia>21){
        let signo = "Sagitario";
        return signo;
    } 

    if (mes==12||mes==1 && dia<22 && dia>20){
        let signo = "Capricornio";
        return signo;
    }
}

console.log(zodiaco(12,25));
