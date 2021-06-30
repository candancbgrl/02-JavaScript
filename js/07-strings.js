let email = "ccebiroglu74@gmail.com"
let firstname ="Candan"
let lastName= "Cebiroglu"

//string karakter sayısı
console.log(firstname.length)

//ilk karakter gorme
console.log(firstname[0])
console.log(firstname.charAt(0))

//buyuk-kucuk harf
firstname = firstname.toUpperCase()
lastName = lastName.toLowerCase()
console.log(`İsim : ${firstname}
Soyisim : ${lastName}`)

//string icinde istedigimiz bilgiyi aramak -> deger yoksa -1 doner
console.log(email.search('@'))
console.log(email[12])


//belli bir yere kadar alma ->slice
console.log(email.slice(0,12))
console.log(email.slice(12)) //12 den sonrasını al
console.log(email.slice(email.search("@")+1))   //sadece DOMAIN aldık
let domain = email.slice(email.search("@")+1)

console.log(domain.slice(0,domain.indexOf('.')))  //sadece gmail yazısını aldık

//bilgiyi degistir -> replace
let kodemail = email.replace("gmail.com","kodluyoruz.org")
console.log(kodemail)

//istenilen bilgi var mı ->includes  (true-false)  / searchte -1 doner 
console.log(email.includes("gmail"))
console.log(email.includes("gfggfmail"))

//bitisi kontrol etme
console.log(kodemail.endsWith("kodluyoruz.org"))  //true


//ilk harfi buyuk yapma
firstname="FIRST";
lastname = "LAST";

let fullname = `${firstname[0].toUpperCase()}${firstname.slice(1).toLowerCase()} ${lastname[0].
    toUpperCase()}${lastname.slice(1).toLowerCase()}`
console.log(fullname)








