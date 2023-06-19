"@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');"
/*mob menu*/

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


speakers.forEach((element, i) => {
    const thirdSection = document.querySelector('.third-section');
    const speakerCard = document.createElement('article');
    speakerCard.classList = 'featured-eotc';

       
        const spCard = `<div class="grid-two-parts">
        <div class="featured-photo-holder">
           <img src="${speakers[i].img}" class="overlay-one">
        </div>
        <div class="featured-text-holder">
            <h3 class="featured-name">${speakers[i].spkrName}</h3>
            <h4 class="featured-info">${speakers[i].education}</h4>
            <p class="featured-details">${speakers[i].publication}</p>
        </div>
         
    </div> 
`;
    speakerCard.innerHTML += spCard;
    thirdSection.appendChild(speakerCard);
  });
      