/* function centimeterToMeter(centimeter){
    return centimeter * 0.01;


}

let inputCentimeter =100;

let finalResult = centimeterToMeter(inputCentimeter);
console.log("Meter is: "+ finalResult +" M"); */

function feetToInch(feet) {
    // Multiply the number of feet by 12 to convert to inches
    return feet * 12;
}

// Get user input
let inputFeet = prompt("Enter the number of feet:");

// Convert user input to a number
inputFeet = Number(inputFeet);

// Call the function with the input value
let finalResult = feetToInch(inputFeet);

// Print the result
console.log(finalResult);
