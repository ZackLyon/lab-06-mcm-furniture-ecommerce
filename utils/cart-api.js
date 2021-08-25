import { findById } from './find-by-id.js';

export { getCart, setCart, addItemToCart, clearCart };

const CART = 'CART';

function getCart(){
    const stringyCart = localStorage.getItem(CART);

    if (!stringyCart) {
        return [];
    }

    return JSON.parse(stringyCart);
}

function setCart(currentCart){
    const cartToString = JSON.stringify(currentCart);

    localStorage.setItem(CART, cartToString);
}

function addItemToCart(idForAddedItem){
    let cartToAddTo = getCart();
    
    const indexOfItem = findById(cartToAddTo, idForAddedItem);

    if (indexOfItem) {
        indexOfItem.quantity++;
    } else if (!indexOfItem){
        const newObj = { id: idForAddedItem, quantity: 1 };
        cartToAddTo.push(newObj);
    }

    setCart(cartToAddTo);
}

function clearCart(){
    alert(JSON.stringify(getCart(), true, 2)); //alert user of items in cart by making cart a string

    localStorage.removeItem(CART);

    window.location.href = '../index.html';
}
