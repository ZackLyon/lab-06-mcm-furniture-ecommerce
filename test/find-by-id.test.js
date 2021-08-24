import { findById } from '../utils/find-by-id.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';

const test = QUnit.test;

test('FindById should take in the list of all products and the item to match and return the requested product', (expect) => {

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