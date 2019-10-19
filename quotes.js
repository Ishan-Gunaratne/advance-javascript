// 3 types of quotes
// 👉 single, double, backticks

// these two are the same
const test = "test";
const bike = "bike";

//escape quotes
// use 🔴 backslash to escape the double quote
// 🔥 const name = "my name is \"kamal\" ";
// 🔥 const singleName = 'it\'s a dog';
const name = 'my name is "kamal" ';
const singleName = "it's a dog";

// multiline strings
// use 🔴 \n to go to a new line
const multilineString = "this is a \n multiline string";
// console.log(multilineString);

// using backticks to create multiline strings
// this will print the string as it is
const newMultStr = `my string
new line
another new line
`;
// console.log(newMultStr);

// you can interpolate variables using the 🔴 ${} syntax in backticks
let myName = "ishan";
let newString = `my name is ${myName} ${3 + 3} ${!(4 === 4)}`;
// console.log(newString);
