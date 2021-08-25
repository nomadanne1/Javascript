// Spread Syntax - Object
const item = { type: 'shirts', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

// Bad Code
item['price'] = detail.price;

// Bad Code
const  newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// Bad Code
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

// Good Code
const shirt0 = Object.asssign(item, detail);

// Better! Code
const shirt = { ...item, ...detail, price: 40}; // price 20 >> 40 으로 업데이트 가능 

// Spread Syntax - Array
let fruits = ['apple', 'banana', 'orange'];

// fruits.push('grape');
fruits = [...fruits, 'grape']; // 배열을 새로 만듦

// fruits.unshift('blue berry');
fruits = ['blue berry', ...fruits];

const fruits2 = ['kiwi', 'peach', 'melone'];
let combined = fruits.concat(fruits2);
combined = [...fruits, 'cherry',...fruits2];
