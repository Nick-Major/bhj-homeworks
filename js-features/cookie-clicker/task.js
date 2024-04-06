const clickerCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let counter = 0;
cookie.addEventListener('click', () => {
    counter++;
    clickerCounter.textContent = counter;
    if (counter % 2 !== 0) {
        cookie.style.width = '240px';
        cookie.style.height = '140px';
    } else {
        cookie.style.width = '200px';
        cookie.style.height = '100px';
    }
})