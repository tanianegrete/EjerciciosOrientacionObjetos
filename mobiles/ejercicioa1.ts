
class Mobile {

 public name:string;
 public model:string;
 public trademark:string;
 public sdSize: string;
 public color:string;
 public is5G:string;
 public cameraNumber:number;
 public price:number;

 constructor(name:string,model:string,trademark:string,sdSize: string,color:string,is5G:string,cameraNumber:number,price:number){
   this.name=name;
   this.model=model;
   this.trademark=trademark;
   this.sdSize=sdSize;
   this.color=color;
   this.is5G=is5G;
   this.cameraNumber=cameraNumber;
   this.price=price;

 }


}

let mobie1:Mobile=new Mobile("Nokia3210","Modelo32","Nokia","pequeño","Blanco","4G",32,150);
let mobie2:Mobile=new Mobile("iPhone 3G","3G","iPone","Mediano","Gris","5G",50,450);
let mobie3:Mobile=new Mobile("Samsurg Galaxi 10","10G","iPone","Mediano","Gris","6G",50,450);

//console.log("\n\t******* Movil 1 *********\n",mobie1);
//console.log("\n\t******* Movil 2 *********\n",mobie2);
//console.log("\n\t******* Movil 3 *********\n",mobie3);

//MODIFICAR  NOKIA 3210 PARA QUE TENGA 5G Y 4 CAMARAS 

mobie1.is5G="5g";
mobie1.cameraNumber=4;
console.log(mobie1);