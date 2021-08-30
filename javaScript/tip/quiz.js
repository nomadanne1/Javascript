// Remove Duplicates !
const array = ['dog', 'cat', 'dog', 'rabbit', 'monkey', 'cat'];
console.log(array);

// 자료구조 array는 중복 허용 O / 자료구조 set은 중복을 허용 X
console.log([...new Set(array)]);