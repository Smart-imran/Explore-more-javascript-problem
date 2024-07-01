/* 
1.if ticket number less than 100, per ticket price is 100  
2.of ticket number is more than 100 ,but less than 200 , 
3 first per ticket price 100/rest ticket wil per pice 90
4 if you purse more than 200 ticket

condition:
 first 100== 10tk
  2nd 101-200= 90tk
  3rd 201 =70tk

*/
function ticketPrice(ticketQuantity) {
  const first100 = 100;
  const second200 = 90;
  const restOfticket = 70;

  if (ticketQuantity <= 100) {
    // যদি টিকিট সংখ্যা ১০০ বা তার কম হয়
    const price1 = ticketQuantity * first100;
    return price1;
  } else if (ticketQuantity <= 200) {
    // যদি টিকিট সংখ্যা ১০১ থেকে ২০০ এর মধ্যে হয়
    const first100Price = 100 * first100;
    const restOfticketQuantity = ticketQuantity - 100;
    const restOfticketQuantityPrice = restOfticketQuantity * second200;
    const price2 = first100Price + restOfticketQuantityPrice;
    return price2;
  } else {
    // যদি টিকিট সংখ্যা ২০০ এর বেশি হয়
    const first100Price = 100 * first100;
    const second100Price = 100 * second200;
    const restOfticketQuantity = ticketQuantity - 200;
    const restOfticketQuantityPrice = restOfticketQuantity * restOfticket;
    const price3 = first100Price + second100Price + restOfticketQuantityPrice;
    return price3;
  }
}

// ফাংশন কল করার সময় সঠিক নাম ব্যবহার করতে হবে
const ticketPrices = ticketPrice(120);
console.log(ticketPrices);



