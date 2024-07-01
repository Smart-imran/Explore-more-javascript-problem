function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairwood = 3;
    const perTablerwood = 10;
    const perBedwood = 50;
    const chairWood = chairQuantity * perChairwood;
    const tableWood = tableQuantity * perTablerwood;
    const bedWood = bedQuantity * perBedwood;

    const totalWood = chairWood+tableWood+bedWood;
    return totalWood;
};

const totalWoods = woodCalculator(2,5,5);
console.log(totalWoods);