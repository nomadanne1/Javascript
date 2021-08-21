// Nullish coalescing operator
// leftExpr ?? rightExpr
// 왼쪽코드가 null, undefined인 경우에만 오른쪽코드가 실행된다.

// leftExpr || rightExpr
// 왼쪽코드가 falsy인경우에 오른쪽 실행된다.

// Bad Code
function printMessage(text){
    let message = text;
    if (text == null || text == undefined){
        message = 'Nothing to display';
    }
    console.log(message);
}

// Good Code
function printMessage(text){
    const message = text ?? 'Nothing to display';
    console.log(message);
}

// cf. Default parameter is only for undefined >> null은 null로 출력된다.
function printMessage(text='Nothing to display'){
    console.log(text);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);