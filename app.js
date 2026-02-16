var typed = new Typed(".auto-input", {
    strings: ["Alicia Ros", "Alejandro Do Nascimento", "Yoed Londoño"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

let drumButtons = document.querySelectorAll(".drum");
let numOfDrumbtn = drumButtons.length;

for (var i = 0; i < numOfDrumbtn; i++) {
    drumButtons[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        btnAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    let keyPath = event.key.toLowerCase();
    makeSound(keyPath);
    btnAnimation(keyPath);
});

function btnAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/Bombon.mp3").play();
            break;
        case "a":
            new Audio("sounds/Guita.mp3").play();
            break;
        case "s":
            new Audio("sounds/ManoBread.mp3").play();
            break;
        case "d":
            new Audio("sounds/Piasi.mp3").play();
            break;
        case "j":
            new Audio("sounds/Platillo_volante.mp3").play();
            break;
        case "k":
            new Audio("sounds/Sorpresa.mp3").play();
            break;
        case "l":
            new Audio("sounds/Caracas.mp3").play();
            break;
    }
}