/*⛲Arithmetic expressions 

⛲All expression that evaluate to a number

Ex - ⭐⭐*/

var a = 3;
var x = (100 + 50) * a;
console.log(x); // 450



/*⛲String expressions

Expressions that evaluate to a string:

 'A ' + 'string'
 'A ' += 'string' */

/*⛲Primary Experission

variable also references, literals and constants

⭐Array and object initializers expressions

[] array literal
{} object literal*/

var myarr = [
    a=1,
    b=2,
    c=3
]
console.log(myarr);

var myobj = {
    d:1,
    e:4,
    f:0
}
console.log(myobj);


//⛲Logical expressions
//Ex-⭐

if (1 || 0) { // works just like if( true || false )
    console.log( 'truthy!' );
  }

  //⭐Ex-
// We can use OR || :
let currentUser = "Ishan";
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";
console.log( name ); // selects "John" – the first truthy value

//⭐Ex-
console.log( true || true );   // true
console.log( false && true );  // false
console.log( !true || false );  // false
console.log( false || false ); // false


//⛲Left-hand-side expressions

var a=0; 
"begining of string "+ ++a+" the rest of string";
console.log(a);

//⭐⭐And returns "begining of string 1 the rest of string"


/*⛲Property access expressions

⭐Ex-
 a[0] === {x:1,y:{z:3}};
therefore
a[0].x === 1;
This also means the following is true:
a[0].y.z === 3;*/


//⛲Object creation expressions
/*Ex-⭐
new MyRectangle('name', 2, {a: 4})*/



//⛲Function definition expressions

/* ⭐⭐⭐After a function has been stored in a variable, 
the variable can be used as a function:⭐⭐⭐*/

var x = function (a, b) {return a * b};
console.log(x);


//⛲Invocation expressions

//⭐⭐⭐⭐⭐
/*
f(0)            // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y and z are the arguments.
a.sort()        // a.sort is the function; there are no arguments.
*/

