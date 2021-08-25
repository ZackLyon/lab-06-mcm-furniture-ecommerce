
export function findById(allProducts, itemToMatch){
    for (let item of allProducts) {
        if (item.id === itemToMatch.id) {
            return item;
        }
    }
}