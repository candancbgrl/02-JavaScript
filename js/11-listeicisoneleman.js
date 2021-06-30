/* Liste icindei son elemana ulasmak veya ekleme */

//let item = document.querySelector("ul#list>li:last-child")  //ul nin icindeki listin son cocugu

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degistiiii"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML ="ilk oge degistiiii"

//yeni oge eklemek
let ulDOM = document.querySelector("ul#list") //ul idsi list olan
let liDOM = document.createElement(`li`)

liDOM.innerHTML="kendi olusturdugumuz oge"

//ekrana eklemek icin
//ulDOM.append(liDOM)  //en sona ekledi

ulDOM.prepend(liDOM)  //en basa ekledi

