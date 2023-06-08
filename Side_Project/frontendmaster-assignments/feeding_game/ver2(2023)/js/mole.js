const couterWrapper = $(".counter-wrapper")
const scoreFill = document.querySelector('.score-fill');
let score = 5;
function setEndScene() {
    $(".bg-container").css("background-image", "url('./images/win.png')");
    $(".bg-container").css("background-size", "contain");
    $("body").css("background-color", "rgb(192, 200, 109)");
    $(".counter-container").css("display", "none");
    $(".hole-container").css("display", "none");
}
function updateScore(newScore) {
    score = newScore;
    const fillWidth = couterWrapper.width() * (score / 100); /* Set 100 to the maximum score value */
    scoreFill.style.width = fillWidth + 'px';
    if (score > 95) {
        setTimeout(function () {
            setEndScene();
        }, 2500);
    }
    console.log(`now score is ${score}`);
}
function handleFeed(event) {
    event.target.parentNode.style.cursor = "url('./images/cursor.png'), auto";
    event.target.src = "./images/mole-fed.png";
    updateScore(score + 9);
    setTimeout(function () {
        event.target.src = "./images/mole-leaving.png";
    }, 3000);
    setTimeout(function () {
        event.target.style.display = "none";
        event.target.classList.remove("active");
    }, 4000);
    event.target.dataset.feed = "true";
}
function handleKFeed(event) {
    event.target.parentNode.style.cursor = "url('./images/cursor.png'), auto";
    event.target.src = "./images/king-mole-fed.png";
    updateScore(score + 18);
    setTimeout(function () {
        event.target.src = "./images/king-mole-leaving.png";
    }, 3000);
    setTimeout(function () {
        event.target.style.display = "none";
        event.target.classList.remove("active");
    }, 4000);
    event.target.dataset.feed = "true";
}
async function entercycle(mole, isKing) {
    mole.classList.add("active");
    if (isKing)
        mole.src = "./images/king-mole-hungry.png";
    else
        mole.src = "./images/mole-hungry.png";

    mole.style.display = "block";
    const clicker = mole.parentNode;
    clicker.style.cursor = "url('./images/cursor-worm.png'), auto";
    let promiseimage = new Promise(function (resolve, reject) {
        resolve(mole);
    });
    promiseimage
        .then(mole => {
            mole.dataset.feed = "false";
            if (isKing)
                mole.addEventListener("click", handleKFeed);
            else
                mole.addEventListener("click", handleFeed);
            setTimeout(function () {
                if (isKing)
                    mole.removeEventListener("click", handleKFeed);
                else
                    mole.removeEventListener("click", handleFeed);
                clicker.style.cursor = "url('./images/cursor.png'), auto";
                if (mole.dataset.feed === "false") {
                    if (isKing)
                        mole.src = "./images/king-mole-sad.png";
                    else
                        mole.src = "./images/mole-sad.png";
                    setTimeout(function () {
                        if (isKing)
                            mole.src = "./images/king-mole-leaving.png";
                        else
                            mole.src = "./images/mole-leaving.png";
                    }, 1000);
                    setTimeout(function () {
                        mole.classList.remove("active");
                        mole.style.display = "none";
                    }, 2000);
                }
            }, 2500); // 多久之內 點擊得分
        });
}
//choose one dom object
let rafCount = 0;
let runAgainAt = Date.now();
const mole = $(".mole");
//Game start animations
function moleInit() {
    mole.attr("data-feed", "false");
    for (let i = 0, j = mole.length; i < j; i++) {
        if (probability(0.8)) {
            mole[i].src = "./images/king-mole-fed.png";
            setTimeout(function () {
                mole[i].src = "./images/king-mole-leaving.png";
            }, 1000);
        }
        else {
            if (probability(0.5)) {
                mole[i].src = "./images/mole-fed.png";
                setTimeout(function () {
                    mole[i].src = "./images/mole-leaving.png";
                }, 1000);
            }
            else {
                mole[i].src = "./images/mole-hungry.png";
                setTimeout(function () {
                    mole[i].src = "./images/mole-leaving.png";
                }, 1000);
            }
        }
        setTimeout(function () {
            mole[i].style.display = "none";
        }, 2000)
    }
}
function probability(odd) {
    return Boolean(Math.random() > odd); // 回傳　(大於odd 的機率真假值)
}
function moleAction() {
    if (Date.now() > runAgainAt) {
        //frame rate 更新畫面(地鼠出現)頻率
        runAgainAt = Date.now() + 100; // +100ms 約等於每0.1s刷新一幀
        for (let i = 0; i < mole.length; i++) {
            /* 計算mole[i]多大機率進入互動階段 */
            if (!(mole[i].classList.contains("active"))) {
                const change = probability(0.99);
                if (change) {
                    const isKing = probability(0.8);//互動階段是大獎的機率
                    entercycle(mole[i], isKing); //互動階段函式
                }
            }
        }
    }
    requestAnimationFrame(moleAction);//再次更新
}
//初始化 圖像和分數
updateScore(5);
moleInit();
setTimeout(function () {
    requestAnimationFrame(moleAction);
}, 2200);

