//let h2 = document.getElementsByTagName('h2');
let title = document.getElementById('title')
title.innerHTML ="Deneme"
console.log(title.innerHTML)

//let link = document.querySelector("ul#list>li>a") //bir tane secer
let link = document.querySelector("#kodluyoruzLink")
//console.log(link)
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add("btn") //btn classı ekledi


