// 👉 using var
//var keyword only has 🔴function scope, not block scope
//it means the varaible is only visible inside the function where it is declared
//block is identified by a pair of curly braces
//even the variable is declared at the end of a function it can be still referenced on top of the function because of hoisting

var num1 = 0;
var num2 = 3.5;
var name = "my name";

// can redeclare with the same variable name when using var
var name = "new name";

// if we don't initialize the variable when declaring it will be type of undefined 😖
// typeof a === 'undfined'
var a;

// declaring multiple variables 🔥
var a = 1,
    b = 2;

// 👉  using let
// let has a blockscope

let num3 = 3;
// ❌ let num3 = 2;
num3 = 3;
let new_name = "this is my new name";

// 👉  using const

const c = 2; // create a varaible using const
// 🔴 const value can never be changed again
// ❌ c = 3;

const newObj = {
    name: "my name"
};

// 🔴 however we can mutate its content if its an object
newObj.name = "my name edited";

console.log(newObj.name);
