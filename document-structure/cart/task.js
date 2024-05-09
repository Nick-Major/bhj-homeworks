const addFunc = (event) => {
    const findId = event.target.closest('.product').dataset.id;

    const basket = document.querySelector('.cart__products');
    const product = Array.from(basket.querySelectorAll('.cart__product')).find((elem) => {
        return elem.dataset.id === findId;
    });

    if (product) {
        const quantityValue = event.target.closest('.product').querySelector('.product__quantity-value');
        product.lastElementChild.textContent = +product.lastElementChild.textContent + Number(quantityValue.textContent);
        return;
    }

    if (event.target.classList.contains('product__add')) {
        const quantityValue = event.target.closest('.product').querySelector('.product__quantity-value');
        const idToCopy = event.target.closest('.product');
        const cloneId = idToCopy.cloneNode(false);
        cloneId.classList.replace('product', 'cart__product');

        const imgToCopy = event.target.closest('.product__quantity').closest('.product__controls').previousElementSibling;
        const clonedImg = imgToCopy.cloneNode(true);

        const cartProducts = document.querySelector('.cart__products');
        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');

        if (!cartProducts.querySelector(`.cart__product[data-id="${findId}"]`)) {
            cartProducts.insertAdjacentElement('afterBegin', cloneId);
            cloneId.insertAdjacentElement('afterBegin', clonedImg);
            cloneId.insertAdjacentElement('beforeEnd', cartProductCount);

            cartProductCount.textContent = quantityValue.textContent;
        }
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