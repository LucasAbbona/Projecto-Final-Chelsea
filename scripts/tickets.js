const abrir= document.querySelectorAll(".ViewMore")
const Contenedor= document.querySelector("#TicketAbrir")
const Contenedor2= document.querySelector("#TicketAbrir2")
const Contenedor3= document.querySelector("#TicketAbrir3")
const cerrar= document.querySelector(".NoVer")
const cerrar2= document.querySelector(".NoVer2")
const cerrar3= document.querySelector(".NoVer3")


abrir.forEach((abrir)=>{
    if(abrir.id == "WestHam"){
        Abridores(abrir,Contenedor,cerrar)
    }else if(abrir.id == "Dortmund"){
        Abridores(abrir,Contenedor2,cerrar2)
    }else if(abrir.id == "South"){
        Abridores(abrir,Contenedor3,cerrar3)
    }
    
})

function Abridores(abrid,contenedor,cerr){    
abrid.addEventListener('click',()=>{
    contenedor.classList.toggle("Ocultar")
    console.log(abrir.id)
})
cerr.addEventListener("click",()=>{
    contenedor.classList.toggle("Ocultar")
})
}