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
  if (age > 18)  {
    return "Adult" ; }
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

//i used "https://www.w3schools.com/js/js_arrays.asp" to help set up an array. from there, i turned it into an if else statement.
function isCharAVowel(char) {
  let vowels = ['a', 'e', 'i', 'o' , 'u', 'A', 'E', 'I', 'O', 'U'];
    if (char = vowels) {
      return true; 
     } else {}
          return false;
        
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



console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));