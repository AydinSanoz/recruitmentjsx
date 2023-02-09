// What is logged?

function createIncrement() {
	let count = 0;

	function increment() {
		count += 1;
		console.log("increment worked");
		console.log(count);
	}
	let message = `Count is ${count}`;

	function log() {
		console.log("log worked");
		console.log(count);
		console.log(message);
	}

	return { increment, log };
}

const { increment, log } = createIncrement();
increment();
increment();
increment();
// log(); =>?
log();
