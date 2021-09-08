// eval 함수와 JSON 파싱하기

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
