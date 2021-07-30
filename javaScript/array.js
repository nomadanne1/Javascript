'user strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits); // [ 'apple', 'banana' ]
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // banana

// 3.Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach() // ctrl + forEach 클릭 >> api선언된 곳으로 이동함