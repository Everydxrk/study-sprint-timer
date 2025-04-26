let timer; // Will hold the interval
let isRunning = false; // Is the timer currently running?
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');

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

// Initialize display
updateTimerDisplay();