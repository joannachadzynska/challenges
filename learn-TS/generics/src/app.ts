/* Built in generic types */
// array
// const names: Array<string> = ["Joanna", "James"]; // string[]

// // promise type
// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("This is done!");
// 	}, 2000);
// });

// promise.then((data) => {
// 	// data.split("");
// });

// Creating generic type
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Joanna", hobbies: ["books"] }, { age: 33 });

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value.";
	if (element.length === 1) {
		descriptionText = `Got 1 element.`;
	} else if (element.length > 1) {
		descriptionText = `Got ${element.length} elements.`;
	}
	return [element, descriptionText];
}

const text = countAndDescribe("Hello");

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}

extractAndConvert({ name: "Joanna" }, "name");

// generic classes

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Joanna");
textStorage.addItem("Ted");
textStorage.removeItem("Ted");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const tedObj = { name: "Ted" };
// const joObj = { name: "Joanna" };
// objStorage.addItem(joObj);
// objStorage.addItem(tedObj);

// objStorage.removeItem(joObj);
// console.log(objStorage.getItems());

// Generic utility types

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};

	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["joanna", "joe"];
// names.push("ed")
