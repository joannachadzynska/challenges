// Union Type
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + " " + input2.toString();
	}

	// if (resultConversion === "as-number") {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }

	return result;
}

const combinedNumbers = combine(4, 44, "as-number");
console.log({ combinedNumbers });

const combinedStrings = combine("22", "13", "as-number");
console.log({ combinedStrings });

const combinedNames = combine("Jan", "Adam", "as-text");
console.log({ combinedNames });
