
var name = "Stephanie";
console.log("Hello, ");
console.log(name);
console.log("Hello, " + name + "!");

name = "Dan";
console.log(name);
name = "Tama";
console.log(name);

// If we write the name of a variable that doesn't exist, we will get a ReferenceError - meaning it can't find it and is very confused.
// console.log(idontexist);

// undefined means a variable has been declared (created), but has not had a value assigned to it yet. null is a data type that means "I am intentionally leaving this blank". 
var noValue;
console.log(noValue);
noValue = "i have value!";
console.log(noValue);
noValue = null;
console.log(noValue);

// JavaScript has numbers!
var stephsAge = 40;
var tonisAge = 75;

// and we can do math with numbers: + - * /
var difference = tonisAge - stephsAge;
console.log(difference);

// hi i am a modulo. modulo means "divide the first number by the second, and give me the remainder."
console.log(3 % 3);
console.log(3 % 2);
// because I just learned a new acronym: PEMDAS (order of operations) - these are the same in javascript
console.log(3 * (5 - 1) / 4 + (2 * 3));

// we can have numbers in a variable name, but we can't start a variable name with a number
var ihaveanumber2 = "foo";
var ihavea333number = "bar";
console.log(ihavea333number);
