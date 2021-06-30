let price ="111";
let sprice =111;
let hasPassword = true;

console.log(
    "price : ", 
    typeof(price)
)

console.log(
    "sprice : ", 
    typeof(sprice)
)

console.log(
    "hasPassword : ", 
    typeof(hasPassword)
)

//String to int or float
let number = "11";
number= parseInt(number)
console.log("number int : ",number," tipi",typeof(number))

let number5 = "11.1";
number5= parseFloat(number5)
console.log("float int : ",number5," tipi",typeof(number5))


let number2 = "11px2";
number2= parseInt(number2)
console.log("number2 int : ",parseInt(number2)," tipi",typeof(number2))  //11 i aldı sadece, basında harf olsaydı NaN donecekti

let number3 = "11";
number3= Number(number3)
console.log("number3 int : ",number3," tipi",typeof(number3))  //11 i aldı sadece, basında harf olsaydı NaN donecekti


//number to string
let num = 5;
num = num.toString()
console.log(num,typeof(num))


// isNan() : bir değerin NaN (Not-A-Number) olup olmadığını belirler.
let a = 10;
console.log(Number.isNaN(a)) //false
Number.isNaN(NaN) //true


//Operatorler

/* && -> ve, || ->veya */