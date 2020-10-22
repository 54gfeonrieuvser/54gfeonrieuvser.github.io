const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");

const body = document.querySelector("#body");

const scorebar = document.querySelector("#wormbar");
const ground = document.querySelector("#Moleground");

let score = 0;

function Scoredisplay(num){

    if (num>9){
        document.body.style.backgroundImage = `url("img/win.png")`;
        document.body.style.backgroundSize= "contain";
        document.body.style.height = "100vh";
        document.body.style.backgroundPosition= "center";
        scorebar.style.display = "none";
        ground.style.display = "none";
    }
    // score+=3;
};

//set default
function init() {
    for (let i = 0; i < moles.length; i++) {
        console.log(moles[i].dataset.index);
        moles[i].src = "./img/king-mole-leaving.png";
    }
    setTimeout(disappear, 500);
};

function disappear() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].style.display = "none";
    }
};

//what if mole not fed
function show() {
    let appearHole = Math.floor(Math.random() * Math.floor(10));
    console.log(`it's number ${appearHole} now!`);

    const isKing = Math.floor(Math.random() * Math.floor(2));
    // console.log(isKing);
    moles[appearHole].style.display = "block";
    if (isKing) {
        moles[appearHole].src = "./img/king-mole-hungry.png";
        moles[appearHole].classList.add("hungry");
    } else {
        moles[appearHole].src = "./img/mole-hungry.png";
        moles[appearHole].classList.add("hungry");
    }



    setTimeout(function sad() {
        if (isKing) {
            moles[appearHole].src = "./img/king-mole-sad.png";
            moles[appearHole].classList.remove("hungry");
        } else {
            moles[appearHole].src = "./img/mole-sad.png";
            moles[appearHole].classList.remove("hungry");
        }
    }, 2000);
    setTimeout(function butt() {
        if (isKing) {
            moles[appearHole].src = "./img/king-mole-leaving.png";
        } else {
            moles[appearHole].src = "./img/mole-leaving.png";
        }
    }, 2500);

    setTimeout(function leave(){
        moles[appearHole].style.display = "none";
    }, 3000);
}


setInterval(show, 2000);

setTimeout(init, 1500);

setInterval(function check(){
    Scoredisplay(score);
}, 1000)
