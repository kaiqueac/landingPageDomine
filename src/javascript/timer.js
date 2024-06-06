function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    const countdownInterval = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            timer = 0;
        }

        // Armazenar o tempo restante no localStorage
        localStorage.setItem('remainingTime', timer);
    }, 1000);
}

window.onload = function () {
    const display = document.querySelector('#countdown');
    const savedTime = localStorage.getItem('remainingTime');

    if (savedTime) {
        // Continuar a partir do tempo salvo
        startCountdown(parseInt(savedTime, 10), display);
    } else {
        // Iniciar com 8 horas
        const eightHours = 8 * 60 * 60; // 8 horas em segundos
        localStorage.setItem('remainingTime', eightHours);
        startCountdown(eightHours, display);
    }
}