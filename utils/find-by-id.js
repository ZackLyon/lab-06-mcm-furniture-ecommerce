
export function findById(allProducts, id){
    for (let item of allProducts) {
        if (item.id === id) {
            return item;
        }
    }
}
