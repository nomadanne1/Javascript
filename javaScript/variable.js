// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'golobal name';
{
    let name = 'ellie';
    console.log(name); // ellie
    name = 'hello';
    console.log(name); // hello
    console.log(globalName);
}
// console.log(name); // name is not defined 오류
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    console.log(age); // undefined
    age = 4;
    console.log(age); // 4
    var age;
}
console.log(age); // 4

// 3. Contant, r(read only)
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class funtion (일급함수 - 변수에 할당가능, 인자로 전달도 가능, 함수의 리턴타입으로도 사용가능)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number = special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789801234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); //value: 1234567890123456789801234567890, type: bigint

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi brendan!, type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// object, real-life object. data structure
const ellie = { name: 'ellie', age: 20};
ellie.age =21; // 요건 변경이 가능하다 !!

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}. type: ${typeof text}`); // value: hello. type: string
text = 1;
console.log(`value: ${text}. type: ${typeof text}`); // value: 1. type: number
text = '7' + 5;
console.log(`value: ${text}. type: ${typeof text}`); // value: 75. type: string
text = '8' / '2';
console.log(`value: ${text}. type: ${typeof text}`); // value: 4. type: number
text = '나'/ '2';
console.log(`value: ${text}. type: ${typeof text}`); // value: NaN. type: number
// console.log(text.charAt(0)); // TypeError: text.charAt is not a function


