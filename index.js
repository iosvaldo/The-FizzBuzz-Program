////////// FizzBuzz is a Common Programming Interview Question /////////////

//Question:  Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiple of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//  this is a pretty simple, but its a really easy way of seeing how you solve problems and demonstrate your programming skills. 

// Lets break down the problem //

// we first need to get our code to print our a sequence of numbers starting from 1 and, every single time we run the code the next number gets called out. 

//  we're going to use an array to achieve this. 

///////////// Sample Program ///////////

// the push method always pushes the item that you have in the parentheses to the end of the array. It doesnt push it in randomly into the array or at the beginning, its always tagged at the end. This is a great way to add new items into your array as needed. 

// var output = [];

// output.push(1); this line of code will output [1]

// output.push(2); this line of code will output [1,2]

// output.push(3); this line of code will output [1,2,3]

// the opposite of push is called the pop method where it would take the last item in the array and it will remove it from the array.

// output.pop(); this line of code will output [1,2]

// console.log (output);

//// Better way to create this program. Now instead of writing output.push and writing the next number on, let's create a function to remove some of the tedious work. ////

// var output = [];
// var count = 1;

// function fizzBuzz() {
//   output.push(count);
//   count++; 
//   console.log(output);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();


// we need to add a number that increases by 1 everytime  we run the function. 
//  we need a variable that keeps track of that number
// count + 1 will increment count by one we but more simply we use count++ 
// Now instead of putting the number 3 how to we add Fizz and Buzz for the number 5
// we can use modulo to get the remainder to check if a number is fully divisible by another number. 
// we need to see if the current value of count is divisible by 3, and when it is, then we're going to push "Fizz" instead of count to our output array.


///////// Divisible by 3 solution /////////

// var output = [];
// var count = 1;

// function fizzBuzz() {
// if (count % 3 === 0) {
//   output.push("Fizz");
// } else {
//     output.push(count);
// }
//   count++; 
//     console.log(output);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();


// Now if count if divisible by 5 then we're going to push "Buzz" into our output array instead of the number 5.

///////// Divisible by 5 solution /////////

// var output = [];
// var count = 1;

// function fizzBuzz() {
// if (count % 3 === 0) {
//   output.push("Fizz");
// } 
// else if (count % 5 === 0 ){
//   output.push("Buzz");
// }
// else {
//     output.push(count);
// }
//   count++; 
//     console.log(output);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();


// Next for the case of FizzBuzz, when the numbers are both divisible by 3 and 5. 

/////////////////////////////// program completed! //////////////////////////////

var output = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0){
  output.push("FizzBuzz");
}
else if (count % 3 === 0){
  output.push("Fizz");
} 
else if (count % 5 === 0 ){
  output.push("Buzz");
}
else {
  output.push(count);
}
  count++; 

  console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();