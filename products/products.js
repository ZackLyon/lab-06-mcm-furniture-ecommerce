import furniture from '../data/furniture.js';
import renderFurniture from './render-furniture.js';

const ulEl = document.querySelector('.products-container');

for (let newItem of furniture) {
    const li = renderFurniture(newItem);
    ulEl.append(li);
}