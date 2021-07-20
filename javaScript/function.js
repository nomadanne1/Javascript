// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing ★ 하나의 함수는 한가지의 일만 !!
// naming: doSomthing, command, verb
// e.g. createCardAndPoint -> createCar, createPoint
// funtion is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'corder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie)

// 3. Default parameters (added in ES6)
function showMessage(message, from="unknow") {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope => 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage ='global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
// return 생략시 >> return undefined
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); 
console.log(`sum: ${sum(1,2)}`); // sum: 3

// 6. Early retrun, eraly exit
// bad
function upgradeUser(user) {
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good (조건이 맞지 않을때는 빨리 함수를 종료)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function 
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be retruned by another function
// => 다른 변수와 마찬가지로 변수에 할당이되고, function에 파라미터로 전달이 되며, return 값으로 리턴이 된다.

// 1. Function expression
// a function declartion can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function (익명함수)
    console.log('print');
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}
// anonymous funciton
const printYes = function() {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recurisions (재귀)
const printNo = function print() {
    console.log('no!');
    // print(); 무한대 호출
};
randomQuiz('wrong', printYes, printNo); // no
randomQuiz('love you', printYes, printNo); // yes

// Arrow functon
// always anonymus
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!!');
// const add = function(a, b){
//     return a + b;
// }
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression (선언과 호출을 동시에)
(function hello() {
    console.log('IIFE');
})();


