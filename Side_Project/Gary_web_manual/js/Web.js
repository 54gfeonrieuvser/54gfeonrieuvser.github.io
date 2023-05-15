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

/* new Pageable("#scrollContainer"); */
/* transfer custom text for each page topic */
if (currentPage == 0) {
    //create scroll down animation just in page 1.
    /*disable to avoid conflicty with timeline section new Pageable("#scrollContainer"); */
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
}) */


//Make card flip
let card = $(".cardFlip");
let cardState = 0;// 0: frontCard 1: backcard

card.on("click", function (e) {
    if (card.hasClass("isFlipped")) {
        card.removeClass("isFlipped");
        card.removeClass("backHovered");
        card.removeClass("backNotHovered");
    } else {
        card.addClass("isFlipped");
        card.removeClass("frontHovered");
        card.removeClass("frontNotHovered");
    }
});

$(document).ready(function () {
    console.log("ready right!");
});

card.on("mouseover", function (e) {
    if (card.hasClass("isFlipped")) {
        card.addClass("backHovered");
        card.removeClass("backNotHovered")
    }
    else {
        card.addClass("frontHovered");
        card.removeClass("frontNotHovered");
    }
});

card.on("mouseleave", function (e) {
    if (card.hasClass("isFlipped")) {
        card.addClass("backNotHovered");
        card.removeClass("backHovered")
    }
    else {
        card.addClass("frontNotHovered");
        card.removeClass("frontHovered");
    }
});

const bubble = $(".bubbles");
bubble.on("mouseover", function (e) {

    bubble.fadeOut(400);
});
bubble.on("click", function (e) {

    bubble.fadeIn(400);
});

// add swiper effect to self intro
const swiper = new Swiper('.swiper', {
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

//add water ripples effect
$('.slide-01 ').ripples({
    // Image Url
    imageUrl: "null",
    // The width and height of the WebGL texture to render to. 
    // The larger this value, the smoother the rendering and the slower the ripples will propagate.
    resolution: 256,
    // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
    dropRadius: 60,
    // Basically the amount of refraction caused by a ripple. 
    // 0 means there is no refraction.
    perturbance: 0.02,
    // Whether mouse clicks and mouse movement triggers the effect.
    interactive: true,
    // The crossOrigin attribute to use for the affected image. 
    crossOrigin: 'anonymous'
  });
  $('.slide-02').ripples({
    imageUrl: "null",
    resolution: 256,
    dropRadius: 60,
    perturbance: 0.02,
    interactive: true,
    crossOrigin: 'anonymous'
  });
  $('.slide-03').ripples({
    imageUrl: "null",
    resolution: 256,
    dropRadius: 60,
    perturbance: 0.02,
    interactive: true,
    crossOrigin: 'anonymous'
  });
  