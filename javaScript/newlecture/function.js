// var add = new Function("x, y", "return x+y;");

// var add = function (x,y){
//     return x+y;
// };

function add(x,y){
    console.log(typeof arguments[0]); // 매개변수 자료형이 제 각각 > typeof 타입검사
    return x+y;
}
// console.log(add(3,4));

// 함수의 가변인자 arguments 콜렉션
console.log(add(6, 4, 5, 6, 7, "hello")); // 10