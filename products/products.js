import { furniture } from '../data/furniture.js';
import { renderFurniture } from './render-furniture.js';
import { newButton } from './new-button.js';

const ulEl = document.querySelector('.products-container');

for (let newItem of furniture) {
    const li = renderFurniture(newItem);
    li.append(newButton(newItem));
    ulEl.append(li);
}
