"use strict";


function openCard() {
    let container = document.getElementsByClassName('container')[0];
    container.classList.add("turned");
    restartAnimation();
    document.getElementById("music").play();
}

function restartAnimation() {
    let gif = document.getElementById("animation");
    let gifUrl = gif.src;
    gif.src = "";
    gif.src = gifUrl;
}