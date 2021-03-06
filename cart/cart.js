import { findById } from '../utils/find-by-id.js';
import { calcOrderTotal } from '../utils/calc-order-total.js';
import { furniture } from '../data/furniture.js';
import { renderLineItems } from './render-line-items.js';
import { getCart, clearCart } from '../utils/cart-api.js';

const cartItems = getCart();
const tbodyEl = document.querySelector('tbody');
const orderTotalEl = document.querySelector('#total-price');
const checkoutBtn = document.querySelector('#checkout-btn');

for (let item of cartItems) {
    let newToCart = findById(furniture, item.id);
    tbodyEl.append(renderLineItems(newToCart, item));
}

orderTotalEl.textContent = calcOrderTotal(furniture, cartItems).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
});

checkoutBtn.addEventListener('click', () => clearCart());
