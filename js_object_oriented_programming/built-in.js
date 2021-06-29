// 이미 만들어진 객체를 사용할 수 있다.
console.log("Math.PI", Math.PI);
console.log("Math.randon()", Math.random()); //method
console.log("Math.floor(3.9)", Math.floor(3.9));

// 객체 직접 만들기
var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9", MyMath.floor(3.9));

// 만약 객체를 안쓴다면 => 접두사를 써서 구별해줘야할 수도 ..; => 덜 세련  
// 객체를 사용해서 그룹핑한다 !!!
MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}