let timer;
let timeLeft = 1500;
const display = document.getElementById('timer-display');
const statusIcon = document.getElementById('status-icon');
const message = document.getElementById('message');

function updateDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    display.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function startCountdown(duration, icon, msgText, color) {
    clearInterval(timer);
    timeLeft = duration;
    updateDisplay();
    
    statusIcon.innerText = icon;
    message.innerText = msgText;
    document.getElementById('btn-start').style.background = color;

    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            statusIcon.innerText = "⭐";
            message.innerText = "Incroyable ! Tu as réussi.";
            alert("Session finie ! Repose-toi un peu.");
        }
    }, 1000);
}

// Focus (25 min) - Rose
document.getElementById('btn-start').addEventListener('click', () => {
    startCountdown(25 * 60, "🔥", "Concentration maximale active !", "#ff79c6");
});

// Fatigué (5 min de pause) - Bleu
document.getElementById('btn-tired').addEventListener('click', () => {
    startCountdown(5 * 60, "🍃", "Prends une pause, bois un peu d'eau.", "#8be9fd");
});

// Démotivé (10 min de boost) - Jaune/Orange
document.getElementById('btn-unmotivated').addEventListener('click', () => {
    startCountdown(10 * 60, "💪", "Juste 10 minutes, tu es un(e) chef !", "#ffb86c");
});

// Reset
document.getElementById('btn-reset').addEventListener('click', () => {
    clearInterval(timer);
    timeLeft = 1500;
    updateDisplay();
    statusIcon.innerText = "✨";
    message.innerText = "On recommence à zéro ?";
    document.getElementById('btn-start').style.background = "#ff79c6";
});
