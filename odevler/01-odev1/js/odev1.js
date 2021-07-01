/*let userName = prompt("Adınızı giriniz")
let info = document.querySelector("#info")

info.innerHTML = `Merhaba ${userName}! Hoşgeldin!`*/

let tarih = new Date();
let saat= tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
var i = 0;
function kronometre(){
    let time = document.querySelector("#time")
    

    let strSaat;
    let strSaniye;
    let strDakika;
    strSaniye = saniye.toString();
    strDakika = dakika.toString();
    strSaat = saat.toString();

    let temp; let zero = '0'; let temp2;

    if(saniye < 9){
        saniye++;
        temp = saniye.toString();
        strSaniye = zero.concat(temp);
    }else if(saniye >58){
        dakika++;
        strDakika = dakika.toString();

        saniye = 0;
        temp = saniye.toString();
        strSaniye = zero.concat(temp);
    }
    else{
        saniye++;
        strSaniye = saniye.toString();
        strDakika = dakika.toString();
    }

    if(dakika > 59){
        saat++;
        strSaat = saat.toString();

        dakika = 0;
        temp2 = dakika.toString();
        strDakika = zero.concat(temp2);

        saniye = 0;
        temp = saniye.toString();
        strSaniye = zero.concat(temp);

    }

    time.innerHTML = `${strSaat}:${strDakika}:${strSaniye} `





    /*tarih.getSeconds()+i;
    i++;
    let temp ;
    let saniye ;
    let zero = "0";
    if(saniye < 10){
        temp = tarih.getSeconds().toString();
        saniye = zero.concat(temp);
    }else if(saniye > 60){
        tarih.getMinutes() +1;
        saniye = 0;
    }*/



   

    /*console.log(tarih.getHours())
    console.log(tarih.getMinutes())
    console.log(tarih.getSeconds())
    console.log(tarih.getSeconds()+1)*/
}
setInterval("kronometre()",1000)
