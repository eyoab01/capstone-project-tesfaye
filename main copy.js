"@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');"
/*mob menu*/
const body  = document.querySelector('body');
const speakerSection = document.querySelector('.speakers-section');
const speakerdiv = document.createElement('div');
const footer = document.createElement('footer');
body.insertBefore(speakerdiv,speakerSection);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const nav =  document.querySelector('nav');

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".link-item").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remmove("active");
  navMenu.classList.remmove("active");

})) 







const speakers = [
  {
    id: 1,
    img: './images/Yochai Benkler.jpg',
    spkrName: 'Yochai Benkler',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
}, 
{
    id: 2,
    img: './images/Kilnam Chon.jpg',
    spkrName: 'Kilnam Chon',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
}, 
{
    id: 3,
    img: './images/SohYeong Noh.jpg',
    spkrName: 'SohYeong Noh',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
}, 
{
    id: 4,
    img: './images/Julia Leda.jpg',
    spkrName: 'Julia Leda',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
}, 
{
    id: 5,
    img: './images/Lila Tretikov.jpg',
    spkrName: 'Lila Tretikov',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
}, 
{
    id: 6,
    img: './images/Ryan Merkley.jpg',
    spkrName: 'Ryan Merkley',
    education: 'Berkman Proffesor of Entrepreneurial Legal studies at Harvard Law School',
    publication: 'Benkler studies commons based peer production and published his seminal book The wealth of Networks in 2006',
},
];

speakerdiv.innerHTML =`<h1 class="title-h1"> Featured speakers</h1> <span class='red-line2'></span>`;
let i;
for (i=0;i<speakers.length; i++) {
        speakerdiv.innerHTML = speakerdiv.innerHTML + `<div class = 'speaker-sec'>
        
        <div class="spkr-img">
            <img src="${speakers[i].img}"></div>
        <div class="spkr-detail">
            <h3 class ="spkr-name" >${speakers[i].spkrName}</h3>
            <p class="spkr-edu">${speakers[i].education}</p>
            <p class="spkr-pub">>${speakers[i].publication}</p>
        </div>`;
      }









