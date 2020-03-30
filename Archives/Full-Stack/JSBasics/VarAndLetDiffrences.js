// let gives you the privilege to declare
// variables that are limited in scope to the
// block, statement of expression unlike var.

//VAR IS GLOBAL.

// Block
// let variables are usually used when there is a limited use of those variables. Say, in for loops, while loops or inside the scope of if conditions etc. Basically, where ever the scope of the variable has to be limited.
// For example: -
// For loop using let variable: -

// Redeclaration
// let variables cannot be re-declared while var variable can be re-declared in the same scope.
// Assume we are using strict mode

// var temp = "this is a temp variable";
// var temp = "this is a second temp variable"; //replaced easily
// We cannot do the same thing with let-
// 'use strict';
// let temp = "this is a temp variable";
// let temp = "this is a second temp variable" //SyntaxError: temp is already declared

// Function
// let and var variables work the same way when used in a function block.
// function aSampleFunction(){
// let letVariable = "Hey! What's up? I am let variable.";
// var varVariable = "Hey! How are you? I am var variable.";
// console.log(letVariable); //Hey! What's up? I am let variable.
// console.log(varVariable); //Hey! How are you? I am var variable.
// }
