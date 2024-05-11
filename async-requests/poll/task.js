let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText);

        const pollTitle = document.querySelector('.poll__title');
        pollTitle.textContent = response.data.title;

        const pollAnswers = document.querySelector('.poll__answers');
        const answers = response.data.answers;
        answers.forEach((elem) => {
            pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
            ${elem}
          </button>`)
        });

        const buttons = document.querySelectorAll('.poll__answer');
        buttons.forEach((elem) => {
            elem.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();


