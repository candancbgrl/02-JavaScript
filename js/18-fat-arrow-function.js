function hello(name){
    console.log(`Merhaba ${name}`)
}

hello("JavaScript")

//v1
const helloFunc = (firstName) => {console.log(`Merhaba ${firstName}`)}  //=> fonk oldugunu belirledik
helloFunc("helloFuncV1")

//v2
const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) //bir tane oldugu icin sıkıntı olmaz
helloFuncV2("helloFuncV2")

//v3
const helloFuncV3 =  (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3","lastname")

//v4
const helloFuncV4 =  (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info;
}

helloFuncV4("helloFuncV4","lastname 4")

//Toplam Örneği
let toplam = (x, y) => x + y ;
console.log(toplam(10,4))

//Pekistirme Orneği
/*  -Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların herbirini 1'den başlayarak alt alta yazalım */

const seriesList = list => {
  
    list.forEach((series, index) => {
      console.log(`${index+1}. ${series}`) 
    });
  };
  
seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);

