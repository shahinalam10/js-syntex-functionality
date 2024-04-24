// How to create variables:
// var x;
// let y;
//====================================================================================================
// How to use variables:
// x = 5;
// y = 6;
// let z = x + y;
// document.write(z);
//====================================================================================================
// How to create functions:
// function myFunction() {
//   document.write("Hello World!");
// }
// How to call functions:
// myFunction();
//====================================================================================================
// How to use parameters in functions:
// function myFunction(x, y) {
//     let z = x + y;
//     document.write(z);
// }
// myFunction(5, 8);
//====================================================================================================
// How to use return in functions:
// function myFunction(x, y) {
//     return x + y;
// }
// let z = myFunction(5, 6);
// document.write(z);
//====================================================================================================
//Antonymous function
// let myFunction = function(x, y) {
//     return x + y;
// }
// let z = myFunction(5, 6);
// document.write(z);
//====================================================================================================
//arrow function
// let myFunction = (x, y)=>{
//     return x + y;
// }
// let z = myFunction(6,7);
// document.write(z);
//====================================================================================================
// How to use immediate functions:
// (()=>{
//     document.write("Hello World!");
// })
//====================================================================================================
// How to use if else statements:
// let x = 5;
// if (x < 3) {
//     document.write("Hello World!");
// }else{
//     document.write("Goodbye World!");
// }
//====================================================================================================
// How to use nested if else statements:
// let x = 5;
// if (x < 3) {
//     document.write("Hello World!"); 

// }else if(x < 5){
//     document.write("Goodbye World!");  
// }
// else{
//     document.write("Goodbye!");  
// }
//====================================================================================================
// How to use multiple if else statements:
// let x = 5;
// let y = 6;
// if (x < 3) {
//     document.write("Hello World!");
// }
// if (y < 7) {
//     document.write("Goodbye World!");
// }
//====================================================================================================
// How to use ternary operators:
// let age = 18;
// let votable = (age > 18) ? (document.write('to young')):(document.write('to old'));
//====================================================================================================
// How to short circuit evaluation:
// let isLogin = true;
// isLogin && document.write('Welcome');
//====================================================================================================
//for loop
// let i=0;
// for (let i = 0; i < 5; i++) {
//     document.write(i);
// }
//====================================================================================================
//while loop
// let i = 0;
// while (i<10){
//     document.write(i); 
//     i++;
// }
//====================================================================================================
//do while loop
// let i = 0;
// do{
//     document.write(i);
//     i++;
// }while(i<10);
//====================================================================================================
//switch case
// let x = 5; 
// switch (x) {
//     case 1:
//         document.write('one');
//         break;
//     case 2:
//         document.write('two');
//         break;
//     case 3:
//         document.write('three');
//         break;
//     case 4:
//         document.write('four');
//         break;
//     case 5:
//         document.write('five');
//         break;    
//     default:
//         document.write('default');
//         break;
// }
//====================================================================================================
//loop break continue
// let i = 0;
// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         continue;
//     }
//     document.write(i);
// }
//====================================================================================================
//loop break
// let i = 0;
// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         break;
//     }
//     document.write(i);
// }
//====================================================================================================
//function parameter passing
// function myFunction(x, y) {
//     let z = x + y;
//     document.write(z);
// }
// myFunction(5, 8);
//====================================================================================================
//function return
// function myFunction(x, y) {
//     return x + y;
// }
// let z = myFunction(5, 6);
// document.write(z);
//====================================================================================================
//javascript object
// let person = {
//     name: 'John',
//     age: 30,
//     isMarried: false,
//     children: ['Alice', 'Bob'],
// };
// document.write(person.name);   
// document.write(person.age);
// document.write(person.isMarried);
// document.write(person.children[0]);
// document.write(person.children[1]);
//====================================================================================================
//javascript array  
// let fruits = ['Apple', 'Banana', 'Orange'];
// document.write(fruits[0]);  
// document.write(fruits[1]);
// document.write(fruits[2]);
//====================================================================================================
//for loop array
// fruits = ['Apple', 'Banana', 'Orange'];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i]+'<br>');
// }
//====================================================================================================
//for in loop array
// fruits = ['Apple', 'Banana', 'Orange']; 
// for (let i in fruits) {
//     document.write(fruits[i]+'<br>');
// }

//====================================================================================================
//concat array
// let fruits = ['Apple', 'Banana', 'Orange'];
// let vegetables = ['Tomato', 'Potato', 'Carrot'];
// let food = fruits.concat(vegetables);
// document.write(food);
//====================================================================================================
//array filter
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.filter(function(item){
//     return item % 2 == 0;
// });
// document.write(result);
//====================================================================================================
//array find index
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.findIndex(function(item){
//     return item == 5;
// });
// document.write(result);
//====================================================================================================
//array foreach method
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(function(item){
//     document.write(item);
// });
//====================================================================================================
//push, pop, reverse
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.push(10);
// numbers.pop(10);
// numbers.reverse();
// document.write(numbers);
//====================================================================================================
//array slice
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.slice(2, 5);
// document.write(result);
//====================================================================================================
//array sort
// let numbers = [11, 30, 84, 50, 96, 17, 38, 29];
// numbers.sort();
// document.write(numbers);
//====================================================================================================
//array splice
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.splice(2, 5);
// document.write(result);
//====================================================================================================
//get date
// let date = new Date();
// document.write(date);
//====================================================================================================
//get date
// let date = new Date();  
// document.write(date.getDate()+'<br>');
// document.write(date.getMonth()+'<br>');
// document.write(date.getFullYear()+'<br>');
// document.write(date.getHours()+'<br>');
// document.write(date.getMinutes()+'<br>');
// document.write(date.getSeconds()+'<br>');
// document.write(date.getMilliseconds()+'<br>');
// document.write(date.getDay()+'<br>');
//====================================================================================================
//return absolute value
// let x = -5;
// document.write(Math.abs(x));
//====================================================================================================
//ceil value
// let x = 5.1;
// document.write(Math.ceil(x)); //ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
//====================================================================================================
//floor value
// let x = 5.9;
// document.write(Math.floor(x)); //floor() static method always rounds down and returns the largest integer less than or equal to a given number.
//====================================================================================================
//max value
// let x = 5;
// let y = 10;
// let z = 15;
// document.write(Math.max(x, y, z)); //max() static method returns the largest of zero or more numbers.
//====================================================================================================
//min value
// let x = 5;
// let y = 10;
// let z = 15;
// document.write(Math.min(x, y, z)); //min() static method returns the smallest of zero or more numbers.
//====================================================================================================
//random value
// document.write(Math.random()); //random() static method returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
//====================================================================================================
//round value
// let x = 5.4;
// document.write(Math.round(x)); //round() static method returns the value of a number rounded to the nearest integer.
//====================================================================================================
//sqrt value
// let x = 169;
// document.write(Math.sqrt(x)); //sqrt() static method returns the square root of a number.

//====================================================================================================
//string length
// let str = 'Hello World!';  
// document.write(str.length);
//====================================================================================================
//isFinite
// let x = 5;
// document.write(isFinite(x)); //isFinite() function determines whether a number is a finite, legal number.
//====================================================================================================
//isNaN
// let x = 'Hello';
// document.write(isNaN(x)); //isNaN() function determines whether a value is NaN (Not-A-Number).
//====================================================================================================
//parseFloat
// let x = '10.5';
// document.write(parseFloat(x)); //parseFloat() function parses a string and returns a floating point number.
//====================================================================================================
//parseInt
// let x = '10';
// document.write(parseInt(x)); //parseInt() function parses a string and returns an integer.
//====================================================================================================
//replace
// let str = 'Hello World!';
// document.write(str.replace('World', 'Universe')); //replace() method replaces a specified value with another value in a string.
//====================================================================================================
//search
// let str = 'Hello World!';
// document.write(str.search('World')); //search() method searches a string for a specified value and returns the position of the match.
//====================================================================================================
//split
// let str = 'Hello World!';
// let result = str.split(' ');
// document.write(result); //split() method is used to split a string into an array of substrings, and returns the new array.
//====================================================================================================
