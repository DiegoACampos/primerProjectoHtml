const player = document.getElementById("player");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let score = 0;
let scoreInterval;

document.addEventListener("click", function() {
    player.classList.add("playerJump")
});

document.addEventListener("animationend", () => {
    player.classList.remove("playerJump")
})

function pauseGame() {
    cactus1.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    fondo.style.animationPlayState = "paused";
    clearInterval(scoreInterval);
};

function resumeGame() {
    cactus1.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    fondo.style.animationPlayState = "running";
};

document.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        pauseGame();
    } else {
        resumeGame();
    }
    buttonPlayStop.classList.toggle("play");
});

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
}, 100);