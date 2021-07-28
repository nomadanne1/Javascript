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
// const person4 = new Person('ellie', 30);
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
    // return this;
}

// 5. in operator: property existence check (key in obj) 
// >> 간단하게 object 안에 해당 key가 있는지 없는지 확인
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key); // ellie 안에 있는 모든 key들이 출력
}

// for (value of iterable)
const array =[1, 2, 4, 5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user) // { name: 'coder', age: '20'};

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // >> 뒤에있는게 앞 덮어 씌움 주의
console.log(mixed.color); // blue
console.log(mixed.size); // big




