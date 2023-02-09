// 1) How would you check if a number is an integer?
// function isInteger(value) {
// 	/*Your code*/
// 	return Number.isInteger(value);
// }

// console.log(isInteger(123.4));

// 2) Make this work duplicate and reverse second part([1, 2, 3, 4, 5]); // [1,2,3,4,5,5,4,3,2,1]

// function duplicateAndReverse(arr) {
// 	/*Your code*/
// 	const b = [];
// 	const i = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		b.push(arr[i]);
// 	}
// 	return b + "," + arr.reverse();
// }
// console.log(duplicateAndReverse([1, 2, 3, 4, 5]));

// 3) Write a code which can check if variable is an Array

// function isArray(value) {
// 	/*Your code*/
// 	return Array.isArray(value);
// }
// console.log(isArray([1, 2, 3]));

// 4) Clear the array with 3 different methods;
const arr = ["a", "c", "e", "f", "q", "h"];

// arr.splice(0); //1. method

// len = arr.length; // 2. method
// for (let i = 0; i < len 1; i++) {
// 	arr.pop();
// }

// len = arr.length; // 3. method
// for (let i = 0; i < len; i++) {
// 	arr.shift();
// }

// console.log(arr);
