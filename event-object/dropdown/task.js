const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.getElementsByClassName('dropdown__item'));
const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
})


dropdownItems.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownList.classList.remove('dropdown__list_active');
        let contentOfElem = event.target.textContent;
        dropdownValue.textContent = contentOfElem;
    })
})



