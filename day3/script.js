//js object Literals

// object literals -> iska mtlb khud sa ak object type ka collection ko ya
// ak object type ka data structure ko create krna hota hai
// Used to store keyed collections & complex entities.

// object mai property save hote hai
// property => (key, value)pair hote hai
// object are a collection of properties(ob js mai ak broad term hai)
// js mai object ka use alag alag senerio(setuation) mai alag alag hai

////////////////////////////////////////////////////

// create object literals syntex and example

let student={
    name: "Nishant", // key: value,
    age: 20,
    cgpa: 7.6,  // 
    city: "Meerut"
};
// ham object ke values ko array mai bhe save kr sakta hai
// pr object mai clearty hote hai ke ya value kiske value hai
// array mai value he store hote hai kiske value hai ya pta nhi chalta hai 
// array mai data ka index same hota hai pr object mai change hota rhta hai but value pair same hota hai 

let student2 = ["Niharika",19,8.4,"modinagar"]

//////////////////////////////////////////////

// const sa normal variable ke value ko parmnant krta hai jo kabhi change nhi hote
// pr const ka use jab ham array ya object cration mai kraga to object ka ander ke properties ko 
// or array ka ander ke value or data ko change kr sakta hai 
// const sa array or object ka memory location parmenent ho jata hai, jisko change nhi kr sakta

let items = {
    price: 599,
    discount: 50,
    color: ["rad","green"]
    // object mai ham kisi bhe datatype ko store kra sakta hai array ko bhe bna sakta hai(store).
};

///////////////////////////////////////////////////

// create an object literal for the properties of thread / twitter post which includes-
// create a post
// . Username, content, likes, reposts, tags

const post = {

    Username: "Nishantsinghal24",
    content: "This is my #firstPost",
    likes: 200,
    reposts: 5,
    tags: ["nis", "Him", "Nih", "Nit"]
};

///////////////////////////////////////////////////
// get values
// how to access object data

let student3 = {

    name: "Nishant",
    marks: 72
};
// name ko access krna ka liya [syntex]
//objName["key"]
// student3["name"];

// access the value using dot operator same work[syntex]

// objectliteralName.key ka name
// example
// student3.name;

///////////////////////////////////////////////////

// js automatically converts objects keys to strings.
// js obj ke keys ko string mai convert kr deta hai
// Even if we made the number as a key, the number will be converted to string.
// example
const obj = {
    1: "a", // 1 -> this is a string in intrnaly memory
    2: "b",
    3: "c",
    true: "d",// all keys are strings automatically convert
    null: "e",
    undefined: "f"
};

//////////////////////////////////////////////////

// add/update value
// js mai obj ka liya ham kasa values ko add ya update kr sakta hai
// example 
// employe.name = "newName"; -> name update ka liya
// delete employe.name; -> keye ko delete krna ka liya
// employe.Newkey; -> new property bnana ka liya
const employe = {

    name: "raju",
    age: 22,
    EvsMarks: 32,
    city: "bihar"
};
// obj mai kisi bhe type ka data ka place pr kisi bhe type ka data aa sakta hai


///////////////////////////////////////////////////

// object of objects
// nested objects

// store information of multiple students
// iss mai info add bhe kr sakta hai or delete bhe in console

// const collClass = {
//     Nishant:{
//         grade: 'A',
//         section: 'E',
//         cgpa: '7.2',
//         city: "meerut"
//     },
//     Niharika:{
//         grade: 'A+',
//         section: 'E',
//         cgpa: '8.4',
//         city: "Modinagar"
//     },
//     Raju:{
//         grade: 'Z',
//         section: 'E',
//         cgpa: '5.4',
//         city: "bihar"
//     },  
// };

///////////////////////////////////////

// Array of object
// store information of multiple students
// [] object mai array ko store krana
// same rulls as object bss ya dakna hai ke kis datastructore mai kasa data store hai

const students = [
    {
        grade: 'A',
        section: 'E',
        cgpa: '7.2',
        city: "meerut"
    },
    {
        grade: 'A+',
        section: 'E',
        cgpa: '8.4',
        city: "Modinagar"
    },
    {
        grade: 'Z',
        section: 'E',
        cgpa: '5.4',
        city: "bihar"
    },  
];

/////////////////////////////////////////////////////
// math Object
// this is a collections of mathmatical properties and methods

//importent methods

// math.abs(n) -> this is absulate means ya method hama absulate value deta hai 
// ya negative value ko positive mai badal deta hai
// math.floor(n) -> jo bhe number hota hai usko round of kr deta hai smallest value to traf.
// math.ceil(n) -> number ko round of kr ka highest number deta hai
// math.Random() -> ya method 0 or 1 ka bech ke random value deta hai har bar ak alag value


///////////////////////////////////////////////

// Random integers
// math.Random ka use krka random integers ko genrate kraga 
// (from 1 to 10)

// Math.floor( Math.random() * 10 ); (using 1 to 9)

// Math.floor( Math.random() * 10 ) + 1; (using 1 to 10) random number

//////////////////////////////////




