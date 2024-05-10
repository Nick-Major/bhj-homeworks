const addFunc = (event) => {
    const findId = event.target.closest('.product').dataset.id;
    const findImg = event.target.closest('.product__controls').previousElementSibling.src;
    const quantityValue = event.target.closest('.product').querySelector('.product__quantity-value').textContent;
    const basket = document.querySelector('.cart__products');

    const product = Array.from(basket.querySelectorAll('.cart__product')).find((elem) => {
        return elem.dataset.id === findId;
    });

    if (product) {
        product.lastElementChild.textContent = +product.lastElementChild.textContent + Number(quantityValue);
        return;
    }

    if (event.target.classList.contains('product__add')) {
        basket.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id="${findId}">
            <img class="cart__product-image" src="${findImg}">
            <div class="cart__product-count">${quantityValue}</div>
        </div>`)
    }

}

const plusFunc = (event) => {
    const value = event.target.previousElementSibling;
    value.textContent++;
}

const minusFunc = (event) => {
    const value = event.target.nextElementSibling;
    if (value.textContent > 1) {
        value.textContent--;
    }
}


const productsElCollection = document.querySelectorAll('.product');
productsElCollection.forEach((elem) => {
    const plus = elem.querySelector('.product__quantity-control_inc');
    const minus = elem.querySelector('.product__quantity-control_dec');
    const add = elem.querySelector('.product__add');

    plus.addEventListener('click', plusFunc);
    minus.addEventListener('click', minusFunc);
    add.addEventListener('click', addFunc);
})