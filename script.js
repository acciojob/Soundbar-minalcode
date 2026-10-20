//your JS code here. If required.

const buttons = document.getElementById("buttons");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.addEventListener("click", function (event) {
    const button = event.target.closest(".btn");

    if (!button) return;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const sound = button.dataset.sound;
    currentAudio = new Audio("./sounds/" + sound + ".mp3");

    currentAudio.play().catch(function (error) {
        console.log("Audio could not play:", error);
    });
});

stopButton.addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
