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

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refe
class Experiment {
    publicField = 2;
    #privateField = 0;  // 클래스 내부에서만 값 접근, 변경.. 가능
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher) // undefined >> static은 object마다 할당되는게 아니라 Article 클래스 자체에 붙어있다.
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance 
// a way for one class to extend another class/
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('기능 확장') // 기능 확장
    }
    getArea() { // 오버라이딩 (재정의)
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of /n 기능 확장
console.log(triangle.getArea()); // 200

// 6. Class checking instanceOf 
// 왼쪽에 있는 Object가 오른쪽에 클래스로 만들어진 것인지 boolean으로 리턴
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString);