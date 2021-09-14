// 16. 변수의 가시영역과 global 객체 그리고 전역변수

console.log(a); // undefined

var a= 1;

// 동일한 변수를 여러 번 선언하는 경우는?

var a = 1;
var a = 2;

console.log(a); // 2