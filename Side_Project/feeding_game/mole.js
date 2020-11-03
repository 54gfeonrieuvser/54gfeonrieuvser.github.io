const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");

const body = document.querySelector("#body");

const scorebar = document.querySelector("#wormbar");
const ground = document.querySelector("#Moleground");

let score = 0;

//count current score & set ending
function Scoredisplay(add) {
    score += add;
    const per = "0%";
    document.querySelector("#Hidebox").style.width = score.toString().concat(per);
    if (score > 9) {
        winGame();
    }
};

function winGame() {
    document.body.style.backgroundImage = `url("img/win.png")`;
    document.body.style.backgroundSize = "contain";
    document.body.style.height = "100vh";
    document.body.style.backgroundPosition = "center";
    scorebar.style.display = "none";
    ground.style.display = "none";
    clearInterval(gameprocess);
}
//how to select
function AppearSelection() {

    let choose = Math.floor((Math.random() * Math.floor(10)));
    if (moles[choose].dataset.select == "1") {
        choose = AppearSelection();
    }
    moles[choose].dataset.select = "1";
    return choose;
}
//set default
function init() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].src = "./img/king-mole-leaving.png";
    }
    document.querySelector("#body").addEventListener("click", feed);
    setTimeout(disappear, 500);
};
function disappear() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].style.display = "none";
    }
};
//what  mole act in the game
function showcase() {
    return function () {
        const Holeindex = AppearSelection();
        moles[Holeindex].dataset.fed = "0";
        moles[Holeindex].style.display = "block";
        holes[Holeindex].classList.add("hungry");
        console.log(`it's Hole ${Holeindex} now!`);
        const isKing = Math.floor((Math.random() * Math.floor(5)) / 4);
        if (isKing) {
            moles[Holeindex].dataset.king = "1";
        }
        if (isKing) {
            moles[Holeindex].src = "./img/king-mole-hungry.png";
        } else {
            moles[Holeindex].src = "./img/mole-hungry.png";
        }
        setTimeout(sad(Holeindex), 1000);
    }
}

function feed() {
    if (event.target.tagName !== "IMG") {
        return;
    }
    let Holeindex = parseInt(event.target.dataset.index); 
    holes[Holeindex].classList.remove("hungry");
    holes[Holeindex].dataset.fed = "1";
 
    if( moles[Holeindex].dataset.king == "1"){
        moles[Holeindex].src = "./img/king-mole-fed.png";
        Scoredisplay(2);
    }else{
        moles[Holeindex].src = "./img/mole-fed.png";
        Scoredisplay(1);
    }

    setTimeout(butt(Holeindex), 500);
}


function sad(Holeindex) {
    return function () {
        if (moles[Holeindex].dataset.fed == "1") {
            return;
        }
        moles[Holeindex].classList.remove("hungry");
        if (moles[Holeindex].dataset.king == "1") {
            moles[Holeindex].src = "./img/king-mole-sad.png";
        } else {
            moles[Holeindex].src = "./img/mole-sad.png";
        }
        setTimeout(butt(Holeindex, 3000));
    }
};
function butt(Holeindex) {
    return function () {
        if (moles[Holeindex].dataset.king == "1") {
            moles[Holeindex].src = "./img/king-mole-leaving.png";
        } else {
            moles[Holeindex].src = "./img/mole-leaving.png";
        }
        setTimeout(leave(Holeindex), 5000);
    }
};

function leave(Holeindex) {
    return function () {
        moles[Holeindex].style.display = "none";
        moles[Holeindex].dataset.select = "0";
        moles[Holeindex].dataset.fed = "0";
        moles[Holeindex].dataset.king = "0";
    }
};


let gameprocess = setInterval(showcase(), 1000);

setTimeout(init, 1500);
