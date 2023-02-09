// Use Array.reduce() function to return object
// witch two property even & odd

const numbers = [9, 2, 7, 4, 5, 6, 3, 8, 1, 10, 11, 12, 13, 14, 17];
const odd = [];
const even = [];

function oddEven(array) {
	numbers.reduce(function (v, s) {
		return v % 2 ? odd.push(v) : even.push(v);
	});
	return {
		odd: odd.sort((a, b) => b - a),
		even: even.sort(),
	};
}

console.log(oddEven(numbers));

/*
Expected output eg:
{
    odd:[1,3,...],
    even:[2,4,...]
}
 */
