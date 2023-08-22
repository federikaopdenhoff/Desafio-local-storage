const span=document.getElementById("data")

document.addEventListener("DOMContentLoaded",()=>{
let textoinfo=localStorage.getItem("text")
span.innerHTML=textoinfo
})

