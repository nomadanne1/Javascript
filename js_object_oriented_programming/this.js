// // this

// var kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     // sum: function(f, s){
//     //     return f+s;
//     // }
//     sum: function(){
//         return this.first + this.second;
//     }
// }
// // console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
// // kim.first, kim.second
// // >> kim은 이미 내부적으로 first, second값을 이미 알고 있는데 또 언급
// // >> 아쉽다 >> this 사용!!
// console.log("kim.sum(kim.first, kim.second)", kim.sum());

function foo() {
    console.log(this.name);
 }
 
 const bar = {
     name: '철수'
 };
 
 bar.foo = foo;
 
 const baz = {
     name: '미애'
 };
 
 baz.foo = foo;
 
 bar.foo();  // 철수
 baz.foo();  // 미애
 
 bar.foo.apply(baz); // 미애
 baz.foo.apply(bar); // 철수