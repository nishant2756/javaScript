// let msg = "  hello nishant   ";

// string methods
/////////////////////////////////////
// 1
{
    // let password = prompt("set your password");
    // let newPass = password.trim();
    // console.log(password);
}
//let a = "   hello  ";
//string name.trim();
// trim method string ka last mai or start kA extra scape remove krta hai or new string bna data hai
// orignal value mai koi change nhi krta

//////////////////////////////
// 2

// all strings are immutable in javaScript
// string mai ham koi change nhi kr sakta (No changes can be made to string )
// whenever we do try to make a change, a new string is created and old one remains same.
// old string aase he rahagi or change hokr new string bnn jaygi

////////////////////////////////
// 3

// let str  = "Random string";

// str.toUpperCase();
// str.toLowerCase();
// these are the functions to change case in string;

// let name = "Nishant singhal";
// let msg = "error";

// console.log(msg.toUpperCase());

/////////////////////////////

// string methods with Arguments

// arguments is a some value that we pass to the method.


// format

// stringName.method(arg)

// () iska ander jo hai wo argument hai
// iska use string mai arguments ko findout krna mai hota hai


// indexOf method
// Returns the first index of occurrence of some value in string.or gives -1 if not found

// let str ="ilovecoding";
// str.indexOf("love"); //1(not found)
// str.indexOf("z"); // -1
// str.indexOf("o"); // 2
// ya method hama first accurrence data hai (jab first time apare horaha ho)

/////////////////////////

// method chaining
// using one method after another. order of execution will be left to right.

// str.toUpperCase().trim()
// let str = "    hello    ";
// let newStr = str.trim();
// console.log(newStr);(after trim)
// newStr = newStr.toUpperCase();
// console.log(newStr); (after uppercase)

// {
// newStr = str.toUpperCase().trim();
// this is method chaining & there are pefome (left to right)
// multiple method in a single lines
// }

////////////////////////////

// slice

// Returns a part of the original string as a new string
// cut the string in defrent parts

// let str = "Niharika";
// console.log(str.slice(0, 4)); //Niha
// console.log(str.slice(4, 8)); // rika
// console.log(str.slice(4, str.length)); // rika
// console.log(str.slice(4)); // rika

// slice using negative numbers

// str.slice(-num) = str.slice(length-num) (syntex)
// console.log(str.slice(-1)); //a (8 -1 => 7)
// console.log(str.trim(-8)) // Niharika (8 -8 => 0)

//////////////////////////////////////

// replace method (string)

// searches a value in the string & returns a new string with the value replaced

// let name = "Nishant";

// name.replace('Nish','Hima'); // Himaant
// used by console
// using for regular expresions means jab ham re mai kaam krta hai tbb replace method bhot usefull hai

///////////////////////////////

// repeat method

// returns a string with the number of copies of a string
// used by console

// let str = "hero";
// str.repeat(3);
///////////////////////////////////

// pritice  questions
// 1
// let msg = "hello";
// console.log(msg.toUpperCase().trim());

// 2
// slice, indexOf, replace .

///////////////////////////////

// array in javaScript

let marks = [23, 34, 56, 67, 90];
let names = ["nishant", "raju", "prince"];
let info = ["raju", 20, 5.9]; // mixed arraY

let arr = []; // empty errey
// javaScript mai defrent type ke values ko bhe store kr sakta hai ak he array mai.
// c , c++ & java mai ham ak array mai ak he type ka data rak sakta hai.

// access only one char in the arr name
// name[0][0]
// output => n. 
// name[0].length 
// output => 7

////////////////////////////////////

// strings are immutable && arrays are Mutable
// strings mai change krna pr new string bante hai or original mai koi change nhi aata
// arrays mai change krna pr new array nhi bnta real mai he change hota hai new arr create nhi hoga

let fruits = ["mango", "orange", "apple"]; 
// fruits.length => 3
fruits[0] = "banana";
fruits // output => ['banana', 'orange', 'apple']

// ya jo change hua hai wo original array mai hua hai koi new array nhi bna hai.
// fruits[10] = "papaya"
// 'papaya'
// fruits.length
// 11
// fruits
// (11) ['banana', 'orange', 'apple', empty × 7, 'papaya']
// array mai jis bhe index pr chaya waha data value save kr sakta pr bech ka free space empty rahaga
// iss free space ko array mai bhe count kia jayga

///////////////////////////////////////////
                                                                                
// Array methods

// push: add to end
// pop: delete from end & return it
// unshift: add to start
// shift: delete from start & return it



/////////////////////////////////////////
 































































