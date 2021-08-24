import { findById } from '../utils/find-by-id.js';
import { calcItemTotal } from '../utils/calc-item-total.js';
import { cartItems } from '../data/cart-items.js';
import { furniture } from '../data/furniture.js';


console.log(findById(furniture, cartItems[1]));

