let fullname = prompt("Full adınız nedir : ","Lutfen sadece karakter giriniz...")  //alertle giris alınır ve console da gozukur
document.write(fullname)

//ekrana yazma
let greeting = document.querySelector("#title")

greeting.innerHTML = `${greeting.innerHTML} <h1 style="color:red">${fullname}</h1>`