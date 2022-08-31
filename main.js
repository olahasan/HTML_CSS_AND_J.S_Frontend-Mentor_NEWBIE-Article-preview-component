let button = document.getElementsByClassName("sh_box")[0];
let oo = document.getElementsByClassName("oo")[0];
console.log(button);
console.log(oo);


button.onclick = function () {

    oo.classList.toggle("hide");
    button.classList.toggle("color");


    button.style.transition = ".5s";

}

