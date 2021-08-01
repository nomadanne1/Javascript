// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry'
    const result = fruits.split(','); // 구분자 꼭 !!
    console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [ 5, 4, 3, 2, 1 ]
    console.log(array); //[ 5, 4, 3, 2, 1 ]
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2) // 배열 자체를 수정
    const result = array.slice(2, 5); // 배열의 특정한 부분을 리턴
    console.log(result); // [ 3, 4, 5 ]
    console.log(array); // [ 1, 2, 3, 4, 5 ]

}

class Student {
    constructor (name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 20, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
