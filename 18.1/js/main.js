let countdownTime = 85;

function startTimer(duration) {
    let timer = duration;
    const timerElement = document.getElementById('timer');
    const interval = setInterval(function() {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            timerElement.textContent = "00:00";
        }
    }, 1000);
}


startTimer(countdownTime);