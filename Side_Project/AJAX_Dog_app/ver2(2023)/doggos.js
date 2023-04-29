//handle DOM
const selectBreed = document.getElementById("breedOption");
const imgSource = document.querySelector(".displayImg");
let BREEDS_LIST = "https://dog.ceo/api/breeds/list/all";
//const loading = document.querySelector(".spinner");
const loading = document.getElementsByClassName("spinner")[0];
const promise2 = fetch(BREEDS_LIST);

//bonus
let selectionList = new Object();

function newbuilderGPT(object) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        //tempo = current key
        const tempo = Object.keys(object)[i];
        //  console.log(`this is key: ${tempo} now!`);
        for (let j = 0; j < object[tempo].length; j++) {
            if (selectionList[object[tempo][j]]) {
                selectionList[object[tempo][j]].push(tempo);
            }
            else {
                selectionList[object[tempo][j]] = new Array();
                selectionList[object[tempo][j]].push(tempo)
            }
            //  console.log(`this is value: ${object[tempo][j]} now!`);
        }
    }
}

function makeSelectionsWithObject(obj) {
    let wholeHtml = "";
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let currentkey = Object.keys(obj)[i];
        let newOptgroup = `<optgroup label = '${currentkey}'>`;
        wholeHtml += newOptgroup;
         for (let j = 0; j < obj[currentkey].length; j++) {
            const currentOption = `<option value = "${obj[currentkey][j]}">${obj[currentkey][j]}</option>`;
            wholeHtml += currentOption;
        } 
        wholeHtml += "</optgroup>";
    }
    selectBreed.innerHTML ="<option value=''selected></option>";
    selectBreed.innerHTML += wholeHtml;
}
async function getURLfromAPI() {
    promise2
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(function (data) {
            let breedNum = Object.keys(data.message).length;
            //建一個物件做optgroup algorithm from chatgpt => selectionList = new Object();
            newbuilderGPT(data.message);
            //重新排序
            let selectionListSort = {};
            Object.keys(selectionList).sort().forEach(function (key) {
                selectionListSort[key] = selectionList[key];
            });
            //建立下拉選單 填回DOM
            makeSelectionsWithObject(selectionListSort);
           // console.log(selectionListSort);
            // 加入event至剛才製造的下拉選單
            selectBreed.addEventListener('change', function (event) {
                let newsrc = "https://dog.ceo/api/breed/" + event.target.value + "/images/random";
                const promise3 = fetch(newsrc);
        //        console.log(imgSource);
                imgSource.classList.remove("show");
                loading.classList.add("show");
                promise3
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (data) {
                        imgSource.setAttribute("src", data.message);
                    });
                imgSource.addEventListener('load', function (event) {
                    loading.classList.remove("show");
                    imgSource.classList.add("show");
                });
            });
        });
}
getURLfromAPI();

