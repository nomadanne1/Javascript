// Template Literals (Template String)
const person = {
    name: 'Julia',
    score: 4,
};

// Bad Code
console.log(
    'Hello ' + person.name+ ', Your current score is : ' + person.score
)

// Good Code
console.log(`Hello ${person.name}, Your current score is : ${person.score}`);

// Good Code
const { name, score } = person;
console.log(`Hello ${name}, Your current score is : ${score}`);

// Good Code >> 함수로만들어서 확장성 && 재사용성 up
function greetings(person){
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is : ${score}`);
}
greetings(person);
