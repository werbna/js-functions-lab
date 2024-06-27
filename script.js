/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result: 1 ', maxOfTwoNumbers(3, 9));
console.log('Exercise 1 Result: 2 ', maxOfTwoNumbers(12, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// website used to set up if/else statement

//  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
function isAdult(age) {
  let result;
  if (age > 18) {
    return "Adult";
  }
  else {
    return "Minor"
  }
  return result
}

console.log('Exercise 2 Result: 1 ', isAdult(21));
console.log('Exercise 2 Result: 2 ', isAdult(17));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

//i used "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" to help set up an the arrow, and "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" this website for the array`includes`
const isCharAVowel = char => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
// https://www.geeksforgeeks.org/arrow-functions-in-javascript/
const generateEmail = (name, domain) => `${name}@${domain}`;

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
// https://www.geeksforgeeks.org/arrow-functions-in-javascript/
const greetUser = (name, timeOfDay) => `Good ${timeOfDay}, ${name}`;

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
// https://www.geeksforgeeks.org/how-to-find-largest-of-three-numbers-using-javascript/
const maxOfThree = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c
  }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (billAmount, tipPercentage) => (billAmount * tipPercentage) / 100;

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()          

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
//https://www.thoughtco.com/convert-kelvin-to-fahrenheit-609234 for the conversion number. I then used and if else statement using the temperature operand. 
const convertTemperature = (temperature, scale) => {
  const upperCaseScale = scale.toUpperCase();
  if (upperCaseScale === 'C') {
    return (temperature * 9 / 5) + 32;
  } else (upperCaseScale === 'F')
  return (temperature - 32) * 5 / 9;
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
//I recalled you talking about switch, so it was in one of the lecture slides and i generated it from there.
const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
      break
    default:
      return `Please use a math operation`;
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/ 
//
const calculateGrade = (grade) => {
  switch (true) {
    case (grade >= 90):
      return 'A';
    case (grade >= 80):
      return 'B';
    case (grade >= 70):
      return 'C';
    case (grade >= 60):
      return 'D';
      break
    default:
      return 'F';5
  }
}

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

// "https://shorturl.at/26uUP" "https://shorturl.at/olWjB" "https://shorturl.at/Ovk2n"
//below you can use the rest parameter to shorten the numArgs and thus the beauty that is the commented out version.

//const numArgs = (...args) =>  args.length

function numArgs() {
  return arguments.length;
}


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));