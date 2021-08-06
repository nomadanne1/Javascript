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
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${this.name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2021-08-06T14:45:49.100Z"} 
// => Symbol() javascript에만 있는 데이터* , jump() >> object에 있는 data가 아니기 때문에 제외

// 2. JSON to Object
// parse(json)