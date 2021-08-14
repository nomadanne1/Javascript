// 함수 선언
function doSomething(add){ // 함수를 인자로 전달
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add); // 함수전달 > add() x ? 괄호를 넣는건 함수를 호출하고 나서 부름

const result= add(1, 2);
console.log(result);

// *함수를 변수에 할당
const addFun = add;
console.log(add); // [Function: add]
addFun(1,2);