'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntacticalsugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); // ellie: hello!

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // ★ getter를 정의하는 순간 
    // this.age는 메모리에 올라간 데이터를 읽어오는것이 아니라
    // 바로 getter를 호출하게 된다 !! >> _age
    get age(){
        return this._age;
    } 

    // ★ setter를 정의하는 순간 
    // = age는 바로 메모리에 값을 할당하는는 것이 아니라
    // setter를 호출하게 된다 !! >> _age
    set age(value) {
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age); // 0 >> _age 지만 .age로 호출 가능한 이유 >> getter, setter 이용하기 떄문에

