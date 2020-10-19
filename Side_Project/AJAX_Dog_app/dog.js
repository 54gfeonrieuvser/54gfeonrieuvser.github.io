const demo = document.querySelector("#Imgdemo");
const Breeds_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');

fetch(Breeds_URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data.status);
    console.log(data);
    // console.log(breedsArray);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    console.log(breedsArray);
    for(let i = 0; i < breedsArray.length; i++){
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);

    }
})

select.addEventListener("change", function(event) {
    demo.src='./img/loading.png';
    demo.style.width = "100px";
    demo.style.height = "100px";
    demo.style.animation ="spin 2s linear infinite";

    const url = `https://dog.ceo/api/breed/${event.target.value}/images`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const random = Math.floor(Math.random()* data.message.length);
        // demo.src = data.message;
        // demo.style.animation = "none";
        // demo.style.width = "30%";
        // demo.style.height = "30%";
    })
    // demo.src = ;
    // console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
    
    // console.log(demo);
    // console.log(``);

})