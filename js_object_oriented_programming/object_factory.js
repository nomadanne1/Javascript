// constructor의 필요성 >> 객체를 찍어내는 공장

var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
}

var lee = {
    name: 'lee',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
}

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// constructor의 사례 >> d1 객체 *Date : 객체를 찍어내는 공장
var d1 = new Date('2019-04-19');
console.log('d1.getFullTear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth())

// constructor 만들기
console.log('Date', Date);

function Person(){
    this.name='kim',
    this.first=10,
    this.second=20,
    this.third=30,
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}
console.log('Person()', Person()); // 함수
// constructor 생성자

