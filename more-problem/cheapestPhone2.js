const phones = [
    { name: "Samsung", camera: 32, storage: "32gb", price: 15000, color: "red" },
    { name: "Redmi", camera: 30, storage: "120gb", price: 25000, color: "white" },
    { name: "iphone", camera: 20, storage: "128gb", price: 90000, color: "pink" },
    { name: "walton", camera: 12, storage: "20gb", price: 10000, color: "black" }
];

function findLowest(phones) {
    phones.sort((a, b) => a.price - b.price);
    return phones[0];
}

const result = findLowest(phones);
console.log(result);
