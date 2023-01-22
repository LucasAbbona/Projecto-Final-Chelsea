const Container= document.querySelector("#PlayersContainer")
const Boton= document.querySelectorAll(".TeamFilter")

const Players=[
    {id:1 ,nombre:"Edoudard Mendy",genero:"Men",img:"../img/galery/players/arqueros/mendy.png",position:"Arquero",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",partidos:"11"},
    {id:2 ,nombre:"Kepa Arrizabalaga",genero:"Men",img:"../img/galery/players/arqueros/kepa.png",position:"Arquero",pais:"../img/galery/flags/banderaespaña.png",partidos:"18"},
    {id:3 ,nombre:"Bettinelli",genero:"Men",img:"../img/galery/players/arqueros/bettinelli.png",position:"Arquero",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"0"},
    {id:4 ,nombre:"Benoit Badiashile",genero:"Men", img:"https://i2-prod.football.london/incoming/article25858431.ece/ALTERNATES/s1200c/0_Benoit.jpg",position:"Defensa",pais:"../img/galery/flags/banderafrancia.png",partidos:"2"},
    {id:5 ,nombre:"Wesley Fofana",genero:"Men", img:"https://i2-prod.football.london/incoming/article25803502.ece/ALTERNATES/s1200c/0_Fofana.jpg",position:"Defensa",pais:"../img/galery/flags/banderafrancia.png",partidos:"2"},
    {id:6 ,nombre:"Trevor Chalobah",genero:"Men",img:"../img/galery/players/defensas/chalobah.png",position:"Defensa",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"18"},
    {id:7 ,nombre:"Ben Chilwell",genero:"Men",img:"../img/galery/players/defensas/chilwell.png",position:"Defensa",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"13"},
    {id:8 ,nombre:"Cesar Azpilicueta",genero:"Men",img:"../img/galery/players/defensas/azplicueta.png",position:"Defensa",pais:"../img/galery/flags/banderaespaña.png",partidos:"24"},
    {id:9 ,nombre:"Reece James",genero:"Men",img:"../img/galery/players/defensas/james.png",position:"Defensa",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"12"},
    {id:10 ,nombre:"Thiago Silva",genero:"Men",img:"../img/galery/players/defensas/thiago.png",position:"Defensa",pais:"../img/galery/flags/banderabrasil.png",partidos:"23"},
    {id:11,nombre:"Kalidou Koulibaly",genero:"Men",img:"../img/galery/players/defensas/koulibaly.png",position:"Defensa",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",partidos:"20"},
    {id:12 ,nombre:"Hakim Ziyech",genero:"Men",img:"../img/galery/players/mediocampistas/ziyech.png",position:"Mediocampista",pais:"https://w7.pngwing.com/pngs/684/447/png-transparent-flag-of-morocco-united-states-national-flag-morocco-flag-s-angle-english-flag-thumbnail.png",partidos:"15"},
    {id:13,nombre:"Kai Havertz",genero:"Men",img:"../img/galery/players/mediocampistas/Havertz.png",position:"Mediocampista",pais:"../img/galery/flags/banderaalemania.png",partidos:"27"},
    {id:14,nombre:"Ngolo Kante",genero:"Men",img:"../img/galery/players/mediocampistas/kante.png",position:"Mediocampista",pais:"../img/galery/flags/banderafrancia.png",partidos:"2"},
    {id:15,nombre:"Mason Mount",genero:"Men",img:"../img/galery/players/mediocampistas/mount.png",position:"Mediocampista",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"27"},
    {id:16,nombre:"Connor Gallagher",genero:"Men",img:"../img/galery/players/mediocampistas/gallagher.png",position:"Mediocampista",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"25"},
    {id:17,nombre:"Jorginho",genero:"Men",img:"../img/galery/players/mediocampistas/jorginho.png",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",partidos:"25"},
    {id:18,nombre:"Mateo Kovacic",genero:"Men",img:"../img/galery/players/mediocampistas/kovacic.png",position:"Mediocampista",pais:"https://cdn-icons-png.flaticon.com/512/555/555545.png",partidos:"22"},
    {id:19,nombre:"Ruben Loftus-Cheek",genero:"Men",img:"../img/galery/players/mediocampistas/loftus-cheek.png",position:"Mediocampista",pais:"https://img.asmedia.epimg.net/resizer/1e2w2reCQC2kUSn-B_Q5_Jp8Ok8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HT4TFMW3CFCTXBQVM22XCMNF2Q.jpg",partidos:"20"},
    {id:20,nombre:"Mijailo Mudryk",genero:"Men", img:"https://www.ole.com.ar/2023/01/12/bhdKrZTjb_400x400__1.jpg",position:"Delantero",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",partidos:"1"},
    {id:1 ,nombre:"Armando Broja",genero:"Men",img:"../img/galery/players/delanteros/Broja.png",position:"Delantero",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png",partidos:"18"},
    {id:21,nombre:"Raheem Sterling",genero:"Men",img:"../img/galery/players/delanteros/sterling.png",position:"Delantero",pais:"../img/galery/flags/banderainglaterra.png",partidos:"22"},
    {id:22,nombre:"Christian Pulisic",genero:"Men",img:"../img/galery/players/delanteros/pulisic.png",position:"Delantero",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png",partidos:"21"},
    {id:23,nombre:"Joao Felix",genero:"Men", img:"https://www.elgrafico.com/__export/1673447219549/sites/prensagrafica/img/2023/01/11/fmmpv5nxeaa7rzj_crop1673447218382.jpg_423682103.jpg",position:"Delantero",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png",partidos:"1"},

    {id:24,nombre:"Zecira Musovic",genero:"Women",img:"https://i.guim.co.uk/img/media/adf2ff6277a9ac441c8547e52663b816d700b05a/0_0_4966_2979/master/4966.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=86d370d469471d23728e240d3481f6e9",position:"Arquera",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png",partidos:"5"},
    {id:25,nombre:"Emily Omar",genero:"Women",img:"https://pbs.twimg.com/media/Fguwe1OWIAE_eyk.jpg",position:"Arquera",pais:"https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-de-Inglaterra.png",partidos:"0"},
    {id:26,nombre:"Ann-Katrin Berger",genero:"Women",img:"https://i.guim.co.uk/img/media/5725b178b7e22881ae0341e910ffd971ffa04010/0_205_4331_2598/master/4331.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=682b563396969b7fefbecca06b517041",position:"Arquera",pais:"../img/galery/flags/banderaalemania.png",partidos:"12"},
    {id:27,nombre:"Niamh Charles",genero:"Women",img:"https://pbs.twimg.com/profile_images/1440802658059575299/91f5T3Jt_400x400.jpg",position:"Defensa",pais:"https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-de-Inglaterra.png",partidos:"16"},
    {id:28,nombre:"Millie Bright",genero:"Women",img:"https://s.hs-data.com/bilder/spieler/gross/332132.jpg",position:"Defensa",pais:"https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-de-Inglaterra.png",partidos:"15"},
    {id:29,nombre:"Magdalena Eriksson",genero:"Women",img:"https://pbs.twimg.com/media/FabGB2WWYAI3cJy?format=jpg&name=large",position:"Defensa",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png",partidos:"16"},
    {id:30,nombre:"Maren Mjelde",genero:"Women",img:"https://www.soccerbible.com/media/99609/maren-6-min.jpg",position:"Defensa",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",partidos:"3"},
    {id:31,nombre:"Eve Perisset",genero:"Women",img:"https://www.debate.com.mx/__export/1640280623564/sites/debate/img/2021/12/23/11_crop1640280621825.jpg_423682103.jpg",position:"Defensa",pais:"../img/galery/flags/banderafrancia.png",partidos:"14"},
    {id:32,nombre:"Pernille Harder",genero:"Women",img:"https://pbs.twimg.com/media/FasizfKXwAECUZi?format=jpg&name=large",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2560px-Flag_of_Denmark.svg.png",partidos:"6"},
    {id:33,nombre:"Guro Reiten",genero:"Women",img:"https://pbs.twimg.com/profile_images/1588190561168662529/1wyB_M5s_400x400.jpg",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",partidos:"17"},
    {id:34,nombre:"Jessie Fleming",genero:"Women",img:"https://cdn.vox-cdn.com/thumbor/PTzkmfzTKkxWznfRL99edR_SLQY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20106368/1257593066.jpg.jpg",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",partidos:"15"},
    {id:35,nombre:"Melanie Leupolz",genero:"Women",img:"https://s.hs-data.com/bilder/spieler/gross/172419.jpg",position:"Mediocampista",pais:"../img/galery/flags/banderaalemania.png",partidos:"0"},
    {id:36,nombre:"Jelena Cankovic",genero:"Women",img:"https://pbs.twimg.com/media/FbGM7M-aMAAwEGY?format=jpg&name=900x900",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png",partidos:"7"},
    {id:37,nombre:"Erin Cuthbert",genero:"Women",img:"https://pbs.twimg.com/media/Fhw4-CSWAAE8Ug0?format=jpg&name=large",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/320px-Flag_of_Scotland.svg.png",partidos:"14"},
    {id:38,nombre:"Johanna Rytting",genero:"Women",img:"https://cdn.vox-cdn.com/thumbor/kP6E2YrhE7yvVstioUpPD9ACGpE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23924843/1242317117.jpg",position:"Mediocampista",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png",partidos:"16"},
    {id:39,nombre:"Sam Kerr",genero:"Women",img:"https://s.hs-data.com/bilder/spieler/gross/102764.jpg",position:"Delantera",pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",partidos:"17"},
    {id:40,nombre:"Lauren James",genero:"Women",img:"https://st.depositphotos.com/43708092/60918/i/600/depositphotos_609185596-stock-photo-lauren-james-10-of-chelsea.jpg",position:"Delantera",pais:"https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-de-Inglaterra.png",partidos:"13"},
    {id:41,nombre:"Fran Kirby",genero:"Women",img:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Fran_Kirby_Lewes_FC_Women_1_Chelsea_Women_2_Conti_Cup_02_11_2019-519_%2849006183211%29.jpg",position:"Delantera",pais:"https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-de-Inglaterra.png",partidos:"12"}    
]
const FrontPlayers = Players.filter((player)=>player.genero === "Men");
Boton.forEach((boton) => {
    boton.addEventListener("click",(el) => {
        Boton.forEach(boton => boton.classList.remove("active"))
        el.currentTarget.classList.add("active")
        if(el.currentTarget.id != "todos"){
        const partidosselecionado=Players.filter((producto) => producto.genero === el.currentTarget.id)
        Display(partidosselecionado)}
    })
})
function Display(Array){
    Container.innerHTML=""
    Array.forEach((jug)=>{
    const SingleContainer=document.createElement("div")
    SingleContainer.classList="SingleContainer"
    SingleContainer.innerHTML=`
    <div class="EquipoBlur " id="${jug.id}">
    <p class="NombreJug">${jug.nombre}</p>
    <p class="PosicionJug">${jug.position}</p>
    <img class="PaisJug" width="50px" src="${jug.pais}"/>
    <div class="PartJug">Partidos Jugados<p>${jug.partidos}</p></div>
    </div>
    
    <img src='${jug.img}' width='100%' />
    
    
    
    `    
    Container.append(SingleContainer)
    
})
}

Display(FrontPlayers)


