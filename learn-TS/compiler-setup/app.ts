let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "hello";

if (typeof userInput === "string") {
	userName = userInput;
}

function generateError(message: string, code: number): never {
	// whats return "never" type:
	throw {
		message: message,
		errorCode: code,
	};
	// while (true) {}
}

const result = generateError("Some error occurred!", 500);

console.log(result);
