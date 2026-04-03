let time = 600;
const timerEl = document.getElementById("timer");

const interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    timerEl.textContent = `${minutes}:${seconds}`;

    if (time <= 60) {
        timerEl.classList.add("warning");
    }

    if (time <= 0) {
        clearInterval(interval);
        alert("Hết giờ!");
    }

    time--;
}, 1000);