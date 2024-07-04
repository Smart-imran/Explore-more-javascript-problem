/* const numbers =[45,65,23,98,19];
// using for off loof

for (const number of numbers) {
    console.log(number);    
} */

const products = [
    { id: 1, name: "Mi", price: 30000 },
    { id: 2, name: "Samsung", Price: 20000 },
    { id: 3, name: "iphone", price: 50000 },
    { id: 4, name: "Vivo", price: 25000 },
]
function productSearched(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;

}
const result = productSearched(products, "sAmsung");
console.log(result);