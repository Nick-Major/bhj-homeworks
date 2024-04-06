const holes = Array.from(document.querySelectorAll('.hole'));
const deadScore = document.getElementById('dead');
const lostScore = document.getElementById('lost');
let winCounter = 0;
let loseCounter = 0;
holes.forEach((hole) => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            winCounter++;
            deadScore.textContent = winCounter;
        } else {
            loseCounter++;
            lostScore.textContent = loseCounter;
        }

        if (winCounter === 10) {
            winCounter = 0;
            loseCounter = 0;
            deadScore.textContent = winCounter;
            lostScore.textContent = loseCounter;
            alert('Вы победили!');
        }

        if (loseCounter === 5) {
            winCounter = 0;
            loseCounter = 0;
            deadScore.textContent = winCounter;
            lostScore.textContent = loseCounter;
            alert('Вы проиграли!');
        }
    })
})