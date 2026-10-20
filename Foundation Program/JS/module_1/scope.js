// ==================== JAVASCRIPT SCOPE ====================

// Global Scope
let global = "Global";

function test() {
   // Function Scope
   let functionScope = "Function";

   console.log(global);        // Global
   console.log(functionScope); // Function
}

test();

// Block Scope
{
   let blockLet = 10;
   const blockConst = 20;
   var blockVar = 30;

   console.log(blockLet);   // 10
   console.log(blockConst); // 20
   console.log(blockVar);   // 30
}

console.log(blockVar); // 30
// console.log(blockLet);   // ReferenceError
// console.log(blockConst); // ReferenceError


// var vs let
function scopeTest() {
   var a = 10;  // Function scoped
   let b = 20;  // Block scoped
   const c = 30; // Block scoped
}

scopeTest();


// Nested Scope / Scope Chain
let x = 10;

function outer() {
   let y = 20;

   function inner() {
      let z = 30;

      console.log(x); // 10
      console.log(y); // 20
      console.log(z); // 30
   }

   inner();
}

outer();


// Shadowing
let age = 30;

{
   let age = 21;
   console.log(age); // 21
}

console.log(age); // 30


// Lexical Scope
let name = "Jahin";

function sayName() {
   console.log(name);
}

function run() {
   let name = "Utsho";
   sayName();
}

run(); // Jahin


// Closure
function outerFunction() {
   let count = 0;

   return function innerFunction() {
      count++;
      console.log(count);
   };
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3


// ==================== RULE ====================

// var   = Function Scope
// let   = Block Scope
// const = Block Scope

// Inner Scope → can access Outer Scope
// Outer Scope → cannot access Inner Scope
// Scope Chain → Inner → Outer → Global
// Lexical Scope → Based on where code is written
// Closure → Function remembers its outer scope