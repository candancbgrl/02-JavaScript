let isActive = false;
isActive = true;
console.log(isActive)  //true


let username;
username="Candan"
let isusername = Boolean(username)
console.log(isusername)  //false - bos oldugu icin, Candan yazınca true olur

Boolean(0) //false
Boolean(-0) //false
Boolean(0.2)  //deger var true

if (Boolean(username)==true){
    console.log("isim var")
}