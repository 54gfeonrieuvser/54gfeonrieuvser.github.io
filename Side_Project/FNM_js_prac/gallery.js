let mydog = document.getElementsByClassName("gallery-img");
function next(){
    document.getElementsByClassName("prev")[0].disabled = false;
    const temporaryimg = document.getElementsByClassName("active");
    const activate = document.getElementsByClassName("prev");
    for(let i = 0; i <mydog.length; i++){
        if(mydog[i] == temporaryimg[0]){
            // if(i === mydog.length -2){
            //     document.getElementsByClassName("prev")[0].disabled = false;
            // }
            if(i === mydog.length -1){
               return;
            }
            mydog[i+1].classList.add("active");
            mydog[i].classList.remove("active");
            return;
        }
    }
}
function prev(){
    document.getElementsByClassName("next")[0].disabled = false;
    const temporaryimg = document.getElementsByClassName("active");
    for(let i = 0; i <mydog.length; i++){
        if(mydog[i] == temporaryimg[0]){
            // if(i === 1){
            //     document.getElementsByClassName("prev")[0].disabled = false;
            // }
            if(i === 0){
                return;
            }
            mydog[i-1].classList.add("active");
            mydog[i].classList.remove("active");
            return;
        }
    }
}