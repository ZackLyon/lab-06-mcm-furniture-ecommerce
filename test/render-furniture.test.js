// IMPORT MODULES under test here:
import { renderFurniture } from '../products/render-furniture.js';
import { furniture } from '../data/furniture.js';

const test = QUnit.test;

test('The expected string should match the string of HTML elements created by renderFurniture function', (expect) => {

    const expected = `<li class="furniture-item"><h3 class="furniture-name">Recliner</h3><img src="../assets/recliner.jpeg" class="furniture-image"><div class="description-container"><p class="furniture-description">A comfy recliner for relaxing with a book.</p><p class="furniture-category">Seating item.</p><p class="furniture-price">$800.87</p></div></li>`;

    const actual = renderFurniture(furniture[3]).outerHTML;

    expect.equal(actual, expected);
});
