// Make functions which from the given letter string counts the number of all letters repetitions
// and return letter witch the largest number of repeats

const letter_string =
	"fnsdflkdsfnsdkjfsihivpueyviuwhrfieqrhgidfhbaidshaohfgieughiuerhgerghiefae";

// Expected output for largest letter eg: a = 3
// Expected output eg: a = 3,b = 1...

function count(text) {
	obj = {};
	max = [];
	min = [];

	text.split("").forEach((n) => {
		obj[n] ? obj[n]++ : (obj[n] = 1);
	});
	sortedEntriesByVal = Object.entries(obj).sort(function ([p1, v1], [p2, v2]) {
		return v2 - v1;
	});
	sortedEntriesByVal.forEach(function ([p, v]) {
		if (v === sortedEntriesByVal[0][1]) {
			max.push(p, v);
		}
		if (v == sortedEntriesByVal[sortedEntriesByVal.length - 1][1]) {
			min.push(p, v);
		}
	});
	return {
		obj,
		sortedObj: sortedEntriesByVal,
		max,
		min,
	};
}
console.log(count(letter_string));
