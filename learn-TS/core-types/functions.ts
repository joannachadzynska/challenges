function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
	const result = n1 + n2;
	callback(result);
}

printResult(add(4, 5));

let combinedValues: (a: number, b: number) => number;
combinedValues = add;

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
