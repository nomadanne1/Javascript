// 배열 반복문 >> 필수
var memberArray = [ 'egoing', 'graphittie', 'leezche'];

console.group('array loop');  // 들여쓰기 >> 좀더 가독성이 좋음
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

// 객체 반복문 >> 덜 중요
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}
console.group('object loop');
for(var role in memberObject){ // 객체에서 사용되는 for문 - for in문 >> '객체의 이름이 담길 변수' in '객체' 
    console.log(role, memberObject[role]); // ★ memberObject.name (x) >> memberObject[role] 해야햐지 값이 출력된다
} 
console.groupEnd('object loop');