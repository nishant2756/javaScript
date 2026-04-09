// this keyword in js

// 'this' keyword refers to an object that is executing the current piece of code
// js mai this ka matlab occording to setuation change hota rhta hai
// jo bhe object hamara kise method ko execute krte hai wo this he hai
const student = {
    name: "Nishant",
    age: 20,
    height: 5.9,
    phy: 94,
    chy: 54,
    math: 53,
    getAvg() {
        let Avg = (this.phy + this.chy + this.math) / 3;
        console.log(Avg);

    }
}
// object ke values ko access krna ka liya this ka use kraga
// object ko direct access nhi kr sakta

//////////////////////////////////////////////////

// try and catch 
// the try statement allows you to define a block of code to be tested for errors while it is being executed.

// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// syntex

// try{
// console.log(a);
// } catch a{
// console.log("variable a doesn't");
// }

// try and catch ka use errors ko handel krna ka liya krta hai


//////////////////////////////////

// miscellaneous topics

// small consepts in js

// arrow functions
// arrow function ko ak value ka jasa use krta hai.
// ak arrow function ko ham assigin krta hai ham ak variable ko(Af variable ke value bn gaya).
// arrow function name less functions hota hai inmai function keyword bhe nhi hota.

// syntex
// const func = (arg1,arg2..) => {function definition}

const sum = (a, b) => {
    console.log(a+b);
};

const cube = (n) => {
    // single argument ka bech mai () ya optional ho jata hai
    return n * n * n;
};

const pow = (a, b) => {
    return a ** b;
};
const hello = () => {
    console.log("hello");
};
// note -> ak arrow function hai jismai ak bhe argument nhi hai fir bhe uska 
// bech mai () ya aayga he

//////////////////////////////////////////////////

// arrow function 
// implicit return(automatic return)
// explicit (alag sa batana padaga)

// syntex
// const func = (arg1, arg2..) => {value}
// single value ko return krna ka liya

// const mul = (a, b) => (
//     a * b
// );
const mul = (a, b) => a * b;
// single value ka case mai Parentheses hat jata hai

// ya arrow function samaj jayga ke waha pr return krna hai a * b ko
// without using return keyword and statement tarmenator (;).

/////////////////////////////////

// Set timeout
 // iska use timer set krna ka liya hota hai ke itna time mai ya kaam ho jana chaya
 // ya ak inbuild function hai
 // this function is window object

// set Timeout(function, timeout)


