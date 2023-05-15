/* 
Creating Handwriting-style animation on main page
Better do the RWD setup for different devices
 */
let HWtext = "";


let HWfontSizeTwo = 96 * window.innerWidth / 1920;
let HWfontSizeOne = 120 * window.innerWidth / 1920;
/* Create Some object to track current node on sitemap */

let anchorList = document.querySelectorAll(".pageLink");
let currentPage;
for (let i = 0; i < anchorList.length; i++) {
    if (anchorList[i].classList.contains("currentPage")) {
        //  console.log(`it is ${anchorList[i].textContent} now!`);
        currentPage = i;
    }
}
/* transfer custom text for each page topic */
if (currentPage == 0) {
    //create scroll down animation just in page 1.
  /*   new Pageable("#scrollContainer"); */
    HWtext = "Shut up!";
} else if (currentPage == 1) {
    HWtext = "My Portfolio";
} else if (currentPage == 2) {
    HWtext = "Blog & Life";
} else if (currentPage == 3) {
    HWtext = "Contact me";
}
HWtext = "Shut up!";
new Vara("#handWritingBlock", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json", [{
    text: HWtext,
    duration: 1000,
    textAlign: "center",
    delay: 200,
    x: -10,
    y: 220
}, {
    text: "& Learn",
    duration: 2000,
    textAlign: "center",
    delay: 300,
    x: 60,
    y: 40,
    fontSize: HWfontSizeTwo,
    strokeWidth: 3
}], {
    fontSize: HWfontSizeOne,
    strokeWidth: 2.5
});


//Handle Back-to-top button
/* let Top = document.querySelector("#backToTopAnchor");
Top.addEventListener('mouseover', function (e) {
    Top.style.backgroundColor = "#569DAA";
});
 */
const swiper = new Swiper('.demo', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
   /*  effect: 'cards', */
    loop: "true",
    // If we need pagination
 /*    pagination: {
        el: '.swiper-pagination',
    },
 */
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
  /*   scrollbar: {
        el: '.swiper-scrollbar',
    }, */
});

