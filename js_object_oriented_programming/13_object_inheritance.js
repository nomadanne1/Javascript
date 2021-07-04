// 13.2 __proto__
// 자바에서는 클래스가 상속을 받는데,
// 자바스크립트에서는 객체가 직접 다른객체의 상속을 받을 수 있고 
// 얼마든지 상속관계를  바꿀 수 있다 >> prototype link , link가 가르키는 객체 >> prototype object

// 자바스크립트 전통적으로 상속하는 방법 >> __proto__ (class x)
var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ =superObj; // prototype, __proto__
// 13.3 위에두줄과 똑같은 코드 만들어 보자 >> Object.create()
// 객체 만들고 __proto__로 상속하는 것이 아니라 상속받는 객체를 만들고 속성을 넣는다.
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal); // sub
console.log('subObj.superVal =>', subObj.superVal); // super
subObj.superVal = 'sub'; // 객체의 속성을 바꾸면 객체를 바꾸는 것 이지 그 객체의 proto를 바꾸는것은 아니다.
console.log('superObj.superVal => ', superObj.superVal); // super
// console.log('superObj.superVal => ', subObj.superVal); // sub

// 13.4 객체 상속의 사용
var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}

// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

console.log('lee.sum() : ', lee.sum()); // lee에게 sum()이 있는지 확인한 다음 proto kim에게 있는지...
console.log('lee.avg() : ', lee.avg());