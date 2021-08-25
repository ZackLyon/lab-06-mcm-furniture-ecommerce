import { addItemToCart } from '../utils/cart-api.js';

export function newButton(furniture) {
    const buttonEl = document.createElement('button');

    buttonEl.textContent = 'Add';
    buttonEl.value = furniture.id;
    buttonEl.classList.add('add-button');

    buttonEl.addEventListener('click', () => {
        // alert(`The ${buttonEl.value} was added.`);
        console.log(buttonEl.value);
        addItemToCart(buttonEl.value);
    });

    return buttonEl;
}

