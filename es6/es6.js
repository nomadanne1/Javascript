// Shorthand property names
// {
//     const ellie1 = {
//         name: 'Ellie',
//         age: '18',
//     };

//     const name = 'Ellie';
//     const age = '18';

//     const ellie2 = {
//         name: name, 
//         age: age,
//     }
        
//     // ♪ key와 value 똑같으면 아래와 같이 쓸 수 있다.
//     const ellie3 = {
//         name,
//         age,
//     }

//     console.log(ellie1, ellie2, ellie3); 
//     // 출력 > { name: 'Ellie', age: '18' } { name: 'Ellie', age: '18' } { name: 'Ellie', age: '18' }
// }

// Destructuring assignment
// {
//     // object
//     const student = {
//         name: 'Anna',
//         level: 1,
//     };

//     {
//         const name = student.name;
//         const level = student.level;
//         console.log(name, level); // Anna 1
//     }

//     // ♪ student에 있는 key와 value이 각각 name, level에 맞게 할당된다.
//     {
//         const { name, level } = student;
//         console.log(name, level); // Anna 1

//         // 만약 다른 이름으로 선언하고 싶다면?
//         const { name: studentName, level: studentLevel} = student;
//         console.log(studentName, studentLevel); // Anna 1
//     }

//     // array
//     const animals = ['cat', 'dog'];

//     {
//         const first = animals[0];
//         const second = animals[1];
//         console.log(first, second); // cat dog
//     }

//     // ♪ ( 배열은 [] 대괄호 사용! )
//     {
//         const [first, second] = animals;
//         console.log(first, second); // cat dog
//     }
// }

// Spread Syntax (얕은 복사!!) 07:33
{
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const array = [obj1, obj2]; // Object를 담고 있는 배열

    // array copy (배열 복사)
    const arrayCopy = [...array] 
    console.log(array, arrayCopy); 

    const arrayCopy2 = [...array, { key: 'key3' }];
    console.log(array, arrayCopy, arrayCopy2);

    // objet copy
    const obj3 = { ...obj1 };
    console.log(obj3);
}
