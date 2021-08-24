// IMPORT MODULES under test here:
import { renderFurniture } from '../products/render-furniture.js';
import { furniture } from '../data/furniture.js';

const test = QUnit.test;

test('The expected string should match the string of HTML elements created by renderFurniture function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="furniture-item"><h3 class="furniture-name">Recliner</h3><img src="../assets/recliner.jpeg" class="furniture-image"><div class="description-container"><p class="furniture-description">A comfy recliner for relaxing with a book.</p><p class="furniture-category">Seating item.</p><p class="furniture-price">$800.00</p></div></li>`;

    
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = renderFurniture(furniture[3]).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
