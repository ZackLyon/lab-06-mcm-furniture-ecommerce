import { calcItemTotal } from './calc-item-total.js';
import { findById } from './find-by-id.js';

export function calcOrderTotal(wholeProducts, wholeCart){
    let orderTotal = 0;

    for (let currentItem of wholeCart) {
        const currentProduct = findById(wholeProducts, currentItem.id);
        orderTotal += calcItemTotal(currentProduct.price, currentItem.quantity);
    }
    
    return orderTotal;
}
