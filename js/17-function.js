let firstName = "Lorem";
function greeting(firstName="Bos"){ //default
    console.log(`Merhaba ${firstName ? firstName : "Bos"}`) //parametre fonk icinde verilmezse bos bırakılır. Yukarıdakinden farklıdır onu getirmez

}
greeting("Candan");


//ornek 2
function greeting2(firstName,lastName){
    let info = `Merhaba ${firstName ? firstName : "Bos"} ${lastName}`
    return info;
}
let info = greeting2("Candan","Cebiroglu")
console.log(info);


//dokuman ici id ye bilgi aktarma
function domIdWriteInfo(id, info){
    let domObj = document.querySelector(`#${id}`)
    domObj.innerHTML = info
}
let htmlInfo = `<span style = "color:red">Color REd</span>`
domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('greeting2',greeting2("Candan","Cebiroglu"))













/*Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan 
fonksiyonlar aynı anda çalışabilir.
Javascript asenkron yapıdaki bir programlama dilidir.  */

/*
function printScreen1 (){
    console.log("İlk ekran çıktısı");
}

 function printScreen2 (){
   setTimeout(function(){
console.log("İkinci ekran çıktısı")  
}, 3000);
}

function printScreen3 (){
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

/*Çıktımız şu şekilde olacaktır:

İlk ekran çıktısı
Üçüncü ekran çıktısı
İkinci ekran çıktısı
 */

/*Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. Yani aslında asenkron yapıda bile 
fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur. */
/*
function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}


 printScreen2(printScreen1, printScreen3);*/

/*ORNEK 1 *//*
function mesajVer(ad, soyad) {
    alert(`Merhaba ${ad} ${soyad}`);
  }
  
mesajVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
//mesajVer("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
//mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)





