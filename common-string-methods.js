//Activity 1: Searching Strings

let phrase="Learning JavaScript is fun!";
console.log(phrase.includes("JavaScript"));
console.log(phrase.indexOf("fun")); 
//Ouputs:[true
//23]

//Activity 2:[Transforming Strings]

let phraseTwo=" CODE BOOTCAMP ";
let lowerCasePhrase=phraseTwo.toLowerCase();
let phraseTwoTrim=lowerCasePhrase.trim();
let newPhraseTwo=phraseTwoTrim.replace("bootcamp", "JavaScript");
console.log(newPhraseTwo); 
//Output:[code JavaScript]

//Activity 3: Breaking Apart a Sentence
let phraseThree="Coding is fun and educational";
words=phraseThree.split(" ");
console.log(words);
//Output:['Coding', 'is', 'fun', 'and', 'educational']

//Activity 4:Retrieving Substrings
let phraseFour="Bootcamp";
let retrieveFirst=phraseFour.charAt(0);
let extractC=phraseFour.slice(4);
console.log (retrieveFirst);
console.log(extractC);
//Output [B
//camp]

//Advanced Challenge
let str=`Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`
console.log(str);
let custName=str.slice(9,18);
console.log(`Name extract: ${custName}`);
let orderEx=str.slice(25, 46);
let orderArr=orderEx.split(",");
console.log (`Order extract${orderArr}`);
let priceEx=str.slice(47);
let upPrice=priceEx.toUpperCase();
console.log(upPrice);
//Output [Customer: John Doe
//Order: Apple, Banana, Grape
//Total: $20.50
//Name extract:  John Doe]
//Order extract Apple, Banana, Grape
//TOTAL: $20.50
/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").


Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript=inputString.includes("JavaScript"); // Your code here
console.log(`Does string have Javascript? ${hasJavaScript}`);//Output Does string have Javascript? true
let codingPosition=inputString.indexOf("Coding");; // Your code here
console.log(`Position of "Coding": ${codingPosition}`); //Output Position of "Coding": 17
let startsWithWelcome=inputString.startsWith("Welcome"); // It doesn't the string begins with a space.
console.log(`String starts with "Welcome": ${startsWithWelcome}`);//String starts with "Welcome": false
let endsWithToday=inputString.endsWith("today."); // It doesn't, the string ends with a space.
console.log(`String ends with "today.": ${endsWithToday}`);//String ends with "today.": false


// 2. Transforming
let lowercaseString= inputString.toLowerCase();
console.log(`String to Lowercase: ${lowercaseString}`); //Output String to Lowercase:   welcome to the coding bootcamp! learn javascript today.  
let uppercaseString=inputString.toUpperCase();  
console.log(`String to UpperCase: ${uppercaseString}`);//String to UpperCase:   WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY. 
let trimmedString= inputString.trim();
console.log(`Trimmed string: ${trimmedString}`);//Trimmed string: Welcome to the Coding Bootcamp! Learn JavaScript today. 
let replacedString=(inputString.replace("JavaScript", "coding"));
console.log(`Replaced with Coding: ${replacedString}`);//Replaced with Coding:   Welcome to the Coding Bootcamp! Learn coding today. 

// 3. Breaking Apart
let wordsArray=inputString.split(" "); // Your code here
console.log(`This is words split ${wordsArray}`); //Output This is words split ,,Welcome,to,the,Coding,Bootcamp!,Learn,JavaScript,today.,,

// 4. Retrieving
let firstCharacter=trimmedString.charAt();
console.log(`First character of trim: ${firstCharacter}`);//Output First character of trimm: W
let extractedBootcamp=inputString.slice(24,32); 
console.log(`Extracted Word: ${extractedBootcamp}`);//Output Extracted Word: Bootcamp

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
