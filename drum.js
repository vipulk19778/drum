var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//for button pressed

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });
}

//for keyboard pressed

document.addEventListener("keypress", function (Event) {
    makeSound(Event.key);
    buttonAnimation(Event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("audio/yellowtree_tom-high.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("audio/yellowtree_tom-high.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("audio/veiler_lite-crash-1980.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("audio/waveplay_deep-hard-bass-kick-a4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("audio/waveplay_deep-hard-bass-kick-a4.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("audio/veiler_sigil-snare.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("audio/veiler_sigil-snare.mp3");
            audio7.play();
            break;
        case "o":
            var audio8 = new Audio("audio/trivialaccapella_hi-hat-hit-clopen.mp3");
            audio8.play();
            break;
        default:
            console.log(buttonInnerHtml);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}
