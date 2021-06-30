let price = 100;
let tax = 0.18;
let totalPrice = price * tax;
let total = price + totalPrice
console.log(
    "price : ",price,
    " KDV oranı : ",tax,
    " KDV tutarı : ",totalPrice,
    " Ucret : ",total
)

//String to int
let stringnumber = "12";
console.log(stringnumber)
let newnumber = Number(stringnumber);
console.log(newnumber)


//arttirma azaltma
let counter = 0;
counter++;
console.log(counter)

console.log("kalan : ",11 % 2)
console.log("Us alma : ",2**4)

//yuvarlama
console.log("Asagi yuarlama  : 1.9 ",Math.floor(1.9))
console.log("Yukari yuarlama : 1.9 ",Math.ceil(1.9))
console.log("Yakına yuarlama : 1.2 ",Math.round(1.2))
console.log("Yakına yuarlama : 1.8 ",Math.round(1.8))



//Random sayı oluşturma
var randomSayi = Math.floor(Math.random() * 10);

//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

var tahmin = prompt("1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!");