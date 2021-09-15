// 브라우저 객체 

// 1. 최상위 객체인 window 객체

var x = prompt("x의 값을 입력하세요", 0);
var y = prompt("y의 값을 입력하세요", 0);

x = parseInt(x);
y = parseInt(y);

alert(x + y);

var answer = confirm("정말로 삭제하실 생각입니까?");
if(answer){
    alert("삭제되었습니다.");
}