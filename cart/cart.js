import { findById } from '../utils/find-by-id.js';
import { calcItemTotal } from '../utils/calc-item-total.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';
import { renderLineItems } from './render-line-items.js';

const tbodyEl = document.querySelector('tbody');
// console.log(findById(furniture, cartItems[1]));

for (let item of cartItems) {
    let newToCart = findById(furniture, item);
    console.log(newToCart);
    tbodyEl.append(renderLineItems(newToCart, item));
}