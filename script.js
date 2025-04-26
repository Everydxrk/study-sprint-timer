let timer; // Will hold the interval
let isRunning = false; // Is the timer currently running?
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById("resetBtn");

// Function to update timer display
function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            startStopBtn.textContent = "Start";
            alert("Time's up!");
        }
    }, 1000);
}

// Start/Stop button click
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        startStopBtn.textContent = "Stop";
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        isRunning = false;
    }
});

// Reset button click
resetBtn.addEventListener("click", () => {
    clearInterval(timer); // Stop the timer if running
    isRunning = false; // Reset running state
    timeLeft = 25 * 60; // Reset time back to 25 minutes
    updateTimerDisplay(); // Update the display
    startStopBtn.textContent = "Start"; // Reset button text
})

// Initialize display
updateTimerDisplay();