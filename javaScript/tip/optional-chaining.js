// Optional Chaining
const bob = {
    name: 'Julia',
    age: 20,

};
const anna = {
    name: 'Julia',
    age: 20,
    job: {
        title: 'Software Engineer',
    },
};

// Bad Code
function displayJobTitle(person) {
    if (person.job && person.job.title){
        console.log(person.job.title);
    }
}

// Good Code
function displayJobTitle(person){
    if (person.job?.title){ // job이 비어있으면 false >> if문 실행안함.
        console.log(person.job.title);
    }
}

// Good Code *nullish-coalescing 사용
function displayJobTitle(person){
    const title = person.job?.title ?? 'No Job Yet';
    console.log(title);
}