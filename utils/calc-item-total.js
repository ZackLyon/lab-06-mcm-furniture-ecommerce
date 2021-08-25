
export function calcItemTotal(productPrice, productQuantity) {
    return (Math.round((productPrice * productQuantity) * 100) / 100);
}
