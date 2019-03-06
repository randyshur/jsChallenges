// Challenge 1 Palindromessss
/*
1. create a function that takes in a parameter
2. create a way to check if the parameter entered is in fact a palindrome.
3. If it is, have JavaScript console.log that their word is a palindrome; 
4. if it is not, have JavaScript console.log the opposite.
*/

/* For my method 4 possibilities
1. even length, is palindrome (toot)
2. even length , no palindrome (that)
3. odd length , is palindrome (radar)
4. odd length , not palindrome (stuff)
*/

function isPalindrome(word) {

    // Assume true so that we can exit as soon as not palindrome without
    // processing entire word.
    let isPalindrome = true;
    let i = 0;

    let wordLength = word.length
    let maxi = wordLength - 1;

    while  (isPalindrome && (i < wordLength / 2)) {
        if (word[i] !== word[maxi-i]) {
            if (isPalindrome) console.log (`${word} is NOT a palindrome.`);
            isPalindrome = false;
        }
        i++
    }

    if (isPalindrome) console.log (`${word} is a palindrome.`);
}

isPalindrome('toot');
isPalindrome('that');
isPalindrome('radar');
isPalindrome('stuff');

