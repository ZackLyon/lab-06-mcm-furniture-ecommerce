import { findById } from '../utils/find-by-id.js';
import { calcOrderTotal } from '../utils/calc-order-total.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';
import { renderLineItems } from './render-line-items.js';


const tbodyEl = document.querySelector('tbody');
const orderTotalEl = document.querySelector('#total-price');

for (let item of cartItems) {
    let newToCart = findById(furniture, item);
    tbodyEl.append(renderLineItems(newToCart, item));
}

orderTotalEl.textContent = calcOrderTotal(furniture, cartItems).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
});