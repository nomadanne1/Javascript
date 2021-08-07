// JSON
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - ★ independent programming language and platform 

// JavaScript Obeject Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(true); // boolean -> JSON
console.log(json); // true

json = JSON.stringify(['apple','banana']); // ["apple","banana"]
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${this.name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// {"name":"tori","color":"white","size":null,"birthDate":"2021-08-06T14:45:49.100Z"} 
// => Symbol() javascript에만 있는 데이터* , jump() >> object에 있는 data가 아니기 때문에 제외

json = JSON.stringify(rabbit, ["name"]);
console.log(json);
// {"name":"tori"}
// => 해당하는 prop만 json으로 변환

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value ; // ★
});
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-08-07T13:43:34.237Z
// key: jump, value: () => {
//         console.log(`${this.name} can jump!`)
//     }

console.log(json);
// {"name":"ellie","color":"white","size":null,"birthDate":"2021-08-07T13:45:02.860Z"}

// 2. JSON to Object
// parse(json)
console.clear();
// json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
// {
//     name: 'tori',
//     color: 'white',
//     size: null,
//     birthDate: '2021-08-07T13:49:11.699Z'
//   }
rabbit.jump();
// obj.jump(); // error *rabbit => json 으로 변환할때 함수는 포함되지 않았기 때문.

console.log(rabbit.birthDate.getDate()); // 7
// console.log(obj.birthDate.getDate()) // error *birthDate가 String이기 때문
console.log(obj.birthDate.getDate()); // 7
