const demo = document.querySelector("#Imgdemo");
const Breeds_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(Breeds_URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for(let i = 0; i < breedsArray.length; i++){
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);
    }
})
select.addEventListener("change", function(event) {
    defaultAnime();

    const url = `https://dog.ceo/api/breed/${event.target.value}/images`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        const random = Math.floor(Math.random()* data.message.length);
        // setTimeout(defaultAnime, 3000);
        demo.src = data.message[random];

        setTimeout(load, 2000);
    });
    // demo.src = ;
    // console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
    // console.log(demo);
    // console.log(``);
})
    demo.addEventListener("load", function(){
        // demo.style.display = "none";
        console.log("wait");
    });

function defaultAnime(){
    demo.src='./img/loading.png';
    demo.style.width = "100px";
    demo.style.height = "100px";
    demo.style.animation ="spin 2s linear infinite";
}

function load(){

    demo.style.display = "block";
    demo.style.animation = "none";
    demo.style.width = "30%";
    demo.style.height = "30%";
}