// functions

// function is a block of code 
// functions ko call kr ka multipal time use kr sakta hai
// jissa code ke reusebalitiye badte hai
// function tab tak kuch nhi kraga tab tak usko call nhi kia jaya
// ham pura ka pura code ko ak function mai wrap bhe kr sakta hai 
// jisko pura code mai kahi bhe call kr ka use kr sakta hai
//////////////////////////

//Syntax
//function defination (telling js)
// function funcName(){
//   do something
//}

// function calling (using function)

// funcName();

///////////////////////////////////
 
// create a function to roll a dice & always display the value of the dicea(1 to 6).


function diceRoll(){
    let Roll = Math.floor(Math.random() * 6) + 1;
    console.log(Roll);
}
// diceRoll();

// iska sabhi output 1 to 6 ka ander he aayga becouse this is using random function

/////////////////////////////////////////

// function with arguments

// values we pass to the functions
// arguments function call ka time de hui values hote hai, ya value he function parameter ko assigen ho jate hai
//  ismai argument he wo data hota hai jo functions ko process krna ka liya chaya hota hai

//////////////////////////////////////

// syntex

// function funcName(argu1, argu2....){
// do something
// }

function student(name){ // name is parameter (& verabile)
    console.log(name);
}
// student("Nishant"); // Nishant is argument(value)
// student("raju");
// student("bhola");
function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
// printInfo("Nishant", 20);
// printInfo("Rambhul", 21);
// printInfo("Raju");        // age is undefind
// function mai order importent hai kyuki first parameter ko value phala de jaygi
// or second ko baad mai

function sum(a, b){
     console.log(a + b); 
   
}     // sum two number function
// sum(5, 5);
// sum(3,9);

////////////////////////////////////
// pritec QS

// create a function that gives us the avg of three numbers.

function printAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
// printAvg(2, 3, 4);

// create a function that prints the multiplication table of a number

function printTabl(n){
    for(let i = n; i<=n*10; i+=n){
        console.log(i);
    }
} 
// printTabl(3);

/////////////////////////////////////

// return keyword

// return keyword is used to return some value from the function 
// functiuon mai return keyword ko use krna ka baad ka code execute he nhi hota hai



//////////////////////////////////////

// practice Qs
// create a function that returns the sum of numbers from 1 to n.

function inc(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

//////////////////////////////////////////////////////

// Qs
// write a function that return the concatenation of all string in an array.

let str = ["hii","Nishant","how","are","you"]; // globle scope

function concate(str){
    let result = ""; // function scope

for(let i=0; i<str.length; i++){
    result += str[i];
}
return result;
}

///////////////////////////////////////////////////

// scope

// scope determines the accessibility of variables, objects, or functions from different part of the code.

// function -> function ka ander he access hona wala veriables. 

// globle -> pura code mai kahi bhe access ho jana wala veriables.

// block -> ak particular part of code mai access hona wala veriables {jo inka ander aata hai}.
// block scope bss let or const mai hota hai var mai nhi.
// block -> veriable declared inside a block{} cannot be accessed from outside the block.

// Lexical -> a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// this is usefull for nesded functions
// note -> opposite is NOT true.
// meaning -> bhar sa ander ke taraf (bhar wala veriable ander accessible hoga)
// bhar wala function ka variable ander wala function mai access ho sakta hai
// pr ander wala function ka variable bhar access nhi hoga.
// ander wala function ko bhe ham direct access nhi kr sakta.

////////////////////////////////////////

// example

let val = "Hello"; // globle scope

function outerval(){
    let val = "Namaste"; // function scope
    console.log(val);
    function innerval(){
        console.log(val) // Lexical scope
    }
   // innerval();

}
// console.log(val);
// outerval();

/////////////////////////////////////////////

// function expressions
// ya dusra tarika hai function ko likna ka
// ismai ham ak function ko variable mai lekta hai
// aasa function ko call krna kaa liya variable ko use krta hai
// jo bhe operation ham ak variable ka shat krta hai wo ham function expressions ka shat bhe kr sakta hai

// syntex

const variable = function(arg1, arg2){
    // do or return something
}

// example

const sum6 = function (a, b){
    console.log(a + b);
}
// sum6(2, 3);


//////////////////////////////////////////////////

// Higher order functions

// a function that does one or both:

// .takes one or multiple functions as arguments
// aasa function jo apna argument mai ak ya multipal function ko as a argument lata hai
// .return a function

function multipleprin(func, count){ // higher order function
    for(i = 1; i <= count;i++){
        func();
    }
}
function prin(){
    console.log("hello somu");
}

// multipleprin(prin,10);
// multipleprin(function() {console.log("namaste")},1000);

//////////////////////////////////////////////////

// higher order functions

// return a function 
// find out number is even or odd


let odd = function(n) {
    console.log(!(n%2==0));
} 

let even = function(n) {
    console.log(n%2 == 0);
}


