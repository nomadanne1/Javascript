// ES6 Classes (Constructor Function의 대체제)

// prototype.js과 똑같이 동작하지만,
// 내부적으로는 class를 사용한 문법으로 다시 만들어 보기.

// person() >> 그냥 함수
// new Person >> 객체를 리턴 (Countructor Function) >> 1. 객체를 만든다 2. 객체의 초기상태를 셋팅한다 
class Person { // 8. class : 객체를 만드는 공장 >> 
    // sum(){ // 함수 만들 때 function 생략
       
    // }
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor'); // 9. constructor() : class의 Constructor Function
    }
}

var kim = new Person();
console.log('kim', kim)

// var kim = new Person('kim', 10, 20);
// kim.sum = function(){
//     return 'this : ' +(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());



