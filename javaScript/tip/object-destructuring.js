// Object Destructuring
const person= {
    name: 'Julia',
    age: 20,
    phone: '01077777777',
};

// Bad Code
function displayPerson(person){
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

// Bad Code
function displayPerson(person){
    const name = person.name;
    const age = person.age;
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

// Good Code
function displayPerson(person){
    const {name, age} = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age)
}
