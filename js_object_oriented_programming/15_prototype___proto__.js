// function Person(){} 

// var Person = new Function(); // 위와 똑같음
// >> 함수는 javascript에서는 객체이다. 
// >> 객체이기 때문에 property를 가질 수 있다.

function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

// Person 객체, Person's prototype 객체
// Person : prototype >> Person's prototype 객체를 가리킨다 ex) Person.prototype? >> Person's prototype
// Person's prototype : constructor >> Person 객체를 가리킨다
// 서로 상호 참조 한다.

// 반복해서 보면서 이해해보쟈!!
