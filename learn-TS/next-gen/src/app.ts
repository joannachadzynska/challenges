interface Greetable {
	name: string;

	greet(phrase: string): void;
}

class Person implements Greetable {
	age = 33;
	constructor(public name: string) {}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	}
}

let user1: Greetable;

user1 = new Person("Joanna");

user1.greet("Hi there - I am");

console.log(user1);
