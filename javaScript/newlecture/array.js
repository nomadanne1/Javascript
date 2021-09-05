var nums = new Array();

// nums.push(3);
// nums.push(21);
// nums.push(56);

// console.log(nums);

// var n1 = nums.pop();

// console.log("n1: " + n1 +", "+ nums);

nums[3] = 57;

console.log(nums); // [ <3 empty items>, 57 ]

nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// splice

var nums = new Array(2, 3, "hello", 7);
console.log(nums);

nums.splice(2);
console.log(nums);