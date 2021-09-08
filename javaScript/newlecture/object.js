// var exam = new Object(); // var exam = {};
// exam.kor = 30;
// exam.eng = 70;
// exam.math = 80;

var exam = {"kor": 30, "eng": 70, "math": 80}; // 위에랑 같은코드

var ar = [3, 4, 5, 6, exam, [7, 8, 9]];
console.log(ar[5][1]); // 8

console.log(exam.kor + exam.eng);
console.log(ar[4].math); // 80

exam.kor = 20;
console.log(exam.kor + exam.eng);

var notice = { "id":1, "title":"hello" };
console.log(notice.title); // hello

