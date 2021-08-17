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

// boolean && 연산자

// false: 0, -0, '', null, undefined
// true: -1, 'hello', []
let num1; // undefined
if (num1){
    console.log('true!')
}

// *위에있는 코드와 같은 코드 (한줄로 깔끔)
// num1 && console.log(num1); // num1이 false이기 때문에 console.log(num1) 실행xx

// let obj; //undefined
// if (obj) {
//     console.log(obj);
// }

obj && console.log(obj.name);
// console.log(obj.name) 없다면 바로 오류 발생
// obj가 false면 뒤에를 아예 실행하지 않도록!!

class Counter {
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(){ // class애서 함수 선언할때 function 생략가능
        this.counter++;
        console.log(this.counter);
        if(this.counter %5 === 0){
            // runIf5Times(this.counter)
            this.callback && this.callback(this.counter); // callback이 있다면 && 뒤에 실행
        }
    }
}

const coolCounter = new Counter();
function printSomething(num){
    console.log(`yo! ${num}`)
}

const printCoutner = new Counter(printSomething);
const alertCoutner = new Couenter(alertNum);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);