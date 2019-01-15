/* Odd Even Array Challenge */

/* 
1. ake an array of numbers (i.e. an array that lists numbers between 1 and 10)
2. Create two arrays from this original one
    A. one array list all of the even numbers
    B. the second lists all of the odd.
*/

let fillArray = (min, max) => {
    let localArray = [];
    for (i=min; i <= max; i++) {
        localArray.push(i);
    }
    return localArray;
}

let splitOddEven = (inArray) => {
    let oddArray = [];
    let evenArray = [];
    for (x of inArray) {
        if (x%2 == 0 ) {
            evenArray.push(x);
        } else
            oddArray.push(x)
    }

    console.log(`The even array is: ${evenArray}.`)
    console.log(`The odd array is: ${oddArray}.`)
}

let oneToTen = fillArray(1,10);
console.log(`The starting array is: ${oneToTen}`);

splitOddEven(oneToTen);
