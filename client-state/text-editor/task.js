const text = document.querySelector('#editor');
const btn = document.querySelector('#btn');

text.addEventListener('input', (event) => {
    localStorage.setItem('text', JSON.stringify(event.target.value));
})

btn.addEventListener('click', () => {
    text.value = "";
    localStorage.removeItem('text');
})

text.value = JSON.parse(localStorage.getItem('text'));