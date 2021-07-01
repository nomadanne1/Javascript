// // 6.1 constructor의 필요성 >> 객체를 찍어내는 공장

// var kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     sum: function(){
//         return this.first + this.second;
//     }
// }

// var lee = {
//     name: 'lee',
//     first: 10,
//     second: 20,
//     sum: function(){
//         return this.first + this.second;
//     }
// }

// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

// // 6.2 constructor의 사례 >> d1 객체 *Date : 객체를 찍어내는 공장
// var d1 = new Date('2019-04-19');
// console.log('d1.getFullTear()', d1.getFullYear());
// console.log('d1.getMonth()', d1.getMonth())

// 6.3 constructor 만들기 >> 실행될때 입력값을 주입해준다
console.log('Date', Date);

// function Person(){
//     this.name='kim',
//     this.first=10,
//     this.second=20,
//     this.third=30,
//     this.sum = function(){
//         return this.first+this.second+this.third;
//     }
// }

// >> 실행될때 입력값을 주입해준다 (입력값에 따라 다른 결과 나올 수 있도록)
function Person(name, first, second, third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum()); 

// constructor function의 장점
// 객체를 만들떄 마다 객체를 다시 정의해 줬어야 했는데
// >> new를 사용함으로써 실행할때마다 객체가 양산된다.


console.log('Person()', Person()); // 함수
// constructor 생성자

