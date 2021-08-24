import { renderLineItems } from '../cart/render-line-items.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';

const test = QUnit.test;

test('The expected string should match the string of HTML elements created by renderFurniture function', (expect) => {

    const expected = `<tr><td>Bed</td><td>$1000.00</td><td>5</td><td>$5,000.00</td></tr>`;

    const actual = renderLineItems(furniture[1], cartItems[1]).outerHTML;

    expect.equal(actual, expected);
});