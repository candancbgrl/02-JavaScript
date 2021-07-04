let greeting = document.querySelector("#title")
/*greeting.addEventListener("click",function(){
    console.log("tiklandı")
})*/
/*
//*****TIKLAMA****
greeting.addEventListener("click",domClick) //tıklandıgı zaman bu fnksiyonu ac 

function domClick(){
    console.log("tiklandı")
    console.log(this.innerHTML=`Bilgi degisti`)
    this.style.color =="pink" ? this.style.color ="purple" : this.style.color="pink"
}*/

/*
//***ÜZERİNE GELME-*****
greeting.addEventListener("mouseover",domClick) //üzerine geldigi zaman zaman bu fnksiyonu ac 

function domClick(){
    console.log("etkinlik calisiyor")
    console.log(this.innerHTML=`Bilgi degisti`)
    this.style.color =="pink" ? this.style.color ="purple" : this.style.color="pink"
}*/

/*
//****İKİ KERE TIKLANMA**** 
greeting.addEventListener("dblclick",domClick) //iki kere tıklanma geldigi zaman zaman bu fnksiyonu ac 

function domClick(){
    console.log("etkinlik calisiyor")
    console.log(this.innerHTML=`Bilgi degisti`)
    this.style.color =="pink" ? this.style.color ="purple" : this.style.color="pink"
}*/

greeting.addEventListener("cut",domClick) //    //domclick isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır

function domClick(){
    console.log("etkinlik calisiyor")
    console.log(this.innerHTML=`Bilgi degisti`)
    this.style.color =="pink" ? this.style.color ="purple" : this.style.color="pink"
}