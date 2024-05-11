const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);

        const loader = document.querySelector('.loader');
        loader.classList.remove('loader_active');

        const items = document.getElementById('items');
        const valute = response.response.Valute;

        for (let k in valute) {
            items.insertAdjacentHTML('afterbegin', `<div class="item">
            <div class="item__code">
                    ${valute[k].CharCode}
                </div>
                <div class="item__value">
                    ${valute[k].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`)
        }
    }
})
