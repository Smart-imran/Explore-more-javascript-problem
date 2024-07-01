const phones = [
    { name: "Samsung", camera: 32, storge: "32gb", price: 15000, color: "red" },
    { name: "Redmi", camera: 30, storge: "120gb", price: 25000, color: "white" },
    { name: "iphone", camera: 20, storge: "128gb", price: 90000, color: "pink" },
    { name: "walton", camera: 12, storge: "20gb", price: 10000, color: "black" }
]
function cheapestPhone() {
    let chepest = phones[0];

    for (let i = 0; i < phones.length; i++) {
        const phoneList = phones[i];

        if (phoneList.price < chepest.price) {
            chepest = phoneList;
        }

    }
    return chepest;


}



const myChoice = cheapestPhone(phones);
console.log(myChoice);