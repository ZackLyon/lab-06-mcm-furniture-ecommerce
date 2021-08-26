import { calcItemTotal } from '../utils/calc-item-total.js';

export function renderLineItems(productInfo, cartInfo){
    const trEl = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');
    
    const total = calcItemTotal(productInfo.price, cartInfo.quantity);

    tdName.textContent = productInfo.name;
    tdPrice.textContent = `$${productInfo.price}`;

    tdQuantity.textContent = cartInfo.quantity;

    tdTotal.textContent = total.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD'
    });

    trEl.append(tdName, tdPrice, tdQuantity, tdTotal);

    return trEl;
}
