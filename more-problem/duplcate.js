const names =["abul", "bulbul","sekul","abul","mukul","tutul"];

//decalre function
function duplicateNameFinder(name){

    const unique =[];
    for(let i =0; i<names.length;i++){
        const nameShow = names[i];
        console.log(nameShow);
        if(unique.includes(name)===false){
            unique.push(name);

        }
        /* Builtin filter */
       // return [...new Set(names)];

    }
    return unique;

}
const uniqueNames =duplicateNameFinder(names);
//console.log(uniqueNames);