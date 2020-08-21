var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    return Mobile;
}());
var mobie1 = new Mobile("Nokia3210", "Modelo32", "Nokia", "pequeño", "Blanco", "4G", 32, 150);
var mobie2 = new Mobile("iPhone 3G", "3G", "iPone", "Mediano", "Gris", "5G", 50, 450);
var mobie3 = new Mobile("Samsurg Galaxi 10", "10G", "iPone", "Mediano", "Gris", "6G", 50, 450);
//console.log("\n\t******* Movil 1 *********\n",mobie1);
//console.log("\n\t******* Movil 2 *********\n",mobie2);
//console.log("\n\t******* Movil 3 *********\n",mobie3);
//MODIFICAR  NOKIA 3210 PARA QUE TENGA 5G Y 4 CAMARAS 
mobie1.is5G = "5g";
mobie1.cameraNumber = 4;
console.log(mobie1);
