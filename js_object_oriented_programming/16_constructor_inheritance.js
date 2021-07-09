function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    // this.name = name;
    // this.first = first;
    // this.second = second;
    Person.call(this, name,first,second); // ★ 첫번째 인자 this & .call 부모를 호출
    this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype; // PersonPlus랑 Person 연결
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus; // kim.constructor : [Function: Person] >> [Function: PersonPlus] 변경

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor)