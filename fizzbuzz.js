//FizzBuzz:
// You are given a positive integer number `n`, where it is less than 100 (excluded).

// For every number up to `n` (included):

// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `fizzBuzz` using JavaScript that solves the above problem and satisfies the conditions.

//FizzBuzz Pseudocode:
//The algorithm FizzBuzz, takes n, returns nothing: if n is not a positive integer that is less than 100: print Error and stop.
//for each integer from 1 to n (including both): if the number is divisible by 3: print Fizz; if the number is divisible by 5: print Buzz; if the number is divisible by 3 and 5: print FizzBuzz; if the number is not divisible by 3 or 5: print the number.
// n = 0: Error prints
// n = 100: Error prints
// n = 16: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16

//FizzBuzz Code:
function fizzBuzz(n){
    if (!Number.isInteger(n) || n < 1 || n >= 100){
        console.error("Error");
        return;
    }
    for (let i = 1; i <= n; i++){
        const remainderBy3 = i % 3;
        const remainderBy5 = i % 5;
        if(remainderBy3 === 0 && remainderBy5 === 0){
            console.log("FizzBuzz");
        }
        else if (remainderBy3 === 0){
            console.log("Fizz");
        }
        else if (remainderBy5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(16);

//Letter Count:
// You are given a string `word` consisting of alphabetical characters.
// For each unique letter in the `word`:
// - Return the lower-case letter followed by the number of times it occurs in the `word`.
// Print `Error` if unexpected happens and stop the execution.
// Write a function `letterOccurrence` using JavaScript that solves the above problem and satisfies the conditions.

//Pseudocode: 
//The algorithm letterCount takes word to return a dictionary with letter counts: in the occurence where word is not a string of alphabetical characters: print Error and stop function.
//This must create a dictionary for storing letter counts.
//for each letter in word: if dictionary already has the letter: increment the count of letter by 1; else: set the count of the letter to 1.
//We want to return dictionary that holds the entire counts of letter. 
//For word = "Adams02", Prints: Error
//For word = "Adams", Returns: (a: 2, d: 1, m: 1, s: 1)
//For word = "CCdcdcDc", Returns: (c: 5, d: 3)

//Letter Count Code:
function letterCount(word){
    const alph = "abcdefghijklmnopqrstuvwxyz";
    if (typeof word !== "string"){
        console.error("Error");
        return;
    }
    for (const letter of word){if (!alph.includes(letter.toLowerCase())){
        console.error("Error");
        return;
    }
  }
let letterCounts = {};
for(let letter of word){
    let lowerCaseLetter = letter.toLowerCase();
    //If letter is in the dictionary, increase its count by intervals.
    if(letterCounts[lowerCaseLetter] !== undefined){
        letterCounts[lowerCaseLetter] = 1;
    }
}
return letterCounts;
}
letterCount("Adams02");
console.log(letterCount("Adams"));
console.log(letterCount("CCdcdcDc"));