let username = prompt("Kullanici adini giriniz")
let age = prompt("Yasiniz")

let info = document.querySelector("#info")

if(username && age > 18){
    info.innerHTML = "ehliyet alabilirsin"
}else if(!username){
    info.innerHTML ="kullanici adınız yok"
}else if(!age){
    info.innerHTML = "yas bilginiz yok"
}else if(age < 18){
    info.innerHTML = "yasiniz 18 den buyuk olmalı"
}
/* calismadı
let infoSwitch = document.querySelector("#infoSwitch")

switch(age){
    case (age <18):
        infoSwitch.innerHTML = "yasiniz 18 den buyuk olmalı";
    case (age > 18):
        infoSwitch.innerHTML = "yasiniz 18 den buyuktur";
}*/

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }

}
console.log(islem(23, 14, 'topla'));