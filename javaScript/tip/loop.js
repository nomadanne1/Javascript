// Looping
const items = [1, 2, 3, 4, 5, 6];

// Bad Code
function getAllEvens(items){
    return items.filter(num => num % 2 === 0);
}

function multiplyByFour(items){
    return items.map(num => num*4)
}

function sumArray(items){
    return items.reduce((a, b) => a+b, 0);
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumAr
ray(multiple);
console.log(sum);

// Good Code => 배열 api는 자기자신을 항상 리턴함
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a+b, 0);
console.log(sum);

// Good Code 
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a+b, 0);
console.log(result);
