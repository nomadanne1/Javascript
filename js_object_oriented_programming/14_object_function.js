// 14.1 객체와 함수
// 14.2 call (유사품 apply)
var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){ 
    return prefix+(this.first+this.second);
}
// sum(); >> 모든 함수는 call이라는 메소드를 가지고 있다 (자바스크립트는 함수도 객체)
// call >> 첫번째 인자는 내부적으로 this를 뭘로할지 , 두번째인자부터는 호출할려고 하는 함수에 파라미터 인자값을 넣어주면 된다. 
console.log("sum.call(kim)", sum.call(kim, '=> ')); // 첫번째인자로 kim - sum()함수는 내부적으로 >> this = kim;
console.log("sum.call(lee)", sum.call(lee, ': ')); 

// 14.3 bind
// : 호출될 때마다 this를 바꾸는 것이 아니라 함수의 내부적으로 사용할 this를 고정 시키는 것  
// >> sum()에는 영향을 주지 않는다. kim을 this로 가진 새로운 sum함수가 만들어져서 리턴
console.log(sum.bind(kim, "=>")); // [Function: bound sum]

var kimSum = sum.bind(kim, '-> '); 
console.log('kimSum()', kimSum());

// >> call은 실행되는 함수의 this값을 원하는 객체로 바꿔서 실행할 수 있게 해준다.
// >> bind는 실행되는 함수의 this값을 원하는 개체로 고정시키는 새로운 함수를 만들어 낸다.