const country = 'Bangladesh';
const age = 52;
const isindependent = true;
const student = { id: 121, class: 9, Name: "Kasem" };
const friends = [13, 14, 15, 26, 11, 21];

/* Array.isArray(friends */
console.log(Array.isArray(friends));
console.log(friends.includes(15));

//concat
const newfriendAge = [12, 13, 11, 24];
let allFriendAge = newfriendAge.concat(friends);
console.log(allFriendAge);