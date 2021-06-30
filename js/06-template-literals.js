//string birlestirme
let username = "candan"
const domain = "kodluyoruz.org"

let email = username + "@"+ domain
console.log("Merhaba ",username," sitemize hosgeldin"," mail adresiniz : ",email)


//template literals
let info = `Merhaba ${username} sitemize hosgeldiniz 
mail adresiniz      : ${email}
Kısa isminiz        : ${username[0]}
mail adres uzunlugu : ${email.length}
Borcunuz            : ${5*110} TL
Gunun saat bilgisi  : ${new Date().getHours()}
`
console.log(info)

// `-> alt gr + , 