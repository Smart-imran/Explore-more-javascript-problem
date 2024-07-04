function findLongestString(strings) {
    let longestString = ""; // প্রথমে longestString কে ফাঁকা স্ট্রিং দিয়ে ইনিশিয়ালাইজ করা হয়

    for (let i = 0; i < strings.length; i++) { // পুরো অ্যারের উপর লুপ চালানো হয়
        let nameList = strings[i]; // বর্তমান স্ট্রিংটি nameList এ রাখা হয়
        
        // যদি বর্তমান স্ট্রিং-এর দৈর্ঘ্য longestString-এর দৈর্ঘ্যের চেয়ে বেশি হয়
        if (nameList.length > longestString.length) {
            longestString = nameList; // তাহলে longestString-কে বর্তমান স্ট্রিং দ্বারা আপডেট করা হয়
        }
    }

    return longestString; // সবচেয়ে বড় স্ট্রিংটি রিটার্ন করা হয়
}

// কিছু স্ট্রিং এর উদাহরণ অ্যারে
const strings = ["ছোট", "মধ্যম", "সবচেয়ে বড় স্ট্রিং", "বড়"];
const longestString = findLongestString(strings); // ফাংশন কল করা হয়

console.log(longestString); // আউটপুট হবে: "সবচেয়ে বড় স্ট্রিং"
