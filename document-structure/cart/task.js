let cart = {
    '1' : 1,
    '2' : 1,
    '3' : 1,
    '4' : 1
}

document.onclick = (event) => {
    let findId = event.target.closest('.product').dataset.id;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        plusFunc(findId);
        let countNumber = event.target.previousElementSibling;
        countNumber.textContent++;
    }

    if (event.target.classList.contains('product__quantity-control_dec')) {
        minusFunc(findId);
        let countNumber = event.target.nextElementSibling;
        countNumber.textContent--;
        if (countNumber.textContent == 0) {
            countNumber.textContent = 1;
        }
    }

    if (event.target.classList.contains('product__add')) {
        let idToCopy = event.target.closest('.product');
        let cloneId = idToCopy.cloneNode(false);
        cloneId.classList.replace('product', 'cart__product');

        let imgToCopy = event.target.closest('.product__quantity').closest('.product__controls').previousElementSibling;
        let clonedImg = imgToCopy.cloneNode(true);

        let cartProducts = document.querySelector('.cart__products');
        let cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');

        if (!cartProducts.querySelector(`.cart__product[data-id="${findId}"]`)) {
            cartProducts.insertAdjacentElement('afterBegin', cloneId);
            cloneId.insertAdjacentElement('afterBegin', clonedImg);
            cloneId.insertAdjacentElement('beforeEnd', cartProductCount);

            let countNumber = idToCopy.querySelector('.product__quantity-value');
            cartProductCount.textContent = countNumber.textContent;
        }

        let itemNumber = cloneId.dataset.id;
        console.log(itemNumber);

        console.log(cart);
    }

}

const plusFunc = (id) => {
    cart[id]++;
    console.log(cart);
}

const minusFunc = (id) => {
    cart[id]--;
    if (cart[id] === 0) {
        cart[id] = 1;
    }
    console.log(cart);
}
