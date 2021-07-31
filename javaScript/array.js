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
// fruits.forEach(function(fruit, index, array){
//     // console.log('he'); // he 두번 출력 (데이터가 2개 들어있으니깐.)
//     console.log(fruit, index, array);

// }); // ctrl + forEach 클릭 >> api선언된 곳으로 이동함

// forEach >> 배열안에 들어있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit) => 
    console.log(fruit));
// banana
// apple
// banana
// apple
// banana
// apple
// banana

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits. push('strawberry', 'peach');

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'remon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strewberry', 'peach', 'remon');
console.log(fruits); // [ 'apple', 'banana', 'strewberry', 'peach', 'remon' ]
// fruits.splice(1) // 원하는 갯수 말안하면? 해당 인덱스부터 다 지워짐
fruits.splice(1, 1);
console.log(fruits); //  [ 'apple', 'strewberry', 'peach', 'remon' ]
fruits.splice(1, 1, 'melon', 'watermelon'); // 
console.log(fruits); // [ 'apple', 'melon', 'watermelon', 'peach', 'remon' ]

// combine two arrays
const fruit2 = ['orange', 'grape'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// 5. Seraching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); // 0 *해당하는 값이 없으면 -1
console.log(fruits.indexOf('watermelon')); // 2

// includes
console.log(fruits.includes('coconut')); // false
console.log(fruits.includes('melon')); // true

