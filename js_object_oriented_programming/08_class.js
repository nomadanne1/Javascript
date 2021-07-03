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
        // console.log('constructor'); // 9. constructor() : class의 Constructor Function
    }
    sum(){ // 10. 메소드 구현 >> Person.prototype.sum = function(){ return ....} 와 의미가 같다.
        return this.first+this.second; 
    }
    // avg(){ // 11. 상속 >> Person이 만든 모든 객체에 avg() 함수를 사용하는 것이 부담스러울 때
    //     return (this.first+this.second)/2; 
    // }
}

class PersonPlus extends Person{
    // super() >> constructor 실행될때 부모가 생성자가 먼저 실행될 수 있도록
    // super() - 부모클래스의 생성자
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    // super. - 부모클래스
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim= new PersonPlus('kim', 10, 20, 30); // 12. super() >> 여기에 third를 넣고 싶다. 자식이 못하는일을 부모에게 시킨다.
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
// ~ 상속 구현

// var kim = new Person();
// console.log('kim', kim)

// var kim = new Person('kim', 10, 20);
// kim.sum = function(){
//     return 'this : ' +(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());



