let userName = prompt("Adınızı giriniz")
let info = document.querySelector("#info")


info.innerHTML = `${userName}`

//Time Settings
let tarih = new Date();
let saat= tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
var i = 0;


//Day Settings
let day = document.querySelector("#day")
let dayName;

let time = document.querySelector("#time")

switch(tarih.getDay()){
    case 1 :
        dayName = "Pazartesi";
        break;
    case 2 :
        dayName = "Salı";
        break;
    case 3 :
        dayName = "Çarşamba";
        break;
    case 4 :
        dayName = "Perşembe";
        break;
    case 5 :
        dayName = "Cuma";
        break;
    case 6:
        dayName = "Cumartesi";
        break;
    case 7:
        dayName = "Pazar";
        break;
    
}
//function
function timer(){
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
    }else if(dakika < 10){
        temp2 = dakika.toString();
        strDakika = zero.concat(temp2);
    }else{
        strDakika = dakika.toString();
    }

    time.innerHTML = `${strSaat}:${strDakika}:${strSaniye} ${dayName}`
}
setInterval("timer()",1000)




