const book1 = 100;
const book2 = 200;
const book3 = 300;

function calculateFinal(includeBook1, includeBook2, includeBook3, a, b, c) {
    let final = 0;

    if (includeBook1) {
        final += book1 * a;
    }

    if (includeBook2) {
        final += book2 * b;
    }

    if (includeBook3) {
        final += book3 * c;
    }

    return final;
}

// Example usage
let includeBook1 = false; // We do not want to include book1
let includeBook2 = true;  // We want to include book2
let includeBook3 = true;  // We want to include book3

let a = 1; // Multiplier for book1 (not used in this case)
let b = 2; // Multiplier for book2
let c = 3; // Multiplier for book3

let finalResult = calculateFinal(includeBook1, includeBook2, includeBook3, a, b, c);
console.log("The sum of the included books is:", finalResult); // Output the result
