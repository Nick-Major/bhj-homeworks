let currentTime = 59;
let timer = document.getElementById('timer');
let counter = setInterval(countDown, 1000);

function countDown() {
    timer.textContent = currentTime;
    currentTime--;
    if (currentTime < 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
}

