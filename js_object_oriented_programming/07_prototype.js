function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
    // 7.1 prototype이 필요한 이유 >> 객체 생성될때마다 불필요한 함수만들어짐 >> 성능저하
    // this.sum = function(){
    //     return this.first+this.second;
    // }
}

// var kim = new Person('kim', 10, 20);
// // 객체 생성후 sum함수의 동작방식을 바꾸고 싶다면? 다 바꿔야 한다 ~~ >> 생산성이 떨어진다 
// // Person 생성자로 만든 모든 객체가 공통적으로 사용되는 함수를 만들수 있다면 ?? => 7.2
// kim.sum = function(){
//     return 'modified : ' +(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// lee.sum = function(){
//     return 'modified : ' +(this.first+this.second);
// }
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

// 7.2 prototype을 이용해서 재사용성을 높이기
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}

var kim = new Person('kim', 10, 20); // => 이젠 객체 만들때마다 sum()함수 실행되지 않는다 !!
// * kim의 sum() 함수만 다르게 동작시키고 싶다 !!
kim.sum = function(){
    return 'this : ' +(this.first+this.second); 
}
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());

//  순서 : 자기자신이 가지고 있나 ? >> 프로타입에 정의되어 있냐 ??

