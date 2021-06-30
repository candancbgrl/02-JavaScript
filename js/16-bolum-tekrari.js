/*
1-promt ile aldigin bilgiye gore asagidaki yapıyı kullanarak notun ilgisini #info ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2-Kullanicinin girdigi verinin istedigimiz aralikta olup olmadıgına kontrol et
3- ff bilgisinde uzgun surat ikonu cıkart, digerlerinde gulucuk olsun
4-ff class bilgisi text-danger, digerleri text-primary olsun

*/

let not = prompt("Bilgiyi giriniz")
let tut;

const smile=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

let info = document.querySelector("#info")

if(not <=100 && not >=0){
    tut = smile
    info.classList.add('text-primary')
    if(not >= 90){
        tut += "AA"
    }else if(not >= 85){
        tut += "BA"
    }else if(not >= 80){
        tut += "BB"
    }else if(not >= 75){
        tut += "CB"
    }else if(not >= 70){
        tut += "CC"
    }else if(not >= 65){
        tut += "DC"
    }else if(not >= 60){
        tut += "DD"
    }else if(not >= 55){
        tut += "FD"
    }else if(not >= 50){
        tut = sad
        tut += "FF"
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }else{
        tut = sad
        tut += "Bu bilgiler dogru degil"
       
       
    }
}else{
    tut = sad
    tut += "0-100 arası deger girin "
}


info.innerHTML = `${tut}`

