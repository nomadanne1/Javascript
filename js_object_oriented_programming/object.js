// 배열
var memberArray = [ 'egoing', 'graphittie', 'leezhce'];
console.log(memberArray[2]);

// 객체 : 서로 연관된 변수와 함수를 그룹핑(정리정돈)하고 이름을 붙인것

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}

// 객체 내용 수정
memberObject.designer = 'leezche'

// 객체는 . 또는 대괄호로 접근가능하다
console.log("memberobject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

// 객체 내용 삭제
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);

