//*************** let ve const ile Degisken Tanimlama

//var ile degisken tanımlama

/*var serverName = "api.kodluyoruz.org"
console.log(serverName)*/

//let ile degiskeni bos tanimlama
let serverName;
console.log(serverName)
serverName = "api.kodluyoruz.org"
console.log(serverName)

//let ile degiskene bilgi atamak
let password = "1234";
console.log(password)


//degiskene atamasi yapmadan once kullanmaya calismak (HATALI KULLANIM)
console.log(fullName)  //hatalı kullanımdır
//let fullName = "Candan"; //hata verir 
var fullName = "Candan"; //hata vermez (undefined yazar)

/*
LET ile tanımlanan degiskenin icindeki bilgiyi degistirebiliriz */
fullName = "Hello";
console.log(fullName)

//birlestirme veya ekleme islemi de yapabiliriz
fullName +" yeni eklenen bilgi"
console.log(fullName) //gelmedi

fullName = fullName + " yeni eklenen bilgi"
console.log(fullName)  //geldi


fullName = "Sifirladik";
fullName += " yeni bilgi 2";
console.log(fullName) 


//const ile degiskeni ici bos tanımlamak
//const serverPassword ; //ici bos oldugu icin hata verecek
/**const ile bir defa tanımlanan ve bir daha degismeyecek olan degerleri tutmak icin kullanırız. Degisecekse 'let' kullanırız */

const serverPassword ="123";
console.log(serverPassword) 
/*serverPassword = "passchanged1"; //hata alırız
console.log(serverPassword)*/


//Ornek 1
var  weLove= "Kodluyoruz";
if(2>1) {
  var weLove = "Bootcamp";
  console.log(weLove)  //Bootcamp
}
console.log(weLove) //Bootcamp

//Ornek 2
let okulNumarasi =  414;
if(true){
 let okulNumarasi =  245;
 console.log("Ilk blockta ki deger: "+okulNumarasi);  //245
  if(true){
     let okulNumarasi = 312;
    console.log("Ikinci blockta ki deger: "+okulNumarasi); // 312
     }
}
 console.log("Global scopeta ki deger: "+okulNumarasi); //414

//Ornek 3
/*Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. */
const kullanici = {
    isim: "Ahmet",
   }
   kullanici.isim = "Dila";
   console.log(kullanici.isim);  //Dila
   
   const dizi = [1,2,3];
   //dizi = [1,2,3,4];  //burada hata verir


//var ve let ard arda kullanım
var namevar ="varCandan";
console.log(namevar) 
var namevar ="varCandan2";
console.log(namevar) 

let namevar2 ="letCandan";
console.log(namevar2) 
/*let namevar2 ="letCandan";     hatalııı
console.log(namevar2) */
