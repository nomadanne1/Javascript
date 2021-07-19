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

// 5. Local scope
let globalMessage ='global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();