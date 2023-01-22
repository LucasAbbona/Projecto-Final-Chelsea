
const Container= document.querySelector("#matches")
const Boton= document.querySelectorAll(".boton_categoria")
const Matches= [
    {gen:"Men",team1:"West Ham United",logo1:"../img/galery/logos/westham.png", team2:"Chelsea Fc",logo2:"../img/galery/logos/chelsea.png", stadium:"London Olympic",hour:"9:30", competition:"Premier League", day:"11/2"},
    {gen:"Men",team1:"Borussia Dortmund",logo1:"../img/galery/logos/borussia.png", team2:"Chelsea Fc",logo2:"../img/galery/logos/chelsea.png" ,stadium:"Signal Iduna Park",hour:"17:00", competition:"Champions League", day:"15/2"},
    {gen:"Men",team1:"Chelsea Fc",logo1:"../img/galery/logos/chelsea.png", team2:"Southampton",logo2:"../img/galery/logos/southamton.png", stadium:"Stamford Bridge",hour:"12:00", competition:"Premier League", day:"18/2"},
    {gen:"Women",team1:"Tottenham",logo1:"../img/galery/logos/tottenham.png", team2:"Chelsea Fc",logo2:"../img/galery/logos/chelsea.png", stadium:"Breyer Group Stadium",hour:"9:30", competition:"FA WSL", day:"5/2"},
    {gen:"Women",team1:"Chelsea Fc",logo1:"../img/galery/logos/chelsea.png", team2:"Brighton Albion",logo2:"../img/galery/logos/brighton.png", stadium:"Kingsmeadow",hour:"11:00", competition:"FA WSL", day:"5/3"},
    {gen:"Women",team1:"Chelsea Fc",logo1:"../img/galery/logos/chelsea.png", team2:"Manchester United",logo2:"../img/galery/logos/manchesterunited.png", stadium:"Kingsmeadow",hour:"11:00", competition:"FA WSL", day:"12/3"}
]

const render =(some)=>{
Container.innerHTML=""
some.forEach((match)=>{
const escudo=document.createElement("div")
escudo.classList="UpMatch"
escudo.innerHTML=`
<div>
<p>${match.team1}</p>
<img src='${match.logo1}'/>
</div>
<span class='fecha'>
<p class='Dia'>${match.day}</p>
<p>${match.hour}</p>
</span>
<div>
<img src='${match.logo2}'/>
<p>${match.team2}</p>
</div>
`
const escudo2=document.createElement("div")
escudo2.classList="DownMatch"
escudo2.innerHTML=`
<p class='competition'>${match.competition}</p>
`
const matchContainer= document.createElement("div")
matchContainer.className="SingleMatch"
matchContainer.append(escudo,escudo2)
Container.append(matchContainer)
})
}
const partidosselecionado=Matches.filter((producto) => producto.gen === "Men")
render(partidosselecionado)

Boton.forEach((boton) => {
    boton.addEventListener("click",(el) => {
        Boton.forEach(boton => boton.classList.remove("active"))
        el.currentTarget.classList.add("active")
        if(el.currentTarget.id != "todos"){
        const partidosselecionado=Matches.filter((producto) => producto.gen === el.currentTarget.id)
        render(partidosselecionado)}
    })
})

// Animacion de Singings

const Fofana = document.querySelector("#FofanaBack");
const Joao = document.querySelector("#JoaoBack");
const FoF=document.querySelector("#Fofana");
const Felix=document.querySelector("#Joao");

function Hovers(Player, Container){
    Player.addEventListener('mouseover',(()=>{
    Container.classList.remove("Ocultar")
}))
Player.addEventListener('mouseleave',(()=>{
    Container.classList.add("Ocultar")
}))
}

Hovers(Fofana,FoF);
Hovers(Joao,Felix)