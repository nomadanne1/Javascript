// node.js - 자바스크립트 엔진이 있어서 브라우저 없이도 자바스크립트 실행이 가능하다.
console.log("Hello World!");  

// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number); // 2
console.log(number2); // 2

number2 = 3;

console.log(number); // 2
console.log(number2); // 3

// object => '주소'
let obj = {
    name: 'ellie',
    age: 5,
}
console.log(obj.name);

let obj2 = obj; // obj2에게 obj를 가르키는 주소가 복사된다.
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name); // james
console.log(obj2.name); // james

let a = 2;
a = 5;
a = 9;

const num = 2;
// num = 4 // >> const는 한번 할당후 변경 불가 !!

// ★ const obj { name: 'Ellie' }
// obj.name = 'James'; 
// >> object에는 가르키는 레퍼런스(주소)를 가르키고 있기 때문에 
// >> obj.name = 'James'로 변경이 가능하다 !!