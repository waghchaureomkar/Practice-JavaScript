// 2. example ------->
console.log(x); // undefined
var x = 5;

// 3. example ------->

sayHello(); // "Hello, world!"

function sayHello() {
    console.log("Hello, world!");
}

// 4. example ------->

console.log(y); // ReferenceError: y is not defined
let y = 10;

// 5. example ------->

sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
    console.log("Hi!");
};

// 6. example ------->

// Recommended
let z;
z = 20;
console.log(z);

function greet() {
    console.log("Hello!");
}
greet();

// Not recommended
console.log(w); // undefined
var w = 15;


// ==================================================================================================>>>>>>

/* 
JavaScript hoisting is a concept that refers to how variable and function declarations are processed during 
the compilation phase of code execution. It can sometimes lead to unexpected behavior if you're not aware of how it works. 
Let's dive into the details of JavaScript hoisting:

1. Compilation and Execution Phases:
    JavaScript code is executed in two phases: compilation and execution. 
    During the compilation phase, the JavaScript engine goes through your code and performs certain tasks, including hoisting.

2. Variable Declarations (Var):
    Variables declared with the var keyword are hoisted. This means that the declaration is moved to the top of its 
    containing function or global scope. However, only the declaration is hoisted, not the initialization.

    console.log(x); // undefined
    var x = 5;

    In the above code, var x is hoisted to the top of the scope, so the console.log(x) line doesn't throw an error. 
    However, x is undefined until it's assigned the value 5.

3. Function Declarations:
    Function declarations are also hoisted, and the entire function is hoisted to the top of its containing scope.

    sayHello(); // "Hello, world!"

    function sayHello() {
        console.log("Hello, world!");
    }

    In this example, the sayHello function declaration is hoisted, allowing you to call it before it's defined in the code.


4. Variable Declarations (Let and Const):
    Variables declared with let and const are also hoisted, but they are not initialized to undefined like var variables. 
    This is known as the "temporal dead zone."

    console.log(y); // ReferenceError: y is not defined
    let y = 10;

    In this case, y is hoisted to the top of its containing scope, but you can't access it before the line where it's declared.

5. Function Expressions:
    Function expressions, unlike function declarations, are not hoisted. 
    Only the variable declaration is hoisted, not the function itself.

    sayHi(); // TypeError: sayHi is not a function
    var sayHi = function() {
        console.log("Hi!");
    };

    In this example, the var sayHi declaration is hoisted, but it's initialized to undefined initially, 
    so trying to call it results in a TypeError.

6. Best Practices:
    To avoid confusion and unexpected behavior, it's best to declare your variables at the top of 
    their respective scopes and use let and const instead of var. Additionally, define your functions 
    before you use them, regardless of hoisting.

    // Recommended
    let z;
    z = 20;
    console.log(z);

    function greet() {
        console.log("Hello!");
    }
    greet();

    // Not recommended
    console.log(w); // undefined
    var w = 15;

    In summary, JavaScript hoisting is a mechanism that moves variable and function declarations 
    to the top of their containing scope during the compilation phase. Understanding how hoisting 
    works can help you write cleaner and more predictable JavaScript code.

*/