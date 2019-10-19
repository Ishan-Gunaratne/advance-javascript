// es5 syntax to declare a function
function doSomething() {
    console.log("print something");
}

doSomething();

// functions can be assigned to a variable
const anyFunction = function() {
    console.log("print any function");
};

anyFunction();

// passing arguements to parameters

function add(num1, num2) {
    return num1 + num2;
}

// console.log(5);
let storeValue = add(3, 5);
console.log(storeValue);
