// Object 
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javacript are instances of Object
// object = { key: value } >> object는 key와 value의 집합체

// 1. Literals and properties

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax >> new 로 호출하면 Object의 constructor이 호출되기 때문에 ..


function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// with Javacript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 나중에 추가도 가능 (유지보수 어려움)
console.log(ellie.hasJob); // true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties 
// key suould be always string >> *key는 string 타입으로 받아와야한다!
console.log(ellie.name); 
console.log(ellie['name']); 
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 언제사용? 
// 정확하게 어떤 키가 필요한지 모를때 (runtime에서 결정될때)
// >> 동적으로 key에 대한 value를 받아 올 때
function printValue(obj, key){
    // console.log(obj.key); // undefined
    console.log(obj[key]);
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); // 4

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// >> object 매번 만들기 귀찮 .. 간단하게 하는 방법 없을까??
// console.log(person4);
// function makePerson(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// >> 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return thisl
}