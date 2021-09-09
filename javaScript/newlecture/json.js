// 10. eval 함수와 JSON 파싱하기

// eval

eval('var x = 30;');
console.log(x); // 30

var data = '[ \
                { "co": 0.6, "so2":0.006, "no2":56 }, \
                { "co": 0.7, "so2":0.007, "no2":69 }, \
                { "co": 0.8, "so2":0.008, "no2":47 } \
            ]';

eval("var ar = " + data + ";");
console.log(ar[0].co); // 0.6

// 11. JSON 파서를 이용한 파싱

// var data2 = JSON.parse('{ id:1, title:"aaa" }'); 
// key 문자열로 표현안해도 괜찮! (생략가능) >> 일반적

// but!! JSON.parse는 까탈스러워서 key 꼭 문자열로 표현해줘야한다
var data2 = JSON.parse('{ "id":1, "title":"aaa" }'); 
console.log(data2) // { id: 1, title: 'aaa' }

var data3 = {id:2, title:"bbb"};
var json = JSON.stringify(data3); // {"id":2,"title":"bbb"}
console.log(json);

// cf. var data { "n id": 1, title: "aaa" } // n id 와 같이 문자열 key에 띄어쓰기 포함가능
// console.log(data["n id"]) // 사용할때 data.n id 요렇게 불가능 하니깐 data["n id"]사용

