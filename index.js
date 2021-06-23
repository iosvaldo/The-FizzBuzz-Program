// ealier we created a function that required us to run Fizz buzz everytime. What if we wanted to print out the sequence for the first 100 number? Do we really want to sit there and write FizzBuzz a hundread times?

//  As programmers there is actually a soulution to this madness, essencially we can get the computer to run our code 100 times by itself. 

// This is where loops come into play,& the simpilest tiype of loop is called the while loop.

/////// How While loop work ////////

// in the parentheses, there is a statement, and while that statement is true then the code inside the curly braces will run again & again & again & again, until that statement in no longer true. 


///////////////////// Example code //////////////////

// while (something is true) {
  // do something here
// }

///////// another example //////////

// var i = 1;
// while(i<2) {
  // console.log(i);
  // i++;
// }

//  we create a variable called i & we set it to equal 1.
// i = 1 is now stored inside the computers memory. 
// now the code goes to the while loop & evaluates the statement in between the parenteses. 
// So, is i currently less than 2? well 1 is definatly less than 2 so this is true.
// If the statement is true than the computer will execute the code in between the curly braces, which in our case in to simply console.log the value of i which is equal to 1. 
// the next line of code inside the while loop increments i, and so i is now equal to 2. 
// After this loop is completed, then the code jumps back to the beginning of the while loop and evaluates that condition again. 
// So is i less than 2?
// well 2 is not less than 2. 2 is equal to 2, right? so this condition is now false. 
//  This means that this while loop will stoop, and it will skip the loop and go onto the next line of code below. 

// This is how while loops work!


// Let's modify the FizzBuzz function in order to get it to run automatically using the while loop. 

////// Original FizzBuzz Program ///////

var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {
   
    if (count % 3 === 0 && count % 5 === 0){
              output.push("FizzBuzz");
            } else if (count % 3 === 0){
              output.push("Fizz");
            } else if (count % 5 === 0 ){
              output.push("Buzz");
            } else {
              output.push(count);
            }

    count++; 
      }
    console.log(output);
}

fizzBuzz();

// we're going to add a while loop and the condition that we're going to check is while count is less than or equal to 100, then we will carry out the if conditional statment every single time.
// Now if we run the code, then you can see that the while loop runs at 100 times, adding 100 values to our array, & it prints out the exact same sequence that we would get it we would get if we played this game 100 times, or if previously we called the function FizzBuzz 100 times.  

// So the order of events starts off with count being equal to 1, & when we first hit the while loop, 1 is obviously less than 100, so everything inside the while loop will be executed.

// the first thing we check is if count is divisible by 3 and if count is divisible by 5. If so, then we add FizzBuzz to our array. Otherwise, if it's only divisible by 3 we add "Fizz". & if only divisible by 5 we add "Buzz". Otherwise we just add the number count, & once we check all of these then we increment count so it's now 2. & thats he end of the while loop.

// Then it goes back to the beginning of the while loop and checks to see if this statement is still true. Is count still less than 100 ? So count is now 2, & 2 is still less than 100, & it goes on & on for 100 times until count is now 101. 

// Once its 101 then the condition is no longer true, then it skips the while loop and continues to the next line, which happens to be the line where we get out entire arrat to print out in the console. 


////// Problem with while loops //////

// while loops are actually error prone, because it will continue to run infinitley until the statement inside here becomes false. 

// Say you accidently make a mistake, for example we forget to increase the count variable and it stays as 1, and it never gets increased, then this statement will always be true, because 1 is always going to be less than 100. 

// If we dont change it's value inside the while loop, then this loop will run until eternity. The program will crash, & this is what you will call an 'infite loop'.

// the Infinite loop where your computer will carry on until eternity, and instead crashes your code. 

// Funny Joke for us programmers //////

// A programmer's wife tells him:
// "while you're at the store, get some milk".

// He never comes back!