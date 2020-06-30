// decorator function
function Logger(constructor: Function) {
	console.log("Logging...");
	console.log(constructor);
}

// decorator factory
function Logger2(logString: string) {
	console.log("Logger factory");

	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log("Template factory");

	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log("Rendering template...");

				const hookEl = document.getElementById(hookId);

				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector("h1")!.textContent = this.name;
				}
			}
		};
	};
}

@Logger2("LOGGING")
// @Logger2("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
	name = "Joanna";

	constructor() {
		console.log("Creating person object...");
	}
}

const person = new Person();

console.log(person);

// ---

function Log(target: any, propertyName: string) {
	console.log("property decorator");
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Accessor decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
	// return {};
}

// method decorator
function Log3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) {
	console.log("Method decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
	console.log("Parameter decorator!");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log
	title: string;

	@Log2
	set priceSet(value: number) {
		if (value > 0) {
			this.price = value;
		} else {
			throw new Error("Invalid price - should be positive!");
		}
	}
	constructor(t: string, private price: number) {
		this.title = t;
	}
	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this.price * (1 + tax);
	}
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescriptor;
}

class Printer {
	message = "This works!";

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const button = document.querySelector("button")!;
const p = new Printer();

button?.addEventListener("click", p.showMessage);

// decorators for validation

interface ValidatorConfig {
	[property: string]: {
		[validatableProperty: string]: string[]; // ['required','positive']
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [
			...registeredValidators[target.constructor.name][propName],
			"required",
		],
	};
}
function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [
			...registeredValidators[target.constructor.name][propName],
			"positive",
		],
	};
}

function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objValidatorConfig) return true;

	let isValid = true;

	for (const prop in objValidatorConfig) {
		// console.log(prop);

		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case "required":
					isValid = isValid && !!obj[prop];
					break;

				case "positive":
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}

	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
	event.preventDefault();
	const titleEl = document.getElementById("title") as HTMLInputElement;
	const priceEl = document.getElementById("price") as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;
	const createdCourse = new Course(title, price);
	if (!validate(createdCourse)) {
		alert("Invalid input, please try again!");
		return;
	}

	console.log(createdCourse);
});
