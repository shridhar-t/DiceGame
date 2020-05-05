document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
document.querySelector(".button").addEventListener("click", () => {
    $(".img1").fadeOut(200).fadeIn(100);
    $(".img2").fadeOut(200).fadeIn(100);
    var audio = new Audio("./sounds/roll.mp3");
    audio.play();
    var random1 = Math.floor((6 * Math.random()) + 1);
    var random2 = Math.floor((6 * Math.random()) + 1);
    document.querySelector(".img1").setAttribute("src", "./images/dice" + random1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + random2 + ".png");
    var state1 = document.querySelector(".img1").getAttribute("src");
    var state2 = document.querySelector(".img2").getAttribute("src");
    if (state1 > state2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (state1 < state2) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    } else {
        document.querySelector("h1").textContent = "Draw";
    }
})