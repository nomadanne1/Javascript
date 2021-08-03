// Q1. make a string out of an array (배열을 스트링으로)
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result); // apple banana orange
}

// Q2. make an array out of a string (스트링을 배열로)
{
    const fruits = 'apple, kiwi, banana, cherry'
    // const result = fruits.split(',', 2); // ["apple", "kiwi"]
    // const result = fruits.split(); // ["apple, kiwi, banana, cherry"]
    const result = fruits.split(','); // 구분자 꼭 !!
    console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [ 5, 4, 3, 2, 1 ]
    console.log(array); // [ 5, 4, 3, 2, 1 ] >> 배열 자체도 reverse 한다.
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

// Q5. find a student with the score 90
{
    // const result = students.find(function(student, index){
    //     // console.log(student, index);
    //     return student.score === 90;
    // });
    // console.log(result);
    const result = students.find((student) => student.score === 90);
    console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array containing only the students' scores // 콜백함수를 전달해서 콜백함수가 true인 아이들만 모아서 배열을 전달~
// result should be: [25, 80, 90, 66, 88]
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. check if there is a student with the score lower than 50
// result should be: [45, 80,  90, 66, 88]
{
    const result = students.map((student) => student.score); // map >> 배열 안에 들어 있는 요소 한가지.. 한가지.. 를 다른 것으로 변환.
    console.log(result); // student.score만 들어있는 배열로 리턴된다.
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50); // some - 배열중에 어떤것이라도 하나 만족하는 것이 있는지..
    console.log(result); // true >>  하나라도 만족하면 true가 리턴된다.

    const result2 = students.every((student) => student.score < 50); // every - 모든 배열의 조건이 만족
    console.log(result2); // false
}

console.clear();
// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) =>{ // 리턴하는 값들이 prev로 전달된다. (누적)
    //     console.log('------------');
    //     console.log(prev); 
    //     console.log(curr); 
    //     return prev + curr.score;
    // }, 0); // 0 >> initial value
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}