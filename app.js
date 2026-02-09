var typed = new Typed(".auto-input", {
    strings: ["Digital Coding Adda", "Made by YAJA Team"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//encuentra todos los drum
let numOfDrumbtn = document.querySelectorAll(".drum").length;
console.log(numOfDrumbtn);

//Detecta al presionar un boton
for (var i = 0; i < numOfDrumbtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", function () {
        let buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);

        makeSound(buttonInnerHTML);

        btnAnimation(buttonInnerHTML);
    });
}

//Detectar botones de teclas
document.addEventListener("keypress", function (event) {
    console.log(event.key);

    makeSound(event.key);

    btnAnimation(event.key);
});

//Añadir animacion
function btnAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    console.log(activeButton);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
    
}

//funcion crear sonido
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/Bombon.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/Guita.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/ManoBread.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/Piasi.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/Platillo_volante.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/Sorpresa.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/Caracas.mp3");
            audio.play();
            break;
        }
}