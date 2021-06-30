/* css class eklemek veya cikartmak */

let greeting = document.querySelector("#title")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")
greeting.classList.remove("third-class") 

//yanlıs bir şey yazınca hata vermiyor
greeting.classList.remove("third-classssss") 

//replace
greeting.classList.replace("new-info", "old-info")

console.log(greeting.classList)
console.log(greeting.classList.length)

