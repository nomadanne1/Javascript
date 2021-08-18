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

// Spread Syntax (얕은 복사!!) 
// {
//     const obj1 = { key: 'key1'};
//     const obj2 = { key: 'key2'};
//     const array = [obj1, obj2]; // Object를 담고 있는 배열

//     // ♪ array copy (배열 복사) >> 대괄호
//     const arrayCopy = [...array] 
//     console.log(array, arrayCopy); 

//     const arrayCopy2 = [...array, { key: 'key3'}]; // { key: 'key3'} 추가할 내용
//     console.log(array, arrayCopy, arrayCopy2);

//     // ♪ objet copy >> 중괄호
//     const obj3 = { ...obj1 };
//     console.log(obj3);

//     // ♪ array concatenation (배열 병합)
//     const fruits1 = ['복숭아', '포도'];
//     const fruits2 = ['바나나', '키위'];
//     const fruits = [...fruits1, ...fruits2];
//     console.log(fruits); // [ '복숭아', '포도', '바나나', '키위' ]

//     // ♪ object merge (객체 병합)
//     const dog1 = { dog1 : '치와와'};
//     const dog2 = { dog2 : '비글'};
//     const dog = { ...dog1,...dog2}; // cf. dog: '치와와', dog: '비글' >> 키값 같다면 마지막에 오는 애가 덮어씌운다.
//     console.log(dog); // { dog1: '치와와', dog2: '비글' }  
// }

// Default parameters
// {
//     function printMessage(message) {
//         console.log(message);
//     }
//     printMessage('hello'); // hello
//     printMessage(); // undefined
// }
// // 대안
// {
//     function printMessage(message) {
//         if (message == null){
//             message = 'defualt message';
//         }
//         console.log(message);
//     }
//     printMessage('hello'); // hello
//     printMessage(); // 'defualt message'
// }
// // ♪ >> 코드깔끔해짐
// {
//     function printMessage(message = 'default message') {
//         console.log(message);
//     }
//     printMessage('hello'); // hello
//     printMessage(); // default message
// }

// Ternary Operator
// const isCat = true;
// { 
//     {
//         let component;
//         if (isCat){
//             component ='cat';
//         }else {
//             component = 'dog';
//         }
//         console.log(component);
//     }
// }

// // ♪ 
// {
//     const component = isCat ? 'cat' : 'dog';
//     console.log(component);
//     console.log(isCat ? 'cat' : 'dog');
// }

// Template Literals

{
    const weather = 'sun';
    const temparature = '16˚c'
    
    //
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature
    );

    // ♪ 
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}