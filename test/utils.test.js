import { findById } from '../utils/find-by-id.js';
import { calcItemTotal } from '../utils/calc-item-total.js';
import { calcOrderTotal } from '../utils/calc-order-total.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';

const test = QUnit.test;

test('findById should take in the list of all products and the item to match and return the requested product', (expect) => {

    const expected = {
        category: 'Bedroom', 
        description: 'A cozy bed for a good night\'s sleep.', 
        id: 'bed', 
        image: 'bed.jpeg', 
        name: 'Bed', 
        price: '1000.00'
    };

    const actual = findById(furniture, cartItems[1]);

    expect.deepEqual(actual, expected);
});

test('calcItemTotal should take in a product price and a quantity and return the total cost', (expect) => {

    const expected = 5000;

    const actual = calcItemTotal(furniture[1].price, cartItems[1].quantity);

    expect.equal(actual, expected);
});

test('calcOrderTotal should take in the product array and the cart arry and return the total order cost', (expect) => {

    const expected = 11908.78;

    const actual = calcOrderTotal(furniture, cartItems);

    expect.equal(actual, expected);
});