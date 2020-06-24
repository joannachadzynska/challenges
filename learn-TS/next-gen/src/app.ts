// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	age = 33;
	constructor(public name?: string) {}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	}
}

let user1: Greetable;

user1 = new Person("Joanna");
// user1.name = "John"

user1.greet("Hi there - I am");

console.log(user1);
