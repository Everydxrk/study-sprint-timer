let timer;
let timeLeft = 25 * 60;

const buttonText = document.getElementById("buttonText");
const startLearningBtn = document.getElementById("startLearningBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");

function updateTimerDisplay() {
    buttonText.style.opacity = 0;
    setTimeout(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        buttonText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        buttonText.style.opacity = 1;
    }, 200);
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

// Start Learning button click
startLearningBtn.addEventListener("click", () => {
    updateTimerDisplay();
    startTimer();
    startLearningBtn.classList.add('running');
});

// Reset button click
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
    startTimer();
});

// Stop button click
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 25 * 60;
    buttonText.style.opacity = 0;
    setTimeout(() => {
        buttonText.textContent = "Start Learning"; // Just reset text
        buttonText.style.opacity = 1;
    }, 200);
    startLearningBtn.classList.remove('running');
});