const ContenedorImagenes=document.querySelector(".ImagesContainer")
const Boton=document.querySelectorAll(".MediaBottons")

const Imagenes=[
    {id: 1,img:"../img/galery/history/mourinho.png", competition:"Premier League", genero:"Men",titulo:"Mourinho ganando la premier league en 2004"},
    {id: 2,img:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/05/24/14956182910572.jpg", competition:"Premier League", genero:"Men",titulo:"Campeones de premier temporada 2017"},
    {id: 3,img:"https://a.espncdn.com/photo/2022/0429/r1006183_1296x729_16-9.jpg", competition:"Premier League", genero:"Men", titulo:"Anchelotti ganado la premier league en 2010"},
    {id: 4,img:"../img/galery/history/campeon2012.png", competition:"Champions League", genero:"Men", titulo:"Chelsea campeon de champions en Munich 2012"},
    {id: 5,img:"../img/galery/history/campeon2021.png", competition:"Champions League", genero:"Men",titulo: "Chelsea campeon de europa temporada 2021 en Porto"},
    {id: 6,img:"../img/galery/history/golhavertz.png", competition:"Champions League", genero:"Men",titulo:"Havertz marcando el gol de la final de champions 2021"},
    {id: 7,img:"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1246x483:1248x481)/origin-imgresizer.eurosport.com/2022/05/08/3369051-68861288-2560-1440.jpg", competition:"WSL Cup", genero:"Women",titulo:"Festejo de la FA Women Super League 2021"},
    {id: 8,img:"https://www.telegraph.co.uk/content/dam/football/2022/05/15/TELEMMGLPICT000296065490_trans_NvBQzQNjv4Bqz0FILhSVaz4BDNEYZVm_83scu9DLydgRMsIYCvwcfZE.jpeg", competition:"WSL Cup", genero:"Women", titulo:"Women Team festejando la Fa Cup femenina"},
    {id: 9,img:"https://www.telegraph.co.uk/content/dam/football/2021/05/09/TELEMMGLPICT000258149459_trans_NvBQzQNjv4BqHZZ5Uu30PZ3eDOt2vCdR-6aXNbDMK4ds9lrEe78_Ey4.jpeg", competition:"WSL Cup", genero:"Women",titulo:"Festejo de la FA Women Super League 2022"},
    {id: 10,img:"https://cdn.vox-cdn.com/thumbor/RcCgUAwdIZF_Ymdqz5IRWNkEB28=/0x0:4664x3109/1200x800/filters:focal(1026x1819:1772x2565)/cdn.vox-cdn.com/uploads/chorus_image/image/69296082/1232934573.0.jpg", competition:"Women Champions League", genero:"Women",titulo:"Final de champions femenina 2021"},
    {id: 11,img:"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(906x530:908x528)/origin-imgresizer.eurosport.com/2021/05/02/3124958-64054888-2560-1440.jpg", competition:"Women Champions League", genero:"Women",titulo:"Pase a semifinales de champions femenina 2021"},
    {id: 12,img:"https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fbl-eur-c1-women-lyon-chelsea-5cbd819f839af08d86000001.jpg", competition:"Women Champions League", genero:"Women",titulo:"Champions femenina 2018"}
]

function MostrarImg(Array){
ContenedorImagenes.innerHTML=""
Array.forEach((imagen)=>{
const SingleImage=document.createElement("div")
SingleImage.classList=`SingleImage ${imagen.id}Cont`
SingleImage.innerHTML=`
<img src=${imagen.img} id="${imagen.id}" width='100%' height='100%'/>
<div class="MediaBlur ${imagen.id}Img Ocultar">
<p class="MediaCardTitle">${imagen.titulo}</p>
<div class="MediaLine"></div>
</div>
`
ContenedorImagenes.append(SingleImage)
})
}

MostrarImg(Imagenes)
const img1=document.getElementsByClassName("1Cont")
const img2=document.getElementsByClassName("2Cont")
const img3=document.getElementsByClassName("3Cont")
const img4=document.getElementsByClassName("4Cont")
const img5=document.getElementsByClassName("5Cont")
const img6=document.getElementsByClassName("6Cont")
const img7=document.getElementsByClassName("7Cont")
const img8=document.getElementsByClassName("8Cont")
const img9=document.getElementsByClassName("9Cont")
const img10=document.getElementsByClassName("10Cont")
const img11=document.getElementsByClassName("11Cont")
const img12=document.getElementsByClassName("12Cont")

const cont1=document.getElementsByClassName("1Img");
const cont2=document.getElementsByClassName("2Img");
const cont3=document.getElementsByClassName("3Img");
const cont4=document.getElementsByClassName("4Img");
const cont5=document.getElementsByClassName("5Img");
const cont6=document.getElementsByClassName("6Img");
const cont7=document.getElementsByClassName("7Img");
const cont8=document.getElementsByClassName("8Img");
const cont9=document.getElementsByClassName("9Img");
const cont10=document.getElementsByClassName("10Img");
const cont11=document.getElementsByClassName("11Img");
const cont12=document.getElementsByClassName("12Img");

function Hovers(Player, Container){
            Player[0].addEventListener('mouseover',(()=>{
            Container[0].classList.remove("Ocultar")
        }))
        Player[0].addEventListener('mouseleave',(()=>{
            Container[0].classList.add("Ocultar")
        }))
        }

Hovers(img1,cont1)
Hovers(img2,cont2)
Hovers(img3,cont3)
Hovers(img4,cont4)
Hovers(img5,cont5)
Hovers(img6,cont6)
Hovers(img7,cont7)
Hovers(img8,cont8)
Hovers(img9,cont9)
Hovers(img10,cont10)
Hovers(img11,cont11)
Hovers(img12,cont12)

